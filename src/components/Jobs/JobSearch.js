import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './JobSearch.module.css'
import { useSelector } from 'react-redux';
import dayjs from "dayjs";
import { useNavigate } from 'react-router-dom';
import JobsApply from './JobsApply';
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { toast } from 'react-toastify';

function JobSearch() {
  const navigate = useNavigate()
  const [closeModal, setCloseModal] = useState(false)
  const [jobId, setJobId] = useState(0)

  const [jobs, setJobs] = useState([])
  const user = useSelector((state) => state.user.userInfo);

  const handleJobDetails = (item) => {
    setJobId(item.id)
    navigate("/JobDetails", { state: { data: item } })
  }

  useEffect(() => {

    let allResume = []
    let allResumeSkills = []
    axios.get("http://localhost:5000/api/getAllResume/" + user.id, { withCredentials: true })
      .then((res) => {
        if (res.data.data.length !== 0) {
          allResume = res.data.data
          allResume.map((item, index) => {
            let singleResumeSkill = item.Skills.split(',')
            singleResumeSkill.map((itemsss, i) => {
              allResumeSkills.push(itemsss.toLowerCase())
              if (allResume.length === index + 1 && singleResumeSkill.length === i + 1) {
                axios.get("http://localhost:5000/api/getAllJobsForEmployee", { withCredentials: true })
                  .then((res) => {
                    let allJobs = res.data.data
                    let newJobs = []

                    function filterCandidateBySkill(skill, index) {
                      // console.log(index)
                      allJobs.map((i, ins) => {
                        if (i.skills.includes(skill)) {
                          {
                            newJobs.push(i)
                          }
                        }
                        if (allJobs.length === (ins + 1) && allResumeSkills.length === (index + 1)) {
                          let uniqueChars = [...new Set(newJobs)];
                          setJobs(uniqueChars)
                        }
                      })
                    }
                    allResumeSkills.forEach((items, index) => {
                      let item = items.toLowerCase()
                      filterCandidateBySkill(item, index)
                    })

                  }).catch((err) => {
                    console.log(err)
                  })
              }
            })
          })
        }
        else {
          axios.get("http://localhost:5000/api/getAllJobsForEmployee", { withCredentials: true })
            .then((res) => {
              setJobs(res.data.data)
            }).catch((err) => {
              console.log(err)
            })
        }
      }).catch((err) => {
        console.log(err)
      })

  }, [])

  const applyForJob = (data) => {

    function getTime() {
      var date = new Date()
      date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
      return date.toISOString();
    }

    let yourDate = getTime();
    yourDate = yourDate.toString().split("T");
    yourDate[1] = yourDate[1].toString().split(".")[0];
    yourDate = yourDate.toString().replaceAll(",", " ");

    data.jobId = jobId
    data.applicationTime = yourDate

    console.log(data)
    axios.post("http://localhost:5000/api/applications", data, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setCloseModal(false)
          toast.success("You've Successfully Applied For This Job", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        console.log(res)
      }).catch((err) => {
        if (err.response.request.status === 500) {
          setCloseModal(false)
          toast.error("You've Already Submitted Your Resume For This Job Wait For Response", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: '8000'
          });
        }
      })
  }

  function getDifference(createdAt) {
    const firstDate = dayjs(createdAt);
    const currentDate = dayjs();
    const differenceInMinutes = currentDate.diff(firstDate, "minute");
    const minutesInDay = 1440;
    const minutesInWeek = 10080;
    const minutesInMonth = 43800;
    const minutesInYear = 525600;

    if (differenceInMinutes < 60) {
      return `${differenceInMinutes}m`;
    } else if (differenceInMinutes > 60 && differenceInMinutes < minutesInDay) {
      return `${currentDate.diff(firstDate, "hour")}h`;
    } else if (
      differenceInMinutes > minutesInDay &&
      differenceInMinutes < minutesInWeek
    ) {
      return `${currentDate.diff(firstDate, "day")}d`;
    } else if (
      differenceInMinutes > minutesInWeek &&
      differenceInMinutes < minutesInMonth
    ) {
      return `${currentDate.diff(firstDate, "week")}w`;
    } else if (
      differenceInMinutes > minutesInMonth &&
      differenceInMinutes < minutesInYear
    ) {
      return `${currentDate.diff(firstDate, "month")}m`;
    } else if (differenceInMinutes >= minutesInYear) {
      return `${currentDate.diff(firstDate, "year")}y`;
    } else {
      return `${currentDate.diff(firstDate, "day")}d`;
    }
  }


  return (
    <div className={styles.Main}>
      <h1 className={styles.haha}>Recommended Jobs For You</h1>
      <div className={styles.cardContainer}>

        {jobs.map((item, index) => {
          return (
            <div key={item.id} onClick={() => handleJobDetails(item)} className={styles.job}>
              <div className={styles.head}>
                <div className={styles.companyLogo} style={{ backgroundImage: `url(${item.img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
              </div>
              <p className={styles.jobTitle}>{item.title}</p>
              <p className={styles.jobDescription}>{item.decription}</p>
              <div className={styles.abc}>
                <div className={styles.hold}>{item.jobType}</div>
                <div className={styles.hold}>{item.vaccancies} postions</div>
              </div>
              <div className={styles.footer}>
                <p>Posted: <span>{getDifference(item.createdTime)} ago</span> </p>
                <button className={styles.apply} onClick={event => {
                  event.stopPropagation(); // <-- this stops the click going through to the parent div
                  setCloseModal(true)
                  setJobId(item.id)
                }} >Apply</button>
              </div>
            </div>
          )
        })}
      </div>
      {closeModal && <JobsApply closeModal={setCloseModal} applyForJob={applyForJob} />}
    </div>
  )
}

export default JobSearch
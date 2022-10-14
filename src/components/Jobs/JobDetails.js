import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import styles from './JobDetails.module.css'
import JobsApply from './JobsApply'

function JobDetails() {
  const location = useLocation()
  const [jobDetail,setJobDetail] = useState(location.state.data)
  const [closeModal,setCloseModal] = useState(false)


  const applyForJob = (data) =>
  {
    
    function getTime() {
      var date = new Date()
      date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
      return date.toISOString();
      }
    
    let yourDate=getTime();
    yourDate=yourDate.toString().split("T");
    yourDate[1]=yourDate[1].toString().split(".")[0];
    yourDate=yourDate.toString().replaceAll(","," "); 

    data.jobId = location.state.data.id
    data.applicationTime = yourDate

    console.log(data)
    axios.post("http://localhost:5000/api/applications",data,{withCredentials:true})
    .then((res)=>{
      if(res.status === 200){
          setCloseModal(false)
          toast.success("You've Successfully Applied For This Job", {
              position: toast.POSITION.TOP_RIGHT,
          });
      }
      console.log(res)
    }).catch((err)=>{
      if(err.response.request.status === 500){
        setCloseModal(false)
        toast.error("You've Already Submitted Your Resume For This Job Wait For Response", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose:'8000'
        });
      } 
    })
  }
  return (
    <div className={styles.Main}>
      <div className={styles.company}>
        <div className={styles.titleHead}>
          <h1 className={styles.title}>{jobDetail.title}</h1>
          <h3 className={styles.companyName}>{jobDetail.name}</h3>
          <p>{jobDetail.description}</p>
        </div>
        <div className={styles.img}>
          <img style={{height:'100px'}} src={jobDetail.img} />
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.body2}>
          <p className={styles.p}><span>Min Experience : </span>{jobDetail.minExperience} years</p>
          <p className={styles.p}><span>Vaccancies : </span>{jobDetail.vaccancies}</p>
          <p className={styles.p}><span>Job Type : </span>{jobDetail.jobType}</p>
          <p className={styles.p}><span>Location : </span>{jobDetail.location}</p>
          <div className={styles.description}>
            <p className={styles.p}><span>Description</span></p>
            <p className={styles.desc}>{jobDetail.decription}</p>
          </div>
        </div>
        <div className={styles.footer}>
          <button onClick={() => {setCloseModal(true)}}>Apply</button>
        </div>
      </div>
      {closeModal && <JobsApply closeModal={setCloseModal} applyForJob={applyForJob}/>}
    </div>
  )
}

export default JobDetails
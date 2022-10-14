import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './Selection.module.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, IconButton } from '@mui/material';
import dayjs from "dayjs";
import { saveAs } from "file-saver";
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


function Selection() {
  const [jobId,setJobId] = useState(0)
  const [jobs,setJobs] = useState([])
  const [applicationList,setApplicationList] = useState([])
  const user = useSelector((state) => state.user.userInfo);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const navigate = useNavigate()

  const handleFilter = () =>
  {
    let jobSkills =  ['html', 'React', 'Frontend']
    let newApplicationList = []
    let selectedResume = []
   
    applicationList.forEach((item,i)=>
    {
        axios.get("http://localhost:5000/api/getResume/"+item.resumeId,{withCredentials:true})
        .then((res)=>{

          let newObj = res.data.data[0]
          let capitalSkills = newObj.Skills.split(',')
          const lowerSkills = capitalSkills.map(element => {
            return element.toLowerCase();
          });
          newObj.Skills = lowerSkills

          function filterCandidateBySkill(skill,index) {
            // console.log(skill)
            // console.log(newObj.Skills)
            if(newObj.Skills.includes(skill))
            {
              selectedResume.push(newObj.id)
              if(jobSkills.length === index+1 && applicationList.length === i+1  )
              {
                let uniqueChars = [...new Set(selectedResume)];
                applicationList.map((itemsss,indexx) =>
                {
                  console.log(uniqueChars)
                  console.log(itemsss.resumeId)
                  if(uniqueChars.includes(itemsss.resumeId))
                  {
                    newApplicationList.push(itemsss)
                  }
                  
                  if(applicationList.length === indexx+1)
                  {
                    console.log(newApplicationList)
                    setApplicationList(newApplicationList)

                  }
                  
                })
               
                
              }
            }
          }

          jobSkills.forEach((items,index) =>
          {
            let item = items.toLowerCase()
            filterCandidateBySkill(item,index)
            
          })

        }).catch((err)=>{
          console.log(err)
        })
    })

    

    

    // const newCandidates = [
    //   { name: "Reece", skills: ["JavaScript", "Docker", "Java"] },
    //   { name: "Joanna", skills: ["Python", "Scala"] },
    //   { name: "Dan", skills: ["JavaScript", "Azure"] },
    //   { name: "Simone", skills: ["JavaScript", "Java"] },
    //   { name: "Ned", skills: ["JavaScript", "AWS"] },
    //   { name: "Yuhi", skills: ["PHP", "JavaScript"] },
    //   { name: "Jack", skills: ["PHP", ".Net", "C++"] },
    // ];
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/getAllJobs/"+user.id,{withCredentials:true})
    .then((res)=>{
      setJobs(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
   }, [])

   const handleClick = (item) =>
   {
    setJobId(item.id)
    axios.get("http://localhost:5000/api/getAllApplications/"+item.id,{withCredentials:true})
    .then((res)=>{
      setApplicationList(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
   }

   const handleDetails = (item) =>
   {
    console.log(item.resumeId)
    axios.get("http://localhost:5000/api/getResume/"+item.resumeId,{withCredentials:true})
    .then((res)=>{
      // console.log(res.data.data[0])
      navigate("/Jobs/ResumeDetail", { state: { data: res.data.data[0] } })
    }).catch((err)=>{
      console.log(err)
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

  const saveFile = (e) => {
    saveAs(
      e.resumeImg,
      "example.pdf"
    );
  };

  return (
    <div className={jobs.length !==0? styles.Main2: styles.Main}>
      {jobId === 0 && 
      <>
          <h1 className={styles.h1}>Jobs</h1>
          <div className={styles.poolCategories}>
            {jobs.length === 0 && <p  className={styles.No} style={{}}><>No Job Posted Yet ⓘ</></p>}
            {jobs.map((value) => {
              return <> 
                <div className={styles.categoryName}>
                    <p className={styles.name} onClick={() => handleClick(value)}>{value.title}</p>
                </div>
                <hr></hr>
                </>;
            })}
            </div>
      </>}
      {jobId !== 0 && 
      <>
        <div className={styles.buttons}>
          <button className={styles.back} onClick={() => setJobId(0)}><ArrowBackIosNewIcon style={{fontSize:'15px'}}/>Back</button>
          <button className={styles.filter} onClick={(handleFilter)}>Filter Resumes</button>
        </div>
        <div className={styles.okok}>
        <div className={styles.headss}><p>Applications</p></div>
        <TableContainer   >
          <Table sx={{ minWidth: 650 }} aria-label="simple table" color="#F7F6F2">


            <TableHead sx={{ color: 'white' }}>
              <TableRow >
                <TableCell className={styles.headTitle} ></TableCell>
                <TableCell className={styles.headTitle} >Name</TableCell>
                <TableCell className={styles.headTitle} >Email</TableCell>
                <TableCell className={styles.headTitle} >Time</TableCell>
                <TableCell align='left' className={styles.headTitle} >Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody >


              {applicationList.length === 0 && <TableRow >
                <TableCell colspan="7" style={{ "text-align": "center", }}>No Assignment Uploaded yet</TableCell>
              </TableRow>}

              {applicationList?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) =>
              (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell className={styles.ind} align="left">{index + 1}</TableCell>
                <TableCell className={styles.ind} component="th" scope="row"><b>{item.name}</b></TableCell>
                <TableCell className={styles.ind} component="th">{item.email}</TableCell>
                <TableCell className={styles.ind} component="th">{getDifference(item.applicationTime)}</TableCell>
                <TableCell component="th" align='left'>
                  {item.resumeId !==null && <span className={styles.open} onClick={() =>handleDetails(item)}>Open Resume</span>}
                  {item.resumeImg !==null && <span className={styles.open} onClick={() => saveFile(item)}>Download Resume</span>}
                </TableCell>
            </TableRow>

              ))}
            </TableBody>

          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[7]}
          component="div"
          count={applicationList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
        

      </>}
    </div>
  )
}

export default Selection

 // axios.get("http://localhost:5000/api/getSingleJob/"+jobId,{withCredentials:true})
    // .then((res)=>{
    //   // jobSkills = res.data.data[0].skill
    //   // console.log(jobSkills)
    // }).catch((err)=>{
    //   console.log(err)
    // })
import React, { useEffect, useState } from 'react'
import styles from './Jobs.module.css'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import {toast } from 'react-toastify';


function Jobs() {
  const user = useSelector((state) => state.user.userInfo);
  const [jobs,setJobs] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [triggerDelete,setTriggerDelete] = useState(false)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete =(item) =>
  {
    let data ={
      id:item.id
    }
    axios.post("http://localhost:5000/api/deleteJobs",data,{withCredentials:true})
    .then((res)=>{
      if (res?.status === 200) {
      setTriggerDelete((state) => !state)
      toast.success('Job Removed', {
        position: toast.POSITION.TOP_RIGHT,
    });}
    else
    console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
   axios.get("http://localhost:5000/api/getAllJobs/"+user.id,{withCredentials:true})
   .then((res)=>{
     console.log(res.data.data);
     setJobs(res.data.data)
   }).catch((err)=>{
     console.log(err)
   })
  }, [triggerDelete])
  

  return (
    <div className={styles.Main}>
      <div className={styles.courseInfo}>
        <h1 className={styles.hello}>Overview</h1>
        <div className={styles.holll}>
          <div className={styles.join2}>
            <div className={styles.totalQuizzes}>
              <WorkOutlineIcon style={{ fontSize: '40px' }} />
            </div>
            <div className={styles.right}>
              <h1>J O B S</h1>
              <p>{jobs.length}</p>
            </div>
          </div>

        </div>
        {/* <div className={styles.holll}>
          <div className={styles.join2}>
            <div className={styles.totalQuizzes}>
              <WorkOutlineIcon style={{ fontSize: '40px' }} />
            </div>
            <div className={styles.right}>
              <h1>U S E R S&nbsp;A P P L I E D</h1>
              <p>4</p>
            </div>
          </div>

        </div> */}
      </div>
  
      <div className={styles.okok}>
      <div className={styles.headss}><p>J O B S</p></div>
      <TableContainer className={styles.container}  >
        <Table className={styles.table} sx={{ minWidth: 1 }}  aria-label="simple table" color="#F7F6F2">

          <TableHead sx= {{color:'white'}}>
            <TableRow>
              <TableCell className={styles.headTitle} ></TableCell>
              <TableCell className={styles.headTitle} >Title</TableCell>
              <TableCell className={styles.headTitle} >Job Description</TableCell>
              <TableCell className={styles.headTitle} >Vaccancies</TableCell>
              <TableCell  className={styles.headTitle}>Min exp</TableCell>
              <TableCell  className={styles.headTitle}>Skills</TableCell>
              <TableCell  className={styles.headTitle}>Created Time</TableCell>
              {/* <TableCell  className={styles.headTitle}>Status</TableCell> */}
              <TableCell  className={styles.headTitle}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
          {jobs.length === 0 &&  <TableRow >
            <TableCell colspan="7" style={{ "text-align": "center", }}>No Job Uploaded yet</TableCell>
          </TableRow>}

            {jobs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,index) =>
            (
              <TableRow key={item.id}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell  className={styles.ind}  align="left">{index+1}</TableCell>
                  <TableCell className={styles.ind}  component="th" scope="row"><b>{item.title.toUpperCase()}</b></TableCell>
                  <TableCell className={styles.ind}  component="th">{item.decription}</TableCell>
                  <TableCell  className={styles.ind} component="th">{item.jobType}</TableCell>
                  <TableCell  className={styles.ind} component="th">{item.vaccancies}</TableCell>
                  <TableCell  className={styles.ind} component="th">{item.skill.map((value,index) =>(value.skill+","))}</TableCell>
                  <TableCell  className={styles.ind} component="th">{item.createdTime}</TableCell>
                  {/* <TableCell  className={styles.ind} component="th">{item.status}</TableCell> */}
                  <TableCell onClick={() => handleDelete(item)}  component="th" align='left'><p className={styles.ind2}>REMOVE</p></TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[7]}
          component="div"
          count={jobs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </div>
    </div>
  )
}

export default Jobs
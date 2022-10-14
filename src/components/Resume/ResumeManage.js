import React, { useEffect, useState } from 'react'
import styles from './ResumeManage.module.css'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';

function ResumeManage() {
  const user = useSelector((state) => state.user.userInfo);
  const [resume,setResume] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [triggerDelete,setTriggerDelete] = useState(false)
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDetails = (item) =>
  {
    navigate("/ResumeDetails", { state: { data: item } })
  }

  
  const handleDelete =(item) =>
  {
    let data ={
      id:item.id
    }
    axios.post("http://localhost:5000/api/deleteResume",data,{withCredentials:true})
    .then((res)=>{
      if (res?.status === 200) {
      setTriggerDelete((state) => !state)
      toast.success('Resume Removed', {
        position: toast.POSITION.TOP_RIGHT,
    });}
    else
    console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  
  useEffect(() => {
    axios.get("http://localhost:5000/api/getAllResume/"+user.id,{withCredentials:true})
    .then((res)=>{
      console.log(res.data.data);
      setResume(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })
   }, [triggerDelete])
  

  return (
    <div className={styles.Main}>
      <div className={styles.okok}>
      <div className={styles.headss}><p>R E S U M E</p></div>
      <TableContainer className={styles.container}  >
        <Table className={styles.table} sx={{ minWidth: 1 }}  aria-label="simple table" color="#F7F6F2">

          <TableHead sx= {{color:'white'}}>
            <TableRow>
              <TableCell className={styles.headTitle} ></TableCell>
              <TableCell className={styles.headTitle} >Name</TableCell>
              <TableCell className={styles.headTitle} >EMAIL</TableCell>
              <TableCell className={styles.headTitle} >Image</TableCell>
              <TableCell  className={styles.headTitle}>Skills</TableCell>
              <TableCell  className={styles.headTitle}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
          {resume?.length === 0 &&  <TableRow >
            <TableCell colspan="7" style={{ "text-align": "center", }}>No Resume Added yet</TableCell>
          </TableRow>}

            {resume?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,index) =>
            (
              <TableRow key={item.id}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell  className={styles.ind}  align="left">{index+1}</TableCell>
                  <TableCell className={styles.ind}  component="th" scope="row"><b>{item?.FirstName.toUpperCase()}{item.SecondName.toUpperCase()}</b></TableCell>
                  <TableCell className={styles.ind}  component="th">{item.Email}</TableCell>
                  <TableCell  className={styles.ind} component="th">{item.Img === null? 'No image' :'Image added'} </TableCell>
                  <TableCell  className={styles.ind} component="th">{item.Skills}</TableCell>
                  {/* <TableCell  className={styles.ind} component="th">{item.status}</TableCell> */}
                  <TableCell sx={{gap:'10px'}}  component="th" align='left'><p onClick={() => handleDetails(item)}  className={styles.ind3}>DETAILS</p><p  onClick={() => handleDelete(item)} className={styles.ind2}>REMOVE</p></TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[7]}
          component="div"
          count={resume.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </div>
    </div>
  )
}

export default ResumeManage
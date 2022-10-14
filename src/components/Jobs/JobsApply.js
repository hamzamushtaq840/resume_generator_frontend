import { AppBar } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styles from './JobsApply.module.css'
import axios from "axios";
import {Storage} from './../../Utils/firebase'
import {ref,uploadBytes,getDownloadURL,uploadBytesResumable} from "firebase/storage"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function JobsApply({closeModal,applyForJob}) {
  const [file , setfile] = useState('');
  const [fileURL , setfileURL] = useState('');
  const [fileName,setFileName] = useState('')
  const [fileExtension,setFileExtention] = useState('')
  const user = useSelector((state) => state.user.userInfo);
  const [existingResumes,setExistingResumes] = useState([])
  const [list,setList] = useState(false)
  const [selectedCV,setSelectedCV] = useState(0)

  const existingResume = () =>
  {
    axios.get("http://localhost:5000/api/getAllResume/"+user.id,{withCredentials:true})
    .then((res)=>{
      console.log(res.data.data);
      setExistingResumes(res.data.data)
      setList(true)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const fileHandler= async (e)=>{
    setfile(e.target.files[0]);
    const last_dot = e.target.files[0].name.lastIndexOf('.')
    const ext = e.target.files[0].name.slice(last_dot + 1)
    const name = e.target.files[0].name.slice(0, last_dot)
    setFileExtention(ext)
    setFileName(name)

    if(file == null)
        return;

    console.log(file);
    toast(0,{autoClose:false, toastId: 1})

    try{
      console.log("uploading")
      const storageRef = ref(Storage, `/courseImages/${e.target.files[0].name}`);
      const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
      console.log("uploaded");
      uploadTask.on('state_changed', 
      (snapshot) => {
        const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        toast.update(1, {
          // position: toast.POSITION.TOP_CENTER,
          render: 'Uploading ' + p.toFixed(0) + '%',
        });
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
          console.log(error);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setfileURL(url);
          console.log(url)
          toast.update(1, {
            type: toast.TYPE.SUCCESS,
            render: 'File uploaded',
            autoClose:1000
          });
        });
      }
    );
  }catch(err){
      console.log(err);
  }
}

  const handleRadio =(e) =>
  {
    setSelectedCV(e.target.value)
  }
  const applyForJob2 = () =>
  {
    let data ={}
    if (fileURL !== '' && selectedCV !== 0)
    {
      data ={
        userId:user.id,
        resumeId:selectedCV,
        resumeImg:null,
      }
    }
    else if(fileURL !== '')
    {
      data ={
        userId:user.id,
        resumeId:null,
        resumeImg:fileURL,
      }
    }
    else
    {
      data ={
        userId:user.id,
        resumeId:selectedCV,
        resumeImg:null,
      }
    }
  applyForJob(data)
  }

  return (
    <>
        <div className={styles.modalBackground} onClick={() => closeModal(false)}></div>
        <div className={styles.modalContainer} >
            <div className={styles.head}>
              <h1>Apply for job</h1>  
            </div>
            <div className={styles.body}>
            {fileURL === "" &&
              <button onClick={existingResume}>Choose Resume</button>
            }
            </div>
            {list.length === 0 && <div>
              No Resume 
            </div>}
            {(list.length !==0 && fileURL === '') && existingResumes.map((value,index) =>
            {
              return (
                <div className={styles.radio}>
                <input type="radio" value={value.id} name='resume' onChange={(e) => handleRadio(e)}/>
                <div className={styles.name}>Resume {index+1}</div>
                </div>
              )
            })
            }
            <div className={styles.footer}>
                {(fileURL !=="" || selectedCV !== 0) && <button onClick={applyForJob2}>Finish</button>}
            </div>
        </div>
    </>
  )
}

export default JobsApply
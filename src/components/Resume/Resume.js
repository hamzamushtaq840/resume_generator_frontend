import {
  Container,
  Form,
  Col,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Row
} from "react-bootstrap";
import { useState } from "react";
// import { Link } from "react-router-dom";
import styles from './Resume.module.css'
import axios from "axios";
import {Storage} from './../../Utils/firebase'
import {ref,uploadBytes,getDownloadURL,uploadBytesResumable} from "firebase/storage"
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormComponent = () => {

  const [title, setTitle] = useState('');
  const [file , setfile] = useState('');
  const [fileURL , setfileURL] = useState('');
  const [fileName,setFileName] = useState('')
  const [fileExtension,setFileExtention] = useState('')
  const user = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate()

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

  // first name of the person
  const [userFirstName, setUserFirstName] = useState("");
  const handleFirstName = (e) => {
    setUserFirstName(e.target.value);
  };
  // second name of the person
  const [userSecondName, setUserSecondName] = useState("");
  const handleUserSecondName = (e) => {
    setUserSecondName(e.target.value);
  };
  // gender of user
  const [userGender, setUserGender] = useState("Male");
  const handleUserGender = (e) => {
    setUserGender(e.target.value);
  };
  // age of the user
  const [userAge, setUserAge] = useState("");
  const handleUserAge = (e) => {
    setUserAge(e.target.value);
  };
  // user profession
  const [userProfession, setUserProfession] = useState("");
  const handleUserProfession = (e) => {
    setUserProfession(e.target.value);
  };
  // user location
  const [userLocation, setUserLocation] = useState("");
  const handleUserLocation = (e) => {
    setUserLocation(e.target.value);
  };
  // user phone number
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const handleUserPhoneNumber = (e) => {
    setUserPhoneNumber(e.target.value);
  };
  // user email address
  const [userEmail, setUserEmail] = useState("");
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
  // user house address
  const [userHouseAddress, setUserHouseAddress] = useState("");
  const handleUserHouseAddress = (e) => {
    setUserHouseAddress(e.target.value);
  };
  // user description
  const [userProfileDescription, setUserProfileDescription] = useState("");
  const handleUserProfileDescription = (e) => {
    setUserProfileDescription(e.target.value);
  };
  // user profile website
  const [userFirstProfileWebsite, SetUserFirstProfileWebsite] =
    useState("GitHub");
  const handleFirstUserProfileWebsite = (e) => {
    SetUserFirstProfileWebsite(e.target.value);
  };
  // user github profile
  const [userGitHubProfileName, SetUserGitHubProfileName] = useState("");
  const handleUserGitHubProfileName = (e) => {
    SetUserGitHubProfileName(e.target.value);
  };
  // user profile website
  const [userSecondProfileWebsite, SetUserSecondProfileWebsite] =
    useState("LinkedIn");
  const handleSecondUserProfileWebsite = (e) => {
    SetUserSecondProfileWebsite(e.target.value);
  };
  // user LinkedIn profile
  const [userLinkedInProfileName, SetUserLinkedInProfileName] = useState("");
  const handleUserLinkedInProfileName = (e) => {
    SetUserLinkedInProfileName(e.target.value);
  };

  // user college degree name
  const [userCollegeDegreeName, setUserCollegeDegreeName] = useState("");
  const handleUserCollegeDegreeName = (e) => {
    setUserCollegeDegreeName(e.target.value);
  };
  // user college name
  const [userCollegeName, setUserCollegeName] = useState("");
  const handleUserCollegeName = (e) => {
    setUserCollegeName(e.target.value);
  };
  // user college degree starting date
  const [userCollegeStartingDate, setUserCollegeStartingDate] = useState("");
  const handleUserCollegeStartingDate = (e) => {
    setUserCollegeStartingDate(e.target.value);
  };
  // user college degree ending date
  const [userCollegeEndingDate, setUserCollegeEndingDate] = useState("");
  const handleUserCollegeDegreeEndingDate = (e) => {
    setUserCollegeEndingDate(e.target.value);
  };
 
  // user bachelor degree name
  const [userBachelorDegreeName, setUserBachelorDegreeName] = useState("");
  const handleUserBachelorDegreeName = (e) => {
    setUserBachelorDegreeName(e.target.value);
  };
  // user university name
  const [userUniversityName, setUserUniversityName] = useState("");
  const handleUserUniversityName = (e) => {
    setUserUniversityName(e.target.value);
  };
  // user bachelor degree starting date
  const [userBachelorStartingDate, setUserBachelorStartingDate] = useState("");
  const handleUserBachelorStartingDate = (e) => {
    setUserBachelorStartingDate(e.target.value);
  };
  // user bachelor degree ending date
  const [userBachelorEndingDate, setUserBachelorEndingDate] = useState("");
  const handleUserBachelorDegreeEndingDate = (e) => {
    setUserBachelorEndingDate(e.target.value);
  };
  // user 1st experience
  const [user1stExperience, setUser1stExperience] = useState("");
  const handleUser1stExperience = (e) => {
    setUser1stExperience(e.target.value);
  };
  // user 1st company name
  const [user1stCompanyName, setUser1stCompanyName] = useState("");
  const handleUser1stCompanyName = (e) => {
    setUser1stCompanyName(e.target.value);
  };
  // user 1st experience starting date
  const [user1stExperienceStartingDate, setUser1stExperienceStartingDate] =
    useState("");
  const handleUser1stExperienceStartingDate = (e) => {
    setUser1stExperienceStartingDate(e.target.value);
  };
  // user 1st experience ending date
  const [user1stExperienceEndingDate, setUser1stExperienceEndingDate] =
    useState("");
  const handleUser1stExperienceEndingDate = (e) => {
    setUser1stExperienceEndingDate(e.target.value);
  };
  // user 2nd experience
  const [user2ndExperience, setUser2ndExperience] = useState("");
  const handleUser2ndExperience = (e) => {
    setUser2ndExperience(e.target.value);
  };
  // user 2nd company name
  const [user2ndCompanyName, setUser2ndCompanyName] = useState();
  const handleUser2ndCompanyName = (e) => {
    setUser2ndCompanyName(e.target.value);
  };
  // user 2nd experience starting date
  const [user2ndExperienceStartingDate, setUser2ndExperienceStartingDate] =
    useState("");
  const handleUser2ndExperienceStartingDate = (e) => {
    setUser2ndExperienceStartingDate(e.target.value);
  };
  // user 2nd experience ending date
  const [user2ndExperienceEndingDate, setUser2ndExperienceEndingDate] =
    useState("");
  const handleUser2ndExperienceEndingDate = (e) => {
    setUser2ndExperienceEndingDate(e.target.value);
  };
  // user experiences
  const [userSkills, setUserSkills] = useState("");
  const handleUserSkills = (e) => {
    setUserSkills(e.target.value);
  };
  // sum up all the information into one object
  const handleUserResumeData = (e) => {
    e.preventDefault();

    const validateEmail = (mail) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
       {
         return (true)
       }
         return (false)
     }
    
    if( userFirstName === '' || userSecondName === '' || userGender === '' || userAge === '' || userProfession === '' || userLocation === '' || userPhoneNumber === '' || userEmail === '' || userHouseAddress === '' || userProfileDescription === ''  || userCollegeDegreeName === '' || userCollegeName === '' || userCollegeStartingDate === '' || userCollegeEndingDate === '' || userBachelorDegreeName === '' || userUniversityName === '' || userBachelorStartingDate === '' || userBachelorEndingDate === '' || userSkills === "")
    {
      toast.error('Please fill out all fields', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else if(validateEmail(userEmail) === false)
    {
      toast.error('Please validate email', {
        position: toast.POSITION.TOP_RIGHT,
      });      
    }
    else
    {
    let data = {
        userId:user.id,
        Img:fileURL,
        FirstName:userFirstName,
        SecondName:userSecondName,
        Gender:userGender,
        Age:userAge,
        Profession:userProfession,
        Location:userLocation,
        PhoneNumber:userPhoneNumber,
        Email:userEmail,
        HouseAddress:userHouseAddress,
        ProfileDescription:userProfileDescription,
        GitHubProfileName:userGitHubProfileName,
        LinkedInProfileName:userLinkedInProfileName,
        CollegeDegreeName:userCollegeDegreeName,
        CollegeName:userCollegeName,
        CollegeStartingDate:userCollegeStartingDate,
        CollegeEndingDate:userCollegeEndingDate,
        BachelorDegreeName:userBachelorDegreeName,
        UniversityName:userUniversityName,
        BachelorStartingDate:userBachelorStartingDate,
        BachelorEndingDate:userBachelorEndingDate,
        FirstExperience:user1stExperience,
        FirststCompanyName:user1stCompanyName,
        FirststExperienceStartingDate:user1stExperienceStartingDate,
        FirststExperienceEndingDate:user1stExperienceEndingDate,
        SecondExperience:user2ndExperience,
        SecondCompanyName:user2ndCompanyName,
        SecondExperienceStartingDate:user2ndExperienceStartingDate,
        SecondExperienceEndingDate:user2ndExperienceEndingDate,
        Skills:userSkills,
    }
    if(fileURL === "")
    {
      data.Img = null
    }
      axios.post("http://localhost:5000/api/resume",data,{withCredentials:true})
      .then((res)=>{
        console.log(res);
        if(res.status === 200){
            toast.success('Resume added success fully', {
                position: toast.POSITION.TOP_RIGHT,
            });
            navigate('/EmployeeDashboard')
        }
      }).catch((err)=>{
        if(err.status === 500){
            toast.error('Cannot Publish Job', {
                position: toast.POSITION.TOP_RIGHT,
            });
        } 
      })
    }
  };
  return (
    <form className={styles.Main} data-toggle="validator" role="form" >
    <div style={{width:'100%'}} >
      {fileURL === "" &&
      <div className={styles.imgContain}>
          <input id="files"  style={{visibility:'hidden',width:'10px'}} type="file" onChange={fileHandler} accept="image/*"/>
          <label for="files"  className={styles.input}>Add Image</label>
      </div>}
      {fileURL !== "" &&
      <div className={styles.imgContain}>
          <input id="files"  style={{visibility:'hidden',width:'10px'}} type="file" onChange={fileHandler} accept="image/*"/>
          <label for="files"  className={styles.input}>Image Added</label>
      </div>}

        <h1 className="text-dark  py-3" style={{fontWeight:'300'}}>General Detail</h1>
        <Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>First Name</FormLabel>
            <FormControl
              type="text"
              placeholder="First Name"
              onChange={handleFirstName}
              value={userFirstName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Last Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Last Name"
              onChange={handleUserSecondName}
              value={userSecondName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Gender</FormLabel>
            <FormControl
              as="select"
              onChange={handleUserGender}
              value={userGender}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </FormControl>
          </FormGroup>
        </Row>
        <Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Age</FormLabel>
            <FormControl
              type="number"
              min="1"
              onChange={handleUserAge}
              value={userAge}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Profession</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g Full stack developer"
              onChange={handleUserProfession}
              value={userProfession}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Location</FormLabel>
            <FormControl
              type="text"
              placeholder="Lahore, Pakistan"
              onChange={handleUserLocation}
              value={userLocation}
              required
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Mobile Phone </FormLabel>
            <FormControl
              type="number"
              placeholder="+01 23 456 789"
              onChange={handleUserPhoneNumber}
              value={userPhoneNumber}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Email </FormLabel>
            <FormControl
              type="email"
              placeholder="info@domain.com"
              onChange={handleUserEmail}
              value={userEmail}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> House Address </FormLabel>
            <FormControl
              type="text"
              placeholder="House#0 St#0 street and city name"
              onChange={handleUserHouseAddress}
              value={userHouseAddress}
              required
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Describe Yourself</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUserProfileDescription}
              value={userProfileDescription}
              required
            />
          </FormGroup>
        </Row>
        <h1 className="text-dark  py-3" style={{fontWeight:'300',marginTop:'10px'}}>Social Detail</h1>
        <Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleFirstUserProfileWebsite}
              value={userFirstProfileWebsite}
              required
            >
              <option value="GitHub">GitHub</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g johnDoe123"
              onChange={handleUserGitHubProfileName}
              value={userGitHubProfileName}
              required
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleSecondUserProfileWebsite}
              value={userSecondProfileWebsite}
              required
            >
              <option value="LinkedIn">LinkedIn</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g johnDoe123"
              onChange={handleUserLinkedInProfileName}
              value={userLinkedInProfileName}
              required
            />
          </FormGroup>
        </Row>
        <h1 className="text-dark  py-3" style={{fontWeight:'300',marginTop:'30px'}}>
          Educational Detail
        </h1>
        <Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> College degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g Intermediate in computer science"
              onChange={handleUserCollegeDegreeName}
              value={userCollegeDegreeName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> College Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g MAO College"
              onChange={handleUserCollegeName}
              value={userCollegeName}
              required
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserCollegeStartingDate}
              value={userCollegeStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserCollegeDegreeEndingDate}
              value={userCollegeEndingDate}
              required
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> University degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g bachelor in computer science"
              onChange={handleUserBachelorDegreeName}
              value={userBachelorDegreeName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> University Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g university of the punjab"
              onChange={handleUserUniversityName}
              value={userUniversityName}
              required
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserBachelorStartingDate}
              value={userBachelorStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserBachelorDegreeEndingDate}
              value={userBachelorEndingDate}
              required
            />
          </FormGroup>
            
        </Row>
        <h1 className="text-dark  py-3" style={{fontWeight:'300',marginTop:'40px'}}>
          {" "}
          Professional Experience Details (Add 2 latest experiences){" "}
        </h1>
        <Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 1st Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleUser1stExperience}
              value={user1stExperience}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleUser1stCompanyName}
              value={user1stCompanyName}
              required
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser1stExperienceStartingDate}
              value={user1stExperienceStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser1stExperienceEndingDate}
              value={user1stExperienceEndingDate}
              required
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 2nd Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleUser2ndExperience}
              value={user2ndExperience}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleUser2ndCompanyName}
              value={user2ndCompanyName}
              required
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser2ndExperienceStartingDate}
              value={user2ndExperienceStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser2ndExperienceEndingDate}
              value={user2ndExperienceEndingDate}
              required
            />
          </FormGroup>
        </Row>
        <h1 className="text-dark  py-3" style={{fontWeight:'300',marginTop:'30px'}}>
          {" "}
          Skills {" "}
        </h1>
        <Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Write Your Skills</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="e.g HTML,CSS,REACTJS,NODEJS,EXPRESSJS"
              onChange={handleUserSkills}
              value={userSkills}
              required
            />
          </FormGroup>
        </Row>
        <Button
          // variant="dark"
          style={{backgroundColor:'#0069D9'}}
          type="submit"
          as={Col}
          sm={12}
          className="p-3 my-3"
          onClick={handleUserResumeData}
        >
          Generate CV
        </Button>
    </div>
    </form>
  );
};

export default FormComponent;

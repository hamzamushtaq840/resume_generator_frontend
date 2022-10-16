import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { HiUser, HiOfficeBuilding } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function SignUpMain() {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
    <div className="pt-60 flex flex-col   items-center">
      <div className="w-4/5">
        <button 
          onClick={() => navigate('/EmployeeSignup')}
          style={{fontFamily:"'Poppins', sans-serif",fontWeight:'600'}}
          className="flex gap-4 justify-center items-center rounded-md bg-main h-14  mb-10 hover:text-[#64c1ff]
          hadow transition-all duration-500 
          hover:bg-[#044571bb] py-1 font-bold text-white
          w-full text-center"
          >
          <HiUser style={{fontSize:'25px'}}/>
          Signup As An Employee
        </button>
        <div>
          <button
            onClick={() => navigate('/CompanySignup')}
            style={{fontFamily:"'Poppins', sans-serif",fontWeight:'600'}}
             className="flex gap-4 justify-center items-center rounded-md  bg-main h-14 w mb-10 hover:text-[#64c1ff]
             hadow transition-all duration-500 
             hover:bg-[#044571bb] py-1 font-bold text-white
             w-full text-center"
             >
            <HiOfficeBuilding style={{fontSize:'25px'}} />
            Signup As An Company
          </button>
        </div>
      </div>
    </div>
            </>
  );
}

export default SignUpMain;

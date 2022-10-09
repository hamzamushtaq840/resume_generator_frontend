import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { HiUser, HiOfficeBuilding } from "react-icons/hi";

function SignUpMain() {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <button
          className="flex rounded-md bg-[#64c1ff]   mb-10 hover:text-[#64c1ff]
          hadow transition-all duration-500 
          hover:bg-black py-1 font-bold text-white
          w-full text-center"
        >
          <HiUser />
          Signup As An Employee
        </button>
        <div>
          <button
            className="rounded-md bg-[#64c1ff]    hover:text-[#64c1ff]
          hadow transition-all duration-500 
          hover:bg-black py-1 font-bold text-white
          w-full text-center"
          >
            <HiOfficeBuilding />
            Signup As An Company
          </button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default SignUpMain;

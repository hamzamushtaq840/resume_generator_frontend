import React from "react";

import Typed from "react-typed";
import resume from "../Assets/resume.svg";
import Features from "./Features";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-col-reverse items-center md:flex-row justify-between ">
        {/* left-side */}
        <div className="md:w-1/2 space-y-5 mt-14 md:mt-0">
          <div className="ml-10">
            <h1 className="text-6xl font-medium">ONLINE RESUME BUILDER</h1>
            <Typed
              className="text-[#64c1ff]  pl-1 text-5xl font-extrabold "
              strings={["CREATIVE.", "RESUME.", "RECRUITERS."]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p style={{fontFamily:"'Poppins', sans-serif",fontWeight:'400'}} className="text-lg ml-12 text-black-500 font-semibold">
            Here you can make your own free resume
            <br />
            and even can find jobs for yourself
            <br />
            based on recommendations
          </p>
          {/* <button
             className="rounded-md bg-[#64c1ff]  mt-5 py-4 px-4 text-Black hover:text-blue-500 hover:bg-white shadow transition-all 
           duration-500  font-bold">
            <Link to="/Resume">Genrate Your Resume</Link>
          </button> */}
        </div>
        {/* right-side */}
        <div className="py-8 px-12 mt-3">
          <img src={resume} alt="" />
        </div>
      </div>
      <Features />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Home;

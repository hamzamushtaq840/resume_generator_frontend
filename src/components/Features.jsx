import React from "react";
import { Link } from "react-router-dom";
import gresume from "../Assets/gresume.png";
import companies from "../Assets/companies.png";
import Recomendations from "../Assets/Recomendations.png";

import Typed from "react-typed";

function Features() {
  return (
    <React.Fragment>
      <div>
        <h1
          className=" flex-wrap text-center font-extrabold text-5xl mx-2 justify-items-center
      text-[#64c1ff]"
        >
          <Typed
            className="text-[#64c1ff]  pl-2 text-5xl font-extrabold "
            strings={["APP FEATURES."]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </h1>
        <div className="w-full py-[10rem] px-4 ">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            <div
              className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg 
     hover:scale-105 duration-300"
            >
              <img
                className="w-20 mx-auto mt-[-3rem] bg-transparent"
                src={gresume}
                alt="/"
              />

              <h2 className="text-2xl font-bold text-center py-8">
                Resume Section
              </h2>
              <p className="text-center text-4xl font-bold text-[#64c1ff]">
                HERE
              </p>
              <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">
                  Create Your Own Resume
                </p>
                <p className="py-2 border-b mx-8">Generate Your Resume</p>
                <p className="py-2 border-b mx-8">Free Resume</p>
              </div>
            </div>
            <div
              className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg 
     hover:scale-105 duration-300"
            >
              <img
                className="w-20 mx-auto mt-[-3rem] bg-transparent"
                src={Recomendations}
                alt="/"
              />
              <h2 className="text-2xl font-bold text-center py-8">
                Recomendations
              </h2>
              <p className="text-center text-4xl font-bold text-[#64c1ff]">
                HERE
              </p>
              <div className="text-center font-medium">
                <p className="py-2 border-b mx-4 mt-8">
                  Resmume Will Recoment you To a Job
                </p>
                <p className="py-2 border-b mx-4">
                  New Employee Can Find A Job Here
                </p>
                <p className="py-2 border-b mx-8">And Be Recommended</p>
              </div>
            </div>
            <div
              className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg 
     hover:scale-105 duration-300 "
            >
              <img
                className="w-20 mx-auto mt-[-3rem] bg-transparent"
                src={companies}
                alt="/"
              />
              <h2 className="text-2xl font-bold text-center py-8">Companies</h2>
              <p className="text-center text-4xl font-bold text-[#64c1ff]">
                HERE
              </p>
              <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">
                  Explore Different Jobs
                </p>
                <p className="py-2 border-b mx-8">Standard Jobs</p>
                <p className="py-2 border-b mx-8">For New Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Features;

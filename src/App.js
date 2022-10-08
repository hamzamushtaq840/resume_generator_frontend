import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Resume from "./Components/ResumeGenerator/Resume";
import Companies from "./Components/Companies";
import AboutUs from "./Components/AboutUs";
// import FrontPage from './Components/UserSign/FrontPage';

import { ThemeProvider } from "next-themes";
import EmployeeSignup from './Components/Signup/Employee Signup/EmployeeSignup';
import CompanySignup from './Components/Signup/Company Signup/CompanySignup';
import SignIn from './Components/Login/SignIn';
import {ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider>
        <div className="max-w-6xl mx-auto p-4 space-y-24">
          <Router>
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='SignIn' element={<SignIn/>}/>
              <Route path='EmployeeSignup' element={<EmployeeSignup/>} />
              <Route path='CompanySignup' element={<CompanySignup/>} />
              {/* <Route path='FrontPage' element={<FrontPage/>} /> */}


            </Routes>
          </Router>
          </div>
          
          <ToastContainer autoClose={1000}/>
      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;

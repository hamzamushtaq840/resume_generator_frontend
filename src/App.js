import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';

import { ThemeProvider } from 'next-themes';
import EmployeeSignup from './Components/Signup/Employee Signup/EmployeeSignup';
import CompanySignup from './Components/Signup/Company Signup/CompanySignup';
import SignIn from './Components/Login/SignIn';
import { ToastContainer, toast } from 'react-toastify';
import SignUpMain from './Components/Signup/SignUpMain';
import Layout from './Components/Layout/Layout';
import Missing from './Components/Missing/Missing';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import CompanyDashboard from './Components/Dashboard/CompanyDashboard';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import Unauthorized from './Components/Missing/Unauthorized';
import CompanyNavbar from './Components/Navbar/CompnayNavbar';
import Advertise from './Components/Jobs/Advertise';
import Selection from './Components/Jobs/Selection';
import Jobs from './Components/Jobs/Jobs';
import CompanyProfile from './Components/Profile/CompanyProfile';
import EmployeeProfile from './Components/Profile/EmployeeProfile';
import EmployeeNavbar from './Components/Navbar/EmployeeNavbar';
import Resume from './Components/Resume/Resume';
import ResumeManage from './Components/Resume/ResumeManage';
import JobSearch from './Components/Jobs/JobSearch.js';
import ResumeDetail from './Components/Resume/ResumeDetail';
import ResumeDetail2 from './Components/Resume/ResumeDetail2';
import JobDetails from './Components/Jobs/JobDetails';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            {/* Public routes */}
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="SignIn"
              element={<SignIn />}
            />
            <Route
              path="EmployeeSignup"
              element={<EmployeeSignup />}
            />
            <Route
              path="CompanySignup"
              element={<CompanySignup />}
            />
            <Route
              path="SignUpMain"
              element={<SignUpMain />}
            />

            {/* Protected Routed For Company */}
            <Route element={<RequireAuth allowedRoles={'company'} />}>
              <Route
                path="CompanyDashboard"
                element={
                  <CompanyNavbar>
                    <CompanyDashboard />
                  </CompanyNavbar>
                }
              />
              <Route
                path="Jobs"
                element={
                  <CompanyNavbar>
                    <Jobs />
                  </CompanyNavbar>
                }
              />
              <Route
                path="Jobs/Advertise"
                element={
                  <CompanyNavbar>
                    <Advertise />
                  </CompanyNavbar>
                }
              />
              <Route
                path="Jobs/Selection"
                element={
                  <CompanyNavbar>
                    <Selection />
                  </CompanyNavbar>
                }
              />
                <Route
                  path="Jobs/ResumeDetail"
                  element={
                    <CompanyNavbar>
                      <ResumeDetail2/>
                    </CompanyNavbar>
                  }
                />
              <Route
                path="CompanyProfile"
                element={
                  <CompanyNavbar>
                    <CompanyProfile />
                  </CompanyNavbar>
                }
              />
            </Route>

            {/* Protected Routed For Employee */}
            <Route element={<RequireAuth allowedRoles={'employee'} />}>
              <Route
                path="EmployeeDashboard"
                element={
                  <EmployeeNavbar>
                    <EmployeeDashboard />
                  </EmployeeNavbar>
                }
              />
              <Route
                path="JobSearch"
                element={
                  <EmployeeNavbar>
                    <JobSearch />
                  </EmployeeNavbar>
                }
              />
              <Route
                path="JobDetails"
                element={
                  <EmployeeNavbar>
                    <JobDetails/>
                  </EmployeeNavbar>
                }
              />
              <Route
                path="Resume"
                element={
                  <EmployeeNavbar>
                    <Resume />
                  </EmployeeNavbar>
                }
              />

              <Route
                path="Resume/ResumeManage"
                element={
                  <EmployeeNavbar>
                    <ResumeManage />
                  </EmployeeNavbar>
                }
              />
              <Route
                path="ResumeDetails"
                element={
                  <EmployeeNavbar>
                    <ResumeDetail />
                  </EmployeeNavbar>
                }
              />
              <Route
                path="EmployeeProfile"
                element={
                  <EmployeeNavbar>
                    <EmployeeProfile />
                  </EmployeeNavbar>
                }
              />
            </Route>

            {/* Catch all */}
            <Route
              path="*"
              element={<Missing />}
            />
            <Route
              path="Unauthorized"
              element={<Unauthorized />}
            />
          </Route>
        </Routes>
        <ToastContainer autoClose={1000} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

{
  /* <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="SignIn" element={<SignIn />} />
    <Route path="EmployeeSignup" element={<EmployeeSignup />} />
    <Route path="CompanySignup" element={<CompanySignup />} />
    <Route path="SignUpMain" element={<SignUpMain />} />
  </Routes>
</Router> */
}

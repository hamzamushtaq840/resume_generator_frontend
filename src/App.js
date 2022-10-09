import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

import { ThemeProvider } from "next-themes";
import EmployeeSignup from "./Components/Signup/Employee Signup/EmployeeSignup";
import CompanySignup from "./Components/Signup/Company Signup/CompanySignup";
import SignIn from "./Components/Login/SignIn";
import { ToastContainer, toast } from "react-toastify";
import SignUpMain from "./Components/Signup/SignUpMain";
import Layout from "./Components/Layout/Layout";
import Missing from "./Components/Missing/Missing";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import CompanyDashboard from "./Components/Dashboard/CompanyDashboard";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import Unauthorized from "./Components/Missing/Unauthorized";
import CompanyNavbar from "./Components/Navbar/CompnayNavbar";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="SignIn" element={<SignIn />} />
            <Route path="EmployeeSignup" element={<EmployeeSignup />} />
            <Route path="CompanySignup" element={<CompanySignup />} />
            <Route path="SignUpMain" element={<SignUpMain />} />

            {/* Protected Routed */}
            <Route element={<RequireAuth allowedRoles={"company"} />}>
              <Route
                path="CompanyDashboard"
                element={
                  <CompanyNavbar>
                    <CompanyDashboard />
                  </CompanyNavbar>
                }
              />
            </Route>

            <Route element={<RequireAuth allowedRoles={"employee"} />}>
              <Route path="EmployeeDashboard" element={<EmployeeDashboard />} />
            </Route>

            {/* Catch all */}
            <Route path="*" element={<Missing />} />
            <Route path="Unauthorized" element={<Unauthorized />} />
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

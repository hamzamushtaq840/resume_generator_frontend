import React from 'react';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/ResumeGenerator/Resume";
import Companies from "./components/Companies";
import AboutUs from "./components/AboutUs";
import SignIn from "./components/UserSign/SignIn";
import Signup from "./components/UserSign/Signup";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider>
        <div className="max-w-6xl mx-auto p-4 space-y-24">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Resume" element={<Resume/>} />
              <Route path="/Companies" element={<Companies/>} />
              <Route path="/AboutUs" element={<AboutUs/>} /> 
              <Route path="/Signin" element={<SignIn/>} /> 
              <Route path="/signup" element={<Signup/>} /> 
            </Routes>
          </Router>
       
      </div>
        <div>
          <Footer/>
          </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

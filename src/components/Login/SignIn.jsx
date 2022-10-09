import React, { useRef } from "react";
import Uiimg from "./../../Assets/login.png";
import "./Signin.css";
import axios from "axios";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import { userActions } from "./../../Redux/user-slice";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function SignIn() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post("http://localhost:5000/api/login", data)

      .then(function (response) {
        // console.log(response.data.user);
        let obj = response.data.user;
        obj.token = response.data.token;
        console.log(obj);
        dispatch(userActions.userInfo(obj));
        if (obj.role === "employee") {
          navigate("/EmployeeDashboard");
        }
        if (obj.role === "company") {
          navigate("/CompanyDashboard");
        }
        // navigate(from, { replace: true });
      })
      .catch(function (error) {
        console.log("error here");
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Navbar />

      <div className="main">
        <div className="containerr">
          <form ref={inputRef} onSubmit={handleSubmit}>
            <h2 style={{ color: "black" }}>Sign In</h2>
            <input
              placeholder="Enter Email"
              class="input-info"
              name="email"
            ></input>
            <input
              name="password"
              placeholder="Enter Password"
              class="input-info"
              type="password"
            ></input>
            <button type="submit" placeholder="" class="submit">
              {" "}
              submit
            </button>
            {/* <br /> */}
            <Link to="#" className="link">
              Forgot Password?
            </Link>{" "}
            <br />
          </form>
          <div className="info-img">
            <img src={Uiimg} alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

import React, { useRef } from "react";
import registerimg from "../../../Assets/Register.png";
import "./Employee.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

export default function EmployeeSignup() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  let abc = "employee";
  // console.log(typeof user?.userInfo);
  console.log(Object.values(user.userInfo).includes(abc));

  // var found = Object.keys(obj).filter(function (key) {
  //   return obj[key] === "test1";
  // });

  // if (found.length) {
  //   alert("exists");
  // }
  // console.log(user?.userInfo?.role?.find((role) => abc?.includes(role)));

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: "employee",
    };
    console.log(data);

    axios
      .post("http://localhost:5000/api/signup", data)
      .then(function (response) {
        if (response?.status === 200) {
          toast.success("Account created", {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/SignIn");
        } else if (response?.response?.status === 400) {
          toast.error("Account with this email already exists", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          toast.error("Account with this email already exists", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (error.response.status === 500) {
          toast.error("Error Registering User", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };
  return (
    <React.Fragment>
      {" "}
      <div>
        <Navbar />
        <div className="containerr">
          <div className="info-img">
            <img src={registerimg} alt="register" />
          </div>
          <form ref={inputRef} onSubmit={handleSubmit}>
            <h2 style={{ color: "black" }}>Employee Sign Up</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="input-info"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="input-info"
              required
            ></input>
            {/* <input type="text" placeholder="+923" class="input-info"></input> */}
            <input
              placeholder="Password"
              type="password"
              name="password"
              class="input-info"
              required
            ></input>
            <input
              placeholder="Confirm Password"
              name="confirm password"
              type="password"
              class="input-info"
              required
            ></input>
            <button class="submit">SIGN UP</button>
            <Link to="/SignIn" className="link1">
              {" "}
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

import React, { useRef } from "react";
import registerimg from "../../../assets/Register.png";
import "./Company.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

export default function CompanySignup() {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: "company",
    };

    axios
      .post("http://localhost:5000/api/signup", data)
      .then(function (response) {
        if (response?.status === 200) {
          toast.success("Account created", {
            position: toast.POSITION.TOP_RIGHT,
          });
          navigate("/");
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
    <div>
      <Navbar />
      <div className="containerr">
        <div className="info-img">
          <img src={registerimg} alt="register" />
        </div>
        <form ref={inputRef} onSubmit={handleSubmit}>
          <h2 style={{ color: "black" }}>Company Sign Up</h2>
          <input
            type="name"
            name="name"
            placeholder="Enter Your Name.."
            class="input-info"
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email.."
            class="input-info"
          ></input>
          {/* <input type="text" placeholder="+923" class="input-info"></input> */}
          <input
            placeholder="Enter Your Password.."
            name="password"
            type="password"
            class="input-info"
          ></input>
          <input
            placeholder="Conform Your Password.."
            name="confirm passwords"
            type="password"
            class="input-info"
          ></input>
          <button class="submit">Sign Up</button>
          {/* <br /> */}
          <Link to="#" className="link">
            Forgot Password?
          </Link>{" "}
          {/* <br /> */}
          <Link to="/SignIn" className="link1 ">
            {" "}
            Already have an account?
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}

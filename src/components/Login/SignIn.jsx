import React, { useRef } from "react";
import Uiimg from "./../../Assets/login.png";
import styles from "./Signin.module.css";
import axios from "axios";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import { userActions } from "../../Redux/user-slice";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

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
    console.log(data)

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
          navigate("/Jobs");
        }
        // navigate(from, { replace: true });
      })
      .catch(function (error) {
        console.log("error here");
        if(error.response.request.status === 400)
        {
          toast.error("Wrong Combination", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        if(error.response.request.status === 403)
        {
          toast.error("Wrong Combination", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      });
  };

  return (
    <div className={styles.Main}>
      <Navbar />

      <div className={styles.main}>
        <div className={styles.containerr}>
          <form className={styles.form}ref={inputRef} onSubmit={handleSubmit}>
            <h2 style={{ color: "black" }}>Sign In</h2>
            <input
              placeholder="Enter Email"
              className={styles.input_info}
              name="email"
            ></input>
            <input
              name="password"
              placeholder="Enter Password"
              className={styles.input_info}
              type="password"
            ></input>
            <button type="submit" placeholder="" class="submit text-white">
              {" "}
              Submit
            </button>
            {/* <br /> */}
            {/* <Link to="#" className={styles.link}>
              Forgot Password?
            </Link>{" "} */}
            <br />
          </form>
          <div className={styles.info_img}>
            <img src={Uiimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

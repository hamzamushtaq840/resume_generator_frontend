import "./CompanyNavbar.css";
import image from "./../../Assets/logo.png";
import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userActions } from "../../Redux/user-slice";
import { getCourseIdOnClickactions } from "../../Redux/course-slice";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { TextField } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ArticleIcon from '@mui/icons-material/Article';
import GradingIcon from '@mui/icons-material/Grading';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import TaskIcon from '@mui/icons-material/Task';
import Logout from "@mui/icons-material/Logout";

const Navbar2 = (props) => {
  const breadcrumbs = useBreadcrumbs();
  const user = useSelector((state) => state.user);
  const courseIdredux = useSelector(
    (state) => state.getCourseIdOnClick.getCourseIdOnClick
  );
  const courseClickUserId = useSelector(
    (state) => state.courseClickUserId.courseClickUserId
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const locationName = location.pathname;
  let newLocationName = "";

  let counter = 0;

  for (let i = 0; i < locationName.length; i++) {
    if (locationName[i] === "/") {
      counter++;
    }
    if (counter > 1) {
      // return
    } else {
      newLocationName += locationName[i];
    }
  }

  const [sidebar, setSidebar] = useState(true);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  function closeSidebar() {
    // setSidebar(state => state = false);
  }

  // console.log(typeof(courseIdredux));

  if (typeof courseIdredux === "number" && newLocationName !== "/courses") {
    dispatch(getCourseIdOnClickactions.getCourseIdOnClick({}));
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(userActions.userInfo({}));
    // removeCookies("token");
    navigate("/");
  };
  const [top, setTop] = useState(false);

  const make = (window) => {
    if (window.pageYOffset > 8) setTop(true);
    else setTop(false);
  };

  React.useEffect(() => {
    window.onscroll = () => window.pageYOffset && make(window);

    return () => (window.onscroll = null);
  });

  return (
    <div className="Main">
      <div>
        <nav className={sidebar ? "nav-menu-active1" : "nav-menu"}>
          <ul className="nav-menu-items">
            <div className="top">
              <img src={image} width="50px" alt="logo"></img>
            </div>
            <hr className="hr"></hr>
            <li className="nav-text" title="Jobs">
              <Link
                onClick={() => setTop(false)}
                className={
                  newLocationName === "/Jobs" && sidebar === false
                    ? "flexstartborder"
                    : sidebar === true && newLocationName === "/Jobs"
                    ? "flexcenterborder"
                    : sidebar === true
                    ? "flexstart"
                    : "flexcenter"
                }
                to={"/Jobs"}
              >
                {/* <i class="bi bi-book"></i> */}
                <WorkOutlineIcon/>
                {<span>Jobs</span>}
              </Link>
            </li>

            {   (location.pathname === "/Jobs" ||
                location.pathname === "/Jobs/Advertise" ||
                location.pathname === "/Jobs/Selection" ||
                location.pathname === "/Jobs/ResumeDetail" ) && (
                <div
                  style={
                    sidebar === true
                      ? { padding: "0 10px" }
                      : { padding: "0 10px" }
                  }
                  className={"subMenu"}
                >
                  <li className="nav-text" title="Advertise">
                    <NavLink
                      onClick={() => setTop(false)}
                      className={
                        location.pathname === "/Jobs/Advertise" && sidebar === false
                          ? "flexstartborder"
                          : sidebar === true &&
                            location.pathname === "/Jobs/Advertise"
                          ? "flexcenterborder"
                          : sidebar === true
                          ? "flexstart"
                          : "flexcenter"
                      }
                      to={"/Jobs/Advertise"}
                    >
                      {/* <i class="bi bi-card-heading"></i> */}
                      <ArticleIcon/>
                      {<span>Advertise</span>}
                    </NavLink>
                  </li>

                  <li className="nav-text" title="Selection">
                    <NavLink
                      onClick={() => setTop(false)}
                      className={
                        (location.pathname === "/Jobs/Selection" || location.pathname === "/Jobs/ResumeDetail") &&
                        sidebar === false
                          ? "flexstartborder"
                          : sidebar === true &&
                            (location.pathname === "/Jobs/Selection" || location.pathname === "/Jobs/ResumeDetail")
                          ? "flexcenterborder"
                          : sidebar === true
                          ? "flexstart"
                          : "flexcenter"
                      }
                      to={"/Jobs/Selection"}
                    >
                      <TaskIcon/>
                      {<span>Selection</span>}
                    </NavLink>
                  </li>

                  
                </div>
              )}

            <li className="nav-text" title="Profile">
              <Link
                onClick={() => setTop(false)}
                className={
                  location.pathname === "/CompanyProfile" && sidebar === false
                    ? "flexstartborder"
                    : sidebar === true && location.pathname === "/CompanyProfile"
                    ? "flexcenterborder"
                    : sidebar === true
                    ? "flexstart"
                    : "flexcenter"
                }
                to={"/CompanyProfile"}
              >
                {/* <i class="bi bi-person"></i> */}
                <PermIdentityIcon/>
                {<span>Profile</span>}
              </Link>
            </li>
            <li className="nav-text" title="Logout">
              <Link
                onClick={logout}
                className={
                  location.pathname === "/" && sidebar === false
                    ? "flexstartborder"
                    : sidebar === true && location.pathname === "/"
                    ? "flexcenterborder"
                    : sidebar === true
                    ? "flexstart"
                    : "flexcenter"
                }
                to={"/"}
              >
                <LogoutIcon/>
                {<span>Logout</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="main" onClick={closeSidebar}>
        <div className="navbarMain">
          <div className={top ? "navbar" : "navbar2"}>
            <div className="helll">
              {breadcrumbs.map(({ breadcrumb }) => (
                <div>
                  {breadcrumb === "Home" && <p>ok</p>}
                  <span>{breadcrumb} / &nbsp;</span>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <TextField className='anc1' id="outlined-basic" label="Search" variant="outlined" size='small' style={{width:'185px',height:'44px'}}/> */}
              {/* <PersonIcon className='anc' /> */}
              {/* <div className="circularportrait">
                <img src={user?.userInfo?.user?.userImg} />
              </div> */}
              <MenuIcon className='anc1' onClick={showSidebar} />
              <div title='Logout'>
              <LogoutIcon className="anc4" onClick={logout}/>
              </div>
            </div>
          </div>
        </div>

        <div className="hamza">{props.children}</div>
      </main>
    </div>
  );
};

export default Navbar2;

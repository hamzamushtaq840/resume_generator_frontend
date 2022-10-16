import { Link } from "react-router-dom";
import { SunIcon, MenuIcon, MoonIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import axios from "axios";
import Typed from "react-typed";

function Navbar() {
  const [me, setMe] = useState([]);

  const Token = JSON.parse(localStorage.getItem("Authorization"));

  // const token = localStorage.getItem("Authorization");

  const getMe = async () => {
    await axios
      .get("http://127.0.0.1:8000/auth/registration/", {
        headers: { Authorization: Token },
      })
      .then((response) => {
        setMe(response.data);
        console.log(response.config);
      });
  };
  useEffect(() => {
    getMe();
  }, []);


  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className=" mx-auto bg-main h-20 p-10 flex items-center justify-between w-full">
      {/* left */}
      <div>
        <h1 className="w-full text-md font-bold text-[#64c1ff]">
        <Typed
              className="text-[#64c1ff]  pl-1 text-3xl font-extrabold "
              strings={["RESUME ASSISTED"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
        </h1>
      </div>
      <div className="cursor-pointer md:hidden " onClick={() => setOpen(!open)}>
        <MenuIcon className="w-6 text-white " />
      </div>
      {/* right */}

      {/* desktop menu */}
      <div className=" items-center  space-x-10 text-white text-lg  hidden md:flex">
        <Link to="/">Home</Link>

        <div>
          <button
            className="flex rounded-md bg-[#048AE8] text-white  px-3  mr-[-0.5] hover:text-[#64c1ff]
            hadow transition-all duration-500 
            hover:bg-white py-2 font-bold text-black "
          >
            <Link to="/SignIn">SignIn</Link>
          </button>
        </div>
        <div>
        <button
            className="flex rounded-md bg-[#048AE8] text-white px-3  hover:text-[#64c1ff]
            hadow transition-all duration-500 
            hover:bg-white py-2 font-bold text-black "
          >
            <Link to="/SignUpMain">SignUp</Link>
          </button>
        </div>

        {/* dark mode toggle
        {theme === "dark" ? (
          <MoonIcon
            className="w-7 cursor-pointer "
            onClick={() => setTheme("light")}
          />
        ) : (
          <SunIcon
            className="w-7 cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        )} */}
      </div>

      {/* mobile menu */}
      <div
        className={` uppercase font-medium items-center bg-main space-y-2  flex md:hidden flex-col absolute left-0 top-20 w-100 h-80  pt-10
          shadow-lg ${open ? "flex" : "hidden"}
        `}
      >
        <Link className="bg-[#FEFBF3] d-flex justify-center h-20 items-center w-100 " to="/">Home</Link>
        <button
          className="bg-[#FEFBF3] d-flex justify-center h-20 items-center w-100 "
        >
          <Link to="/SignIn">SIGN IN</Link>
        </button>
        <button
          className="bg-[#FEFBF3] d-flex justify-center h-20 items-center w-100 "

        >
          <Link to="/SignUpMain">SIGN UP</Link>
        </button>
      </div>
    </div>
  );
}
export default Navbar;

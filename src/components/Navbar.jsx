import { Link } from "react-router-dom";
import { SunIcon, MenuIcon, MoonIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import axios from "axios";

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

  const logout = function () {
    localStorage.removeItem("Authorization");
  };

  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className=" mx-auto flex items-center justify-between w-full">
      {/* left */}
      <div>
        <h1 className="w-full text-3xl font-bold text-[#64c1ff]">
          Resume Assisted
        </h1>
      </div>
      <div className="cursor-pointer md:hidden " onClick={() => setOpen(!open)}>
        <MenuIcon className="w-6" />
      </div>
      {/* right */}

      {/* desktop menu */}
      <div className=" items-center space-x-10 hidden md:flex">
        <Link to="/">Home</Link>

        <div>
          <button
            className="flex rounded-md bg-[#64c1ff]   px-2  mr-[-0.5] hover:text-[#64c1ff]
            hadow transition-all duration-500 
            hover:bg-black py-1 font-bold text-white "
          >
            <Link to="/SignIn">SignIn</Link>
          </button>
        </div>
        <div>
          <button
            className="flex rounded-md bg-[#64c1ff]   px-2  hover:text-[#64c1ff]
            hadow transition-all duration-500 
            hover:bg-black py-1 font-bold text-white "
          >
            <Link to="/FrontPage">SignUp</Link>
          </button>
        </div>

        {/* dark mode toggle */}
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
        )}
      </div>

      {/* mobile menu */}
      <div
        className={` uppercase font-medium items-center space-y-12 flex md:hidden flex-col absolute left-0 top-20 w-screen h-screen bg-white pt-10
          shadow-lg ${open ? "flex" : "hidden"}
        `}
      >
        <Link to="/">Home</Link>
        <button
          className="flex rounded-md bg-[#64c1ff]   px-2  hover:text-[#64c1ff]
          hadow transition-all duration-500 
          hover:bg-black py-1 font-bold text-white"
        >
          <Link to="/SignIn">SignIn</Link>
        </button>
        <button
          className="flex rounded-md bg-[#64c1ff]   px-2  hover:text-[#64c1ff]
          hadow transition-all duration-500 
          hover:bg-black py-1 font-bold text-white"
        >
          <Link to="/FrontPage">SignUp</Link>
        </button>
      </div>
    </div>
  );
}
export default Navbar;

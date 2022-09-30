import { Link } from "react-router-dom";
import {
  SunIcon,
  MenuIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { useTheme } from "next-themes";
function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <div className=" mx-auto flex items-center justify-between w-full">
      {/* left */}
      <div>
        <h1 className="w-full text-3xl font-bold text-[#64c1ff]">Resume Assisted</h1>
      </div>
      <div className="cursor-pointer md:hidden " onClick={() => setOpen(!open)}>
        <MenuIcon className="w-6" />
      </div>
      {/* right */}

      {/* desktop menu */}
      <div className=" items-center space-x-10 hidden md:flex">
        <Link to="/">Home</Link>
        <Link to="/Resume">Resume </Link>
        <Link to="/Companies">Companies</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <div>
        <button   className="flex rounded-md bg-[#64c1ff]   px-2 text-Black hover:text-blue-500 hover:bg-white py-1 shadow transition-all 
        duration-500">
          <Link to="/SignIn">Sign in</Link>
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
        className={` uppercase font-medium items-center space-y-12 flex md:hidden flex-col absolute left-0 top-20 h-screen w-screen bg-white pt-20
          shadow-lg ${open ? "flex" : "hidden"}
        `}
      >
        <Link to="/">Home</Link>
        <Link to="/Resume">Resume</Link>
        <Link to="/Companies">Companies</Link>
        <Link to="/AboutUs">AboutUs</Link>
        
      </div>
    </div>
  );
}

export default Navbar;

import { Link, NavLink } from "react-router";
import appLogo from "../../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "m-2 rounded-sm p-1 px-3 text-[#6e38e6] font-bold border border-[#6e38e6]"
            : "m-2 rounded-sm p-1 px-3 text-black border-none"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/apps"
        className={({ isActive }) =>
          isActive
            ? "m-2 rounded-sm p-1 px-2 text-[#6e38e6] font-bold border border-[#6e38e6]"
            : "m-2 rounded-sm p-1 px-2 text-black border-none"
        }
      >
        Apps
      </NavLink>
      <NavLink
        to="/installation"
        className={({ isActive }) =>
          isActive
            ? "m-2 rounded-sm p-1 px-2 text-[#6e38e6] font-bold border border-[#6e38e6]"
            : "m-2 rounded-sm p-1 px-2 text-black border-none"
        }
      >
        Installation
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-white px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-7 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <div className="flex gap-2 items-center md:mb-2">
              <img className="w-5 md:w-10" src={appLogo} alt="App Logo" />
              <p className="gradient-title font-bold text-lg md:text-2xl">
                HERO.IO
              </p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            target="blank"
            href="https://github.com/ahmedTonoy/"
            className="btn text-white bg-linear-to-br from-[#6e38e6] to-[#985cf0]"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

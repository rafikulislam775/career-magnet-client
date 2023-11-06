import { NavLink } from "react-router-dom";


const Navbar = () => {
  const menus = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-red-900 text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allJobs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-cyan-500" : ""
          }
        >
          All Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/appliedJobs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-cyan-500" : ""
          }
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-cyan-500" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
      {/* <li>
      {" "}
      <NavLink to="/login">Login</NavLink>
    </li> */}
      <li>
        {" "}
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "from-pink-500 to-yellow-500"
              : ""
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menus}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img  className="w-16" src="https://i.ibb.co/TR9kCVS/logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menus}</ul>
        </div>
        <div className="navbar-end">
          <div className="group relative">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img
                  src="https://i.ibb.co/Wx7Q6Lf/images.png"
                  alt="User Avatar"
                />
              </div>
            </div>

            <div className="invisible group-hover:visible absolute bg-white text-black p-2 rounded shadow-md w-40  -left-28">
              name@flowbite.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

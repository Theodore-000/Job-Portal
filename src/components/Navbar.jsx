import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = ({ user, handleLogin, handleLogout }) => {
  const linkClass = ({ isActive }) => ` text-md font-semibold font-[poppins]
    ${isActive
      ? "text-gray-700 bg-white hover:bg-gray-100 rounded-md px-10 py-2"
      : "text-white hover:bg-gray-700 hover:text-white rounded-md px-10 py-2"}`;

  return (
    <nav className="bg-gray-900 border-b border-gray-800 shadow-md">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className={"flex flex-shrink-0 items-center mr-4"} to="/">
              <img className="h-10 w-auto" src={Logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Connect
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-4">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4 ml-10">
                  <span className="text-white font-bold">{user.displayName}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleLogin}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 ml-8"
                >
                  Get Started
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainLayout = ({ user, handleLogin, handleLogout }) => {
  return (
    <>
      <Navbar user={user} handleLogin={handleLogin} handleLogout={handleLogout}/>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;

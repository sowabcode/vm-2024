import PropTypes from "prop-types";

import { Outlet } from "react-router-dom";

import Sidebar from "./layouts/Sidebar";
import Topbar from "./layouts/Topbar";
import { useEffect, useState } from "react";
import Login from "../pages/Login";

const PrivateRoute2 = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(getUserInfo);
  }, []);

  return userInfo &&
    userInfo.token !== "" &&
    userInfo.users.role === "Perceptrice BE" ? (
    <>
      <Sidebar
        showSidebar={showSidebar}
        setShowSidebar={() => setShowSidebar(!showSidebar)}
      />
      <Topbar
        showSidebar={showSidebar}
        setShowSidebar={() => setShowSidebar(!showSidebar)}
      />

      {children}

      <Outlet />
    </>
  ) : (
    <Login />
  );
};

PrivateRoute2.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute2;

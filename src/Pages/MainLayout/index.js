import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import HeaderPage from "../HeaderPage";
// import FooterPage from "../FooterPage";
import "./MainLayout.scss";
import ROUTES_NAVIGATION from "../../routes/routes";
import SidebarDrawer from "../SidebarDrawer";
const MainLayout = () => {
  const { isDashboardDrawerOpen } = useContext(GlobalContext);
  // const { isUserAuth, setIsUserAuth } = useContext(GlobalContext);
  // const isLoggedIn = localStorage.getItem("isAuthenticate") === "true";

  // useEffect(() => {
  //   if (localStorage.getItem("isAuthenticate") === "true") {
  //     setIsUserAuth(true || isLoggedIn);
  //   } else {
  //     setIsUserAuth(false || isLoggedIn);
  //   }
  // }, [isLoggedIn, setIsUserAuth]);

  // return isUserAuth ? (
  //   <>
  //     <HeaderPage />
  //     <div className="container-fluid outlet-main">
  //       <Outlet />
  //     </div>
  //     {/* <FooterPage /> */}
  //   </>
  // ) : (
  //   <Navigate to={ROUTES_NAVIGATION.} />
  // );

  return (
    <>
      <HeaderPage />
      <div className="d-flex vehicle-insurance-main-layout-container">
        <div className="vehicle-insurance-main-layout-sidebar">
          <SidebarDrawer />
        </div>
        <div
          className={`container-fluid  vehicle-insurance-main-layout-container-page ${
            isDashboardDrawerOpen ? "open-drawer" : "closed-drawer"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;

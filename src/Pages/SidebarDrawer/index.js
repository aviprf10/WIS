import React, { useCallback, useContext, useEffect, useState } from "react";
import "./SidebarDrawer.scss";
// import { DrawerNavigation } from "./DefaultData";
// import SidebarCollapse from "./SidebarCollapse";
import SidebarCollapse from "./SidebarCollaps";
import { useLocation, useNavigate } from "react-router-dom";
import { DrawerNavigation } from "./Default";
import GlobalContext from "../../context/GlobalContext";

const SidebarDrawer = () => {
  const [activeNav, setActiveNav] = useState();
  const [drawerListing, setDrawerListing] = useState([]);
  const { isDashboardDrawerOpen, setIsDashboardDrawerOpen, hasUserPermission } =
    useContext(GlobalContext);
  // console.log("hasUserPermission<><>", hasUserPermission);
  const navigate = useNavigate();
  let location = useLocation();
  const onClickNavigateHandler = (nav) => {
    setActiveNav(nav);
    navigate(nav?.path);
  };

  const filterNavigation = useCallback((navigation, permissions) => {
    return navigation?.reduce((filtered, item) => {
      if (item.key && !permissions[item?.key]) {
        return filtered;
      }
      const filteredItem = { ...item };
      if (filteredItem?.child && filteredItem?.child?.length > 0) {
        filteredItem.child = filterNavigation(filteredItem?.child, permissions);
      }
      filtered.push(filteredItem);
      return filtered;
    }, []);
  }, []);

  useEffect(() => {
    if (location) {
      const findFirstPrivateCarTaskList = (items, path) => {
        for (const item of items) {
          if (item?.path === path) {
            return item;
          }
          if (item?.child) {
            const found = findFirstPrivateCarTaskList(item.child, path);
            if (found) {
              return found;
            }
          }
        }
        return null;
      };
      const firstPrivateCarTaskList = findFirstPrivateCarTaskList(
        DrawerNavigation,
        location?.pathname
      );
      setActiveNav(firstPrivateCarTaskList);
    }
  }, [location]);

  useEffect(() => {
    const filteredDrawerNavigation = filterNavigation(
      DrawerNavigation,
      hasUserPermission
    );
    setDrawerListing(filteredDrawerNavigation);
    // setDrawerListing(hasUserPermission);
  }, [filterNavigation, hasUserPermission]);

  return (
    <>
      <div
        className={`d-flex flex-column sidebar-container ${
          isDashboardDrawerOpen ? "sidebar-drawer-collapsed" : ""
        }`}
      >
        <ul className="nav nav-pills flex-column mb-auto bg-white ">
          <li className="nav-item">
            <div
              onClick={() => {
                setIsDashboardDrawerOpen(!isDashboardDrawerOpen);
              }}
              className={`nav-link text-dark active-nav d-flex justify-content-end`}
              aria-current="page"
            >
              <span className="ms-2 text">
                <i
                  className={`bi ${
                    isDashboardDrawerOpen ? "bi-arrow-right" : "bi-arrow-left"
                  }`}
                  //  className={`bi bi-grid-3x3-gap ${value?.sidebarProps?.icon}`}
                />
              </span>
            </div>
            <hr />
          </li>
          {DrawerNavigation?.map((value, index) => {
            return value?.child?.length > 0 ? (
              <SidebarCollapse
                key={index}
                parentValue={value}
                activeNav={activeNav}
                onClick={(nav) => {
                  onClickNavigateHandler(nav);
                }}
                setIsDrawerCollapsed={setIsDashboardDrawerOpen}
              />
            ) : (
              <li key={index} className="nav-item">
                <hr />
                <div
                  onClick={() => {
                    onClickNavigateHandler(value);
                    // setActiveNav(value);
                  }}
                  className={`nav-link text-dark  ${
                    activeNav?.id === value?.id ? "active-nav" : ""
                  }`}
                  aria-current="page"
                >
                  {/* {value?.sidebarProps?.icons && ( */}
                  {/* <Icon
                    className="mdi-icons"
                    path={value?.sidebarProps?.icons}
                    // title="User Profile"
                    size={0.8}
                  /> */}
                  {/* )} */}
                  {/* <i
                    className={`bi ${value?.sidebarProps?.icon}`}
                    // className={`bi bi-grid-3x3-gap ${value?.sidebarProps?.icon}`}
                  /> */}
                  <span className="ms-2 text">
                    {value?.sidebarProps?.displayText}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
    // <>
    //   <div className="d-flex flex-column flex-shrink-0 p-3 sidebar-container">
    //     <ul className="nav nav-pills flex-column mb-auto bg-white ">
    //       {DrawerNavigation?.map((value, index) => {
    //         return value?.child?.length > 0 ? (
    //           <SidebarCollapse
    //             key={index}
    //             parentValue={value}
    //             activeNav={activeNav}
    //             onClick={(nav) => {
    //               onClickNavigateHandler(nav);
    //               // setActiveNav(nav);
    //             }}
    //           />
    //         ) : (
    //           <li key={index} className="nav-item">
    //             <hr />
    //             <div
    //               onClick={() => {
    //                 onClickNavigateHandler(value);
    //                 // setActiveNav(value);
    //               }}
    //               className={`nav-link text-dark ${
    //                 activeNav?.id === value?.id ? "active-nav" : ""
    //               }`}
    //               aria-current="page"
    //             >
    //               <i
    //                 className={`bi ${value?.sidebarProps?.icon}`}
    //                 // className={`bi bi-grid-3x3-gap ${value?.sidebarProps?.icon}`}
    //               />
    //               <span className="ms-2 text">
    //                 {value?.sidebarProps?.displayText}
    //               </span>
    //             </div>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </>
  );
};

export default SidebarDrawer;

import React, { useState } from "react";
import "./SidebarDrawer.scss";
import Icon from "@mdi/react";
const SidebarCollapse = (props) => {
  const { parentValue, activeNav, onClick = () => {} } = props;
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div id="accordion">
      <li className="nav-item">
        <div
          onClick={() => {
            setOpenMenu(!openMenu);
            // setActiveNav(parentValue);
          }}
          // className={`nav-link text-dark ${
          //   activeNav?.id === parentValue?.id ? "active-nav" : ""
          // }`}
          className={`nav-link d-flex text-dark ${
            activeNav?.parent === parentValue?.parent ? "active-nav" : ""
          }`}
          aria-current="page"
        >
          <div className="flex-grow-1 ">
            {/* <i className="bi bi-grid-3x3-gap"></i> */}
            <Icon
              className="mdi-icons"
              path={parentValue?.sidebarProps?.icons}
              // title="User Profile"
              size={0.8}
            />
            {/* <i
              className={`bi ${parentValue?.sidebarProps?.icon}`}
              // className={`bi bi-grid-3x3-gap ${parentValue?.sidebarProps?.icon}`}
            /> */}
            <span className="ms-2 text">
              {parentValue?.sidebarProps?.displayText}
            </span>
          </div>
          <i
            className={`bi bi-chevron-${openMenu ? "up" : "down"} arrow-icons`}
          />
        </div>
        <hr />
      </li>
      <div id="collapseOne" className={`collapse ${openMenu ? "show" : ""}`}>
        {parentValue?.child?.map((data, index) => {
          return (
            <li key={index} className="nav-item ps-4">
              <div
                onClick={() => {
                  onClick(data);
                }}
                className={`nav-link text-dark  ${
                  activeNav?.id === data?.id ? "active-nav" : ""
                }`}
                aria-current="page"
              >
                {/* <i className="bi bi-grid-3x3-gap"></i> */}
                <Icon
                  className="mdi-icons"
                  path={data?.sidebarProps?.icons}
                  // title="User Profile"
                  size={0.8}
                />
                {/* <i
                  className={`bi ${data?.sidebarProps?.icon}`}
                  // className={`bi bi-grid-3x3-gap ${value?.sidebarProps?.icon}`}
                /> */}
                <span className="ms-2 text">
                  {data?.sidebarProps?.displayText}
                </span>
              </div>
              {/* <hr /> */}
            </li>
          );
        })}
        <hr />
      </div>
    </div>
  );
};

export default SidebarCollapse;

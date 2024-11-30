import React, { useCallback, useContext, useRef, useState } from "react";
import quantique from "../../assets/img/photos/quantique.svg";
import profilephoto from "../../assets/img/photos/profilephoto.png";
import "./Header.scss";
// import CountdownTimer from "./CountdownTimer";
import { useNavigate } from "react-router-dom";

import { Dropdown, DropdownButton } from "react-bootstrap";
import ROUTES_NAVIGATION from "../../routes/routes";
// import { Dropdown, DropdownButton } from "react-bootstrap";
// import GlobalContext from "../../context/GlobalContext";
// import Cookies from "universal-cookie";
// import NotificationsDropdown from "./NotificationsDropdown";
const PRODUCT_TYPES = [
  {
    id: 1,
    label: "Two Wheeler Insurance",
    value: "Two Wheeler Insurance",
  },
  {
    id: 2,
    label: "Pvt. Car Insurance",
    value: "Pvt. Car Insurance",
  },
  {
    id: 3,
    label: "Health Insurance",
    value: "Health Insurance",
  },
];

const HeaderPage = () => {
  // const { personName } = useContext(GlobalContext);
  const [selectedProduct, setSelectedProduct] = useState("Pvt. Car Insurance");
  const handleSelect = (eventKey) => {
    setSelectedProduct(eventKey);
  };
  // const handleSelectChange = (event) => {
  //   const selectedValue = event.target.value;
  //   if (selectedValue === "settings") {
  //     navigate(ROUTES_NAVIGATION.VEHICLE_INSURENCE_SETTINGS);
  //   }
  //   if (selectedValue === "logout") {
  //     console.log("Logout");
  //     localStorage.clear();
  //     navigate("/login");
  //   }
  // };
  const navigate = useNavigate();
  // const { hasAccess } = useContext(GlobalContext);

  // const handleSelectChange = useCallback(
  //   (event) => {
  //     const selectedValue = event.target.value;
  //     if (selectedValue === "settings") {
  //       navigate(ROUTES_NAVIGATION.VEHICLE_INSURENCE_SETTINGS);
  //     }
  //     if (selectedValue === "logout") {
  //       console.log("Logout---------", selectedValue);
  //       const cookies = new Cookies();
  //       cookies.remove("access_token");
  //       cookies.remove("refresh_token");
  //       // cookies.remove("auth_token");
  //       localStorage.clear();
  //       navigate("/login");
  //     }
  //   },
  //   [navigate]
  // );

  return (
    <nav className="header-page-container navbar navbar-expand-lg navbar-light bg-light bg-white">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
          style={{ marginRight: "30px", marginLeft: "30px" }}
        >
          <h>Logo</h>
          {/* <img
            src={quantique}
            alt="Logo"
            style={{
              width: "180px",
              height: "50px",
            }}
            className="d-inline-block align-text-top"
          /> */}
        </a>
        <div className=" me-3 font-8 d-sm-flex d-none">
          <DropdownButton
            id="dropdown-basic-button"
            className="product-selected-list-button"
            title={selectedProduct}
            // onSelect={handleSelect}
          >
            {PRODUCT_TYPES?.map((product) => {
              return (
                <Dropdown.Item
                  key={product?.id}
                  eventKey={product?.label}
                  active={selectedProduct === product?.label}
                >
                  {product?.label}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
        </div>
        <form className="d-flex" role="search">
          <input
            className="header-input search-input"
            type="text"
            // name="search"
            placeholder="Search.."
          />
        </form>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <ul className="navbar-nav ms-auto d-flex "> */}
            <li className="nav-item">{/* <NotificationsDropdown /> */}</li>
            <li className="nav-item">
              {/* <a
                className="nav-link"
                href={ROUTES_NAVIGATION.VEHICLE_INSURENCE_CHAT}
              > */}
              <div
                className="nav-link"
                onClick={() =>
                  navigate(ROUTES_NAVIGATION.VEHICLE_INSURENCE_CHAT)
                }
              >
                <i class="bi bi-chat-left icon-background"></i>
              </div>
              {/* </a> */}
            </li>
            {/* </ul> */}
            <div className="d-flex align-items-center">
              {/* <select
                className="form-select dropdown-lang"
                aria-label="Language select"
              >
                <option value="ENG">ENG</option>
                <option value="SPA">SPA</option>
                <option value="FRE">FRE</option>
              </select> */}
              <div className="vertical-line"></div>
              {/* {hasAccess("HAS_PROFILE_DETAILS") && (
                <div className="d-flex me-2">
                  <img
                    src={profilephoto}
                    alt="User"
                    className="rounded-circle"
                  />
                </div>
              )} */}
              <select
                // onChange={handleSelectChange}
                className="form-select dropdown-Profile "
                aria-label="Language select"
              >
                <button
                  className="btn dropdown-toggle d-flex align-items-center"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                {/* <option value="erik brown">{personName}</option> */}
                <option value="settings">
                  <div className="dropdown-item">Settings</div>
                </option>
                <option value="logout">
                  <div className="dropdown-item">Logout</div>
                </option>
              </select>
              <div className="vertical-line"></div>
              <div className="d-flex align-items-center idle-main">
                <span className="idle">Idle</span>
                {/* <CountdownTimer /> */}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;

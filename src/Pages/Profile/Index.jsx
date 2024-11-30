import React from "react";
import { Carousel, Col, Nav, Row } from "react-bootstrap";
import "./login.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import ROUTES_NAVIGATION from "../../routes/routes";

function ProfilePage() {
  const handleSubmit = () => {
    Navigator(ROUTES_NAVIGATION.City);
  };
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-6 d-flex align-items-center justify-content-center right-side">
          <div className="text-center" style={{ margin: "20px" }}>
            <div className="right-side-container">
              {/* <img
                src={rightimg}
                alt="Car Crash Illustration"
                className="img mb-4"
              /> */}
            </div>
          </div>
        </div>
        <div
          className="col-md-6 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "white" }}
        >
          <div className="login-box p-4">
            {/* <div className="text-center mb-5">
              <img src={quantique} alt="Quantique Logo" className="img-fluid" />
            </div> */}
            <h4 className="mb-4 login">Login Here</h4>
            <p className="login-text">
              Please login by entering your Id and Password
            </p>
            <form>
              <div className="form-group mb-4">
                <label
                  className={`select-form-label ${"required"}`}
                  htmlFor="username"
                >
                  Email ID <span className="text-danger">*</span>
                </label>
                <input
                  required
                  // type="text"
                  className="form-control mt-2"
                  id="username"
                  placeholder="Enter Email ID"
                  // onChange={handleUsernameChange}
                />
                {/* {errors.emailError && (
                  <div className="error-message">{errors.emailError}</div>
                )} */}
              </div>
              <div className="form-group mb-4" style={{ position: "relative" }}>
                <label
                  className={`select-form-label ${"required"}`}
                  htmlFor="password"
                >
                  Password <span className="text-danger">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    // type={showPassword ? "text" : "password"}
                    className="form-control mt-2"
                    id="password"
                    placeholder="Enter Password"
                    // value={password}
                    // onChange={handlePasswordChange}
                  />
                  <span
                    className="password-toggle-icon"
                    // onClick={togglePasswordVisibility}
                  >
                    {/* {showPassword ? <BsEyeSlash /> : <BsEye />} */}
                  </span>
                </div>
                {/* {errors.passwordError && (
                  <div className="error-message">{errors.passwordError}</div>
                )} */}
              </div>
              <div
                className="form-group form-check mt-5 mb-4 custom-checkbox"
                style={{ accentColor: "#4A4FC4", position: "relative" }}
              >
                <input
                  type="checkbox"
                  className="form-check-input mt-1"
                  // checked={isChecked}
                  // onChange={handleCheckboxChange}
                  id="terms"
                  style={{
                    fontSize: "15px",
                  }}
                />
                <label className="form-check-label label-check" htmlFor="terms">
                  I agree to
                  <span
                    className="text-primary ms-2"
                    // onClick={() => {
                    //   navigate(ROUTES_NAVIGATION.TERMS_AND_CONDITIONS);
                    // }}
                  >
                    terms & conditions
                  </span>
                </label>
                {/* {errors.checkboxError && (
                  <div
                    style={{ top: "22px", left: "0" }}
                    className="error-message"
                  >
                    {errors.checkboxError}
                  </div>
                )} */}
              </div>
            </form>
            <button
              // htmlType="submit"
              className="btn btn-block login-button"
              style={{
                backgroundColor: "#4285F4",
                color: "white",
                borderRadius: "10px",
                width: "100%",
              }}
              onClick={() => handleSubmit()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

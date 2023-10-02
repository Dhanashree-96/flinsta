import React, { useRef } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import logo from "../../../assets/images/1234 1.png";

import ReactPasswordToggleIcon from "react-password-toggle-icon";
import beautywomen from "../../../assets/images/business_login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Create_account() {
  // show hide password
  const newPasswordRef = useRef(false);
  //toggle password hide show
  const showIcon = () => <FaEyeSlash className="" />;
  const hideIcon = () => <FaEye className="" />;

  // back arrow
  const navigate = useNavigate();

  return (
    <body className="loginBOdyDiv  bg-light p-0">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol className="forbusiness-page col-sm-6 rounded py-0">
            <BiArrowBack
              className="backLoginForm fs-2 mt-4 ms-3 rounded  text-dark d-flex justify-content-start align-item-start"
              onClick={() => navigate(-1)}
            />
            <div className="d-flex flex-row  justify-content-md-center ">
              <div className="d-flex  w-75  p-5 py-1 pb-0 d-flex  flex-column  justify-content-center align-item-center">
                <h2 className="loginformtext fs-4 fw-bold text-center">
                  Create a business account
                </h2>
                <p className="text-center mx-1 pb-4">
                  You're almost there!create your new account abc123@flinst.com
                  by completing this details.
                </p>

                <div className=" px-4 pb-0 d-flex  flex-column  justify-content-center align-item-center">
                  <div className="businesshr pb-0 d-flex  flex-column  justify-content-center ">
                    <MDBInput
                      wrapperClass="px-5 mb-4 py-1"
                      label="First name"
                      id="businessacoount"
                      type="text"
                    />
                    <MDBInput
                      wrapperClass="px-5 mb-4 py-1"
                      label="Last name"
                      id="businessacoount"
                      type="text"
                    />
                    <MDBInput
                      wrapperClass="mb-4  py-1 d-flex align-item-center "
                      label="Password"
                      id="businessacoount"
                      type="password"
                      ref={newPasswordRef}
                    >
                      <ReactPasswordToggleIcon
                        inputRef={newPasswordRef}
                        hideIcon={hideIcon}
                        showIcon={showIcon}
                      />
                    </MDBInput>

                    <label>Mobile Number</label>
                    <div className="Phone_box d-flex flex-row justify-content-md-center mb-4 ">
                      <select
                        className="form-select ps-1"
                        aria-label="Default select example"
                      >
                        <option selected="+1">+91 </option>
                        <option value="+44">+44</option>
                        <option value="+91">+91 </option>
                      </select>

                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter your mobile number"
                      />
                    </div>

                    <MDBInput
                      wrapperClass="px-5 mb-4 py-1"
                      label="Country"
                      id="businessacoount"
                      type="text"
                    />

                    <MDBCheckbox
                      className="flexCheck"
                      value=""
                      id="flexCheckbox"
                      label="I agree to the Policy, terms of Service and Terms of Business"
                    />

                    <MDBBtn className="my-4 ">
                      <Link
                        to="/mobileNumber"
                        className="Continue text-center "
                      >
                        <text className="continue pt-0 mt-0 text-dark ">
                          Create account
                        </text>
                      </Link>
                    </MDBBtn>
                  </div>
                </div>
              </div>
            </div>
            <div className="loginformpic  ">
              <img src={logo} className="loginpic mt-1 mb-0" alt="logo" />
            </div>
          </MDBCol>

          <MDBCol
            sm="6"
            className="loginImgDiv h-100 w-50 d-none d-sm-block ps-0 pe-0"
          >
            <img src={beautywomen} alt="Login image" className="loginimage" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </body>
  );
}

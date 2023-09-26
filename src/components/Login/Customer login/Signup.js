import React, { useRef } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import ReactPasswordToggleIcon from "react-password-toggle-icon";
import logo from "../../../assets/images/1234 1.png";
import beautywomen from "../../../assets/images/0_GettyImages-1159483894.webp";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineSupport } from "react-icons/hi";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";


export default function Signup() {
    // show hide password
    const newPasswordRef = useRef(false);
    //toggle password hide show
    const showIcon = () => <FaEyeSlash className="" />;
    const hideIcon = () => <FaEye className="" />;

  // back arrow
  const navigate = useNavigate();

  return (
    <body class="loginBOdyDiv  bg-light p-0">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol className="forbusiness-page col-sm-6 rounded py-0">
            <BiArrowBack
              className="backLoginForm fs-2 mt-4 ms-3 rounded  text-dark d-flex justify-content-start align-item-start"
              onClick={() => navigate(-1)}
            />
            <div className="d-flex flex-row  justify-content-md-center ">
              <div className="d-flex  w-75  p-5 py-1 pb-0 d-flex  flex-column  justify-content-center align-item-center">
                <h2 className="loginformtext fs-3 fw-bold text-center">
                  Flinsta for customers
                </h2>
                <p className="text-center pb-3">
                  Create an account or log in to manage your Fresha business.
                </p>

                <MDBInput
                  wrapperClass="px-5 mb-4"
                  label="Name"
                  id="signupform2"
                  type="name"
                />
                <MDBInput
                  wrapperClass=" mb-4 "
                  label="Email address"
                  id="form1"
                  type="email"
                />
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Gender"
                      id="form2"
                      type="gender"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Age"
                      id="form2"
                      type="age"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Addresss"
                  id="form2"
                  type="address"
                />

                <MDBInput
                  wrapperClass="mb-4 d-flex align-item-center "
                  label="Password"
                  id="form2"
                  type="password"
                  ref={newPasswordRef}

                >
              <ReactPasswordToggleIcon
                      inputRef={newPasswordRef}
                      hideIcon={hideIcon}
                      showIcon={showIcon}
                    />
                </MDBInput>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Confirm Password"
                  id="form2"
                  type=" confirm password"
                />
                <MDBBtn>
                  <Link to="" className="Login_Btm ">
                    <text className="log in text-white">Sign Up</text>
                  </Link>
                </MDBBtn>
                <div className="text-center">
                  <p className="my-2">
                    Already have an account?
                    <Link to="/login" className="Signupdiv">
                      <text className="signup">Login</text>
                    </Link>
                  </p>

                  <p className="hr-lines mb-4">OR </p>

                  <MDBCol className=" login-logo-margin col-sm-12 mb-4">
                    <Link to="" className="loginfacebook ">
                      <text className="facebook_log  py-2 d-flex  align-items-center">
                        {" "}
                        <BsFacebook className=" fs-3 mx-5 d-flex align-items-center" />{" "}
                        <span className=" ms-4 text-dark d-flex justify-content-center align-items-center">
                          continue with facebook
                        </span>
                      </text>
                    </Link>
                  </MDBCol>

                  <MDBCol className="login-logo-margin col-sm-12 mb-4">
                    <Link to="" className="logingoogle">
                      <text className="google_log py-2 d-flex  align-items-center ">
                        {" "}
                        <FcGoogle className="fs-3 mx-5 d-flex align-items-center" />
                        <span className="ms-4 text-dark d-flex justify-content-center align-items-center">
                          continue with google
                        </span>
                      </text>
                    </Link>
                  </MDBCol>
                  <MDBCol className="login-logo-margin col-sm-12 mb-3 pb-0">
                    <Link to="" className="logingoogle">
                      <text className="apple_log py-2 d-flex  align-items-center">
                        {" "}
                        <FaApple className="fs-3 mx-5 d-flex align-items-center text-dark" />
                        <span className="ms-4 text-dark d-flex justify-content-center align-items-center">
                          continue with Apple ID
                        </span>
                      </text>
                    </Link>
                  </MDBCol>

                  <div className="loginformpic pt-5 mt-0 mb-0">
                    <img src={logo} className="loginpic  mb-0" alt="logo" />
                  </div>
                  {/* bottom link list */}

                  <div className="listcontainer w-100 d-flex justify-content-center ">
                    <ul className="custom-list d-flex justify-content-center ">
                      <span className="GBDiv pt-1 pe-0 me-0">GB</span>
                      <Link>
                        <li className="ps-0 ms-0 pe-2 custom-list-item list-unstyled">
                          <text>English</text>
                        </li>
                      </Link>
                      <Link>
                        <li className=" pe-2 custom-list-item  ">
                          <text>
                            <HiOutlineSupport className="pt-0 pb-1" />
                            Support{" "}
                          </text>
                        </li>
                      </Link>
                      <Link>
                        <li className="pe-2 custom-list-item ">
                          <text>Privacy Policy</text>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>

          <MDBCol sm="6" className="d-none d-sm-block h-100 w-50 pe-0">
            <img src={beautywomen} alt="Login image" className="signupimage" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </body>
  );
}

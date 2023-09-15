import React from "react";
import "../../assets/css/Style.css";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import logo from "../../assets/images/1234 1.png";
import beautywomen from "../../assets/images/SliderCuts.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
import { AiFillEyeInvisible } from "react-icons/ai";

export default function LoginForm() {
  // back arrow
  const navigate = useNavigate();

  return (
    <body class="loginBOdyDiv bg-light p-0 m-0">
      <MDBContainer fluid className="loginBOdyDiv">
        <MDBRow >
          <MDBCol className="forbusiness-page col-sm-6 rounded py-0">
            <BiArrowBack
              className="backLoginForm fs-2 mt-4 ms-3 rounded  text-dark d-flex justify-content-start align-item-start"
              onClick={() => navigate(-1)}
            />
            <div className="d-flex flex-row  justify-content-md-center ">
              <div className="d-flex  w-75  p-5 py-1 pb-0 d-flex  flex-column  justify-content-center align-item-center">
                <h2 className="loginformtext fs-3 fw-bold text-center">
                  Flinsta for customer
                </h2>
                <p className="text-center">
                  Create an account or log in to book and manage your
                  appointments.
                </p>

                <div className=" px-4 pb-0 d-flex  flex-column  justify-content-center">
                  <MDBInput
                    wrapperClass="px-5 mb-4 py-1"
                    label="Email address"
                    id="form1"
                    type="email"
                  />
                  <MDBInput
                    wrapperClass="mb-4  py-1 d-flex align-item-center "
                    label="Password"
                    id="form2"
                    type="password"
                  >
                    {" "}
                    <AiFillEyeInvisible className="mt-2 me-3" />
                  </MDBInput>

                  <div className="d-flex justify-content-between  mb-4">
                    <MDBCheckbox
                      className="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Remember me"
                    />
                    <Link to="/forgetPage" className="Forgetmail ">
                      <text className="forgetpasss">Forgot password?</text>
                    </Link>
                  </div>

                  <MDBBtn className="mb-2">
                    <Link to="" className="Continue text-center ">
                      <text className="continue pt-0 mt-0 text-dark ">
                        Log In
                      </text>
                    </Link>
                  </MDBBtn>

                  <div className="businesshr text-center">
                    <p className="my-2 mb-2">
                      Not a member?
                      <Link to="/signUp" className="Signupdiv">
                        <text className="signup">Sign Up</text>
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

                    <MDBCol className="login-logo-margin col-sm-12 mb-2">
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

                    <div className="loginformpic pt-5 ">
                      <img
                        src={logo}
                        className="loginpic mt-1 mb-0"
                        alt="logo"
                      />
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
            </div>
          </MDBCol>

          <MDBCol sm="6" className="loginImgDiv h-100 w-50 d-none d-sm-block  ps-0 pe-0">
            <img src={beautywomen} alt="Login image" className="loginimage" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </body>
  );
}

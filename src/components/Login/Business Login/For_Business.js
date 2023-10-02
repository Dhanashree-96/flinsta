import React from "react";
// import "../../assets/css/Style.css";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import logo from "../../../assets/images/1234 1.png";
import beautywomen from "../../../assets/images/business_login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineSupport } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

export default function For_Business() {
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
                  Flinsta for business
                </h2>
                <p className=" text-center">
                  Create an account or log in to manage your Flinsta business.
                </p>

                <div className=" px-4 pb-0 d-flex  flex-column  justify-content-center align-item-center">
                  <div className="businesshr pb-0 d-flex  flex-column  justify-content-center ">
                    <MDBInput
                      wrapperClass="px-5 mb-4 py-1"
                      label="Email address"
                      id="form1"
                      type="email"
                    />

                    <MDBBtn className="mb-4">
                      <Link to="/createBusinessAccount" className="Continue text-center ">
                        <text className="continue pt-0 mt-0 text-dark ">
                          Continue
                        </text>
                      </Link>
                    </MDBBtn>

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
                    <MDBCol className="login-logo-margin col-sm-12 mb-0 pb-0">
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
                    <div className="businesshr text-center">
                      <h4 className="pt-4 pb-0 mb-0 fs-5">
                        {" "}
                        Customer booking?
                      </h4>
                      <p className="pt-0 pb-0 mb-0 ">
                        If you are a customer wishing to book a service
                      </p>

                      <Link to="/login2" className="businesstocustomer  ">
                        <text className="businesstocus pt-0 mt-0 mb-0">
                          sign up as a customer
                        </text>
                      </Link>

                      <div className="loginformpic pt-5 ">
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
              </div>
            </div>
          </MDBCol>

          <MDBCol sm="6" className="loginImgDiv h-100 w-50 d-none d-sm-block ps-0 pe-0">
            <img src={beautywomen} alt="Login image" className="loginimage" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </body>
  );
}

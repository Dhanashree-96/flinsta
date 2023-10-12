import React, { useRef, useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import ReactPasswordToggleIcon from "react-password-toggle-icon";
import logo from "../../../assets/images/1234 1.png";
import beautywomen from "../../../assets/images/SliderCuts.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { HiOutlineSupport } from "react-icons/hi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import { loginSchema } from "../../../schemas";


const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  // form handling using formik
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,

      onSubmit: (values) => {
        // Perform any necessary form submission logic here
        console.log("Form submitted with values:", values);

        // Navigate to the next page here
        navigate("/flinsta"); // Replace "/nextPage" with your desired route
      },
    });

  // show hide password
  const newPasswordRef = useRef(false);
  //toggle password hide show
  const showIcon = () => <FaEyeSlash className="" />;
  const hideIcon = () => <FaEye className="" />;

  // back arrow
  const navigate = useNavigate();


  return (
    <body class="loginBOdyDiv bg-light p-0 m-0">
      <MDBContainer fluid className="loginBOdyDiv">
        <MDBRow>
          <MDBCol className="forbusiness-page col-sm-6 rounded py-0">
            <BiArrowBack
              className="backLoginForm    rounded  text-dark "
              onClick={() => navigate(-1)}
            />
            <div className="hundredwidth d-flex flex-row  justify-content-md-center ">
              <div className="paddingzero  d-flex  py-1 pb-0 d-flex  flex-column  justify-content-center align-item-center">
                <h2 className="loginformtext fs-3 fw-bold text-center">
                  Flinsta for customer
                </h2>
                <p className="para-login-text text-center">
                  Create an account or log in to book and manage your
                  appointments.
                </p>

                <form
                  className="hundredwidth px-4 pb-0 d-flex  flex-column  justify-content-center"
                  onSubmit={handleSubmit}
                >
                  <MDBInput
                    wrapperClass="inputwrapdiv  py-1"
                    label="Email address"
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? <p className="errormsg">{errors.email}</p> : null}

                  <MDBInput
                    wrapperClass="mt-4  py-1 d-flex align-item-center "
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="off"
                    ref={newPasswordRef}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <ReactPasswordToggleIcon
                      inputRef={newPasswordRef}
                      hideIcon={hideIcon}
                      showIcon={showIcon}
                    />
                  </MDBInput>
                  {errors.password && touched.password ? (
                    <p className="errormsg">{errors.password}</p>
                  ) : null}

                  <div className="loginchechlabel d-flex justify-content-between  mt-4">
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

                  <MDBBtn className="mt-4 mb-2" type="submit">
                    <text className="continue pt-0 mt-0 text-dark ">
                      Log In
                    </text>
                  </MDBBtn>

                  <div className="businesshr text-center">
                    <p className="my-2 mb-2">
                      Not a member?
                      <Link to="/signUp" className="Signupdiv">
                        <text className="signup">Sign Up</text>
                      </Link>
                    </p>

                    <p className="hr-lines mb-4"><p className="orparahead">OR</p> </p>

                    <MDBCol className=" login-logo-margin col-sm-12 mb-4">
                      <Link to="" className="loginfacebook ">
                        <text className="facebook_log  py-2 d-flex  align-items-center">
                          {" "}
                          <BsFacebook className="loginmargindiv fs-3  d-flex align-items-center" />{" "}
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
                     <FcGoogle className="loginmargindiv fs-3  d-flex align-items-center" />
                          <span className="ms-4 text-dark d-flex justify-content-center align-items-center">
                            continue with google
                          </span> 
                      </text>
                      </Link> 
                     
                    
                      {/* <GoogleOAuthProvider clientId="<758512870222-7udpona4c9vv8pook80r1jn67p1fls0s.apps.googleusercontent.com>">
                        <GoogleLogin
                          onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                          }}
                          onError={() => {
                            console.log('Login Failed');
                          }}
                        />
                      </GoogleOAuthProvider> */}
                    </MDBCol>
                

                    <div className="loginformpic  ">
                      <img
                        src={logo}
                        className="loginpic mt-1 mb-0"
                        alt="logo"
                      />
                    </div>
                    {/* bottom link list */}

          <div className="listcontainer w-100 d-flex justify-content-center ">
            <ul className="custom-list d-flex justify-content-center ">
              {/* <span className="GBDiv pt-1 pe-0 me-0">GB</span> */}
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
                </form>
              </div>
            </div>
          </MDBCol>

          <MDBCol
            sm="6"
            className="loginImgDiv h-100 w-50 d-none d-sm-block  ps-0 pe-0"
          >
            <img src={beautywomen} alt="Login image" className="loginimage" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </body>
  );
}
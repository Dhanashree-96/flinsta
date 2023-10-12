import React, { useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ReactPasswordToggleIcon from "react-password-toggle-icon";
import { MDBContainer, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/1234 1.png";
import { BiArrowBack } from "react-icons/bi";

export default function ResetPassword() {

  //toggle password hide show
  const newPasswordRef = useRef(false);
  const confirmPasswordRef = useRef(false);
  const showIcon = () => <FaEyeSlash className="" />;
  const hideIcon = () => <FaEye className="" />;

  // back arrow
  const navigate = useNavigate();

  return (
    <body class="forgetpagemaindiv  d-flex justify-content-center align-items-center">
      <MDBContainer className="  rounded d-flex  justify-content-center align-item-center">
        <MDBCol className="hundredwidth  rounded d-flex  justify-content-center align-item-center">
          <BiArrowBack
            className="forget-backLoginForm fs-2 rounded  text-dark d-flex justify-content-start align-item-start"
            onClick={() => navigate(-1)}
          />
          <div className="forgrtwrapper   rounded  pt-4 pb-5">
            <div className="loginformpic float-left">
              <img src={logo} className="loginpic float-left" alt="logo" />
            </div>

            <h2 className="smallloginformtext fs-3 fw-bold text-center ">
              Reset Password
            </h2>
            <div className="resetpassclss d-flex flex-column justify-content-center align-item-center">
            <MDBInput
                wrapperClass="px-5 mb-4"
                label="Enter New Password"
                id="form1"
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
                wrapperClass="px-5 mb-4"
                label="Confirm Password"
                id="form1"
                type="password"
                ref={confirmPasswordRef}
              >
                <ReactPasswordToggleIcon
                  inputRef={confirmPasswordRef}
                  hideIcon={hideIcon}
                  showIcon={showIcon}
                />
              </MDBInput>
              <MDBBtn className="butttonmarginbottom">
                <Link to="/resetPassword" className="Forgetdiv">
                  <text className="forgetsubmit text-dark">Submit</text>
                </Link>
              </MDBBtn>
            </div>
          </div>
        </MDBCol>
      </MDBContainer>
    </body>
  );
}
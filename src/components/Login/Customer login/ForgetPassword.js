import React from "react";
import { MDBContainer, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/1234 1.png";
import { BiArrowBack } from "react-icons/bi";

export default function ForgetPassword() {
  // back arrow
  const navigate = useNavigate();

  return (
    <body class="forgetpagemaindiv bg-light  d-flex justify-content-center align-items-center">
      <MDBContainer className="  rounded d-flex  justify-content-center align-item-center">
        <MDBCol className="hundredwidth  rounded d-flex  justify-content-center align-item-center">
          <BiArrowBack
            className="forget-backLoginForm fs-2 rounded  text-dark d-flex justify-content-start align-item-start"
            onClick={() => navigate(-1)}
          />
          <div className="forgrtwrapper  bg-light rounded shadow pt-4 pb-5">
            <div className="loginformpic float-left">
              <img src={logo} className="loginpic float-left" alt="logo" />
            </div>

            <h2 className="smallloginformtext fs-3 fw-bold text-center ">
              Forget Password
            </h2>
            <div className="resetpassclss d-flex flex-column justify-content-center align-item-center">
              <MDBInput
                wrapperClass="px-5 mb-4"
                label="Email Verification Code"
                id="form1"
                type="password"
              />
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
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import beautywomen from "../../../assets/images/0_GettyImages-1159483894.webp";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function MobileNumber() {
    // back arrow
    const navigate = useNavigate();
    return (
        <body className="loginBOdyDiv bg-light p-0">
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol className="forbusiness-page col-sm-6 rounded py-0">
                        <BiArrowBack
                            className="backLoginForm fs-2 mt-4 ms-3 rounded  text-dark d-flex justify-content-start align-item-start"
                            onClick={() => navigate(-1)}
                        />
                        <div className="d-flex flex-row justify-content-md-center ">
                            <div className="businessmain-div d-flex  py-1 pb-0 d-flex  flex-column  justify-content-center align-item-center">
                                <h2 className="loginformtext fs-3 fw-bold text-center">
                                    Verify your mobile number
                                </h2>
                                <p className="para-login-text text-center pb-3">
                                    To protect your account, we'll send a text with a 4-digit code
                                    to the mobile number below.
                                </p>
                                <div className="businesssubdiv">
                                    <p>Mobile Number</p>
                                    <div className="Phone_box d-flex flex-row justify-content-md-center ">

                                        <select className="form-select ps-1" aria-label="Default select example">
                                            <option selected="+1">+90 </option>
                                            <option value="+44">+44</option>
                                            <option value="+91">+91 </option>
                                        </select>

                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    </div>
                                    <MDBBtn className=" bg-dark mt-4">
                                        <Link to="/businessMobileVerification" className="mobno my-3">
                                            <text className="mobilenumber text-light ">Send code</text>
                                        </Link>
                                    </MDBBtn>
                                </div>
                           
                        </div>
                    </MDBCol>

                    <MDBCol sm="6" className="d-none d-sm-block h-100 w-50 pe-0">
                        <img src={beautywomen} alt="Login image" className="businesimage" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </body>
    );
}
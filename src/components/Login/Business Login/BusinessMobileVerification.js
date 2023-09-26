import React from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from "mdb-react-ui-kit";
import beautywomen from "../../../assets/images/0_GettyImages-1159483894.webp";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";


export default function BusinessMobileVerification() {

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
                                    Enter the 4-digit code
                                </h2>
                                <p className="text-center pb-3">
                                    The 4-digit code has been sent to <text className="fw-bold fw-1">+91 9067935463</text>
                                </p>

                                <div class="codeboxes d-flex flex-row mt-1">
                                    <input type="number" className="form-control text-center" autofocus="" />
                                    <input type="number" className="form-control text-center" />
                                    <input type="number" className="form-control text-center" />
                                    <Link to="/businessName"><input type="number" className="form-control text-center" /></Link></div>
                                <div class=" d-flex flex-row justify-content-center mt-5"><span class="d-block mobile-text">Don't receive the code?</span>
                                    <Link to="" className="resend">
                                        <span class="font-weight-bold text-danger cursor">Resend</span>
                                    </Link>
                                </div>

                                {/* <div className="loginformpic pt-5 mt-0 mb-0">
                                    <img src={logo} className="loginpic  mb-0" alt="logo" />
                                </div> */}

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

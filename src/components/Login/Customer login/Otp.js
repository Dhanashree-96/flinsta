import React from 'react'
import { MDBContainer, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/1234 1.png";



export default function Otp() {
    return (
        <body class="Otpmaindiv bg-light  d-flex justify-content-center align-item-center">
            <MDBContainer className=" rounded d-flex  justify-content-center align-item-center">
                <MDBCol className="hundredwidth rounded d-flex  justify-content-center align-item-center">
                    <div className="forgrtwrapper  bg-light rounded shadow pt-4 pb-5">
                        <div className="loginformpic float-left">
                            <img src={logo} className="loginpic float-left" alt="logo" />
                        </div>

                        <h2 className='smallloginformtext fs-3 fw-bold text-center p-5'>OTP</h2>
                        <div className="resetpassclss d-flex flex-column justify-content-center align-item-center">
                            <MDBInput wrapperClass=' optsectiondiv px-5 mb-5' label='Enter One Time Password' id='form1' type='otp' />
                            <MDBBtn className="mb-5">
                                <Link to="/resetPassword" className="Forgetdiv">
                                    <text className="forgetsubmit text-dark">Submit</text>
                                </Link>
                            </MDBBtn>
                        </div>
                    </div>

                </MDBCol>
            </MDBContainer>
        </body >
    )
}
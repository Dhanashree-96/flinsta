import React from 'react'
import "../../assets/css/Style.css";
import { MDBContainer, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import pic from "../../assets/images/1234 1.png";



export default function Otp() {
  return (
    <body class="Otpmaindiv bg-light  d-flex justify-content-center align-item-center">
    <MDBContainer className="  rounded d-flex  justify-content-center align-item-center">
        <MDBCol className="col-sm-6  rounded d-flex  justify-content-center align-item-center">
            <div className=" bg-light rounded shadow  w-75 px-3 pt-4 pb-5">
                <div className="loginformpic float-left">
                    <img src={pic} className="loginpic float-left" alt="logo" />
                </div>

                <h2 className='loginformtext fs-3 fw-bold text-center p-5'>OTP</h2>
                <div className="px-5 d-flex flex-column justify-content-center align-item-center">
                    <MDBInput wrapperClass=' optsectiondiv px-5 mb-5' label='Enter One Time Password'  id='form1' type='otp' />
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

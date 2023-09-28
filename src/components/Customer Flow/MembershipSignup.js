import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";
import MembershipRightside from './MembershipRightside';
import { MDBCol } from "mdb-react-ui-kit";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

export default function MembershipSignup() {
  // back arrow
  const navigate = useNavigate();
  return (
    <>
      <div className="arrow stafArrow" onClick={() => navigate(-1)}>
        <BiArrowBack className="memberbiarrowicon " />
      </div>
      <div className='membership_wrapper'>
        <div className='membership_sections'>
          <div className='membership_Leftsection'>

            <div className='Member_Leftsection'>

              <div className="Page1_colorSection">

                <div className='membershipSelect_Service1'>
                  <h2>Sign up to continue</h2>
                </div>
                <div className='Membership-mainsignup'>
                  {/* <div className="Book_NowBtn"> */}
                  <Link to="/membershipSignupEmail" className="MemSignupBtn">
                    <div className="MemBtn">Sign up with email</div>
                  </Link>
                  {/* </div> */}

                  <MDBCol className=" login-logo-margin col-sm-12 mb-4 mt-4">
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
                  <div className='Membershiplogtext'>
                  <text className='text-grey'>Already have an account?</text>
                  <Link to="/membershipLogin" className="">
                    <div className="">Log in now</div> 
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <MembershipRightside />
        </div>
      </div>
    </>
  )
}

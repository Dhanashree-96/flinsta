import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MembershipRightside from "./MembershipRightside";
import {
  MDBInput,
  MDBCheckbox,

} from "mdb-react-ui-kit";
import { AiFillEyeInvisible } from "react-icons/ai";



export default function MembershipSignupEmail() {
  // back arrow
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    // Add a scroll event listener to the window
    const handleScroll = () => {
      // Check the scroll position to determine if the header should be visible
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Access the selected voucher data from the route location state
  const { state } = useLocation();
  const selectedVoucher = state ? state.voucher : null;

  return (
    <>
      <div className="arrow stafArrow" onClick={() => navigate(-1)}>
        <BiArrowBack className="scrollmemberbiarrowicon " />
      </div>
      <div className="membership_wrapper">
        <div className="membership_sections">
          <div className="membership_Leftsection">
            <div className="Member_Leftsection">
              <div className="Page1_colorSection">
                <div className="membershipSelect_Service">
                  <h2>Sign up to continue</h2>
                </div>
                <div className="Membership-Section">
                  <div className="Memb-signup">
                    <MDBInput
                      wrapperClass="py-1  mb-4"
                      label="First Name"
                      id="signupform2"
                      type="name"
                    />
                    <MDBInput
                      wrapperClass="py-1 mb-4 "
                      label="Last Name"
                      id="form1"
                      type="text"
                    />
                    <div className="Phone_box d-flex flex-row justify-content-md-center mb-4">

                      <select className="form-select ps-1" aria-label="Default select example">
                        <option selected="+1">+90 </option>
                        <option value="+44">+44</option>
                        <option value="+91">+91 </option>
                      </select>

                      <input
                        type="number"
                        className="form-control numberout"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <MDBInput
                      wrapperClass=" mb-4 py-1"
                      label="Email Address"
                      id="form1"
                      type="email"
                    />
                    <MDBInput
                      wrapperClass="mb-4 d-flex align-item-center py-1"
                      label="Create Password"
                      id="form2"
                      type=" password"
                    >
                      {" "}
                      <AiFillEyeInvisible className="mt-2 me-3" />
                    </MDBInput>
                    <div className="mt-4 d-flex">
                      <MDBCheckbox
                        className="flexCheck "
                        value=""
                        id="flexCheckDefault"

                      />
                      <label>I agree to the <Link to=" " className="linkuderline ">Privacy Policy</Link>,
                        <Link to=" " className="linkuderline ">Terms of Use</Link> and <Link to=" " className="linkuderline ">Terms of Service</Link></label>
                    </div>
                    <div className="mt-4 d-flex mb-4">
                      <MDBCheckbox
                        className="flexCheck "
                        value=""
                        id="flexCheckDefault"

                      />
                      <label>I agree to receive marketing notifications with offers and news</label>
                    </div>
                    <Link to="" className="MemSignupBtn">
                      <div className="MemBtn bg-primary">Sign up </div>
                    </Link>

                    <div className='Membershiplogtext mt-4 mb-0'>
                      <text className='text-grey'>Already have an account?</text>
                      <Link to="/membershipSignupEmail" className="linkuderline">
                        <div className="">Sign in now</div>
                      </Link>
                    </div>
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
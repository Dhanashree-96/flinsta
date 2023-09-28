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


export default function MembershipLogin() {

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
                      wrapperClass=" mb-4 py-1"
                      label="Email Address"
                      id="form1"
                      type="email"
                    />
                    <MDBInput
                      wrapperClass="mb-3 d-flex align-item-center py-1"
                      label="Password"
                      id="form2"
                      type=" password"
                    >
                      {" "}
                      <AiFillEyeInvisible className="mt-2 me-3" />
                    </MDBInput>
                    <div className="mb-4">

                      <Link to="" className="linkuderline">
                        <div className="">Forget Password?</div>
                      </Link>
                    </div>
                    <Link to="" className="MemSignupBtn ">
                      <div className="MemBtn bg-primary">Sign up </div>
                    </Link>
                    <div className='Membershiplogtext mt-4 mb-0'>
                      <text className='text-grey'>Don't have a booker account?</text>
                      <Link to="" className="linkuderline">
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
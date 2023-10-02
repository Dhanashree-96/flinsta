import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import VoucherRightside from "./VoucherRightside";
import { MDBInput, MDBRow, MDBCol, MDBTextArea } from "mdb-react-ui-kit";

export default function Emailasgiftvoucher() {
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
            {" "}
            <div className="arrow stafArrow" onClick={() => navigate(-1)}>
                <BiArrowBack className="scrollmemberbiarrowicon " />
            </div>
            <div className="membership_wrapper">
                <div className="membership_sections">
                    <div className="membership_Leftsection">
                        <div className="Member_Leftsection">
                            <div className="Page1_colorSection">
                                <div className="membershipSelect_Service">
                                    <h2>Choose a recipient</h2>
                                </div>
                                <div className="Membership-Section">
                                    <div className="voucherhmain-heading">
                                        <h4>Recipient's info</h4>

                                        <MDBRow className="mt-5">
                                            <MDBCol>
                                                <MDBInput
                                                    wrapperClass="py-1  mb-4"
                                                    label="First Name"
                                                    id="signupform2"
                                                    type="name"
                                                />
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBInput
                                                    wrapperClass="py-1 mb-4 "
                                                    label="Last Name"
                                                    id="form1"
                                                    type="text"
                                                />
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBInput
                                            wrapperClass="py-1 mt-2 "
                                            label="Email"
                                            id="form1"
                                            type="text"
                                        />
                                        <p className="text-primary mb-4">
                                            The voucher will be sent to this email address.
                                        </p>

                                        <MDBTextArea
                                            label="Personalised message

                                            (Optional)"
                                            className="Ptextarea mt-2"
                                            id="form4Example3"
                                            rows="6"
                                        />
                                        <Link to="" className="linkuderline mt-4">
                                            <div className="">See email preview</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <VoucherRightside />
                </div>
            </div>
            {/* bottom button section */}
            <div className="voucher-bottom-content-fixed">
                <div className="membeBottomBtn">
                    <div className="voubottomtext">
                        <text>Voucher</text>
                        <h3>£300</h3>
                    </div>
                    <div className="voubottomtext">
                        <Link to="/reviewconfirm" className="">
                            <text className="hiddenselectser-Btn">Continue</text>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

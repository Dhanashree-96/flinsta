import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { FaBusinessTime } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import MembershipRightside from "./MembershipRightside";

export default function MembershipAddQuantity() {
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
                                    <h2>Review details</h2>
                                </div>
                                <div className="Membership-Section">
                                    <div className="voucherhmain-heading">
                                        <h3>Additional info</h3>
                                    </div>
                                    <div className="Membership-Sec1Div">
                                        <div className="quantyvoucher_heading">
                                            <h3 className="text-center fw-bold fs-4">
                                                Anti-stress Massage: 6 for the price of 5
                                            </h3>
                                            <text>Membership price £375</text>
                                        </div>
                                        <hr className="vouchhoriz-line" />
                                        <div className="quantyvoucher_heading">
                                            <text>£375</text>
                                            <h4 className="text-white">6 sessions</h4>
                                        </div>
                                        <hr className="vouchhoriz-line" />
                                        <div className="quantyvoucher_heading">
                                            <div className="membership-businestimetext">
                                                <FaBusinessTime className="businesstime" />
                                                <text>3 month membership</text>
                                            </div>

                                            <text>
                                                Redeem on
                                                <Link to=" " className="servicelink-voucher px-3">
                                                    <text className=""> 1 service</text>
                                                </Link>
                                            </text>
                                        </div>
                                    </div>
                                    <div className="quanty_heading">
                                        <p className="text-dark fw-bolder fs-4">
                                            Notes from Decadence Hair & Beauty
                                        </p>
                                        <text>
                                            For many of us, massage therapy is more of a necessity
                                            than ever before. Choose this package and get 6 massage
                                            sessions for the price of 5. Commit to more "Me" time and
                                            save £75 with regular massage sessions and let Tetiana
                                            help bring relaxation, peace and calm to your life.
                                        </text>
                                        <Link to=" " className="servicelink-voucher">
                                            <p>See memberships terms and conditions</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MembershipRightside />
                </div>
            </div>
            {/* bottom button section */}
            <div className="voucher-bottom-content">
                <div className="membeBottomBtn">
                    <div className="voubottomtext">
                        <text>Voucher</text>
                        <h3>£300</h3>
                    </div>
                    <div className="voubottomtext">
                        <Link to="/membershipSignup" className="">
                            <text className="hiddenselectser-Btn">Continue</text>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

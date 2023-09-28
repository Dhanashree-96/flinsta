import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import VoucherRightside from "./VoucherRightside";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FiMail } from "react-icons/fi";

export default function VoucherChooserecipitent() {
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
                                <div className="recipitent-Section">
                                    <Link to="" className="recipitent-bordermain">
                                        <div className="choose_recipi">
                                            <div className="recipitent_circle">
                                                <AiOutlineUser className="user-recipient" />
                                            </div>

                                            <text>A treat for me</text>
                                        </div>
                                        <div className="voucherrecipforwd">
                                            <IoIosArrowForward className="voucherrecipf text-dark" />
                                        </div>
                                    </Link>

                                    <Link to="/printasgiftVoucher" className="recipitent-bordermain">
                                        <div className="choose_recipi">
                                            <div className="recipitent_circle">
                                                <MdOutlineHomeRepairService className="user-recipient" />
                                            </div>

                                            <text>Print as gift</text>
                                        </div>
                                        <div className="voucherrecipforwd">
                                            <IoIosArrowForward className="voucherrecipf text-dark" />
                                        </div>
                                    </Link>

                                    <Link to="/emailasgiftvoucher" className="recipitent-bordermain">
                                        <div className="choose_recipi">
                                            <div className="recipitent_circle">
                                                <FiMail className="user-recipient" />
                                            </div>

                                            <text>Email as a gift</text>
                                        </div>
                                        <div className="voucherrecipforwd">
                                            <IoIosArrowForward className="voucherrecipf text-dark" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <VoucherRightside />
                </div>
            </div>
        </>
    );
}

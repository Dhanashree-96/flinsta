import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import VoucherRightside from "./VoucherRightside";
import { useLocation } from "react-router-dom";

export default function VoucherAddQuantity() {
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


    // count functionality
    const [count, setCount] = useState(1); // Initial value is 1, change as needed

    // Function to increment the count
    const incrementCount = () => {
        setCount(count + 1);
    };

    // Function to decrement the count, but not go below 1
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };


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
                                    <h2>Add Quantity</h2>
                                </div>
                                <div className="Membership-Section">
                                    <div className="voucherhmain-heading">
                                        <h4>Additional info and quantity</h4>
                                        <text>Quantity</text>
                                        <div className="voucherhmain-headsec2">
                                            <div className="voucher-minus" onClick={decrementCount}>
                                                <BiMinus className="quantityicon" />
                                            </div>
                                            <div className="voucher-contents">
                                                <text>{count}</text>
                                            </div>
                                            <div className="voucher-add" onClick={incrementCount}>
                                                <AiOutlinePlus className="quantityicon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Voucher-Sec1Div">
                                        <div className="circle1 left"></div>
                                        <div className="circle1 right"></div>
                                        <div className="quantyvoucher_heading">
                                            <h4>Gift Voucher</h4>
                                            <text>£300 Voucher price</text>
                                        </div>
                                        <hr className="vouchhoriz-line" />
                                        <div className="quantyvoucher_heading">
                                            <text> Voucher value</text>
                                            <h4>£300</h4>
                                        </div>
                                        <hr className="vouchhoriz-line" />
                                        <div className="quantyvoucher_heading">
                                            <text>
                                                Part of text - Redeem on All services
                                                <Link to=" " className="servicelink-voucher px-3"><text>all services</text></Link>
                                            </text>
                                            <text>Valid for 1 year</text>
                                            <text>For multiple-use</text>
                                        </div>
                                    </div>
                                    <div className="quanty_heading">
                                        <p className="text-dark fw-bolder">
                                            Notes from Decadence Hair & Beauty
                                        </p>
                                        <text>
                                            This voucher can be redeemed against any service or
                                            product. Gift Vouchers cannot be refunded or exchanged for
                                            cash and must be redeemed before the date of expiry.
                                        </text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <VoucherRightside />
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
                        <Link to="/voucherChooserecipitent" className="">
                            <text className="hiddenselectser-Btn">Continue</text>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

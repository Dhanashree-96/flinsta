import React, { useState, useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import VoucherRightside from "./VoucherRightside";

export default function Voucher() {
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

    // List of vouchers
    const vouchers = [
        {
            id: 1,
            voucherValue: "£300",
            giftValue: "£50",
            description: "Redeem on all services",
        },
        {
            id: 1,
            voucherValue: "£300",
            giftValue: "£50",
            description: "Redeem on all services",
        },
        {
            id: 1,
            voucherValue: "£300",
            giftValue: "£50",
            description: "Redeem on all services",
        },
        // Add more vouchers as needed
    ];

    return (
        <div className="membership_wrapper">
            <div className="membership_sections">
                <div className="membership_Leftsection">
                    <div className="arrow stafArrow" onClick={() => navigate(-1)}>
                        <BiArrowBack className="memberbiarrowicon " />
                    </div>
                    <div className="Member_Leftsection">
                        <div className="Page1_colorSection">
                            <div className="membershipSelect_Service">
                                <h2>Select a Voucher</h2>
                            </div>

                            <div className="Membership-Section">
                                {vouchers.map((voucher) => (
                                    <Link
                                        key={voucher.id}
                                        to={{
                                            pathname: "/voucherAddQuantity",
                                            state: { voucher },
                                        }}
                                        className="vourmaindiv"
                                    >
                                        <div className="Voucher-Sec1Div">
                                            <div className="circle left"></div>
                                            <div className="circle right"></div>
                                            <div className="voucher_heading">
                                                <text>Voucher value</text>
                                                <h3>{voucher.voucherValue}</h3>
                                            </div>

                                            <div className="Voucher-desc">
                                                <h6>Gift Voucher</h6>
                                                <h6>{voucher.giftValue}</h6>
                                            </div>
                                            <div className="Voucher-desc2">
                                                <text>{voucher.description}</text>
                                            </div>
                                        </div>
                                    </Link>
                                    
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <VoucherRightside />
            </div>
        </div>
    );
}

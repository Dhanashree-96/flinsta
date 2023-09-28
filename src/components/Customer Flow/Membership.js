import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { FaBusinessTime } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import MembershipRightside from './MembershipRightside';
import GoToTop from '../common/GoToTop';


export default function Membership() {
    // back arrow
    const navigate = useNavigate();

    return (
        <>
            <div className="arrow stafArrow" onClick={() => navigate(-1)}>
                <BiArrowBack className="scrollmemberbiarrowicon " />
            </div>
            <div className='membership_wrapper'>

                <div className='membership_sections'>
                    <div className='membership_Leftsection'>

                        <div className='Member_Leftsection'>

                            <div className="Page1_colorSection">

                                <div className='membershipSelect_Service'>
                                    <h2>Select a Membership</h2>
                                </div>
                                <div className='Membership-Section'>
                                    <Link to="/membershipAddQuantity " className=''>
                                        <div className='Membership-Sec1Div'>
                                            <FaBusinessTime className='businesstime' /><text>3 month membership</text>
                                            <div className='Mem_heading'>
                                                <h3>Anti-stress Massage: 6 for the price of 5</h3>
                                            </div>
                                            <div className='Membership-desc'>
                                                <text>6 sessions</text>
                                                <text>£375</text>
                                            </div>
                                            <div className='Membership-desc1'>
                                                <text>1 service</text>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/membershipAddQuantity " className=''>
                                        <div className='Membership-Sec1Div'>
                                            <FaBusinessTime className='businesstime' /><text>3 month membership</text>
                                            <div className='Mem_heading'>
                                                <h3>Anti-stress Massage: 6 for the price of 5</h3>
                                            </div>
                                            <div className='Membership-desc'>
                                                <text>6 sessions</text>
                                                <text>£375</text>
                                            </div>
                                            <div className='Membership-desc1'>
                                                <text>1 service</text>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/membershipAddQuantity " className=''>
                                        <div className='Membership-Sec1Div'>
                                            <FaBusinessTime className='businesstime' /><text>3 month membership</text>
                                            <div className='Mem_heading'>
                                                <h3>Anti-stress Massage: 6 for the price of 5</h3>
                                            </div>
                                            <div className='Membership-desc'>
                                                <text>6 sessions</text>
                                                <text>£375</text>
                                            </div>
                                            <div className='Membership-desc1'>
                                                <text>1 service</text>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/membershipAddQuantity " className=''>
                                        <div className='Membership-Sec1Div'>
                                            <FaBusinessTime className='businesstime' /><text>3 month membership</text>
                                            <div className='Mem_heading'>
                                                <h3>Anti-stress Massage: 6 for the price of 5</h3>
                                            </div>
                                            <div className='Membership-desc'>
                                                <text>6 sessions</text>
                                                <text>£375</text>
                                            </div>
                                            <div className='Membership-desc1'>
                                                <text>1 service</text>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/membershipAddQuantity " className=''>
                                        <div className='Membership-Sec1Div'>
                                            <FaBusinessTime className='businesstime' /><text>3 month membership</text>
                                            <div className='Mem_heading'>
                                                <h3>Anti-stress Massage: 6 for the price of 5</h3>
                                            </div>
                                            <div className='Membership-desc'>
                                                <text>6 sessions</text>
                                                <text>£375</text>
                                            </div>
                                            <div className='Membership-desc1'>
                                                <text>1 service</text>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MembershipRightside />
                </div>
            </div>
            <GoToTop />
        </>
    )
}

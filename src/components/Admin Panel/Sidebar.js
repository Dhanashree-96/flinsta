// Sidebar.js

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCalendar, AiFillSetting } from 'react-icons/ai';
import { BsFillTagsFill, BsMicrosoftTeams } from 'react-icons/bs';
import { FaBars } from "react-icons/fa";
import { MdOutlineHomeRepairService, MdCardMembership, MdCardGiftcard } from 'react-icons/md'
import AdminHeader from './AdminHeader';


const Admin = ({ onItemClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const handleItemClick = (page) => {
        onItemClick(page);
    };


    return (
        <>
            {/* header */}
            <div className="sidebar-header w-100">
                <AdminHeader />
            </div>

            {/* sidebar */}

            <div className="sidebar" style={{ width: isOpen ? "200px" : "60px" }}>
                {/* sidebartoggle button */}
                <div className="top_section ">
                    <h2 style={{ display: isOpen ? "block" : "none" }} className="logo">
                        Admin
                    </h2>
                    <div
                        style={{ marginLeft: isOpen ? "40px" : "0px" }}
                        className="bars"
                    >
                        <FaBars onClick={toggle} className="iconSidebar" />
                    </div>
                </div>

                {/* sidebar list */}

                <ul>

                    <li onClick={() => handleItemClick('sallon')} activeclassName="active" className='liItems'>
                        <div className="iconSidebar"><BsFillTagsFill /></div>
                        <Link to="/sallon" style={{ display: isOpen ? "block" : "none" }} className='MenuName'>Salon</Link>
                    </li>

                    <li onClick={() => handleItemClick('adminServices')} activeclassName="active" className='liItems' >
                        <div className="iconSidebar"><MdOutlineHomeRepairService /></div>
                        <Link to="/adminServices" style={{ display: isOpen ? "block" : "none" }} className='MenuName'>Services</Link>
                    </li>

                    <li onClick={() => handleItemClick('adminTeams')} activeclassName="active" className='liItems'>
                        <div className="iconSidebar"><BsMicrosoftTeams /></div>
                        <Link to="/adminTeams" style={{ display: isOpen ? "block" : "none" }} className='MenuName'>Teams</Link>
                    </li>

                    <li onClick={() => handleItemClick('admincalendar')} activeclassName="active" className='liItems'>
                        <div className="iconSidebar"><AiFillCalendar /></div>
                        <Link to="/admincalendar" style={{ display: isOpen ? "block" : "none" }} className='MenuName'>Calendar</Link>
                    </li>

                    <li onClick={() => handleItemClick('adminMembership')} activeclassName="active" className='liItems'>
                        <div className="iconSidebar"><MdCardMembership /></div>
                        <Link to="/adminMembership" style={{ display: isOpen ? "block" : "none" }} className='MenuName'>Membership</Link>
                    </li>

                    <li onClick={() => handleItemClick('adminVoucher')} activeclassName="active" className='liItems'>
                        <div className="iconSidebar"><MdCardGiftcard /></div>
                        <Link to="/adminVoucher" style={{ display: isOpen ? "block" : "none" }} className='MenuName'>Voucher</Link>
                    </li>

                </ul>

            </div>
        </>
    );
};

export default Admin;

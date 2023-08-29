import React from "react";
import "../../assets/css/Style.css";
import logo from "../../assets/images/1234 1.png";
import { Link } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";

export default function Header() {
  return (
    <>
      <div className="headerDiv">
        <div className="headerLogoDiv">
          <img src={logo} className="headerLogo" alt="Brand logo" />
        </div>

        <div className="headerBtnDiv">
        <Link to="" className="headerBtn">
          {/* <SlArrowDown className="headerBtnIcon" /> */}
          <text className="headerBtnText">Menu</text>
        </Link>
        </div>
       
      </div>
    </>
  );
}

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
          <input type="checkbox" className="menuCheckBox" id="dropdown" />
          <label for="dropdown" class="dropdown-btn">
            <span>Menu</span>
            {/* <span><SlArrowDown  className="droplogo"/></span> */}
          </label>
          <ul className="dropdown-content" role="menu">
            <div className="dropdown-backg">
              <li>
                <Link to="/allLogin" className="menu_label">
                  <text className="menucontent">Log in</text>
                </Link>
              </li>
              <li>
                <Link to="" className="menu_label">
                  <text className="menucontent">Download the app</text>
                </Link>
              </li>
              <li>
                <Link to="" className="menu_label">
                  <text className="menucontent">Language</text>
                </Link>
              </li>
              <li>
                <Link to="/partnerForm" className="menu_label">
                  <text className="menucontent">For Business</text>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>

    </>
  );
}

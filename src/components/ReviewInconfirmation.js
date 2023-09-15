import React, { useEffect, useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import secioor from "../assets/images/sessiontime out.jpg";
import RightSidepage from "./RightSidepage";
import "../assets/css/Style.css";

export default function ReviewInconfirmation() {

  // back arrow
  const navigate = useNavigate();
  return (
    <div className="Page1_wrapper">
      <div className="Page1_sections">
        <div className="Page1_Leftsection">
          <div className="arrow stafArrow" onClick={() => navigate(-1)}>
            <BiArrowBack className="biarrowicon " />
          </div>
          <div className="Allrevconfirm_Leftsection">
            <div className="Select_Service">
              <h2>Review in conformation</h2>
            </div>
            <div className="reviewconfirm-card">
              <div className="sessiontimeout-div">
                <div className="sessiontime_heading">
                  <img src={secioor} className="sicoor_page5" alt="line" />
                </div>
                <h1>Session timeout</h1>
                <text className="page5_timeout">
                  You didn't complete your booking within 10 minutes
                </text>
                <Link to="" className="tryagain_btn">
                  <text className="TryAgain">Try Again</text>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Rightside page------- */}
        <RightSidepage />
      </div>
    </div>
  );
}

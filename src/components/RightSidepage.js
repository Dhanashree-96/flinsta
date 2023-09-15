import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import salooncolor from "../assets/images/best-hair-salons-singapore.jpg";

export default function RightSidepage() {

      // close icon  
      const navigate = useNavigate();

  return (
    <div className="Page1_Right">
      <div className="P_Right">
        <div className="closeicon" onClick={() => navigate(-1)}>
          <IoCloseSharp className="Close" />
        </div>

        <div className="Page1_Image">
          <img src={salooncolor} className="page1_img" alt="page1_img" />
        </div>

        <div className="Page1_RightSection">
          <div className="Page1_part1">
            <h3>Decadence Hair & Beauty</h3>
            <span>36 Store St, London, England</span>
          </div>
          <div className="Page1_part2">
            <div className="sec1_part2">
              <div className="part2sec2">
                <text>Colour Consultation</text>
                <span>15 min</span>
              </div>
              <div className="Con_heading3">
                <span>free</span>
              </div>
            </div>
          </div>
          <div className="Page1_part3">
            <h3>Total</h3>
            <h3>free</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

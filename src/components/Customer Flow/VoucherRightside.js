import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import salooncolor from "../../assets/images/best-hair-salons-singapore.jpg";
import { useOptionContext } from "./OptionContext";
import ColorHighlightsData from "../../assets/Data/ColorHighlightsData";

export default function VoucherRightside() {
  // close icon
  const navigate = useNavigate();

  return (
    <div className="Page1_Right2">
      <div className="P_Right">
        <div className="closeicon" onClick={() => navigate(-1)}>
          <IoCloseSharp className="Close" />
        </div>

        <div className="Page1_RightSection2">
          <div className="Page1_part1">
            <div className="w-25">
              <img src={salooncolor} className="page1_img" alt="page1_img" />
            </div>
            <div className="w-75 rightTopsalonName">
              <text>Decadence Hair & Beauty</text>
              <p>36 Store St, London, England</p>
            </div>
          </div>

          <div className="Page1_part2">
            <div className="sec1_part2">
              <div className="w-100">
                <div className="part2sec2">
                  <text>abc </text>
                  <text> efg</text>
                </div>
                <div className="Con_heading3">
                  <span>xyz</span>
                </div>
              </div>
            </div>
          </div>
          <div className="Page1_part3">
            <h3>Total</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

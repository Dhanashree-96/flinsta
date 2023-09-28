import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorHighlightsData from "../../assets/Data/ColorHighlightsData";
import { useOptionContext } from "./OptionContext";

export default function SelectServiceContent() {
  // const [selectedOptions, setSelectedOptions] = useState([]);
  const { selectedOptions, addOption, removeOption, popupMessage } = useOptionContext();


  // Ensure a maximum of 6 options can be selected
  // const handleCheckboxChange = (id) => {
  //   if (selectedOptions.includes(id)) {
  //     removeOption(id);  
  //   } else if (selectedOptions.length < 6) {
  //     addOption(id);
  //   }
  // };


  return (
    <>
      <div className="contentHeading">
        <text> Colours + Highlights</text>
        <p>
          New clients are required to book a Colour Consultation at least 48
          hours prior to a colour service. When booking a colour service
          together with a Cut or Blow Dry, please select your colour service
          first.
        </p>
      </div>
      <div className="selectservice-hidenbookbtn">
        <div className="Page1_bottomsec">

          {ColorHighlightsData.map((data) => (
            <div className="Color_parts" key={data.colorHighlightsName}>
              <div className="Color_section1">
                <div className="Con_heading1">
                  <label>
                    <input
                      type="checkbox"
                      // checked={selectedOptions.includes(data.colorHighlightsName)}
                      // onChange={() => handleCheckboxChange(data.colorHighlightsName)}
                      checked={selectedOptions.includes(data.colorHighlightsName)}
                      onChange={() => {
                        if (selectedOptions.includes(data.colorHighlightsName)) {
                          removeOption(data.colorHighlightsName);
                        } else {
                          addOption(data.colorHighlightsName);
                        }
                      }}
                    />
                    {/* {data.colorHighlightsName} */}
                  </label>
                </div>
                <div className="Con_heading2">
                  <div className="con-innerdiv">
                    <div className="Con_head">
                      <text>{data.colorHighlightsName}</text>
                      <span>{data.colorHighlightsTime}</span>
                    </div>
                    <div className="Con_heading3">
                      <span>{data.colorHighlightsRate}</span>
                    </div>
                  </div>
                  <div className="Con_paragraph">
                    <p>{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* ... More checkboxes and content */}
        </div>
        {popupMessage && (
          <div className="popup-message">{popupMessage}</div>
        )}

        {/* {selectedOptions.length > 0 && (
          <Link to="" className="continue_Btn">
            <div className="serviceContinuebtn">
              <text className="ContinueBtn">Continue</text>
            </div>
          </Link>
        )} */}

        <div className="selectser-BOOKBUTTON">
        {selectedOptions.length > 0 && (
         <Link to="/selectStaf" className="Selectservice-button w-100">
              <text className="hiddenselectser-Btn">Book Now</text>
            </Link> 
         )} 
         </div> 
      </div>
    </>
  );
}

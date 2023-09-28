import React, { useState } from "react";
import { Link } from "react-router-dom";
import ColorHighlightsData from "../../assets/Data/ColorHighlightsData";

export default function SelectServiceContent() {
  const [selectedOptions, setSelectedOptions] = useState([]);


  const handleCheckboxChange = (id) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  return (
    <>
      <div className="contentHeading">
        <text>Cutting + Highlights</text>
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
                      checked={selectedOptions.includes(data.colorHighlightsName)}
                      onChange={() => handleCheckboxChange(data.colorHighlightsName)}
                    />
                    {data.colorHighlightsName}
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

        <div className="selectser-BOOKBUTTON">
          {selectedOptions.length > 0 && (
            <Link to="/selectStaf" className="Selectservice-button">
              <text className="hiddenselectser-Btn">Book Now</text>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

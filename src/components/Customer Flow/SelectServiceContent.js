import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SelectServiceContent() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const checkboxes = [
    { label: "", id: 1 },
    { label: "", id: 2 },
    { label: "", id: 3 },
    { label: "", id: 4 },
    { label: "", id: 5 },
  ];

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
          {checkboxes.map((checkbox) => (
            <div className="Color_parts" key={checkbox.id}>
              <div className="Color_section1">
                <div className="Con_heading1">
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOptions.includes(checkbox.id)}
                      onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    {checkbox.label}
                  </label>
                </div>
                <div className="Con_heading2">
                  <div className="con-innerdiv">
                    <div className="Con_head">
                      <text>Color Consultation</text>
                      <span>15 min</span>
                    </div>
                    <div className="Con_heading3">
                      <span>free</span>
                    </div>
                  </div>
                  <div className="Con_paragraph">
                    <p>
                      A free consultation for advice and planning before you
                      choose your colour service. All new clients are required
                      to have a patch test at least 48 hours prior to a
                      colouring service. If you need to reschedule or cancel
                      your consultation appointment, you can do this for free up
                      to 48 hours before. Please be aware we charge a late
                      cancellation fee of £6.00 for cancelling within 48 hours
                      of the consultation or £10.00 for non-attendance.
                    </p>
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

import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { AiOutlineCalendar } from "react-icons/ai";
import salooncolor from "../../assets/images/best-hair-salons-singapore.jpg";
import { useOptionContext } from "./OptionContext";
import ColorHighlightsData from "../../assets/Data/ColorHighlightsData";

export default function RightSidepage() {
  const { selectedStaff, detailsData } = useOptionContext(); // Access selectedStaff, detailsData from context
  const { selectedOptions, getTotalRate, clearOptions } = useOptionContext();


  // Function to retrieve time and rate based on selected option
  const getTimeAndRate = (selectedOption) => {
    const selectedData = ColorHighlightsData.find(
      (data) => data.colorHighlightsName === selectedOption
    );
    if (selectedData) {
      return {
        name: selectedData.colorHighlightsName,
        time: selectedData.colorHighlightsTime,
        rate: selectedData.colorHighlightsRate,
      };
    }
    return { time: "", rate: "" }; // Return empty strings if not found
  };

  // Function to calculate the total rate
  const calculateTotalRate = () => {
    let totalRate = 0;
    selectedOptions.forEach((selectedOption) => {
      const { rate } = getTimeAndRate(selectedOption);
      if (rate && rate !== "free") {
        // Check if the rate is not "free"
        // Remove currency symbols and convert to number
        const rateNumber = parseFloat(rate.replace(/[^\d.]/g, ""));
        totalRate += rateNumber;
      }
    });
    return totalRate.toFixed(2); // Format total rate to two decimal places
  };

  // close icon  
  const navigate = useNavigate();


  return (
    <div className="Page1_Right">
      <div className="P_Right">
        <div className="closeicon" onClick={() => navigate(-1)}>
          <IoCloseSharp className="Close" />
        </div>

        {/* <div className="Page1_Image">
          <img src={salooncolor} className="page1_img" alt="page1_img" />
        </div> */}

        <div className="Page1_RightSection">
          <div className="Page1_part1">
            <div className="w-25 ">
              <img src={salooncolor} className="page1_img" alt="page1_img" />
            </div>
            <div className="w-75 rightTopsalonName">
              <text>Decadence Hair &  Beauty  </text>
              <p>36 Store St, London, England</p>
            </div>
          </div>
          <div className="scrollRightside">
            <div className="Page1_part2">
              <div className="sec1_part2">
                {selectedOptions.map((selectedOption) => (

                  <div className="w-100" key={selectedOption}>
                    <div className="part2sec2"  >
                      <text>{getTimeAndRate(selectedOption).name} </text>
                      <text> {getTimeAndRate(selectedOption).rate}</text>
                    </div>
                    <div className="Con_heading3">
                      <span>{getTimeAndRate(selectedOption).time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="Page1_part3">
              <h3>Total</h3>
              <h3>{`£${calculateTotalRate()}`}</h3> {/* Display the total rate */}
            </div>

            {/* Render the "Appointment" section based Selectstaf page */}

            {/* Display selected staff information */}
            {selectedStaff && (
              <div className="rightAppointment">

                <h3>Appointment</h3>

                <div className="rightAppoint">
                  <div className="imgsecright">
                    <img
                      src={selectedStaff.selectStafimg} // Use the selected staff's image
                      className="stafImgright"
                      alt="staff_image1"
                    />
                  </div>
                  <div className=" rightAppointName">
                    <text> {selectedStaff.selectStafname} </text>
                    <p>{selectedStaff.selectStafdate} </p>
                  </div>

                </div>

              </div>
            )}


            {/* Display details data */}
            {detailsData && (
              <div className="detailsCalendarRight">
                <AiOutlineCalendar className="calendarIcon" />
                {/* <h3>Details</h3> */}
                <p>{detailsData}</p>
              </div>
            )}


          </div>
        </div>



      </div>

    </div>
  );
}

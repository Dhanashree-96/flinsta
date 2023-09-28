import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
// import staff_img from "../../assets/images/square women.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { LuStar } from "react-icons/lu";
import RightSidepage from "./RightSidepage";
import { BsArrowUpSquare } from "react-icons/bs";
import SelectStafData from "../../assets/Data/SelectStafData";
import { useOptionContext } from "./OptionContext";



export default function SelectStaf() {
  // Define state to store the selected staff
  const { selectStaff } = useOptionContext();

  // Function to handle staff selection
  const handleStaffSelection = (staff) => {
    selectStaff(staff); // Call the selectStaff function to update selectedStaff
  };


  // scroll top button
  const toTop = useRef();
  const scrollToTop = (elmRef) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [show, setshow] = useState(false);
  useEffect(() => {
    const handleScroll = (Event) => {
      if (window.scrollY > 10) {
        setshow(true);
      } else {
        setshow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const scrolHandler = (elmRef) => {
  //   window.scrollTo({
  //     top: elmRef.current.offsetTop,
  //     behavior: "smooth",
  //     Scrollmargintop: "30px",
  //   });
  // };

  // back arrow
  const navigate = useNavigate();

  return (
    <div className="Page1_wrapper">
      <div className="Page1_sections">
        <div className="Page1_Leftsection">
          <div className="arrow stafArrow" onClick={() => navigate(-1)}>
            <BiArrowBack className="biarrowicon " />
          </div>
          <div className="All_Leftsection">
            <div className="Page1_colorSection">
              <div className="Select_Service">
                <h2>Select Staff</h2>
              </div>

              <div className="staff-section">
                {SelectStafData.map((selectstaf, index) => (

                  <Link to={selectstaf.selectStaflink} className="stafLink" key={index} onClick={() => handleStaffSelection(selectstaf)}>
                    <div className="staff_othersec">
                      <div className="imgsecpage2">
                        <img
                          src={selectstaf.selectStafimg}
                          className="staff_image1"
                          alt="staff_image1"
                        />
                        <div className="staff_textbox">
                          <text>{selectstaf.selectStafname}</text>
                          <span>{selectstaf.selectStafdate}</span>
                        </div>
                      </div>
                      <div className="staff_rating">
                        <LuStar className="page2lustar" />
                        <h4>5.0</h4>
                        <IoIosArrowForward className="forwardarrow" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* //////////////// */}

        <RightSidepage />
        <div className="selectser-BOOKBUTTON">
          <Link to="/artistCalendar" className="Selectservice-button ">
            <text className="hiddenselectser-Btn">Continue</text>
          </Link>
        </div>
      </div>
      <div
        onClick={() => scrollToTop(toTop)}
        style={{
          right: 10,
          bottom: 20,
        }}
        className="toarrowScrollicon"
      >
        {/* <div className="selectser-BOOKBUTTON">
          {isButtonEnabled ? (
            <Link to="/selectStaf" className="Selectservice-button">
              <text className="hiddenselectser-Btn">Submit</text>
            </Link>
          ) : (
            <></>
          )}
        </div> */}

        {show && <BsArrowUpSquare />}
      </div>
    </div>
  );
}

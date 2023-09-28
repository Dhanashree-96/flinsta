import React, { useEffect, useRef, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import {
  Link,
  ScrollRestoration,
  NavLink,
  useNavigate,
} from "react-router-dom";
import { BsArrowUpSquare } from "react-icons/bs";
import SelectServiceContent from "./SelectServiceContent";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from "react-elastic-carousel";
import RightSidepage from "./RightSidepage";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 300, itemsToShow: 3, itemsToScroll: 2 },
  { width: 768, itemsToShow: 5, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 5, itemsToScroll: 2 },
];

const MyArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === "PREV" ? (
      <FiChevronLeft className="arrowList" />
    ) : (
      <FiChevronRight className="arrowList" />
    );

  return (
    <button onClick={onClick} disabled={isEdge} className="ArrowLeftRight">
      {pointer}
    </button>
  );
};

export default function SelectServiceMain() {

  
  // back arrow
  const navigate = useNavigate();

  // checkbox button
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    // Retrieve the checkbox state from localStorage
    const savedCheckboxes = JSON.parse(localStorage.getItem("checkboxes"));

    // Check if any checkbox is checked
    const isAnyCheckboxChecked =
      savedCheckboxes &&
      Object.values(savedCheckboxes).some((isChecked) => isChecked);

    setIsButtonEnabled(isAnyCheckboxChecked);
  }, []);

  // scroll function
  const coloursHighlights = useRef();
  const cuttingStyling = useRef();
  const hairTreatments = useRef();
  const hairExtensions = useRef();
  const massage = useRef();
  const face = useRef();
  const hands = useRef();
  const feet = useRef();
  const lashesBrows = useRef();
  const hairRemoval = useRef();
  const pacakageOffers = useRef();
  const toTop = useRef();


  // scroll top button
  const scrollToTop = (elmRef) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [show, setshow] = useState(false);
  useEffect(() => {
    const handleScroll = (Event) => {
      if (window.scrollY > 500) {
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

  const scrolHandler = (elmRef) => {
    window.scrollTo({
      top: elmRef.current.offsetTop,
      behavior: "smooth",
      Scrollmargintop: "30px",
    });
  };

  return (
    <div className="Page1_wrapper">
      <div className="Page1_sections">
        <div className="Page1_Leftsection">
          <div className="arrow" onClick={() => navigate(-1)}>
            <BiArrowBack className="biarrowicon " />
          </div>
          <div className="All_Leftsection">
            <div className="Page1_colorSection">
              <div className="page_position">
                <div className="Select_Service">
                  <h2>Select Service</h2>
                </div>
                <ul className="serviceList">
                  <Carousel
                    breakPoints={breakPoints}
                    focusOnSelect={true}
                    easing="cubic-bezier(0.50,.10,.30,1)"
                    tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.110)"
                    transitionMs={300}
                    renderArrow={MyArrow}
                  >
                    <li onClick={() => scrolHandler(coloursHighlights)}>
                      <NavLink activeClassName="activeSerive" to="">
                        Colours + Highlights
                      </NavLink>
                    </li>
                    <li onClick={() => scrolHandler(cuttingStyling)}>
                      <NavLink activeClassName="activeSerive" to="">
                        Cutting + Styling
                      </NavLink>
                    </li>
                    <li onClick={() => scrolHandler(hairTreatments)}>
                      <NavLink activeClassName="activeSerive" to="">
                        Hair Treatments
                      </NavLink>
                    </li>
                    <li onClick={() => scrolHandler(hairExtensions)}>
                      <NavLink activeClassName="activeSerive" to="">
                        Hair Extension
                      </NavLink>
                    </li>
                    <li onClick={() => scrolHandler(massage)}>
                      <NavLink activeClassName="activeSerive" to="">
                        Massage
                      </NavLink>
                    </li>
                    <li onClick={() => scrolHandler(face)}>
                      <NavLink activeClassName="activeSerive" to="">
                        Face
                      </NavLink>
                    </li>
                    <li onClick={() => scrolHandler(hands)}>
                      <NavLink activeClassName="activeSerive" to="">
                        Hands
                      </NavLink>
                    </li>
                    <li onClick={() => scrolHandler(feet)}>
                      <NavLink activeClassName="activeSerive" to="">
                        Feet
                      </NavLink>
                    </li>
                    <li onClick={() => scrolHandler(lashesBrows)}>
                      <NavLink activeClassName="activeSerive" to="">
                        Lashes + Brows
                      </NavLink>
                    </li>
                    <li onClick={() => scrolHandler(hairRemoval)}>
                      <NavLink activeClassName="activeSerive" to="">
                        Hair Removal
                      </NavLink>
                    </li>
                    <li onClick={() => scrolHandler(pacakageOffers)}>
                      <NavLink activeClassName="activeSerive" to="">
                        Packages/Offers
                      </NavLink>
                    </li>
                  </Carousel>
                </ul>
              </div>
            </div>
            <div className="ColorHighlight_text">
              <div className="SelectContentDiv" ref={coloursHighlights}>
                <SelectServiceContent />
              </div>

              <div ref={cuttingStyling} className=" SelectContentDiv">
                <SelectServiceContent />
              </div>

              <div ref={hairTreatments} className="SelectContentDiv">
                <SelectServiceContent />
              </div>

              <div ref={hairExtensions} className="SelectContentDiv">
                <SelectServiceContent />
              </div>

              <div ref={massage} className="SelectContentDiv">
                <SelectServiceContent />
              </div>

              <div ref={face} className="SelectContentDiv">
                <SelectServiceContent />
              </div>

              <div ref={hands} className="SelectContentDiv">
                <SelectServiceContent />
              </div>

              <div ref={feet} className="SelectContentDiv">
                <SelectServiceContent />
              </div>

              <div ref={lashesBrows} className="SelectContentDiv">
                <SelectServiceContent />
              </div>

              <div ref={hairRemoval} className="SelectContentDiv">
                <SelectServiceContent />
              </div>

              <div ref={pacakageOffers} className="SelectContentDiv">
                <SelectServiceContent />
              </div>
            </div>

   
          </div>
        </div>
        {/* Rightpage Decades beauty section------- */}
        <RightSidepage />
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

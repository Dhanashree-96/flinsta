import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 4, itemsToScroll: 2 },
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
  
  const ServicesPage2 = () => {
    //assigning location variable
    const location = useLocation();
  
    //destructuring pathname from location
    const { pathname } = location;
  
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    


  return (
    <>
    <div className="Decades_bottom_left">
    <div className="service">
      <div className="service_headline">
        <h2>Services</h2>
      </div>
      <div className="DecService_color">
        <div className="Dec_Service_Sec">
          <div className="Service_head1">
            <ul className="serviceList">
              <Carousel
                breakPoints={breakPoints}
                focusOnSelect={true}
                easing="cubic-bezier(0.50,.10,.30,1)"
                tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.110)"
                transitionMs={300}
                renderArrow={MyArrow}
              >
                <li
                  className={
                    splitLocation[1] === "colorHighlights" ? "active" : ""
                  }
                >
                  <Link to="/colorHighlights">Colours + Highlights</Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "cuttingStyling" ? "active" : ""
                  }
                >
                  <Link to="/cuttingStyling">Cutting + Styling</Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "hairTreatments" ? "active" : ""
                  }
                >
                  <Link to="/hairTreatments">Hair Treatments</Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "hairExtension" ? "active" : ""
                  }
                >
                  <Link to="/hairExtension">Hair Extension</Link>
                </li>
                <li
                  className={splitLocation[1] === "massage" ? "active" : ""}
                >
                  <Link to="/massage">Massage</Link>
                </li>
                <li className={splitLocation[1] === "face" ? "active" : ""}>
                  <Link to="/face">Face</Link>
                </li>
                <li className={splitLocation[1] === "hands" ? "active" : ""}>
                  <Link to="/hands">Hands</Link>
                </li>
                <li className={splitLocation[1] === "feet" ? "active" : ""}>
                  <Link to="/feet">Feet</Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "lashesBrows" ? "active" : ""
                  }
                >
                  <Link to="/lashesBrows">Lashes + Brows</Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "hairRemoval" ? "active" : ""
                  }
                >
                  <Link to="/hairRemoval">Hair Removal</Link>
                </li>
                <li
                  className={
                    splitLocation[1] === "packagesOffers" ? "active" : ""
                  }
                >
                  <Link to="/packagesOffers">Packages/Offers</Link>
                </li>
              </Carousel>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
  )
}

export default ServicesPage2;

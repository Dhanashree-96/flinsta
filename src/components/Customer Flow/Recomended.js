import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Style.css";
import Carousel from "react-elastic-carousel";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import RecomendedData from "../../assets/Data/RecomendedData";

// carousel breakpoints
const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
];

//  carousel prev next arrows
const MyArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === "PREV" ? (
      <BsArrowLeft className="arrowCustom" />
    ) : (
      <BsArrowRight className="arrowCustom" />
    );

  return (
    <button onClick={onClick} disabled={isEdge} className="ArrowLeftRight">
      {pointer}
    </button>
  );
};


export default function Recomended() {

  return (
    <>
      <div>
        <div className="wrapper recomendedDiv">
          <text className="textCard">RECOMENDED</text>
        </div>

        <div className="SaloonCard_body ">
          <Carousel
            breakPoints={breakPoints}
            focusOnSelect={true}
            easing="cubic-bezier(1,.15,.55,1)"
            tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.110)"
            transitionMs={900}
            renderArrow={MyArrow}
          >
            {RecomendedData.map((recomended, index) => (
            
              <div className="SaloonCards-Section " key={index}>
                <Link to={recomended.recomendedlink} className="recomendedButton1">
                  <div className="S_Card">

                    <img
                      src={recomended.recomendedimg}
                      className="S_logo"
                      alt="cardImg"
                    />
                    <div className="S_info">
                      <div className="heading1">{recomended.recomendedname}</div>
                      <div className="heading2">
                        <span>{recomended.recomendedrate}</span>
                      </div>
                      <div className="heading3">{recomended.recomendedcity}</div>
                    </div>
                  </div>
                </Link>  
              </div>
            ))}
            
          </Carousel>
        </div>
      </div>
    </>
  );
}

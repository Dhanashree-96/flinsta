import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import "../../assets/css/Style.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import NewFlinstaData from "../../assets/Data/NewFlinstaData";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
];

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

export default function NewFlinsta() {
  return (
    <div>
      <div className="wrapper recomendedDiv">
        <text className="textCard">New to Flinsta</text>
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
          {NewFlinstaData.map((newFlinsta, index) => (
            <div className="SaloonCards-Section " key={index}>
              <Link
                to={newFlinsta.newFlinstalink}
                className="recomendedButton1"
              >
                <div className="S_Card">
                  <img
                    src={newFlinsta.newFlinstaimg}
                    className="S_logo"
                    alt="cardImg"
                  />
                  <div className="S_info">
                    <div className="heading1">{newFlinsta.newFlinstaname}</div>
                    <div className="heading2">
                      <span>{newFlinsta.newFlinstarate}</span>
                    </div>
                    <div className="heading3">{newFlinsta.newFlinstacity}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
     
        </Carousel>
      </div>
    </div>
  );
}

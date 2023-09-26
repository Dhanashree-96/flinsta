import React from "react";
import { LuStar } from "react-icons/lu";
import Carousel from "react-elastic-carousel";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ReviewData from "../../assets/Data/ReviewData";

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

export default function Review() {
  return (
    <div>
      <div className="wrapper recomendedDiv">
        <text className="textCard">Review</text>
      </div>
      <div className="reviewCard ">
        <Carousel
          breakPoints={breakPoints}
          focusOnSelect={true}
          easing="cubic-bezier(1,.15,.55,1)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.110)"
          transitionMs={900}
          renderArrow={MyArrow}
        >
          {ReviewData.map((review, index) => (
            <div className="glass-card" key={index}>
              <div className="5_Star">
                <LuStar /> <LuStar /> <LuStar /> <LuStar /> <LuStar />
              </div>
              <div className="glasscard_heading">
                <h5>{review.reviewheading} </h5>
              </div>
              <div className="glasscard_para">
                <text className="glasscard_text">{review.reviewtext}</text>
              </div>
              <div className="glass_circle">
                <div className="circle_img">
                  <img src={review.reviewimg} className="c_img" alt="image" />
                </div>
                <div className="circle_text">
                  <span>{review.reviewname} </span> <br />
                  {review.reviewcity}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

    </div>
  );
}

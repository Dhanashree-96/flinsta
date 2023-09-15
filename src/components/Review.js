import React from "react";
import "../assets/css/Style.css";
import { LuStar } from "react-icons/lu";
import reviewImg from "../assets/images/reviewImg.png";
import { Link } from "react-router-dom";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 1 },
];

export default function Review() {
  return (
    <div>
      <div className="wrapper recomendedDiv">
        <text className="textCard">Review</text>
      </div>

      <div className="reviewCard ">
        <div className="glass-card">
          <div className="5_Star">
            <LuStar /> <LuStar /> <LuStar /> <LuStar /> <LuStar />
          </div>

          <div className="glasscard_heading">
            <h5>The best booking system </h5>
          </div>

          <div className="glasscard_para">
            <text className="glasscard_text">
              Great experience,easy to book.Paying for treatment is so
              convient-no cash or cards needed!
            </text>
          </div>

          <div className="glass_circle">
            <div className="circle_img">
              <img src={reviewImg} className="c_img" alt="image" />
            </div>

            <div className="circle_text">
              <span>Lucy</span> <br />
              London, UK
            </div>
          </div>
        </div>

        <div className="glass-card">
          <div className="5_Star">
            <LuStar /> <LuStar /> <LuStar /> <LuStar /> <LuStar />
          </div>

          <div className="glasscard_heading">
            <h5>The best booking system </h5>
          </div>

          <div className="glasscard_para">
            <text className="glasscard_text">
              Great experience,easy to book.Paying for treatment is so
              convient-no cash or cards needed!
            </text>
          </div>

          <div className="glass_circle">
            <div className="circle_img">
              <img src={reviewImg} className="c_img" alt="image" />
            </div>

            <div className="circle_text">
              <span>Lucy</span> <br />
              London, UK
            </div>
          </div>
        </div>

        <div className="glass-card">
          <div className="5_Star">
            <LuStar /> <LuStar /> <LuStar /> <LuStar /> <LuStar />
          </div>

          <div className="glasscard_heading">
            <h5>The best booking system </h5>
          </div>

          <div className="glasscard_para">
            <text className="glasscard_text">
              Great experience,easy to book.Paying for treatment is so
              convient-no cash or cards needed!
            </text>
          </div>

          <div className="glass_circle">
            <div className="circle_img">
              <img src={reviewImg} className="c_img" alt="image" />
            </div>

            <div className="circle_text">
              <span>Lucy</span> <br />
              London, UK
            </div>
          </div>
        </div>

        <div className="glass-card">
          <div className="5_Star">
            <LuStar /> <LuStar /> <LuStar /> <LuStar /> <LuStar />
          </div>

          <div className="glasscard_heading">
            <h5>The best booking system </h5>
          </div>

          <div className="glasscard_para">
            <text className="glasscard_text">
              Great experience,easy to book.Paying for treatment is so
              convient-no cash or cards needed!
            </text>
          </div>

          <div className="glass_circle">
            <div className="circle_img">
              <img src={reviewImg} className="c_img" alt="image" />
            </div>

            <div className="circle_text">
              <span>Lucy</span> <br />
              London, UK
            </div>
          </div>
        </div>
  
      </div>
      <Link to="" className="seeAllReview wrapper">
          See all Reviews
        </Link>
    </div>
  );
}

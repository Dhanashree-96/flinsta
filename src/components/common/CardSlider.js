import React from "react";
// import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
// import Item from "./Item";
import "../../assets/css/Style.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function CardSlider() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <div className="item">One</div>
          <div className="item">Two</div>
          <div className="item">Three</div>
          <div className="item">Four</div>
          <div className="item">Five</div>
          <div className="item">Six</div>
          <div className="item">Seven</div>
          <div className="item">Eight</div>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<CardSlider />, rootElement);
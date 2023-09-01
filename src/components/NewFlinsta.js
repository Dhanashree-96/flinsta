import React from 'react'
import Carousel from "react-elastic-carousel";
import "../assets/css/Style.css";
import NewFlinstaImg from "../assets/images/NewFlinstaImg.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function NewFlinsta() {
  return (
  
    <div>
      <div className="wrapper recomendedDiv">
        <text className="textCard">New to Flinsta</text>
      </div>

      <div className="SaloonCard_body ">
      <Carousel breakPoints={breakPoints}>

        <div className="SaloonCards-Section ">
          <div className="S_Card">
            <img src={NewFlinstaImg} className="S_logo" alt="cardImg" />
            <div className="S_info">
              <div className="heading1">Balance Massage & Wellness</div>
              <div className="heading2">
                <span>4</span>.9 (1,998)
              </div>
              <div className="heading3">Fitzrovia, London</div>
            </div>
          </div>
        </div>

        <div className="SaloonCards-Section ">
          <div className="S_Card">
            <img src={NewFlinstaImg} className="S_logo" alt="cardImg" />
            <div className="S_info">
              <div className="heading1">Balance Massage & Wellness</div>
              <div className="heading2">
                <span>4</span>.9 (1,998)
              </div>
              <div className="heading3">Fitzrovia, London</div>
            </div>
          </div>
        </div>

        <div className="SaloonCards-Section ">
          <div className="S_Card">
            <img src={NewFlinstaImg} className="S_logo" alt="cardImg" />
            <div className="S_info">
              <div className="heading1">Balance Massage & Wellness</div>
              <div className="heading2">
                <span>4</span>.9 (1,998)
              </div>
              <div className="heading3">Fitzrovia, London</div>
            </div>
          </div>
        </div>

        <div className="SaloonCards-Section ">
          <div className="S_Card">
            <img src={NewFlinstaImg} className="S_logo" alt="cardImg" />
            <div className="S_info">
              <div className="heading1">Balance Massage & Wellness</div>
              <div className="heading2">
                <span>4</span>.9 (1,998)
              </div>
              <div className="heading3">Fitzrovia, London</div>
            </div>
          </div>
        </div>
        </Carousel>

      </div>

    </div>

  )
}

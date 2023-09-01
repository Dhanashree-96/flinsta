import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import salonCard from "../assets/images/salonCard.png";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Recomended() {
  return (
    <>
      <div>
        <div className="wrapper recomendedDiv">
          <text className="textCard">RECOMENDED</text>
        </div>

        <div className="SaloonCard_body ">
          <Carousel breakPoints={breakPoints}>
            <div className="SaloonCards-Section ">
              <div className="S_Card">
                <img src={salonCard} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Balance Massage & Wellness</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                  <Link to="/decadence" className="recomendedButton">
                    Hair Salon
                  </Link>
                </div>
              </div>
            </div>

            <div className="SaloonCards-Section ">
              <div className="S_Card">
                <img src={salonCard} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Balance Massage & Wellness</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                  <Link to="" className="recomendedButton">
                    Hair Salon
                  </Link>
                </div>
              </div>
            </div>

            <div className="SaloonCards-Section ">
              <div className="S_Card">
                <img src={salonCard} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Balance Massage & Wellness</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                  <Link to="" className="recomendedButton">
                    Hair Salon
                  </Link>
                </div>
              </div>
            </div>

            <div className="SaloonCards-Section ">
              <div className="S_Card">
                <img src={salonCard} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Balance Massage & Wellness</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                  <Link to="" className="recomendedButton">
                    Hair Salon
                  </Link>
                </div>
              </div>
            </div>

            <div className="SaloonCards-Section ">
              <div className="S_Card">
                <img src={salonCard} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Balance Massage & Wellness</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                  <Link to="" className="recomendedButton">
                    Hair Salon
                  </Link>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

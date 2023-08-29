import React from 'react'
import "../assets/css/Style.css";
import salonCard from "../assets/images/salonCard.png";

export default function Recomended() {
    
  return (
    <>
      <div>
        <div className="wrapper recomendedDiv">
          <text className="textCard">RECOMENDED</text>
        </div>

        <div className="SaloonCard_body ">

          <div className="SaloonCards-Section ">
            <div className="S_Card">
              <img src={salonCard} className="S_logo" alt="cardImg" />
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
              <img src={salonCard} className="S_logo" alt="cardImg" />
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
              <img src={salonCard} className="S_logo" alt="cardImg" />
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
              <img src={salonCard} className="S_logo" alt="cardImg" />
              <div className="S_info">
                <div className="heading1">Balance Massage & Wellness</div>
                <div className="heading2">
                  <span>4</span>.9 (1,998)
                </div>
                <div className="heading3">Fitzrovia, London</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

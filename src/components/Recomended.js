import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Style.css";
import salonCard from "../assets/images/salonCard.png";
import DecadenceHairBeauty from "../assets/images/Decadence Hair & Beauty.jpg";
import BalanceMassageWellness from "../assets/images/Balance Massage Wellness.jpg";
import ELPBarbershop from "../assets/images/ELP Barbershop.avif";
// import MASAJShoreditch from "../assets/images/MASAJShoreditch";
import Huckle from "../assets/images/Huckle The Barbre Old Street.webp";
import SliderCuts from "../assets/images/SliderCuts.jpg";
import OffCutCamberwell from "../assets/images/OffCutCamberwell.avif";
import AMABrixton from "../assets/images/AMA Brixton.avif";
import Relax from "../assets/images/Relax.jpg";
import BlushBlowSkinStudio from "../assets/images/Blush Blow The Skin Studio.avif";
import RomiSalon from "../assets/images/Romi Salon.avif";
import WildHare from "../assets/images/The Wild Hare.avif";
import SalonNoEight from "../assets/images/Salon No.Eight.avif";
import DivineBeauty from "../assets/images/Divine Beauty from Within.avif";
import FierceLash from "../assets/images/The Fierce Lash Company.avif";
import Carousel from "react-elastic-carousel";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll : 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 , itemsToScroll: 3 },
  { width: 1200, itemsToShow: 4 ,  itemsToScroll: 4 },
];

const MyArrow = ({ type, onClick, isEdge }) => {
  const pointer  = type === 'PREV'  ? <BsArrowLeft className="arrowCustom"/> : <BsArrowRight className="arrowCustom"/>;
  
  return (
    <button onClick={onClick} disabled={isEdge} className="ArrowLeftRight">
      {pointer }
    </button>
  );
}

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
            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">               
               <img src={DecadenceHairBeauty} className="S_logo" alt="cardImg" />
                <div className="S_info">
                    <div className="heading1">Decadence Hair & Beauty</div>
                    <div className="heading2">
                      <span>4.9 (1,998)</span>
                    </div>
                    <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={BalanceMassageWellness} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Balance Massage & Wellness</div>
                  <div className="heading2">
                    <span>4.9 (1,998)</span>
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={ELPBarbershop} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">ELP Barbershop</div>
                  <div className="heading2">
                  <span>4.9 (1,998)</span>
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={salonCard} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">MASAJ - Shoreditch</div>
                  <div className="heading2">
                  <span>4.9 (1,998)</span>
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={Huckle} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Huckle The Barbre Old Street</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={SliderCuts} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">SliderCuts</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={OffCutCamberwell} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Off Cut, Camberwell</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={AMABrixton} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">AMA Brixton</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={Relax} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Re:lax</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={BlushBlowSkinStudio} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Blush + Blow / The Skin Studio</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={RomiSalon} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Romi Salon</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={WildHare} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">The Wild Hare</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={SalonNoEight} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Salon No.Eight</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={DivineBeauty} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Divine - Beauty from Within</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>

            <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={FierceLash} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">The Fierce Lash Company</div>
                  <div className="heading2">
                    <span>4</span>.9 (1,998)
                  </div>
                  <div className="heading3">Fitzrovia, London</div>
                </div>
              </div>
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

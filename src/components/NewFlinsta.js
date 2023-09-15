import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import "../assets/css/Style.css";
import NewFlinstaImg from "../assets/images/NewFlinstaImg.png";
import LiaAesthtics from "../assets/images/Lia Aesthtics.avif";
import HuckleBarberLambs from "../assets/images/Huckle The Barber Lambs Conduit.avif";
import DiamondStudioHolborn from "../assets/images/Diamond Studio Holborn.webp";
import ThaiMassage from "../assets/images/19Thai Massage.avif";
import BarberSmithsMarylebone from "../assets/images/BarberSmiths Marylebone.avif";
import MASAJMarylebone from "../assets/images/MASAJ Marylebone.jpg";
import Medusa from "../assets/images/Medusa 622.avif";
import ReviveMassageStudios from "../assets/images/Revive Massage Studios.avif";
import SelfishSpitalfields from "../assets/images/Selfish Spitalfields.avif";
import SelfishShoreditch from "../assets/images/Selfish Shoreditch.webp";
import NoticeHairSalon from "../assets/images/Notice Hair Salon.avif";
import ThaiStudioHigh from "../assets/images/Thai Studio High St Kensington.avif";
import Studio52HairBeauty from "../assets/images/Studio52 Hair and Beauty.avif";
import SugarCaneSalon from "../assets/images/Sugar Cane Salon.webp";
import Shag from "../assets/images/Shag.avif";
import MilliesLounge from "../assets/images/Millies Lounge Hair & Beauty Salon.avif";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

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
          <div className="SaloonCards-Section ">
            <Link to="/decadence" className="recomendedButton1">
              <div className="S_Card">
                <img src={LiaAesthtics} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Lia Aesthtics</div>
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
                <img src={HuckleBarberLambs} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">
                    Huckle The Barber Lambs Conduit
                  </div>
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
                <img
                  src={DiamondStudioHolborn}
                  className="S_logo"
                  alt="cardImg"
                />
                <div className="S_info">
                  <div className="heading1">Diamond Studio Holborn</div>
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
                <img src={ThaiMassage} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">19Thai Massage</div>
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
                <img
                  src={BarberSmithsMarylebone}
                  className="S_logo"
                  alt="cardImg"
                />
                <div className="S_info">
                  <div className="heading1">BarberSmiths Marylebone</div>
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
                <img src={MASAJMarylebone} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">MASAJ Marylebone</div>
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
                <img src={Medusa} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Medusa 622</div>
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
                <img
                  src={ReviveMassageStudios}
                  className="S_logo"
                  alt="cardImg"
                />
                <div className="S_info">
                  <div className="heading1">Revive Massage Studios</div>
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
                <img
                  src={SelfishSpitalfields}
                  className="S_logo"
                  alt="cardImg"
                />
                <div className="S_info">
                  <div className="heading1">Selfish Spitalfields</div>
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
                <img src={SelfishShoreditch} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Selfish Shoreditch</div>
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
                <img src={NoticeHairSalon} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Notice Hair Salon</div>
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
                <img src={ThaiStudioHigh} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Thai Studio High St Kensington</div>
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
                <img
                  src={Studio52HairBeauty}
                  className="S_logo"
                  alt="cardImg"
                />
                <div className="S_info">
                  <div className="heading1">Studio52 Hair and Beauty</div>
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
                <img src={SugarCaneSalon} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Sugar Cane Salon</div>
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
                <img src={Shag} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">Shag</div>
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
                <img src={MilliesLounge} className="S_logo" alt="cardImg" />
                <div className="S_info">
                  <div className="heading1">
                    Millies Lounge Hair & Beauty Salon
                  </div>
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
  );
}

import React from "react";
import { Link, ScrollRestoration, NavLink } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from "react-elastic-carousel";
import ServicemenuData from "../../assets/Data/ServiceMenuData";


const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 4, itemsToScroll: 2 },
  { width: 768, itemsToShow: 5, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 5, itemsToScroll: 2 },
];

const MyArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === "PREV" ? (
      <FiChevronLeft className="arrowList" />
    ) : (
      <FiChevronRight className="arrowList" />
    );

  return (
    <button onClick={onClick} disabled={isEdge} className="ArrowLeftRight">
      {pointer}
    </button>
  );
};

export default function ServiceMenuSlider() {
  return (
    <>
      <ul className="serviceListDecadence">
        <Carousel
          breakPoints={breakPoints}
          focusOnSelect={true}
          easing="cubic-bezier(0.50,.10,.30,1)"
          tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.110)"
          transitionMs={300}
          renderArrow={MyArrow}
        >
          {ServicemenuData.map((serviceMenu, index) => (
            <li key={index}>
              <NavLink
                activeClassName="active"
                to={serviceMenu.servicemenulink}
              >
                {serviceMenu.servicemenuname}
              </NavLink>
            </li>
          ))}

        </Carousel >
      </ul>
    </>
  );
}

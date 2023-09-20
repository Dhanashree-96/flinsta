import React from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const ColorHighlightsData = [
  {
    colorHighlightsName: "Color Consultation",
    colorHighlightsTime: "15 min",
    colorHighlightsRate: "free",
    colorHighlightsLink: "",
  },
  {
    colorHighlightsName: "AirTouch/Babylights",
    colorHighlightsTime: "2h 45min",
    colorHighlightsRate: "£225",
    colorHighlightsLink: "",
  },
  {
    colorHighlightsName: "Color Correction",
    colorHighlightsTime: "2h 45min",
    colorHighlightsRate: "from £180",
    colorHighlightsLink: "",
  },
  {
    colorHighlightsName: "Freehand / Balayage",
    colorHighlightsTime: "1h 30min - 2h 45min",
    colorHighlightsRate: "from £165",
    colorHighlightsLink: "",
  },
  {
    colorHighlightsName: "Full Head Highlights",
    colorHighlightsTime: "2h 15min-3h",
    colorHighlightsRate: "from £175",
    colorHighlightsLink: "",
  },
  {
    colorHighlightsName: "Half Head Highlights",
    colorHighlightsTime: "1h 30min - 2h 30min",
    colorHighlightsRate: "from £125",
    colorHighlightsLink: "",
  },
  {
    colorHighlightsName: "Tint + Lights",
    colorHighlightsTime: "1h 45min - 2h",
    colorHighlightsRate: "from £96",
    colorHighlightsLink: "",
  },
  {
    colorHighlightsName: "Full Head Tint",
    colorHighlightsTime: "1h 15min - 1h 35min",
    colorHighlightsRate: "from £80",
    colorHighlightsLink: "",
  },
  {
    colorHighlightsName: "T-section Highlights",
    colorHighlightsTime: "1h 15min - 1h 30min",
    colorHighlightsRate: "from £86",
    colorHighlightsLink: "",
  },
  {
    colorHighlightsName: "Re-growth Lightener",
    colorHighlightsTime: "1h 30min - 1h 35min",
    colorHighlightsRate: "from £60",
    colorHighlightsLink: "",
  },
  {
    colorHighlightsName: "RE-growth Tint",
    colorHighlightsTime: "1h 15min - 1h 35min",
    colorHighlightsRate: "from £60",
    colorHighlightsLink: "",
  },
  {
    colorHighlightsName: "Toner",
    colorHighlightsTime: "15min - 30min",
    colorHighlightsRate: "from £40",
    colorHighlightsLink: "",
  },
];

export default function ColorHighlights() {
  return (
    <>
      <div className="service">
        <div className="DecService_color">

{ColorHighlightsData.map((colorhighlight, index) => (
          <div className="Dec_Service_Secone" key ={index}>
            <div className="Color_cons">
              <div className="consultation">
                <h4>{colorhighlight.colorHighlightsName}</h4>
                <span>{colorhighlight.colorHighlightsTime}</span>
                <text>{colorhighlight.colorHighlightsRate}</text>
              </div>
            </div>
            <div className="Add_Button">
              <Link to={colorhighlight.colorHighlightsLink} className="SBtn">
                <GoPlus className="plusicon" alt=" plusicon" />
              </Link>
            </div>
          </div>
))}

        </div>
    
      </div>
    </>
  );
}

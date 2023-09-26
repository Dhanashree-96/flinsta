import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-languages-select/css/react-languages-select.css";

const ColorHighlightsData = [
  {
    colorHighlightsName: "Color Consultation",
    colorHighlightsTime: "15 min",
    colorHighlightsRate: "free",
    colorHighlightsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    colorHighlightsName: "AirTouch/Babylights",
    colorHighlightsTime: "2h 45min",
    colorHighlightsRate: "£225",
    colorHighlightsLink: "",
    description: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first. All new clients are required to have a patch test at least 48 hours prior to a colouring service.",

  },
  {
    colorHighlightsName: "Color Correction",
    colorHighlightsTime: "2h 45min",
    colorHighlightsRate: "from £180",
    colorHighlightsLink: "",
    description: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first. All new clients are required to have a patch test at least 48 hours prior to a colouring service.",

  },
  {
    colorHighlightsName: "Freehand / Balayage",
    colorHighlightsTime: "1h 30min - 2h 45min",
    colorHighlightsRate: "from £165",
    colorHighlightsLink: "",
    description: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first. All new clients are required to have a patch test at least 48 hours prior to a colouring service.",

  },
  {
    colorHighlightsName: "Full Head Highlights",
    colorHighlightsTime: "2h 15min-3h",
    colorHighlightsRate: "from £175",
    colorHighlightsLink: "",
    description: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first. All new clients are required to have a patch test at least 48 hours prior to a colouring service.",

  },
  {
    colorHighlightsName: "Half Head Highlights",
    colorHighlightsTime: "1h 30min - 2h 30min",
    colorHighlightsRate: "from £125",
    colorHighlightsLink: "",
    description: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first. All new clients are required to have a patch test at least 48 hours prior to a colouring service.",

  },
  {
    colorHighlightsName: "Tint + Lights",
    colorHighlightsTime: "1h 45min - 2h",
    colorHighlightsRate: "from £96",
    colorHighlightsLink: "",
    description: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first. All new clients are required to have a patch test at least 48 hours prior to a colouring service.",

  },
  {
    colorHighlightsName: "Full Head Tint",
    colorHighlightsTime: "1h 15min - 1h 35min",
    colorHighlightsRate: "from £80",
    colorHighlightsLink: "",
    description: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first. All new clients are required to have a patch test at least 48 hours prior to a colouring service.",

  },
  {
    colorHighlightsName: "T-section Highlights",
    colorHighlightsTime: "1h 15min - 1h 30min",
    colorHighlightsRate: "from £86",
    colorHighlightsLink: "",
    description: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first. All new clients are required to have a patch test at least 48 hours prior to a colouring service.",

  },
  {
    colorHighlightsName: "Re-growth Lightener",
    colorHighlightsTime: "1h 30min - 1h 35min",
    colorHighlightsRate: "from £60",
    colorHighlightsLink: "",
    description: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first. All new clients are required to have a patch test at least 48 hours prior to a colouring service.",

  },
  {
    colorHighlightsName: "RE-growth Tint",
    colorHighlightsTime: "1h 15min - 1h 35min",
    colorHighlightsRate: "from £60",
    colorHighlightsLink: "",
    description: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first. All new clients are required to have a patch test at least 48 hours prior to a colouring service.",

  },
  {
    colorHighlightsName: "Toner",
    colorHighlightsTime: "15min - 30min",
    colorHighlightsRate: "from £40",
    colorHighlightsLink: "",
    description: "Please add a finishing service (Blow Dry / Cut) with this appointment. When booking together with a Cut or Blow Dry service, please select this colour service first. All new clients are required to have a patch test at least 48 hours prior to a colouring service.",

  },
];

export default function ColorHighlights() {
  
// modal from functionality
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (colorhighlight) => {
    setModalContent(colorhighlight);
    setShow(true);
  };

  return (
    <>
      <div className="service">
        <div className="DecService_color">
          {ColorHighlightsData.map((colorhighlight, index) => (
            <Link className="text-dark" onClick={() => handleShow(colorhighlight)}>
              <div className="Dec_Service_Secone" key={index}>
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
            </Link>
          ))}

          {/* popup code */}

          <div className="decadance-popup">
            <Modal show={show} onHide={handleClose} className='decadance-popupdiv'>
              <div className="decadance-popupdiv">
                <Modal.Header closeButton>
                  <div className="consultations">
                    <h1>{modalContent.colorHighlightsName}</h1>
                    <span>{modalContent.colorHighlightsTime}</span>
                    <p>{modalContent.colorHighlightsRate}</p>
                  </div>
                </Modal.Header>
              </div>
              <div className='readmorediv'>
                <p>

                  {modalContent && modalContent.description && isExpanded
                    ? modalContent.description
                    : modalContent && modalContent.description
                      ? `${modalContent.description.slice(0, 150)}... `
                      : ''}
                  <span onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "Read Less" : "Read More"}
                  </span>
                </p>
              </div>
              <div className="decadepopsec1">
                <Modal.Footer>
                <Link to="/selectServiceMain" className='modalBtnLink'>
                  <Button variant="dark text-capitalize" onClick={handleClose} className='addbookdecadebtn'>
                    Add Booking
                  </Button>
                  </Link>
                </Modal.Footer>
              </div>
            </Modal>
          </div>

          {/* close modal */}
        </div>
      </div>


    </>
  );
}

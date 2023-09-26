import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-languages-select/css/react-languages-select.css";

const CuttingStylingData = [
  {
    cuttingStylingName: "Ladies-Wash, Cut + Blow Dry",
    cuttingStylingTime: "1h",
    cuttingStylingRate: "from £59",
    cuttingStylingLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",

  },
  {
    cuttingStylingName: "Wash + Blow Dry (for Extension)",
    cuttingStylingTime: "1h",
    cuttingStylingRate: "£45",
    cuttingStylingLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",

  },
  {
    cuttingStylingName: "Wash + Blow Dry (Brush)",
    cuttingStylingTime: "45min",
    cuttingStylingRate: "from £39",
    cuttingStylingLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",

  },
  {
    cuttingStylingName: "Wash, Blow Dry + Style (Hot Tool)",
    cuttingStylingTime: "45min - 1h",
    cuttingStylingRate: "from £40",
    cuttingStylingLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",

  },
  {
    cuttingStylingName: "Girls (Under 13 yrs)",
    cuttingStylingTime: "35min - 45min",
    cuttingStylingRate: "from £25",
    cuttingStylingLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",

  },
  {
    cuttingStylingName: "Boys (Under 13 yrs)",
    cuttingStylingTime: "35min - 40min",
    cuttingStylingRate: "from £125",
    cuttingStylingLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",

  },
  {
    cuttingStylingName: "Fringe Trim",
    cuttingStylingTime: "10min",
    cuttingStylingRate: "£12",
    cuttingStylingLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",

  },
  {
    cuttingStylingName: "Express Wash + Dry(after Colour only)",
    cuttingStylingTime: "20min",
    cuttingStylingRate: "from £8",
    cuttingStylingLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",

  },
  {
    cuttingStylingName: "Hair Up",
    cuttingStylingTime: "45min.Wash + Blow Dry not included",
    cuttingStylingRate: "from £70",
    cuttingStylingLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",

  },
  {
    cuttingStylingName: "Hair-Up Consultation",
    cuttingStylingTime: "15min",
    cuttingStylingRate: "£0 Save 100%",
    cuttingStylingLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",

  },


];

export default function CuttingStyling() {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (cuttingStyling) => {
    setModalContent(cuttingStyling);
    setShow(true);
  };

  return (
    <>
      <div className="service">

        <div className="DecService_color">
          {CuttingStylingData.map((cuttingStyling, index) => (
                  <Link className="text-dark" onClick={() => handleShow(cuttingStyling)}>
            <div className="Dec_Service_Secone" key={index}>
              <div className="Color_cons">
                <div className="consultation">
                  <h4>{cuttingStyling.cuttingStylingName}</h4>
                  <span>{cuttingStyling.cuttingStylingTime}</span>
                  <text>{cuttingStyling.cuttingStylingRate}</text>
                </div>
              </div>
              <div className="Add_Button">
                <Link to="" className="SBtn">
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
                  <div className="consultations ">
                    <h1 >{modalContent.cuttingStylingName}</h1>
                    <span>{modalContent.cuttingStylingTime}</span>
                    <p>{modalContent.cuttingStylingRate}</p>
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

    </div >

    </>
  )
}

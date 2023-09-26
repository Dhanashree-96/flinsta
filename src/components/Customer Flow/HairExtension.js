import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-languages-select/css/react-languages-select.css";

const HairExtensionData = [
  {
    hairExtensionName: "Hair Extensions Consultation",
    hairExtensionTime: "30min",
    hairExtensionRate: "£0 save 100%",
    hairExtensionLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    hairExtensionName: "Hair Extensions Application",
    hairExtensionTime: "1h - 1h 45min",
    hairExtensionRate: "from £129",
    hairExtensionLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    hairExtensionName: "Hair Extensions Removal + Conditioning Care Package",
    hairExtensionTime: "1h 15min",
    hairExtensionRate: "£85",
    hairExtensionLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },

];

export default function HairExtension() {
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
          {HairExtensionData.map((hairExtension, index) => (
            <Link className="text-dark" onClick={() => handleShow(hairExtension)}>
              <div className="Dec_Service_Secone" key={index}>
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>{hairExtension.hairExtensionName}</h4>
                    <span>{hairExtension.hairExtensionTime}</span>
                    <text>{hairExtension.hairExtensionRate}</text>
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
                <Modal.Header closeButton >
                  <div className="consultations">
                    <h1>{modalContent.hairExtensionName}</h1>
                    <span>{modalContent.hairExtensionTime}</span>
                    <p>{modalContent.hairExtensionRate}</p>
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
  )
}

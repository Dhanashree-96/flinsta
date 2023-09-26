import React from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-languages-select/css/react-languages-select.css";
import { useState } from 'react';

const FaceData = [
  {
    faceName: "Facial Consultation",
    faceTime: "15min",
    faceRate: "free",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    faceName: "Medik8 Natural Enzyme Facial",
    faceTime: "30min",
    faceRate: "from £52",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    faceName: "Medik8 Advanced AHA Skin Renewal Facial",
    faceTime: "30min",
    faceRate: "£52",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    faceName: "Medik8 Deluxe Anti-ageing Facial",
    faceTime: "1h",
    faceRate: "£74",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    faceName: "Medik8 Sensitive PHA Peel",
    faceTime: "45min",
    faceRate: "£69",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    faceName: "Caci Non-surgical Face Lift",
    faceTime: "30min - 1h",
    faceRate: "from £37",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    faceName: "Medik8 REwind Peel",
    faceTime: "45min",
    faceRate: "£69",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    faceName: "Medik8 Even Peel",
    faceTime: "45min",
    faceRate: "£69",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    faceName: "Medik8 Clarity Peel",
    faceTime: "45min",
    faceRate: "£69",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    faceName: "Medik8 Eye Reveal Peel",
    faceTime: "30min",
    faceRate: "£37",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    faceName: "Microneedling",
    faceTime: "1h.2 services",
    faceRate: "£165",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    faceName: "Modelling Facemask",
    faceTime: "10min",
    faceRate: "£10",
    faceLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },

];

export default function Face() {
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
            {FaceData.map((face, index) => (
            <Link className="text-dark" onClick={() => handleShow(face)}>
              
              <div className="Dec_Service_Secone" key={index}>
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>{face.faceName}</h4>
                    <span>{face.faceTime}</span>
                    <text>{face.faceRate}</text>
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
                    <h1>{modalContent.faceName}</h1>
                    <span>{modalContent.faceTime}</span>
                    <p>{modalContent.faceRate}</p>
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

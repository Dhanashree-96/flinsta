import React from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-languages-select/css/react-languages-select.css";
import { useState } from 'react';

const FeetData = [
  {
    feetName: "Classic Pedicure",
    feetTime: "1h",
    feetRate: "from £45",
    feetLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    feetName: "Express Pedicure",
    feetTime: "15min - 20min",
    feetRate: "£20",
    feetLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    feetName: "Shellac Pedicure",
    feetTime: "1h -1h 15min",
    feetRate: "from £50",
    feetLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    feetName: "Express Shellac Pedicure",
    feetTime: "50min",
    feetRate: "£42",
    feetLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    feetName: "Shellac Pedicure Application",
    feetTime: "50min",
    feetRate: "£40",
    feetLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    feetName: "Shellac Removal",
    feetTime: "15min",
    feetRate: "£10",
    feetLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    feetName: "Shellac / Gel Repair",
    feetTime: "10min",
    feetRate: "£5",
    feetLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },


];


export default function Feet() {
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
            {FeetData.map((feet, index) => (
            <Link className="text-dark" onClick={() => handleShow(feet)}>
              <div className="Dec_Service_Secone" key={index}>
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>{feet.feetName}</h4>
                    <span>{feet.feetTime}</span>
                    <text>{feet.feetRate}</text>
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
                    <h1>{modalContent.feetName}</h1>
                    <span>{modalContent.feetTime}</span>
                    <p>{modalContent.feetRate}</p>
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

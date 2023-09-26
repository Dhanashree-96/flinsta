import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-languages-select/css/react-languages-select.css";

const LashesBrowsData = [
  {
    lashesBrowsName: "Lash Lift + Tint",
    lashesBrowsTime: "45min",
    lashesBrowsRate: "£54",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    lashesBrowsName: "Lash Lift",
    lashesBrowsTime: "40min",
    lashesBrowsRate: "£43",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    
    lashesBrowsName: "Lash Tint",
    lashesBrowsTime: "20min",
    lashesBrowsRate: "£20",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    lashesBrowsName: "Classic Individual Lash Extension",
    lashesBrowsTime: "1h 15min",
    lashesBrowsRate: "£86",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    lashesBrowsName: "Mixed Lash Extension",
    lashesBrowsTime: "1h 30min",
    lashesBrowsRate: "£107",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    lashesBrowsName: "Lash Volume Extenstions",
    lashesBrowsTime: "1h 20min",
    lashesBrowsRate: "£128",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    lashesBrowsName: "Lash Extenstions Top-up",
    lashesBrowsTime: "1h",
    lashesBrowsRate: "£64",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    lashesBrowsName: "Brow Lamination",
    lashesBrowsTime: "30min",
    lashesBrowsRate: "£27",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    lashesBrowsName: "Brow Shape",
    lashesBrowsTime: "15min",
    lashesBrowsRate: "£16",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    lashesBrowsName: "Brow Tint",
    lashesBrowsTime: "15min",
    lashesBrowsRate: "£15",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    lashesBrowsName: "Bow Tint + Lash Tint",
    lashesBrowsTime: "30min",
    lashesBrowsRate: "£29",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    lashesBrowsName: "Brow shape + Brow tint",
    lashesBrowsTime: "30min",
    lashesBrowsRate: "£29",
    lashesBrowsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
 

];

export default function LashesBrows() {
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
            {LashesBrowsData.map((lashesBrows, index) => (
            <Link className="text-dark" onClick={() => handleShow(lashesBrows)}>
              <div className="Dec_Service_Secone">
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>{lashesBrows.lashesBrowsName}</h4>
                    <span>{lashesBrows.lashesBrowsTime}</span>
                    <text>{lashesBrows.lashesBrowsRate}</text>
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
                    <h1>{modalContent.lashesBrowsName}</h1>
                    <span>{modalContent.lashesBrowsTime}</span>
                    <p>{modalContent.lashesBrowsRate}</p>
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

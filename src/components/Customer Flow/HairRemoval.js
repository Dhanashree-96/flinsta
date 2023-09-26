import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-languages-select/css/react-languages-select.css";

const HairRemovalData = [
  {

    hairRemovalName: "Buttocks Waxing",
    hairRemovalTime: "20min.Female only",
    hairRemovalRate: "£20",
    hairRemovalLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    hairRemovalName: "Hollywood Waxing",
    hairRemovalTime: "35min-35min",
    hairRemovalRate: "£43",
    hairRemovalLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    hairRemovalName: "Brazillian Waxing",
    hairRemovalTime: "30min",
    hairRemovalRate: "£37",
    hairRemovalLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    hairRemovalName: "Chest + Abs Waxing",
    hairRemovalTime: "30min",
    hairRemovalRate: "£37",
    hairRemovalLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    hairRemovalName: "Upper Chest Waxing",
    hairRemovalTime: "30min",
    hairRemovalRate: "£30",
    hairRemovalLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    hairRemovalName: "Back, Nexk + Shoulders Waxing",
    hairRemovalTime: "30min",
    hairRemovalRate: "£37",
    hairRemovalLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    hairRemovalName: "Full Leg Waxing",
    hairRemovalTime: "45min",
    hairRemovalRate: "£35",
    hairRemovalLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    hairRemovalName: "3/4 Leg Waxing",
    hairRemovalTime: "30min",
    hairRemovalRate: "£27",
    hairRemovalLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    hairRemovalName: "1/2 Leg Waxing",
    hairRemovalTime: "20min - 30min",
    hairRemovalRate: "£20",
    hairRemovalLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    hairRemovalName: "Bikini Waxing",
    hairRemovalTime: "15min - 20min",
    hairRemovalRate: "from £20",
    hairRemovalLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    hairRemovalName: "Full Arm  Waxing",
    hairRemovalTime: "30min",
    hairRemovalRate: "£27",
    hairRemovalLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  
];

export default function HairRemoval() {
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
            {HairRemovalData.map((hairRemoval, index) => (
            <Link className="text-dark" onClick={() => handleShow(hairRemoval)}>
              <div className="Dec_Service_Secone" key={index}> 
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>{hairRemoval.hairRemovalName} </h4>
                    <span>{hairRemoval.hairRemovalTime}</span>
                    <text>{hairRemoval.hairRemovalRate}</text>
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
                    <h1>{modalContent.hairRemovalName}</h1>
                    <span>{modalContent.hairRemovalTime}</span>
                    <p>{modalContent.hairRemovalRate}</p>
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

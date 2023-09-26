import React from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-languages-select/css/react-languages-select.css";
import { useState } from 'react';

const HairTreatmentsData = [
  {
    hairTreatmentsName: "k18 Mist & Mask",
    hairTreatmentsTime: "10min",
    hairTreatmentsRate: "£35",
    hairTreatmentsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    hairTreatmentsName: "Olaplex Colour Express",
    hairTreatmentsTime: "15min",
    hairTreatmentsRate: "£35",
    hairTreatmentsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    hairTreatmentsName: "Olaplex Experience (includes Wash + Blow Dry)",
    hairTreatmentsTime: "1h 15min",
    hairTreatmentsRate: "from £85",
    hairTreatmentsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    hairTreatmentsName: "Kevin Murphy Experience (KMCX) Protein Treatment",
    hairTreatmentsTime: "10min",
    hairTreatmentsRate: "£24",
    hairTreatmentsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    hairTreatmentsName: "Kevin Murphy Experience: Scalp Spa Treatment",
    hairTreatmentsTime: "20min",
    hairTreatmentsRate: "£29",
    hairTreatmentsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    hairTreatmentsName: "Kevin Murphy Hydrate Me Masue",
    hairTreatmentsTime: "10min",
    hairTreatmentsRate: "£10",
    hairTreatmentsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    hairTreatmentsName: "Kevin Murphy Young Again Masue",
    hairTreatmentsTime: "10min",
    hairTreatmentsRate: "£10",
    hairTreatmentsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    hairTreatmentsName: "Re:Nanokeratin(inculdes Wash + Blow Dry)",
    hairTreatmentsTime: "2h 30min - 4h 30min",
    hairTreatmentsRate: "from £195",
    hairTreatmentsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    hairTreatmentsName: "Re:Nanokeratin Express",
    hairTreatmentsTime: "45min",
    hairTreatmentsRate: "£89",
    hairTreatmentsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {
    hairTreatmentsName: "Epres",
    hairTreatmentsTime: "15min",
    hairTreatmentsRate: "£35",
    hairTreatmentsLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },

];

export default function HairTreatments() {
  // modal from functionality
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (hairTreatments) => {
    setModalContent(hairTreatments);
    setShow(true);
  };

  return (
    <>
      <div className="service">

        <div className="DecService_color">
          {HairTreatmentsData.map((hairTreatments, index) => (
            <Link className="text-dark" onClick={() => handleShow(hairTreatments)}>
              <div className="Dec_Service_Secone" key={index}>
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>{hairTreatments.hairTreatmentsName}</h4>
                    <span>{hairTreatments.hairTreatmentsTime}</span>
                    <text>{hairTreatments.hairTreatmentsRate}</text>
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
                  <div className="consultations">
                    <h1>{modalContent.hairTreatmentsName}</h1>
                    <span>{modalContent.hairTreatmentsTime}</span>
                    <p>{modalContent.hairTreatmentsRate}</p>
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

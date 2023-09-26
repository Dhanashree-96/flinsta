import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-languages-select/css/react-languages-select.css";

const PackagesOffersData = [
  {

    packagesOffersName: "Decadent Weekend Package",
    packagesOffersTime: "1h 55min.4 services",
    packagesOffersRate: "£100 Save 28%",
    packagesOffersLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    packagesOffersName: "Manicure + Wass, cut + Blowdry",
    packagesOffersTime: "1h - 1h 15min.2 service",
    packagesOffersRate: "from £99",
    packagesOffersLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },
  {

    packagesOffersName: "Hair & Nail Obsession",
    packagesOffersTime: "1h - 1h 15min.2 service",
    packagesOffersRate: "from £99",
    packagesOffersLink: "",
    description: "A free consultation for advice and planning before you choose your colour service. All new clients are required to have a patch test at least 48 hours prior to a colouring service. If you need to reschedule or cancel your consultation appointment, you can do this for free up to 48 hours before. Please be aware we charge a late cancellation fee of £6.00 for cancelling within 48 hours of the consultation or £10.00 for non-attendance.",
  },



];


export default function PackagesOffers() {
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
          {PackagesOffersData.map((packagesOffers, index) => (
            <Link className="text-dark" onClick={() => handleShow(packagesOffers)}>
              <div className="Dec_Service_Secone" key={index}>
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>{packagesOffers.packagesOffersName}</h4>
                    <span>{packagesOffers.packagesOffersTime}</span>
                    <text>{packagesOffers.packagesOffersRate}</text>
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
                    <h1>{modalContent.packagesOffersName}</h1>
                    <span>{modalContent.packagesOffersTime}</span>
                    <p>{modalContent.packagesOffersRate}</p>
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

import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-languages-select/css/react-languages-select.css";
import ColorHighlightsData from "../../assets/Data/ColorHighlightsData";


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

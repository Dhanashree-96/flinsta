import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Select from "react-select"; // Import react-select
import "react-languages-select/css/react-languages-select.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/1234 1.png";

const Header = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const languages = [
    "English", "Spanish", "French", "German", "Italian",
    "Japanese", "Chinese", "Russian", "Portuguese", "Korean",
    "Arabic", "Hindi"
  ];

  const openLanguageSelector = () => {
    setShowLanguageSelector(true);
  };

  const closeLanguageSelector = () => {
    setShowLanguageSelector(false);
  };

  const handleSave = () => {
    closeLanguageSelector();
  };

  // Step 2: Define options in the format expected by react-select
  const languageOptions = languages.map((language) => ({
    value: language,
    label: language,
  }));

  // Step 3: Define a function to handle language selection
  const handleLanguageChange = (selectedOption) => {
    setSelectedLanguage(selectedOption.value); // Update the selected language
  };

  return (
    <>
      <div className="headerDiv">
        <div className="headerLogoDiv">
          <img src={logo} className="headerLogo" alt="Brand logo" />
        </div>
        <div className="headerBtnDiv">
          <input type="checkbox" className="menuCheckBox" id="dropdown" />
          <label htmlFor="dropdown" className="dropdown-btn">
            <span>Menu</span>
          </label>
          <ul className="dropdown-content" role="menu">
            <div className="dropdown-backg">
              <li>
                <Link to="/allLogin" className="menu_label">
                  <text className="menucontent">Log in</text>
                </Link>
              </li>
              
              <li>
                <Link to="" className="menu_label">
                  <text className="menucontent">Download the app</text>
                </Link>
              </li>
              <li>
                <div className="language-selector">
                  
                    <Link to=" "  className="menu_label">
                   
                      <div onClick={openLanguageSelector} className="menucontent">
                        {selectedLanguage || "Select Language"} 
                      </div>
                    </Link>
                 
                </div>
              </li>
              <li>
                <Link to="/partnerForm" className="menu_label">
                  <text className="menucontent">For Business</text>
                </Link>
              </li>
              <li>
                <Link to="/adminPanel" className="menu_label">
                  <text className="menucontent">Admin Login</text>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <Modal show={showLanguageSelector} onHide={closeLanguageSelector}>
        <Modal.Header closeButton>
          <h3 className="headerpopheading">Choose a language</h3>
        </Modal.Header>
        <Modal.Body>
          Set your preferred language for the best Fresha experience
        </Modal.Body>
        <div className="languagepopsec1">
          <p className="languageheaduingdiv">Language</p>
          <div className="language-select-container">
            <Select
              value={{ value: selectedLanguage, label: selectedLanguage }}
              onChange={handleLanguageChange}
              options={languageOptions}
            />
          </div>
          <Modal.Footer>
            <Button
              variant="dark text-capitalize"
              onClick={handleSave}
            >
              Save
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default Header;
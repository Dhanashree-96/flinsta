import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import logo from "../../assets/images/1234 1.png"

const AdminHeader = () => {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Japanese",
    "Chinese",
    "Russian",
    "Portuguese",
    "Korean",
    "Arabic",
    "Hindi",
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

  const [searchActive, setSearchActive] = useState(false);
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        setSearchActive(false); // Hide the search bar when Enter is pressed
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    setSearchActive(false); // Hide the search bar after search
    // Add your search logic here (e.g., fetching search results)
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    // Header content, e.g., user profile, notifications, etc.
    <>
      <header className="headeradmin">
        <div className="adminLogo">
          <img src={logo}></img>
        </div>

        <div className="adminHeadList">
          <div className="menu-icon">
            <BsJustify className="iconHeader" />
          </div>
          <div className='header-left'>
            <BsSearch className='iconHeader' />
          </div>
          <div className="header-right">
            <div className="adminheaderprofile">
              <BsFillBellFill className="iconHeader" />
            </div>

            <div className="adminheaderprofile">
              <BsFillEnvelopeFill className="iconHeader" />
            </div>
          </div>

          <div className="adminheaderprofile">
            <input type="checkbox" className="menuCheckBox" id="dropdown" />
            <label htmlFor="dropdown" className="dropdown-btn">
              <BsPersonCircle className="iconHeader" />
            </label>
            <ul className="admindropdown-content" role="profile">
              <div className="dropdown-backg">
                <li>
                  <Link to="" className="menu_label">
                    <span className="adminmenucontent">Profile</span>
                  </Link>
                </li>

                <li>
                  <Link to="" className="menu_label">
                    <span className="adminmenucontent">Reviews</span>
                  </Link>
                </li>

                <li>
                  <Link to="/partnerForm" className="menu_label">
                    <span className="adminmenucontent">Setting</span>
                  </Link>
                </li>
                <li>
                  <Link to="/partnerForm" className="menu_label">
                    <span className="adminmenucontent">WorkSpaces</span>
                  </Link>
                </li>
                <hr />
                <li>
                  <Link to="" className="menu_label">
                    <span className="adminmenucontent">Help Center</span>
                  </Link>
                </li>
                <li>
                  <Link to="" className="menu_label">
                    <div className="language-selector p-0">
                      <span className="">
                        <div
                          onClick={openLanguageSelector}
                          className="adminmenucontent"
                        >
                          {selectedLanguage || "Select Language"}
                        </div>
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/partnerForm" className="menu_label">
                    <span className="adminmenucontent">Log out</span>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </header>

      {/* Modal for Language Selector */}
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
        </div>
        <Modal.Footer>
          <Button variant="dark text-capitalize" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminHeader;

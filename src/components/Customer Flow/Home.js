import React, { useState, useEffect } from 'react';
import Header from "../common/Header";
import Recomended from "../Customer Flow/Recomended";
import NewFlinsta from "../Customer Flow/NewFlinsta";
import { Link } from "react-router-dom";
import barCode from "../../assets/images/barCode.png";
import GooglePlay from "../../assets/images/Google Play logo.png";
import AppSrore from "../../assets/images/App Store logo.png";
import { IoSearch } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import line from "../../assets/images/Line.png";
import Review from "../Customer Flow/Review";
// import AppointmentHome from "./AppointmentHome";
import Footer from "../common/Footer";
import GoToTop from "../common/GoToTop";
import SearchBar from './SearchBar';

export default function Home() {
  
  return (
    <>
      <Header />

      <div className="homeDiv">
        <div className="wrapper">
          {/* text book local and wellness */}
          <div className="homeText wrapper">
            <h2>
              Beauty and grooming at your fingertips.
            </h2>
          </div>

       {/* search bar */}
       <div className="Search_Section">
            <div className="homeSearch_bar">
                <div className="input-rowsearch">

                    <div className="Search_sec">
                        <label className="Homesearch-icon-label">
                            <IoSearch className="Homesearch-icon" />
                        </label>

                        <SearchBar />

                    </div>
                    <div className="Search_sec2">
                        <img src={line} className="Search_line" alt="line" />
                    </div>
                    <div className="Search_sec">
                        <label className="Homesearch-icon-label">
                            <IoLocationSharp className="Homesearch-icon" />
                        </label>
                        <input type="text" placeholder="Current Location" className="inputsearchdiv" />
                        <Link to="" className="search_button">
                            <span className="sear_button_text">Search</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
          {/* appointments booked for today */}
          {/* <div className="appointment wrapper">
            <p>425,221 Appointments Booked Today</p>
          </div> */}

          {/* scanner */}
          <div className="scanDiv ">
            {/* partner with us */}
            <div className="partnerDiv  ">
              <div className="partnerH2">
                <h2>Are you a salon or beautician?</h2>
              </div>

              <div className="partnerLink">
                <Link to="/partnerForm" className="partnerBtn">
                  <text className="partnerText">Partner with us</text>
                </Link>
              </div>
            </div>

            {/* phone barcode scanner */}
            <div className="phnScan wrapper">
              <div className="scanBg">
                <div className="barCodeImg">
                  <img src={barCode} className="barCode" alt="bar Code" />
                </div>
                <div className="barCodeText">
                  <h2>Scan To Download</h2>
                </div>
              </div>
            </div>

            {/* Download google playstore */}
            <div className="downloadDiv ">
              <div className="downloadText">
                <h2>Download Now</h2>
              </div>
              <div className="downloadImg">
                <img src={GooglePlay} className="downloadLogo" alt="bar Code" />
                <img src={AppSrore} className="downloadLogo" alt="bar Code" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <Recomended />
      <NewFlinsta />
      <Review />
      {/* <AppointmentHome /> */}
      <Footer />
      <GoToTop />
    </>
  );
}

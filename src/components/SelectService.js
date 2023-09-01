import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import salooncolor from "../assets/images/best-hair-salons-singapore.jpg";

export default function SelectService() {
  return (
    <>
      <div className="Page1_wrapper wrapper">
        <div className="Page1_sections">
          <div className="Page1_Leftsection">
            <div className="arrow">
              <BiArrowBack className="biarrowicon" />
            </div>
            <div className="All_Leftsection">
              {/* Left Section */}

              <div className="Page1_Left">
                <div className="Select_Service">
                  <h2>Select Service</h2>
                </div>
              </div>
              <div className="Page1_colorSection">
                <Link to="" className="ColoulightsBtn2">
                  <text className="text_colorbtn">Colours + Highlights</text>
                </Link>

                <div className="CuttingStyling">
                  <text>Cutting + Styling</text> <text>Cutting + Styling</text>
                  <BsArrowRight className="ArrowRight" />
                </div>
              </div>
              <div className="ColorHighlight_text">
                <h2>Colours + Highlights</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="Page1_bottomsec">
                <div className="Color_Consultation">
                  <div className="Color_parts">
                    <div className="Color_section1">
                      <div className="Con_heading1">
                        <div className="Round">
                          <input type="checkbox" className="checkbox-round " />
                        </div>
                      </div>
                      <div className="Con_heading2">
                        <span>
                          <h3>Color Consultation</h3>
                          <text>15 min</text>

                          <div className="Con_paragraph">
                            <p>
                              {" "}
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </span>

                        <div className="Con_heading3">
                          <text>free</text>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="Color_parts1">
                    <div className="Color_section1">
                      <div className="Con_heading1">
                        <div className="Round">
                          <input
                            type="checkbox"
                            id="html"
                            name="fav_language"
                            value="HTML"
                          />
                        </div>
                      </div>
                      <div className="Con_heading2">
                        <span>
                          <h3>Air Touch/Babylights</h3>
                          <text>2h 45min</text>

                          <div className="Con_paragraph">
                            <p>
                              {" "}
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </span>

                        <div className="Con_heading3">
                          <text>~225</text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //////////////// */}
          <div className="Page1_Right">
            <div className="closeicon">
              <IoCloseSharp className="Close" />
            </div>
            <span>
              <div className="Page1_Image">
                <img src={salooncolor} className="page1_img" alt="page1_img" />
              </div>
            </span>
            <div className="Page1_RightSection">
              <div className="Page1_Boxparts">
                <div className="Page1_part1">
                  <h3>Decadence Hair & Beauty</h3>
                  <span>36 Store St, London, England</span>
                </div>
                <div className="Page1_part2">
                  <div className="sec1_part2">
                    <div className="part2sec2">
                      <text>Colour Consultation</text>
                      <span>15 min</span>
                    </div>
                    <div className="Con_heading3">
                      <span>free</span>
                    </div>
                  </div>
                </div>
                <div className="Page1_part3">
                  <h3>Total</h3>
                  <h3>free</h3>
                </div>
              </div>
            </div>
            <div className="More_Offers">
              <h3>More offers for </h3>
              <div className="Boxmoreoffers">
                <div className="BUY_voucher">
                  <p>Buy a voucher</p>
                </div>
                <div className="BUY_membership">
                  <p>Buy a membership</p>
                </div>
              </div>
            </div>
            <div className="BOOK_page1">
              <Link to="" className="page1BookBtn">
                <div className="book">Book Now</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

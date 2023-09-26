import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import GoToTop from "../common/GoToTop";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import pic from "../../assets/images/1234 1.png";

export default function PartnerForm() {
  // close icon
  const navigate = useNavigate();
  return (
    <>
      <body class="full-page-bg justify-content-center align-items-center">
        <div className="P-Formwidth bg-light p-2 pb-0 m-5  rounded shadow  justify-content-center align-items-center">
      
          <div className="partnerformpic p-1 ps-0 d-flex justify-content-between">
            <img src={pic} className="Apppic" alt="logo" />
            <div className="" onClick={() => navigate(-1)}>
            <IoCloseSharp className="Close" />
          </div>
          </div>
          <div className=" p-5  justify-content-center align-items-center">
            <h2 className=" pb-2 fs-2 text-info text-darken-xl">
              Are you interested to Partner with Flinsta ?
            </h2>
            <p>
              {" "}
              Elevate your business and connect with a community that values
              innovation and excellence. Join us in shaping the future of the
              beauty industry!
            </p>

            <form>
              <MDBRow className="row mt-4  justify-content-space-between align-items-center">
                <MDBCol className="col-sm-6">
                  <MDBInput
                    label="Salon Name"
                    type="text"
                    name="salonName"
                    className="partnercheckB"
                  />
                </MDBCol>

                <MDBCol className="col-sm-6">
                  <MDBInput
                    label="Contact Person"
                    type="text"
                    name="contactPerson"
                    className="partnercheckB"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="row mt-4  justify-content-space-between align-items-center">
                <MDBCol className="col-sm-6">
                  <MDBInput
                    label="Contact Email"
                    type="email"
                    name="contactEmail"
                    className="partnercheckB"
                  />
                </MDBCol>
                <MDBCol className="col-sm-6">
                  <MDBInput
                    label="Contact Number"
                    type="tel"
                    name="contactNumber"
                    className="partnercheckB"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="row mt-4  justify-content-space-between align-items-center">
                <MDBCol className="col-sm-6">
                  <MDBInput
                    label="Location/Address"
                    type="text"
                    name="locationAddress"
                    className="partnercheckB"
                  />
                </MDBCol>
                <MDBCol className="col-sm-6">
                  <MDBInput
                    label="Share the Google Maps Link"
                    type="text"
                    name="googleMapsLink"
                    className="partnercheckB"
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="row mt-4  justify-content-space-between align-items-center">
                <MDBCol className="col-sm-6">
                  <label>Years in Business:</label>
                  <select
                    className="browser-default custom-select"
                    name="yearsInBusiness"
                  >
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="4-6 years">4-6 years</option>
                    <option value="7+ years">7+ years</option>
                  </select>
                </MDBCol>
                <MDBCol className="col-sm-6">
                  <label>Number of Stylists/Professionals:</label>
                  <select
                    className="browser-default custom-select"
                    name="numOfStylists"
                  >
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-20">11-20</option>
                    <option value="20+">20+</option>
                  </select>
                </MDBCol>
              </MDBRow>
              <MDBRow className=" partnerCB row mt-4 justify-content-start align-items-center">
                <label pb-5>Services Offered :</label>
                <MDBCol className="col-sm-10 d-flex flex-wrap ">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3  fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Hair
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Makeup
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Nails
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="flexCheckChecked"
                    >
                      Skin Care
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="flexCheckChecked"
                    >
                      Other
                    </label>

                    <input
                      type="text"
                      placeholder="Please specify "
                      name="pleasespecify"
                      className="exampleFormControlTextarea1 bg-light w-75"
                    />
                  </div>
                </MDBCol>
              </MDBRow>

              <MDBRow className=" partnerCB row mt-4 justify-content-start align-items-center">
                <label pb-5>
                  Are you familiar with AI and AR technologies?{" "}
                </label>
                <MDBCol className="col-sm-10 d-flex flex-wrap ">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3  fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Yes
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Somewhat
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      No
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>

              <MDBRow className=" partnerCB row mt-4 justify-content-start align-items-center">
                <label pb-5>
                  Have you worked with online platforms before? If yes, please
                  provide details:
                </label>
                <MDBCol className="col-sm-10 d-flex flex-wrap ">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3  fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Yes, on [
                      <input
                        type="text"
                        placeholder=" Platform Name "
                        name="platformname"
                        className="platformpurpose border-0 bg-light w-25"
                      />
                      ] for [{" "}
                      <input
                        type="text"
                        placeholder="Purpose"
                        name="purpose"
                        className="purposebox border-0 bg-light "
                      />
                      ]
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      No, this is our first online venture
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className=" partnerCB row mt-4 justify-content-start align-items-center">
                <label pb-5>
                  What is your preferred method of customer engagement and
                  communication?{" "}
                </label>
                <MDBCol className="col-sm-10 d-flex flex-wrap ">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3  fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Social media
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Email newsletters
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Text messages
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="flexCheckChecked"
                    >
                      Phone calls
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="flexCheckChecked"
                    >
                      In-salon interactions
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className=" partnerCB row mt-4 justify-content-start align-items-center">
                <label pb-5>
                  Are you open to offering exclusive deals through our platform?
                </label>
                <MDBCol className="col-sm-10 d-flex flex-wrap ">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3  fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Yes
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      No
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className=" partnerCB row mt-4 justify-content-start align-items-center">
                <label>
                  How do you prioritize customer satisfaction in your salon?
                </label>
                <MDBCol className="col-sm-10 d-flex flex-wrap ">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3  fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Listening to customer feedback
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Tailoring services to individual needs
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Providing a comfortable and welcoming atmosphere
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="flexCheckChecked"
                    >
                      Other
                    </label>

                    <input
                      type="text"
                      placeholder="Please specify "
                      name="pleasespecify"
                      className="exampleFormControlTextarea1 bg-light w-75"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className=" partnerCB row mt-4 justify-content-start align-items-center">
                <label>
                  What motivated you to consider joining our aggregator
                  platform?
                </label>
                <MDBCol className="col-sm-10 d-flex flex-wrap ">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3  fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Access to a wider customer base
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Embracing technological innovation
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Collaborating with like-minded professionals
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className=" partnerCB row mt-4 justify-content-start align-items-center">
                <label>
                  Are you excited about the possibility of expanding your client
                  base through technology?
                </label>
                <MDBCol className="col-sm-10 d-flex flex-wrap ">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3  fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Very excited
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Somewhat excited
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Neutral
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="flexCheckChecked"
                    >
                      Not excited
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className=" partnerCB row mt-4 justify-content-start align-items-center">
                <label>
                  Would you be interested in participating in promotional events
                  or collaborations?
                </label>
                <MDBCol className="col-sm-10 d-flex flex-wrap ">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3  fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      Yes
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label me-3 fs-6 fw-normal"
                      for="inlineCheckbox1"
                    >
                      No
                    </label>
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow className=" row mt-4 justify-content-start align-items-center">
                <label>
                  Is there any additional information you'd like to share with
                  us?
                </label>
                <MDBRow>
                  <div class="form-outline mb-4">
                    <MDBTextArea
                      label="Listening to customers feedback"
                      className="Ptextarea"
                      id="form4Example3"
                      rows="4"
                    />
                  </div>
                </MDBRow>
              </MDBRow>

              <div className="mt-5 text-center">
                <MDBBtn type="submit">Submit</MDBBtn>
              </div>
            </form>
          </div>
        </div>
      </body>
      <GoToTop />
    </>
  );
}

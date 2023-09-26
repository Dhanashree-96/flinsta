import React from "react";
import { MDBContainer, MDBCol, MDBRadio, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import BusinessServicesData from "../../../assets/Data/BusinessServicesData";

export default function BusinessTeamSize() {
  // close icon
  const navigate = useNavigate();
  return (
    <>
      <div className="p-3 mb-3 d-flex justify-content-between border-bottom align-items-center">
        <Link to="" className=" " onClick={() => navigate(-1)}>
          Previous
        </Link>

        <Link to="/setLocation" className="text-white ">
        <MDBBtn className="bg-black text-capitalize">
            Next step
        </MDBBtn>
        </Link>

      </div>
      <body class="businesnamediv w-100 d-flex justify-content-center align-item-center">
        <MDBContainer className="w-100 d-flex  justify-content-center align-item-center">
          <MDBCol className="col-sm-6   d-flex  justify-content-center align-item-center">
            <div className="  w-100  pb-5">
              <p className="text-center fs-7 text-muted">Account setup</p>

              <h2 className="loginformtext fs-3 fw-bold text-center ">
                What's your team size?
              </h2>
              <p className="loginformtext px-3 text-center ">
                This will help us set up your calendar correctly. Don't worry,
                this doesn't change the price - you can have unlimited team
                members for free on Flinsta!
              </p>
              <div className="w-100 px-5 py-2  d-flex flex-column justify-content-center align-item-center">
                <div className="px-5 py-3  d-flex border border-all rounded flex-column justify-content-center align-item-center">
                  <MDBRadio
                    className="flexRadioDefault my-1 "
                    id="flexRadioDefault1"
                    label="it's just me"
                    name="group1"
                  />
                  <MDBRadio
                    className="flexRadioDefault my-1"
                    id="flexRadioDefault2"
                    label="2-5 people"
                    name="group1"
                  />
                  <MDBRadio
                    className="flexRadioDefault my-1"
                    id="flexRadioDefault3"
                    label="6-10 people"
                    name="group1"
                  />
                  <MDBRadio
                    className="flexRadioDefault my-1"
                    id="flexRadioDefault4"
                    label="11+ people"
                    name="group1"
                  />
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBContainer>
      </body>
    </>
  );
}

import React from "react";
import { MDBContainer, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import BusinessServicesData from "../../../assets/Data/BusinessServicesData";

export default function BusinessServices() {
  // close icon
  const navigate = useNavigate();
  return (
    <>
      <div className="p-3 mb-3 d-flex justify-content-between border-bottom align-items-center">
        <Link to="" className=" " onClick={() => navigate(-1)}>
          Previous
        </Link>
        <Link to="/businessTeamSize" className="text-white ">
          <MDBBtn className="bg-black text-capitalize">Next step</MDBBtn>
        </Link>
      </div>
      <body class="businesnamediv w-100 d-flex justify-content-center align-item-center">
        <MDBContainer className="w-100 d-flex  justify-content-center align-item-center">
          <MDBCol className="col-sm-6   d-flex  justify-content-center align-item-center">
            <div className="  w-100  pb-5">
              <p className="text-center fs-7 text-muted">Account setup</p>

              <h2 className="loginformtext fs-3 fw-bold text-center ">
                What services do you offer?
              </h2>
              <h2 className="loginformtext fs-6  text-center px-5">
                Choose your primary and up to 3 related service types
              </h2>
              <div className="w-100 d-flex flex-column justify-content-center align-item-center">
                <div className="d-flex flex-row flex-wrap w-100">
                  {BusinessServicesData.map((businessServices, index) => (
                    <div
                      className="border d-flex serviceIcon justify-content-start"
                      key={index}
                    >
                      <div className="fs-5 me-1">
                        {businessServices.businessServiceIcon}
                      </div>
                      <p className="mb-0">
                        {businessServices.businessServiceName}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBContainer>
      </body>
    </>
  );
}

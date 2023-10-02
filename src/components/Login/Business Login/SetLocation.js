import React from "react";
import { MDBContainer, MDBCol, MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { BiMap } from "react-icons/bi";

export default function SetLocation() {
  // close icon
  const navigate = useNavigate();
  return (
    <>
      <div className="p-3 mb-3 d-flex justify-content-between border-bottom align-items-center">
        <Link to="" className=" " onClick={() => navigate(-1)}>
          Previous
        </Link>
        <Link to="/businessSoftware" className="text-white ">
          <MDBBtn className="bg-black text-capitalize">Next step</MDBBtn>
        </Link>
      </div>
      <body className="businesnamediv   d-flex justify-content-center align-item-center">
        <MDBContainer className="d-flex  justify-content-center align-item-center">
          <MDBCol className="col-sm-6   d-flex  justify-content-center align-item-center">
            <div className=" d-flex flex-column   w-100 px-3 pb-5">
              <p className="text-center fs-7 text-muted">Account setup</p>

              <h2 className="loginformtext fs-3 fw-bold text-center ">
                Set your location
              </h2>
              <h2 className="loginformtext fs-6  text-center px-5">
                Add your bussiness location so your clients can easily find you.
              </h2>
              <div className="border border-all rounded d-flex flex-column justify-content-center align-item-center mt-2">
                <h5 className="fw-1 fw-bold px-5 py-3 d-flex align-content-center m-0">Business Location</h5>
                <div className=" border-top  d-flex flex-column justify-content-center align-item-center">
                  <div className=" p-4 d-flex flex-column justify-content-center align-item-center">
                    <div className="location d-flex flex-row flex-column ">
                      <label className="control-label " for="email">
                        <text className="fs-5">
                          {" "}
                          Where's your business located?
                        </text>
                      </label>
                      <div className="input-group locationdiv_border mt-2">
                        <div className="input-group-addon border px-2">
                          <BiMap className="bimapicon text-center" />
                        </div>
                        <input
                          className="form-control border"
                          id="location"
                          name="location"
                          type="text"
                        />
                      </div>
                      <div className="setloccheckbox mt-4  d-flex flex-column text-muted">
                        <MDBCheckbox
                          className="flexCheck "
                          value=""
                          id="flexCheckDefault"
                          label="I don't have a business address (mobile and online services only)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBContainer>
      </body>
    </>
  );
}

import React from "react";
import { MDBContainer, MDBCol, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

export default function BusinessName() {
  // close icon  
  const navigate = useNavigate();

  return (
    <>
      <div className="p-3 mb-3 d-flex justify-content-between border-bottom align-items-center">
      <Link to="" className=" " onClick={() => navigate(-1)}>
          Previous
        </Link>
        <Link to="/businessServices" className=" text-capitalize">
        <MDBBtn className="bg-black">
            <text className=" text-white  text-capitalize">Next step</text>
        </MDBBtn>
        </Link>

      </div>
      <body className="businesnamediv   d-flex justify-content-center align-item-center">
        <MDBContainer className="   d-flex  justify-content-center align-item-center">
          <MDBCol className="col-sm-6   d-flex  justify-content-center align-item-center">
            <div className="    w-100 px-3 pt-4 pb-5">
              <p className="text-center fs-7 text-muted">Account setup</p>

              <h2 className="loginformtext fs-3 fw-bold text-center ">
                What's your business name?
              </h2>
              <h2 className="loginformtext fs-6  text-center px-5">
                This is the brand name your clients will see. your billing and legal name can be added later.
              </h2>
              <div className="px-5 d-flex border border-all rounded flex-column justify-content-center align-item-center">
                <MDBInput
                  wrapperClass="px-5 my-4 "
                  label="Business name"
                  id=""
                  type="text"
                />
                <MDBInput
                  wrapperClass="px-5 mb-4"
                  label="Website (Optional)"
                  id=""
                  type="text"
                />
              </div>
            </div>
          </MDBCol>
        </MDBContainer>
      </body>
    </>
  );
}

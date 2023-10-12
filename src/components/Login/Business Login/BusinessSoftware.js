import React from "react";
import { MDBContainer, MDBCol, MDBRadio, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

const softwaredetails = [
  {
    businessSoftwareName: "Aculty",
  },
  { businessSoftwareName: "Booksy" },
  { businessSoftwareName: "Janeapp" },
  { businessSoftwareName: "Kitomba" },
  { businessSoftwareName: "Squaro" },
  { businessSoftwareName: "Mindbody" },
  { businessSoftwareName: "Ovatu" },
  { businessSoftwareName: "Phorest" },
  { businessSoftwareName: "Salon Iris" },
  { businessSoftwareName: "Shortcuts" },
  { businessSoftwareName: "Treatwell" },
  { businessSoftwareName: "Squire" },
  { businessSoftwareName: "Styleseat" },
  { businessSoftwareName: "Timely" },
  { businessSoftwareName: "Vagaro" },
  { businessSoftwareName: "Zenoti" },
  { businessSoftwareName: "I'm not using any software" },
  { businessSoftwareName: "Other" },
];
export default function BusinessSoftware() {
  // close icon
  const navigate = useNavigate();
  return (
    <>
      <div className="p-3 mb-3 d-flex justify-content-between border-bottom align-items-center">
        <Link to="" className=" " onClick={() => navigate(-1)}>
          Previous
        </Link>

        <Link to="/hearFlinsta" className="text-white ">
          <MDBBtn className="bg-black text-capitalize">Next step</MDBBtn>
        </Link>
      </div>
      <body className="businesnamediv w-100 d-flex justify-content-center align-item-center">
        <MDBContainer className="w-100 d-flex  justify-content-center align-item-center">
          <MDBCol className="col-sm-6   d-flex  justify-content-center align-item-center">
            <div className="  w-100  pb-5">
              <p className="text-center fs-7 text-muted">Account setup</p>

              <h2 className="loginformtext fs-3 fw-bold text-center ">
                What software are you currently using?
              </h2>
              <p className="loginformtext px-3 text-center ">
                If you're looking to switch, we can help speed up your business
                setup and import your data into your new Flinsta account.
              </p>
              <div className="w-100 businessmain-div py-2  d-flex flex-column justify-content-center align-item-center">
                <div className="px-5 py-3  d-flex border border-all rounded flex-column justify-content-center align-item-center">
                  {softwaredetails.map((busineSoftware, index) => (
                    <div key={index} className="py-2">
                      <MDBRadio
                        className="flexRadioDefault my-1 "
                        id=""
                        label={busineSoftware.businessSoftwareName}
                        name="group1"
                      />
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
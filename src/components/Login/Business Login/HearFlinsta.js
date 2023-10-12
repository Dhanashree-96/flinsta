import React from "react";
import { MDBContainer, MDBCol, MDBRadio, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

const aboutFlinsta = [

  { HearFlinsta: "Recommended by a friend" },
  { HearFlinsta: "Search engine(e,g Google, ning)" },
  { HearFlinsta: "Social media" },
  { HearFlinsta: "Advert in the mail" },
  { HearFlinsta: "Magazine ad" },
  { HearFlinsta: "Ratings website(e.g. Capterra, trustpilot)" },
  { HearFlinsta: "Other" },
];
export default function HearFlinsta() {
  // close icon
  const navigate = useNavigate();
  return (
    <>
      <div className="p-3 mb-3 d-flex justify-content-between border-bottom align-items-center">
        <Link to="" className=" " onClick={() => navigate(-1)}>
          Previous
        </Link>

        <Link to="" className="text-white ">
          <MDBBtn className="bg-black text-capitalize">Done</MDBBtn>
        </Link>
      </div>
      <body className="businesnamediv w-100 d-flex justify-content-center align-item-center">
        <MDBContainer className="w-100 d-flex  justify-content-center align-item-center">
          <MDBCol className="col-sm-6   d-flex  justify-content-center align-item-center">
            <div className="  w-100  pb-5">
              <p className="text-center fs-7 text-muted">Account setup</p>

              <h2 className="loginformtext fs-3 fw-bold text-center ">
            How did you hear about Flinsta?
              </h2>
  
              <div className="w-100 businessmain-div py-2  d-flex flex-column justify-content-center align-item-center">
                <div className="business-div py-3  d-flex border border-all rounded flex-column justify-content-center align-item-center">
                  {aboutFlinsta.map((hearBusiness, index) => (
                    <div key={index} className="py-2">
                      <MDBRadio
                        className="flexRadioDefault my-1 "
                        id=""
                        label={hearBusiness.HearFlinsta}
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
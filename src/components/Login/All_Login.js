import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import { BiArrowBack } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineSupport } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/1234 1.png";


export default function All_Login() {
  const navigate = useNavigate();
  return (
    <body class="partnerbodyDiv full-page-bg d-flex flex-column pt-0 mt-0 ">
      <div className="p-3 d-flex justify-content-start align-items-start bg-white">
        <img src={logo} className="loginpic " alt="logo" />
      </div>
      <div className="px-5 py-3 backArrowlogin" onClick={() => navigate(-1)}>
        <BiArrowBack className="backLogin fs-2 text-dark d-flex justify-content-start align-items-start" />
      </div>

      <MDBContainer className="alllogin-container d-flex flex-column justify-content-center align-items-center ">
        <h1 className="text-center mb-5 text-white">Log in or Sign Up</h1>
        <div className="rounded d-flex flex-column justify-content-center align-items-center">
          <MDBCol className="alllog-colundiv rounded px-5 mb-5 col-lg-12 bg-light shadow d-flex flex-column justify-content-center">
            <Link to="/login" className="logforaEveryone ">
              <text className="alllogincontent text-dark">
                <MDBRow>
                  <MDBCol className="col-lg-9 ">
                    <h2>For Salon Customer</h2>
                    <span className="me-5 ">Book salons and spas near you</span>
                  </MDBCol>
                  <MDBCol className="col-lg-3 ">
                    <IoIosArrowRoundForward className="mx-5  mt-3 fs-1  " />
                  </MDBCol>
                </MDBRow>{" "}
              </text>
            </Link>
          </MDBCol>

          <MDBCol className="alllog-colundiv rounded px-5 mb-5 col-lg-12  bg-dark  shadow d-flex flex-column justify-content-center align-item-center">
            <Link to="/forBusiness" className="logforaEveryone ">
              <text className="alllogincontent text-white">
                <MDBRow>
                  <MDBCol className="col-lg-9 ">
                    <h2>For Business</h2>
                    <span className="me-5 ">Manage and grow your business</span>
                  </MDBCol>
                  <MDBCol className="col-lg-3 ">
                    <IoIosArrowRoundForward className="mx-5  mt-3 fs-1  " />
                  </MDBCol>
                </MDBRow>
              </text>
            </Link>
          </MDBCol>
          {/* bottom link list */}

          <div className="listcontainer w-100 d-flex justify-content-center ">
            <ul className="custom-list d-flex justify-content-center ">
              <span className="GBDiv pt-1 pe-0 me-0">GB</span>
              <Link>
                <li className="ps-0 ms-0 pe-2 custom-list-item list-unstyled">
                  <text>English</text>
                </li>
              </Link>
              <Link>
                <li className=" pe-2 custom-list-item  ">
                  <text>
                    <HiOutlineSupport className="pt-0 pb-1" />
                    Support{" "}
                  </text>
                </li>
              </Link>
              <Link>
                <li className="pe-2 custom-list-item ">
                  <text>Privacy Policy</text>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </MDBContainer>
    </body>
  );
}

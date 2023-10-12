import React from "react";
import { MDBContainer, MDBCol, MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi"


export default function LocationAddress() {
    return (
        <>
            <div className="p-3 mb-3 d-flex justify-content-between border-bottom align-items-center">
                {/* <MDBBtn className="bg-white border-0"> */}
                <Link to="/" className=" ">
                    Previous
                </Link>
                {/* </MDBBtn> */}
                <MDBBtn className="bg-black">
                    <Link to="/" className="text-white text-capitalize">
                        Next step
                    </Link>
                </MDBBtn>
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
                            <div className="border border-all rounded d-flex flex-column justify-content-center align-item-center mb-4">
                                <h5 className="fw-1 fw-bold px-5 py-3">Business Location</h5>
                                <div className=" border-top  d-flex flex-column justify-content-center align-item-center">
                                    <div className=" p-4 d-flex flex-column justify-content-center align-item-center">


                                        <div className="location d-flex flex-row flex-column ">

                                            <label className="control-label " for="email">
                                                <text className="fs-5"> Where's your business located?</text>
                                            </label>
                                            <div className="input-group locationdiv_border mt-2">
                                                <div className="input-group-addon border px-2">
                                                    <BiMap className="bimapicon text-center" />
                                                </div>
                                                <input className="form-control border" id="location" name="location" type="text" />
                                            </div>

                                            <div className="w-100 border border-all rounded d-flex justify-content-between mt-3">

                                                <div className="locaddresshead p-3 pe-0">
                                                    <div className="subdivlocation ">
                                                        <p className="text-start mb-1">Address</p>
                                                        {/* <text className="textlocationadd">Mumbai-Nashik </text> */}
                                                        <Link to="" className="text-primary">
                                                            <text className="textlocationadd">+ Add</text>
                                                        </Link>
                                                    </div>
                                                    <div className="subdivlocation">
                                                        <p className="text-start mb-1">Apt sulte etc</p>
                                                        <Link to="" className="text-primary">
                                                            <text className="textlocationadd">+ Add</text>
                                                        </Link>

                                                    </div>
                                                    <div className="subdivlocation">
                                                        <p className="text-start mb-1">District</p>
                                                        <Link to="" className="text-primary">
                                                            <text className="textlocationadd">+ Add</text>
                                                        </Link>
                                                    </div>
                                                    <div className="subdivlocation">
                                                        <p className="text-start mb-1">City</p>
                                                        <Link to="" className="text-primary">
                                                            <text className="textlocationadd">+ Add</text>
                                                        </Link>
                                                    </div>
                                                    <div className="subdivlocation">
                                                        <p className="text-start mb-1">Region</p>
                                                        <Link to="" className="text-primary">
                                                            <text className="textlocationadd">+ Add</text>
                                                        </Link>
                                                    </div>
                                                    <div className="subdivlocation">
                                                        <p className="text-start mb-1">Region</p>
                                                        <Link to="" className="text-primary">
                                                            <text className="textlocationadd">+ Add</text>
                                                        </Link>
                                                    </div>
                                                    <div className="subdivlocation">
                                                        <p className="text-start mb-1">PostCode</p>
                                                        <Link to="" className="text-primary">
                                                            <text className="textlocationadd">+ Add</text>
                                                        </Link>
                                                    </div>
                                                    <div className="subdivlocation">
                                                        <p className="text-start mb-1">Country</p>
                                                        <Link to=" " className="text-primary">
                                                            <text className="textlocationadd">+ Add</text>
                                                        </Link>
                                                    </div>
                                                    <div className="subdivlocation">
                                                        <p className="text-start mb-1">Directions</p>
                                                        <Link to=" " className="text-primary">
                                                            <text className="textlocationadd">+ Add</text>
                                                        </Link>
                                                    </div>

                                                </div>
                                                {/* </div> */}
                                                <div className="w-20 d-flex flex-column p-3">
                                                    <Link to="" className="locationaddedit">
                                                        <text className="locaddedit text-primary">Edit</text>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="mt-4  d-flex flex-column">
                                                <MDBCheckbox
                                                    className="flexCheck"
                                                    value=""
                                                    id="flexCheckDefault"
                                                    label="I don't have a business address (mobile and online services only)"

                                                />
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="border border-all rounded d-flex flex-column justify-content-center align-item-center">
                                <h5 className="fw-1 fw-bold px-5 py-3">Business Location</h5>
                                <div className=" border-top  d-flex flex-column justify-content-center align-item-center">
                                    <div className=" d-flex justify-content-center align-item-center p-4">

                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                                            aria-hidden="false"
                                            tabIndex="0"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </MDBCol>
                </MDBContainer>
            </body >
        </>
    );
}
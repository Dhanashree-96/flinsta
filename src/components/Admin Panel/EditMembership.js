import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBTextArea,
} from "mdb-react-ui-kit";

export default function EditMembership() {

    // close icon
    const navigate = useNavigate();
    return (
        <>

            <div class="ADD-WrapperAdmin p-5">
                <div className="addsalonarrow mt-3 " onClick={() => navigate(-1)}>
                    <BiArrowBack className="backsalonarrow fs-3" />
                </div>


                <div className="  col-md-7 p-5">
                    <h2 className="text-center fw-1">Edit Membership</h2>

                    <div class="back">

                    </div>
                    <form
                        action="#"
                        method="post"
                        enctype="multipart/form-data"
                        id="myform"
                    >

                        <MDBRow className="row mt-4  justify-content-between align-items-center mt-5">
                            <MDBCol className="col-sm-6">
                                <MDBInput
                                    label="Name"
                                    type="text"
                                    name="salonName"
                                    className="partnercheckB"
                                />
                            </MDBCol>

                            <MDBCol className="col-sm-6">
                                <MDBInput
                                    label="Duration"
                                    type="text"
                                    name="salonName"
                                    className="partnercheckB"
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="row mt-4  justify-content-space-between align-items-center">
                            <MDBCol className="col-sm-6">
                                <MDBInput
                                    label="Sessions"
                                    type="text"
                                    name="salonName"
                                    className="partnercheckB"
                                />
                            </MDBCol>

                            <MDBCol className="col-sm-6">
                                <MDBInput
                                    label="Service count"
                                    type="text"
                                    name="salonName"
                                    className="partnercheckB"
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="row mt-4  justify-content-space-between align-items-center">
                            <MDBCol className="col-sm-6">
                                <MDBInput
                                    label="Price"
                                    type="text"
                                    name="salonName"
                                    className="partnercheckB"
                                />
                            </MDBCol>

                            <MDBCol className="col-sm-6">
                                <MDBInput
                                    label="Order"
                                    type="text"
                                    name="salonName"
                                    className="partnercheckB"
                                />
                            </MDBCol>

                        </MDBRow >

                    

                    </form>

                    <div className="mt-5  d-flex justify-content-center align-items-center">
                        <Link to="/adminMembership">
                        <button type="submit" name="submit" class="btn btn-primary mx-2">
                            Done
                        </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

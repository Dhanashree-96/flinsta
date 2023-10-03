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

export default function AddTeams() {

    // close icon
    const navigate = useNavigate();
    return (
        <>

            <div class="ADD-WrapperAdmin p-5">
                <div className="addsalonarrow mt-3 " onClick={() => navigate(-1)}>
                    <BiArrowBack className="backsalonarrow fs-3" />
                </div>


                <div className="  col-md-7 p-5">
                    <h2 className="text-center fw-1">Add Team Member</h2>

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
                                    label="Designation"
                                    type="text"
                                    name="salonName"
                                    className="partnercheckB"
                                />
                            </MDBCol>
                        </MDBRow>
                    
                        <MDBRow className="row mt-4  justify-content-space-between align-items-center">
                            <MDBCol className="col-sm-6">
                                <MDBInput
                                    label="Rating"
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
                      
                        </MDBRow>
                        <MDBRow className="row mt-4  justify-content-space-between align-items-center">
                 

                            <MDBCol className="col-sm-6">
                            <label className="form-label w-100" for="customFile">Default file input example</label>
                            <input type="file" className="form-control partnercheckB" id="customFile" name="salonName" />
                          
                            </MDBCol>

                        </MDBRow>
                        
                    </form>

                    <div className="mt-5  d-flex justify-content-center align-items-center">
                        <Link to="/adminTeams">
                        <button type="submit" name="submit" class="btn btn-primary mx-2">
                            Add
                        </button>
                        </Link>

                        <Link>
                        <button class="btn btn-primary mx-2 " id="reset">
                            Clear
                        </button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

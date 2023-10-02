import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";


export default function Demo() {
  return (
    <>
      <div class="col-md-5">
        <div class="container">
          <div class="col-md-8">
            <h2>Menu Form</h2>

            <div class="back">
              <a href="menu.php">
                <button class="btn-primary rounded px-2">Back To Menu</button>
              </a>
            </div>
            <form
              action="#"
              method="post"
              enctype="multipart/form-data"
              id="myform"
            >
              <MDBRow className="row mt-4  justify-content-space-between align-items-center">
              <MDBCol className="col-sm-6">  
                
                <MDBInput
                    label="Salon Name"
                    type="text"
                    name="salonName"
                    className="partnercheckB"
                  />
               </MDBCol> 
              

               <MDBCol className="col-sm-6">  
              
               
                 <MDBInput
                    label="Enter menu URL"
                    type="text"
                    name="salonName"
                    className="partnercheckB"
                  />
                  </MDBCol>
              </MDBRow>

              <MDBRow className="row mt-4  justify-content-space-between align-items-center">
              <MDBCol className="col-sm-6">  
                
                <MDBInput
                    label="Salon Name"
                    type="text"
                    name="salonName"
                    className="partnercheckB"
                  />
               </MDBCol> 
              

               <MDBCol className="col-sm-6">  
              
               
                 <MDBInput
                    label="Enter menu URL"
                    type="text"
                    name="salonName"
                    className="partnercheckB"
                  />
                  </MDBCol>
              </MDBRow>
              <MDBRow className="row mt-4  justify-content-space-between align-items-center">
              <MDBCol className="col-sm-6">  
                
                <MDBInput
                    label="Salon Name"
                    type="text"
                    name="salonName"
                    className="partnercheckB"
                  />
               </MDBCol> 
              

               <MDBCol className="col-sm-6">  
              
               
                 <MDBInput
                    label="Enter menu URL"
                    type="text"
                    name="salonName"
                    className="partnercheckB"
                  />
                  </MDBCol>
              </MDBRow>

              <button type="submit" name="submit" class="btn btn-default mt-2">
                Add
              </button>
            </form>

            <br></br>
            <button class="btn btn-default" id="reset">
              Clear
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaTrashRestore } from "react-icons/fa";

export default function TrashTeam() {
  return (
    <>


      <div className="col-sm-12">
        <div className="container">
          <div className="col-md-12">

            {/*form heading */}
            <div className="d-flex flex-wrap justify-content-between">
              <h2 className="text-dark">Trash Team Details</h2>
              <div className="AddTrashDiv">
                <Link to="/adminTeams">
                  <BiArrowBack className="adminformIcon" />
                </Link>
           
              </div>
            </div>

            <table className="table table-hover" id="myTable">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Profile Picture</th>
                  <th>Name</th>
                  <th>Rating</th>
                  <th>Designation</th>
                  <th>Order</th>
                  <th>Date added</th>
                  <th>Date updated</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Anna</td>
                  <td>decadence</td>
                  <td>Ella's salon</td>
                  <td>5 stars</td>
                  <td>1</td>
                  <td>1/10/2023</td>
                  <td>2/10/2023</td>
                  <td>
                    <Link to="/adminTeams">
                      <FaTrashRestore className="dashIcon" />
                    </Link>                  
            
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

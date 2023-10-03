import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaTrashRestore } from "react-icons/fa";

export default function TrashServices() {
  return (
    <>
      <div className="col-sm-12">
        <div className="container">
          <div className="col-md-12">
            {/*form heading */}
            <div className="d-flex flex-wrap justify-content-between">
              <h2 className="text-dark">Trash Services Details</h2>
              <div className="AddTrashDiv">
                <Link to="/adminServices">
                  <BiArrowBack className="adminformIcon" />
                </Link>
       
              </div>
            </div>

            <table className="table table-hover" id="myTable">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Title</th>
                  <th>Time</th>
                  <th>Rate</th>
                  <th>Description</th>
                  <th>Date added</th>
                  <th>Date updated</th>
                  <th>Actions</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Decadance Hair & Beauty</td>
                  <td>decadence</td>
                  <td>Ella's salon</td>
                  <td>5 stars</td>
                  <td>1/10/2023</td>
                  <td>2/10/2023</td>

                  <td>
                    <Link to="/adminServices">
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

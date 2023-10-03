import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete, AiFillFileAdd } from "react-icons/ai";
import { FaTrashRestore } from "react-icons/fa";
import { useState } from "react";
import AddSalon from "./AddSalon";

export default function Sallon({ handleMenuItemClick }) {
  // const [showAddSalon, setShowAddSalon] = useState(false);
  const navigate = useNavigate();


  return (
    <>
      <div className="col-sm-12">
        <div className="container">
          <div className="col-md-12">

            <div className="d-flex flex-wrap justify-content-between">
              <h2 className="text-dark">Sallon Details</h2>


              <div className="AddTrashDiv">
                <Link to="/addSalon">
                  <AiFillFileAdd className="adminformIcon" />
                </Link>
                <Link to="/trashSallon"> 
                  <FaTrashRestore className="adminformIcon" />
                </Link>
              </div>
            </div>

            <table className="table table-hover" id="myTable">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Card Image</th>
                  <th>All Image</th>
                  <th>Salon Name</th>
                  <th>Reviews</th>
                  <th>Address</th>
                  <th>Date added</th>
                  <th>Date updated</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Decadance Hair & Beauty</td>
                  <td>decadence</td>
                  <td>Ella's salon</td>
                  <td>5 stars</td>
                  <td>sadguru nagar, nashik</td>
                  <td>Date added</td>
                  <td>Date modified</td>

                  <td>
                    <Link to="/editSalon">
                      <FiEdit className="dashIcon" />
                    </Link>
                    |
                    <Link>
                      <AiFillDelete className="dashIcon" />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* {showAddSalon && <AddSalon />} */}
      </div>
    </>
  );
}

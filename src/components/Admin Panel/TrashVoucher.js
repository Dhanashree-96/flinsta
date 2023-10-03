import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { FaTrashRestore } from "react-icons/fa";

export default function TrashVoucher() {
  return (
    <>
      

      <div className="col-sm-12">
        <div className="container">
          <div className="col-md-12">

             {/*form heading */}
             <div className="d-flex flex-wrap justify-content-between">
              <h2 className="text-dark">Trash Vouchers Details</h2>
              <div className="AddTrashDiv">
                <Link to="/adminVoucher">
                  <BiArrowBack className="adminformIcon" />
                </Link>
         
              </div>
            </div>

            <table className="table table-hover" id="myTable">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Name</th>
                  <th>Validity</th>
                  <th>Service count</th>                  
                  <th>Price</th>                  
                  <th>Order</th>                  
                  <th>Date added</th>
                  <th>Date updated</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Anti-stress Massage</td>
                  <td>1 year</td>
                  <td>1</td>
                  <td>375 rs</td>
                  <td>0</td>
                  <td>1/10/2023</td>
                  <td>2/10/2023</td>
                  <td>
                    <Link to="/adminVoucher">
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

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashRestore } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";


export default function TrashSallon() {
    // const [showAddSalon, setShowAddSalon] = useState(false);
    const navigate = useNavigate();


    return (
        <>
            <div className="col-sm-12">
                <div className="container">
                    <div className="col-md-12">

                        <div className="d-flex flex-wrap justify-content-between">
                            <h2 className="text-dark">Trash Sallon Details</h2>


                            <div className="AddTrashDiv">
                                <Link to="/sallon">
                                    <BiArrowBack className="adminformIcon" />
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
                                        <Link to="/sallon">
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

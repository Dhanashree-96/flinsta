import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

export default function BookingMainPage() {
  // close icon
  const navigate = useNavigate();
  return (
    <div className="Page1_wrapper">
      <div className="Choose_OptionDiv">
        <div className="closeicon" onClick={() => navigate(-1)}>
          <IoCloseSharp className="Close" />
        </div>
        <h1>Choose an option</h1>
        <Link to="/selectServiceMain" className="Bookappontment_section">
          <h4>Book</h4>
          <div className="Bookan_Appointment">
            <text>Book an appointment</text>
            <span>Schedule services for yourself</span>
          </div>
        </Link>

        <div className="Bookappontment_section">
          <h4>Buy</h4>
          <Link className="Bookan_Appointment">
            <text>Membership</text>
            <span>Bundle your services in to a membersip</span>
          </Link>
          <Link className="Bookan_Appointment">
            <text>Vourcher</text>
            <span>Treat yourself or a friend to future visits</span>
          </Link>
          <Link className="Bookan_Appointment">
            <text>Products</text>
            <span>Bundle your services in to a membersip</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

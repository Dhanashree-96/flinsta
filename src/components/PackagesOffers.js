import React from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

export default function PackagesOffers() {
  return (
    <>
<div className="service">
            
            <div className="DecService_color">
              
              <div className="Dec_Service_Secone">
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>Decadent Weekend Package</h4>
                    <span>1h 55min.4 services</span>
                    <text>£100 Save 28%</text>
                  </div>
                </div>
                <div className="Add_Button">
                  <Link to="" className="SBtn">
                    <GoPlus className="plusicon" alt=" plusicon" />
                  </Link>
                </div>
              </div>

              <div className="Dec_Service_Secone">
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>Manicure + Wass, cut + Blowdry</h4>
                    <span>1h - 1h 15min.2 service</span>
                    <text>from £99</text>
                  </div>
                </div>
                <div className="Add_Button">
                  <Link to="" className="SBtn">
                    <GoPlus className="plusicon" alt=" plusicon" />
                  </Link>
                </div>
              </div>

              <div className="Dec_Service_Secone">
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>Hair & Nail Obsession</h4>
                    <span>1h - 1h 15min.2 service</span>
                    <text>from £99</text>
                  </div>
                </div>
                <div className="Add_Button">
                  <Link to="" className="SBtn">
                    <GoPlus className="plusicon" alt=" plusicon" />
                  </Link>
                </div>
              </div>
              
            </div>

          </div>
</>
  )
}

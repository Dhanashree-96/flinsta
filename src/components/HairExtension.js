import React from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

export default function HairExtension() {
  return (
<>
    <div className="service">
            
            <div className="DecService_color">
              
              <div className="Dec_Service_Secone">
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>Hair Extensions Consultation</h4>
                    <span>30min</span>
                    <text>£0 save 100%</text>
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
                    <h4>Hair Extensions Application</h4>
                    <span>1h - 1h 45min</span>
                    <text> from £129</text>
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
                    <h4>Hair Extensions Removal + Conditioning Care Package</h4>
                    <span>1h 15min</span>
                    <text>£85</text>
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

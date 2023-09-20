import React from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";


export default function Massage() {
  return (
<>
<div className="service">
            
            <div className="DecService_color">
              
              <div className="Dec_Service_Secone">
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>Anti-aging Face Lift Massage</h4>
                    <span>1h</span>
                    <text>£60</text>
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
                    <h4>Buccal(internal cheek/jaw) Massage</h4>
                    <span>1h 15min</span>
                    <text> from £70</text>
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
                    <h4>Aromatherapy Face, Neck & Scalp Massage</h4>
                    <span>30min</span>
                    <text>£39</text>
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
                    <h4>Back, Neck + Shoulder Massage</h4>
                    <span>30min - 45min</span>
                    <text>from £39</text>
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
                    <h4>Aromatherapy Face, Scalp Massage</h4>
                    <span>15min</span>
                    <text>£20</text>
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

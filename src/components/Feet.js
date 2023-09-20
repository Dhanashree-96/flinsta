import React from 'react'
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Feet() {
  return (
<>
<div className="service">
            
            <div className="DecService_color">
              
              <div className="Dec_Service_Secone">
                <div className="Color_cons">
                  <div className="consultation">
                    <h4>Classic Pedicure</h4>
                    <span>1h</span>
                    <text>from £45</text>
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
                    <h4>Express Pedicure</h4>
                    <span>15min - 20min</span>
                    <text>£20</text>
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
                    <h4>Shellac Pedicure</h4>
                    <span>1h -1h 15min</span>
                    <text>from £50</text>
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
                    <h4>Express Shellac Pedicure</h4>
                    <span>50min</span>
                    <text>£42</text>
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
                    <h4>Shellac Pedicure Application</h4>
                    <span>50min </span>
                    <text>£40</text>
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
                    <h4>Shellac Removal</h4>
                    <span>15min</span>
                    <text>£10</text>
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
                    <h4>Shellac / Gel Repair</h4>
                    <span>10min</span>
                    <text>£5</text>
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

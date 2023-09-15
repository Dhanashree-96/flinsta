import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import RightSidepage from './RightSidepage';
import { IoIosArrowForward } from 'react-icons/io';
import Calendar from "./Calendar";
import Details from "./Calendardetails";
import "../assets/css/Style.css"


export default function ArtistCalendar() {
  // back arrow
  const navigate = useNavigate();

  // show details on date click
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  return (

    <div className='Page1_wrapper'>
      <div className='Page1_sections'>
        <div className='Page1_Leftsection'>
        <div className="arrow stafArrow" onClick={() => navigate(-1)}>
            <BiArrowBack className="biarrowicon " />
          </div>
          <div className='All_Leftsection'>

            <div className="Page1_colorSection">

              <div className='Select_Service'>
                <h2>Select time with Arch</h2>
              </div>

              <div className='staff-section'>
                <div className='selectarch-section'>
                
                  <Calendar showDetailsHandle={showDetailsHandle} />             

                </div>
                <Link to="/reviewconfirm" className='artistLink'>
                <div className='TimeSelect_othersec'>
                  <text>{showDetails && <Details data={data} />}</text>
                  <IoIosArrowForward className='forwardarrow' />
                </div>
                </Link>

                <Link to="/reviewconfirm" className='artistLink'>
                <div className='TimeSelect_othersec'>
                  <text>{showDetails && <Details data={data} />}</text>
                  <IoIosArrowForward className='forwardarrow' />
                </div>
                </Link>

                <Link to="/reviewconfirm" className='artistLink'>
                <div className='TimeSelect_othersec'>
                  <text>{showDetails && <Details data={data} />}</text>
                  <IoIosArrowForward className='forwardarrow' />
                </div>
                </Link>
              </div>
            </div>
          </div>

        </div>

        <RightSidepage />
      </div>
    </div >

  );
}
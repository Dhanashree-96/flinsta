import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from 'react-icons/bi';
import RightSidepage from './RightSidepage';
import { IoIosArrowForward } from 'react-icons/io';
import Calendar from "./Calendar";
import Details from "./Calendardetails";
import { useOptionContext } from './OptionContext';

export default function ArtistCalendar() {
  
  // back arrow navigation
  const navigate = useNavigate();

// Access the selectDetails function from the context
  const { selectDetails } = useOptionContext(); 

  // show details on date click
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState(null);

  const showDetailsHandle = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
  };

  const showDetailsOnClick  = (dayStr) => {
    setData(dayStr);
    setShowDetails(true);
    selectDetails(dayStr); // Set the details data in the context
  };

  return (
<>
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

                <div className='TimeSelect_othersec' onClick={() => showDetailsOnClick(data)}>
                  <text>{showDetails && <Details data={data} />}</text>
                  <IoIosArrowForward className='forwardarrow' />
                </div>

                <div className='TimeSelect_othersec' onClick={() => showDetailsOnClick(data)}>
                  <text>{showDetails && <Details data={data} />}</text>
                  <IoIosArrowForward className='forwardarrow' />
                </div>

                <div className='TimeSelect_othersec' onClick={() => showDetailsOnClick(data)}>
                  <text>{showDetails && <Details data={data} />}</text>
                  <IoIosArrowForward className='forwardarrow' />
                </div>

              </div>
            </div>
          </div>

        </div>

        <RightSidepage />
        {/* <div className="selectser-BOOKBUTTON">
          <Link to="/reviewconfirm" className="Selectservice-button ">
            <text className="hiddenselectser-Btn">Continue</text>
          </Link>
        </div> */}
      </div>
    </div >
     {/* bottom button section */}
     <div className="voucher-bottom-content-fixed ">
        <div className="serviceBottomBtn ">
          <div className="voubottomtext">          
              <Link to="/reviewconfirm" className="">
                <text className="hiddenselectser-Btn">Continue</text>
              </Link>        
          </div>
        </div>
      </div>
</>
  );
}
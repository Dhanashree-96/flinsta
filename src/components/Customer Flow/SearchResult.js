import React from 'react'
import Header from '../common/Header'
import { IoSearch } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import line from "../../assets/images/Line.png";
import RecomendedData from '../../assets/Data/RecomendedData';


export default function SearchResult() {
    return (
        <>
            <Header />

            {/* search bar */}

            <div className="Search_Section Search_SectionResult ">
            <div className="homeSearch_bar">
                <div className="input-rowsearch">

                    <div className="Search_sec">
                        <label className="Homesearch-icon-label">
                            <IoSearch className="Homesearch-icon" />
                        </label>

                    </div>
                    <div className="Search_sec2">
                        <img src={line} className="Search_line" alt="line" />
                    </div>
                    <div className="Search_sec">
                        <label className="Homesearch-icon-label">
                            <IoLocationSharp className="Homesearch-icon" />
                        </label>
                        <input type="text" placeholder="Current Location" className="inputsearchdiv" />
                        <Link to="" className="search_button">
                            <span className="sear_button_text">Search</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

            {/* search result */}

            <div className='searchMaindiv'>
                <div className='searchCards'>
                    <div>
                        <h3>Saloan Result</h3>
                    </div>
                    {RecomendedData.map((recomended, index) => (

                        <div className="SaloonCards-Section pb-4 w-100" key={index}>
                            <Link to={recomended.recomendedlink} className="recomendedButton1">
                                <div className="S_Card">

                                    <img
                                        src={recomended.recomendedimg}
                                        className="S_logo"
                                        alt="cardImg"
                                    />
                                    <div className="S_info">
                                        <div className="heading1">{recomended.recomendedname}</div>
                                        <div className="heading2">
                                            <span>{recomended.recomendedrate}</span>
                                        </div>
                                        <div className="heading3">{recomended.recomendedcity}</div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* location */}

                <div className='searchMap'>
                <div className="w-100 h-100">
                <div className="fixMap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    aria-hidden="false"
                    tabIndex="0"
                  />
                </div>
              </div>
                </div>



            </div>



        </>
    )
}

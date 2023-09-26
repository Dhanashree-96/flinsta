import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
// import ServiceDisplayRightSection from "../components/common/ServiceDisplayRightSection";

export default function SelectServicePage() {
  return (
    <>
      <div className="Page1_wrapper">
        <div className="Page1_sections">
        <div className='Page1_Leftsection'>

<div className='arrow'>
    <BiArrowBack className='biarrowicon' />
</div>
<div className='All_Leftsection'>
    <div className='Page1_Left'>
        {/* Left Section */}

        <div className='Select_Service'>
            <h2>Select Service</h2>
        </div>
    </div>
    <div className="Page1_colorSection">

        <Link to="" className="ColoulightsBtn">
            <text className="text_colorbtn">Colours + Highlights</text>
        </Link>

        <div className="CuttingStyling">
            <text>Cutting + Styling</text> <text>Cutting + Styling</text><BsArrowRight className="ArrowRight" />
        </div>
    </div>
    <div className="ColorHighlight_text">
        <h2>Colours + Highlights</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
    </div>
    <div className='Page1_bottomsec'>
        <div className='Color_Consultation'>
            <div className='Color_parts'>
                <div className='Color_section1'>
                    <div className='Con_heading1'>
                        <div className='Round'>
                            <input type="checkbox" className='checkbox-round ' />
                        </div>
                    </div>
                    <div className='Con_heading2'>
                        <span>
                            <h3>Color Consultation</h3>
                            <text>15 min</text>

                            <div className='Con_paragraph'>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                    software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </span>

                        <div className='Con_heading3'>
                            <text>free</text>
                        </div>
                    </div>
                </div>

            </div>


            <div className='Color_parts1'>
                <div className='Color_section1'>
                    <div className='Con_heading1'>
                        <div className='Round'>
                            <input type="checkbox" id="html" name="fav_language" value="HTML" />
                        </div>
                    </div>
                    <div className='Con_heading2'>
                        <span>
                            <h3>Air Touch/Babylights</h3>
                            <text>2h 45min</text>

                            <div className='Con_paragraph'>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
                                    of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                    software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </span>

                        <div className='Con_heading3'>
                            <text>~225</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
{/* //////////////// */}
        </div>
      </div>
    </>
  );
}

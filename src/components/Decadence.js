import React from "react";
import Header from "./common/Header";
import "../assets/css/Style.css";
import line from "../assets/images/Line.png";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { LuStar } from "react-icons/lu";
import { GoShare } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import sallon1 from "../assets/images/sallon image.jpg";
import sallon2 from "../assets/images/best-hair-salons-singapore.jpg";
import sallon3 from "../assets/images/depositphotos_68471257-stock-photo-interior-of-empty-modern-hair.jpg";
import demo from "../assets/images/man square  img.jpg";
import demo2 from "../assets/images/square women.jpg";
import Footer from "./common/Footer";

export default function Decadence() {
  return (
    <>
      <Header />

      <div className="wrapper">
        {/* search bar */}
        <div className="Search_Section">
          <div className="Search_bar searchBarColor2">
            <div className="Search_sec1">
              <div className="Search_sec1_outer">
                <IoSearch className="search_ions" />
                <div className="TreatorVenue">Treatment or venue</div>
              </div>
            </div>
            <div className="Search_sec2">
              <img src={line} className="Search_line" alt="line" />
            </div>
            <div className="Search_sec3">
              <div className="Search_sec3_outer">
                <IoLocationSharp className="Search_map" />
                <div className="location">Current Location</div>
              </div>
              <div className="search_button">
                <Link to="" className="sear_buton">
                  <text className="">Search</text>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/*Decadence Hair & Beauty */}
        <div className="Decades_img_box">
          <div className="Decades_top_section">
            <div className="Decades_title">
              <text> Decadence Hair & Beauty</text>
              <span>
                {" "}
                5.0 <LuStar /> <LuStar /> <LuStar /> <LuStar />
                <LuStar /> (1,448) . Open until 8:00pm . 36 Store St ,London Get
                direction
              </span>
            </div>
            <div className="Decades_logos">
              <div className="Decades_circle_icon">
                <GoShare className="shareIcon" />
              </div>
              <div className="Decades_circle_icon">
                <FiHeart className="heartIon" />
              </div>
            </div>
          </div>
          <div className="Dec_Saloon_imges">
            <div className="Dec-container1">
              <img src={sallon1} className="DSaloon_img1" alt="DSaloon_img1" />
            </div>
            <div className="Dec-container2">
              <div className="container_img">
                <img
                  src={sallon2}
                  className="DSaloon_img2"
                  alt="DSaloon_img2"
                />
              </div>
              <div className="container_img">
                <img
                  src={sallon3}
                  className="DSaloon_img2"
                  alt="DSaloon_img2"
                />
              </div>
            </div>
          </div>
        </div>

        
        {/* 100% div */}
        <div className="Decades_bottom_section"> 
          {/* 60% section */}
          <div className="Decades_bottom_left">
            {/* Services */}
            <div className="service">
              <div className="service_headline">
                <h2>Services</h2>
              </div>
              <div className="DecService_color">
                <div className="Dec_Service_Sec">
                  <div className="Service_Btn">
                    <Link to="" className="ColoulightsBtn">
                      <text className="ColoulightsBtn">
                        Colours + Highlights
                      </text>
                    </Link>
                  </div>
                  <div className="Service_head1">
                    <text>Cutting + Styling</text>{" "}
                    <text>Cutting + Styling</text>
                    <text>Cutting + Styling</text>
                    <text>Cutting + Styling</text>
                  </div>
                </div>

                <div className="Dec_Service_Secone">
                  <div className="Color_cons">
                    <div className="consultation">
                      <h4> Color Consultation</h4>
                      <span>15 min</span>
                      <p> $225</p>
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
                      <h4> Color Consultation</h4>
                      <span>15 min</span>
                      <p> $225</p>
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
                      <h4> Color Consultation</h4>
                      <span>15 min</span>
                      <p> $225</p>
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
                      <h4> Color Consultation</h4>
                      <span>15 min</span>
                      <p> $225</p>
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

            {/* Team */}

            <div className="Teams_section">
              <text>Team</text>

              <div className="images_sec_1">
                <div className="Teams_images">
                  <div className="teamImg">
                    <img src={demo} className="teamPic" alt="teams_image1" />
                  </div>

                  <div className="team_smallbox">
                    <div className="box-body">
                      <text>5.0 </text> <LuStar />
                    </div>
                    <div className="text_Name">
                      <div className="teamTxt">
                        <h2>Arch</h2>
                      </div>
                      <div className="teamPara">
                        <p>Creative Director |....</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="Teams_images">
                  <div className="teamImg">
                    <img src={demo2} className="teamPic" alt="teams_image1" />
                  </div>

                  <div className="team_smallbox">
                    <div className="box-body">
                      <text>5.0 </text> <LuStar />
                    </div>
                    <div className="text_Name">
                      <div className="teamTxt">
                        <h2>Arch</h2>
                      </div>

                      <p>Creative Director |....</p>
                    </div>
                  </div>
                </div>

                <div className="Teams_images">
                  <div className="teamImg">
                    <img src={demo} className="teamPic" alt="teams_image1" />
                  </div>

                  <div className="team_smallbox">
                    <div className="box-body">
                      <text>5.0 </text> <LuStar />
                    </div>
                    <div className="text_Name">
                      <div className="teamTxt">
                        <h2>Arch</h2>
                      </div>

                      <p>Creative Director |....</p>
                    </div>
                  </div>
                </div>

                <div className="Teams_images">
                  <div className="teamImg">
                    <img src={demo2} className="teamPic" alt="teams_image1" />
                  </div>

                  <div className="team_smallbox">
                    <div className="box-body">
                      <text>5.0 </text> <LuStar />
                    </div>
                    <div className="text_Name">
                      <div className="teamTxt">
                        <h2>Arch</h2>
                      </div>

                      <p>Creative Director |....</p>
                    </div>
                  </div>
                </div>

                <div className="Teams_images">
                  <div className="teamImg">
                    <img src={demo2} className="teamPic" alt="teams_image1" />
                  </div>

                  <div className="team_smallbox">
                    <div className="box-body">
                      <text>5.0 </text> <LuStar />
                    </div>
                    <div className="text_Name">
                      <div className="teamTxt">
                        <h2>Arch</h2>
                      </div>

                      <p>Creative Director |....</p>
                    </div>
                  </div>
                </div>

                <div className="Teams_images">
                  <div className="teamImg">
                    <img src={demo} className="teamPic" alt="teams_image1" />
                  </div>

                  <div className="team_smallbox">
                    <div className="box-body">
                      <text>5.0 </text> <LuStar />
                    </div>
                    <div className="text_Name">
                      <div className="teamTxt">
                        <h2>Arch</h2>
                      </div>

                      <p>Creative Director |....</p>
                    </div>
                  </div>
                </div>

                <div className="Teams_images">
                  <div className="teamImg">
                    <img src={demo2} className="teamPic" alt="teams_image1" />
                  </div>

                  <div className="team_smallbox">
                    <div className="box-body">
                      <text>5.0 </text> <LuStar />
                    </div>
                    <div className="text_Name">
                      <div className="teamTxt">
                        <h2>Arch</h2>
                      </div>

                      <p>Creative Director |....</p>
                    </div>
                  </div>
                </div>

                <div className="Teams_images">
                  <div className="teamImg">
                    <img src={demo} className="teamPic" alt="teams_image1" />
                  </div>

                  <div className="team_smallbox">
                    <div className="box-body">
                      <text>5.0 </text> <LuStar />
                    </div>
                    <div className="text_Name">
                      <div className="teamTxt">
                        <h2>Arch</h2>
                      </div>

                      <p>Creative Director |....</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Review */}
            <div className="Review_section">
              <div className="AllSection_review">
                <div className="Review_sec_1">
                  <text>Review</text>
                </div>
                <div className="Star_review">
                  <text>
                    <LuStar /> <LuStar /> <LuStar /> <LuStar /> <LuStar />{" "}
                  </text>
                  <span>5.0 .(1,418) </span>
                </div>
                <div className="Review_content_sec">
                  <div className="Review_images">
                    <div className="Rev_image">
                      <img
                        src={demo2}
                        className="review_image1"
                        alt="review_image1"
                      />
                      <div className="review_textbox">
                        <text>Anne K</text>
                        <span>11 Aug 2023 10:40pm</span>
                      </div>
                    </div>
                    <div className="reviewstar_rating">
                      <p>
                        <LuStar /> <LuStar /> <LuStar /> <LuStar /> <LuStar />
                      </p>
                      <span>
                        I have been Customer at Decades Hair Saloon for 10
                        years;
                      </span>
                    </div>
                  </div>

                  <div className="Review_images">
                    <div className="Rev_image">
                      <img
                        src={demo2}
                        className="review_image1"
                        alt="review_image1"
                      />
                      <div className="review_textbox">
                        <text>Anne K</text>
                        <span>11 Aug 2023 10:40pm</span>
                      </div>
                    </div>
                    <div className="reviewstar_rating">
                      <p>
                        <LuStar /> <LuStar /> <LuStar /> <LuStar /> <LuStar />
                      </p>
                      <span>
                        I have been Customer at Decades Hair Saloon for 10
                        years;Mark is making ,my hair \....dwbjhfg
                      </span>
                    </div>
                  </div>

                  <div className="Review_images">
                    <div className="Rev_image">
                      <img
                        src={demo2}
                        className="review_image1"
                        alt="review_image1"
                      />
                      <div className="review_textbox">
                        <text>Anne K</text>
                        <span>11 Aug 2023 10:40pm</span>
                      </div>
                    </div>
                    <div className="reviewstar_rating">
                      <p>
                        <LuStar /> <LuStar /> <LuStar /> <LuStar /> <LuStar />
                      </p>
                      <span>
                        I have been Customer at Decades Hair Saloon \....dwbjhfg
                      </span>
                    </div>
                  </div>

                  <div className="Review_images">
                    <div className="Rev_image">
                      <img
                        src={demo2}
                        className="review_image1"
                        alt="review_image1"
                      />
                      <div className="review_textbox">
                        <text>Anne K</text>
                        <span>11 Aug 2023 10:40pm</span>
                      </div>
                    </div>
                    <div className="reviewstar_rating">
                      <p>
                        <LuStar /> <LuStar /> <LuStar /> <LuStar /> <LuStar />
                      </p>
                      <span>
                        I have been Customer at Decades Hair Saloon for 10
                        years;just
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="SeeAll_btn">
                <Link to="" className="seeAllbtn">
                  <text className="seeall_buton"> See All</text>
                </Link>
              </div>
            </div>
            {/* Map */}
            <div className="MapAdd_Section">
              <div className="Map_paragraph ">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
              <div className="Map_iframe">
                <div className="iframe_section">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                    aria-hidden="false"
                    tabIndex="0"
                  />
                </div>
              </div>
              <text>36 store st,London ,England Get directions</text>
            </div>
          </div>
          {/* ------------------------------------- */}
          {/* 30% section of the page */}
          <div className="Decades_bottom_right">
            <div className="Dec_bottom_allsection">
              <div className="Dec_bottom_section1">
                <div className="DecadesLeft_title">
                  <h1> Decadence Hair & Beauty</h1>
                </div>
                <div className="DecadesLeft_content">
                  <span>
                    {" "}
                    5.0 <LuStar /> <LuStar /> <LuStar /> <LuStar /> <LuStar />{" "}
                    (1,448){" "}
                  </span>
                </div>
                <div className="SerFeatured_Buttons">
                  <div className="Feature_Btn">
                    <Link to="" className="fea_Btn">
                      <div className="featureBtn">Featured</div>
                    </Link>
                  </div>
                  <div className="Deals_Btn">
                    <Link to="" className="dea_Btn">
                      <div className="dealsBtn">Deals</div>
                    </Link>
                  </div>
                </div>
                <div className="Book_NowBtn">
                  <Link to="" className="boo_Btn">
                    <div className="bookBtn">Book Now</div>
                  </Link>
                </div>
              </div>
              <div className="Decades_bottom_section2">
                <div className="dec-bottomsec">
                  <p className="OPEN_UNTIL">
                    {" "}
                    <MdAccessTime
                      className="acesstimelogo"
                      alt="time_img"
                    />{" "}
                    Open until 8:00pm
                  </p>
                  <p className="dec_Addres">
                    {" "}
                    <LuMapPin className="Mapinlogo" alt="map_img" /> 36 store
                    st,London ,England Get directions
                  </p>
                </div>
              </div>
              <div className="Decades_bottom_section3">
                <div className="Dec_memberships">
                  <div className="Membership">
                    <text>Memberships </text>
                    <p>Buy a bundle of appointments.</p>
                  </div>
                  <div className="BtnMembership">
                    <Link to="" className="buy_buton">
                      <div className="Buy_buton">Buy</div>
                    </Link>
                  </div>
                </div>

                <div className="Dec_voucher">
                  <div className="Dec_memberships">
                    <div className="Membership">
                      <text>Vouchers </text>
                      <p>Treat yourself or a friend future visits.</p>
                    </div>
                    <div className="BtnMembership">
                      <div className="membership">
                        <Link to="" className="buy_buton">
                          <div className="Buy_buton">Buy</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

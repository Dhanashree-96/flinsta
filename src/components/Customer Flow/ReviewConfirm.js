import React, { useEffect, useRef, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { BiLogoVisa } from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";
import RightSidepage from './RightSidepage';


export default function Reviewconfirm() {

     // scroll top button
   const toTop = useRef();
   const scrollToTop = (elmRef) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [show, setshow] = useState(false);
  useEffect(() => {
    const handleScroll = (Event) => {
      if (window.scrollY > 10) {
        setshow(true);
      } else {
        setshow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrolHandler = (elmRef) => {
    window.scrollTo({
      top: elmRef.current.offsetTop,
      behavior: "smooth",
      Scrollmargintop: "30px",
    });
  };

  // back arrow
  const navigate = useNavigate();
    return (
        <div className='Page1_wrapper'>
            <div className='Page1_sections'>
                <div className='Page1_Leftsection'>

                <div className="arrow stafArrow" onClick={() => navigate(-1)}>
            <BiArrowBack className="biarrowicon " />
          </div>
                    <div className='Allrevconfirm_Leftsection'>

                        <div className='Select_Service'>
                            <h2>Review in conformation</h2>
                        </div>
                        <div className='reviewconfirm-card'>
                            <div className='reviewcon-div'>
                                <p>Confirm with card</p>
                                <text>You won't be charged now ,payment will be connected in store after appointment</text>
                                <div className='confirm_form'>
                                    <label> Card holder full name </label>
                                    <input className='rconfirminputbox' placeholder='Card holder full name' type="text" name="name" />

                                    <label> Card number </label>
                                    <input className='rconfirminputbox' placeholder='Credit or debit card no' type="text" name="name" />
                                    <div className='confirm_Row'>
                                        <div className='confirm_col'>
                                            <label> Expiry date </label>
                                            <input className='rowconinputbox' placeholder='MM/YY' type="text" name="name" />
                                        </div>
                                        <div className='confirm_col'>
                                            <label>Cvv </label>
                                            <input className='rowconinputbox' placeholder='123' type="text" name="name" />
                                        </div>
                                    </div>
                                    <div className='confirm_pay'>
                                        <text>Pay securely with</text>
                                        <BiLogoVisa />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='reviewconfirm-card2'>
                            <div className='confirm_promocode'>
                                <div className='confirm_promo'>
                                    <label> Promo Code </label>
                                    <input className='promobox' placeholder='Enter a code here' type="text" name="name" />
                                </div>
                                <div className='confirm_promo'>
                                    <Link to="" className="PromoapplyBtn">
                                        <div className="applyBtn">Apply</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* paghtside page-------------- */}

                <RightSidepage />
                
                <div className='BOOK_DIv'>
                    <Link to="/reviewInconfirmation" className="BooknowBtn">
                        <div className="book_btn">Book Now</div>
                    </Link>
                </div>

            </div>
        </div>
    );
}
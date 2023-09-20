import React, { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import sallon1 from "../assets/images/sallon image.jpg";
import sallon2 from "../assets/images/best-hair-salons-singapore.jpg";
import sallon3 from "../assets/images/depositphotos_68471257-stock-photo-interior-of-empty-modern-hair.jpg";
import GoToTop from './common/GoToTop';
import "../assets/css/Style.css"

export default function SeeallImagesGrid() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Add a scroll event listener to the window
        const handleScroll = () => {
            // Check the scroll position to determine if the header should be visible
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Apply a CSS class conditionally based on the scroll state
    const GallarySeeallimages = isScrolled ? 'Gallary-Seeallimages scrolled' : 'Gallary-Seeallimages';

    // close icon  
    const navigate = useNavigate();

    return (
        <>
        <div className='SeeallImages_main'>
            <div className={GallarySeeallimages}>
                <p>Gallery</p>

                <div className="Seeallimagescloseicon" onClick={() => navigate(-1)}>
                    <IoCloseSharp className="Close" />
                </div>
            </div>
            {/* Your header content */}
            <div className="Dec_seeall_imges">
                <Link
                    to="/scrollAllImages"
                    className="SeeAllSallon_imges"
                >
                    <img src={sallon1} className="SeeAllSallon_img1" alt="DSaloon_img1" />
                </Link>

                <Link
                    to="/scrollAllImages"
                    className="SeeAllSallon_imges2"
                >
                    <img src={sallon2} className="SeeAllSallon_img2" alt="DSaloon_img1" />
                </Link>

                 <Link
                    to="/scrollAllImages"
                    className="SeeAllSallon_imges2"
                >
                    <img src={sallon3} className="SeeAllSallon_img2" alt="DSaloon_img1" />
                </Link>
                <Link
                    to="/scrollAllImages"
                    className="SeeAllSallon_imges"
                >
                    <img src={sallon1} className="SeeAllSallon_img1" alt="DSaloon_img1" />
                </Link>

                <Link
                    to="/scrollAllImages"
                    className="SeeAllSallon_imges2"
                >
                    <img src={sallon2} className="SeeAllSallon_img2" alt="DSaloon_img1" />
                </Link>

                 <Link
                    to="/scrollAllImages"
                    className="SeeAllSallon_imges2"
                >
                    <img src={sallon3} className="SeeAllSallon_img2" alt="DSaloon_img1" />
                </Link>
               
            </div>
        </div>
        <GoToTop />
        </>
    );
}

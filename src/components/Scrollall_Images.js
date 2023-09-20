import React, { useState } from 'react';
import sallon1 from "../assets/images/sallon image.jpg";
import sallon2 from "../assets/images/best-hair-salons-singapore.jpg";
import sallon3 from "../assets/images/depositphotos_68471257-stock-photo-interior-of-empty-modern-hair.jpg";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import "../assets/css/Style.css"

const ScrollAllImages = () => {
    const images = [
        sallon1,
        sallon2,
        sallon3, // You can replace this with more images if needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // close icon  
    const navigate = useNavigate();
    return (
        <div className="slider_imageawrapper">
            <div className="closeiconWhite" onClick={() => navigate(-1)}>
                <IoCloseSharp className="Close" />
            </div>
            <div className="Slider_imagesAllDiv">
                <button onClick={goToPreviousSlide} className="arrow-button">
                    <IoIosArrowBack />
                </button>
               
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} className="slider-imageAll" />
               
                <button onClick={goToNextSlide} className="arrow-button2">
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default ScrollAllImages;

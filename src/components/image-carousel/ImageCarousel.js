import React from 'react';

import './ImageCarousel.css';
import img1 from "../../img/carousel1.jpeg";
import img2 from "../../img/carousel2.jpeg";
import img3 from "../../img/carousel3.jpeg";

const ImageCarousel = () => {

    return (
        <div id="carouselControls" className="carousel slide carousel-reklama" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={img1} alt=""/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={img2} alt=""/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={img3} alt=""/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
        </div>
    );
};

export default ImageCarousel;

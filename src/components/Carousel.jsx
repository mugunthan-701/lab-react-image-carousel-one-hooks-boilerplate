import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { images } from '../data/CarouselData';

const Carousel = () => {
    const [id, setId] = useState(0);

    const handlePrevClick = () => {
        setId((prevId) => (prevId - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setId((prevId) => (prevId + 1) % images.length);
    };

    const currImage = images[id];

    return (
        <div className="container">
            <div className="carousel">
                <div className="carousel-title">{currImage.title}</div>
                <div className="carousel-subtitle">{currImage.subtitle}</div>
            </div>
            <div className="alignitems">
                <div className="arrow-back" onClick={handlePrevClick}>
                    <ArrowBackIosIcon sx={{ color: 'black' }} />
                </div>
                <img className="carousel-img" src={currImage.img} alt="" />
                <div className="arrow-forward" onClick={handleNextClick}>
                    <ArrowForwardIosIcon sx={{ color: 'black' }} />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
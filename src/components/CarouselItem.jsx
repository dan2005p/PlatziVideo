import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/5855585/pexels-photo-5855585.jpeg?cs=srgb&dl=pexels-jack-redgate-5855585.jpg&fm=jpg" alt="imagen" />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2021 16+ 114 minutos</p>
        </div>
    </div>
);

export default CarouselItem;
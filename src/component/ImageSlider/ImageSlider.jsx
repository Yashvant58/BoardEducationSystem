import React from 'react';
import Slider from 'react-slick';
import './ImageSlider.css'; // Custom CSS

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Images from the public folder
  const images = [
    `${process.env.PUBLIC_URL}/channels4_banner.jpg`,
    `${process.env.PUBLIC_URL}/channels4_banner.jpg`,
    `${process.env.PUBLIC_URL}/channels4_banner.jpg`,
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>

      {/* WhatsApp Icon */}
      <a href="https://wa.me/919807757865" className="contact-icon whatsapp-icon" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>

      {/* Telegram Icon */}
      <a href="https://t.me/boardedu" className="contact-icon telegram-icon" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" />
      </a>
    </div>
  );
};

export default ImageSlider;

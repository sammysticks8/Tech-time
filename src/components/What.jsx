import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../ImageSlider.css'; // Import CSS file for styling (adjust path as needed)
import logo from '../img/carouselImg-.svg';
import logo1 from '../img/carouselImg1-.svg';
import logo2 from '../img/carouselImg2-.svg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    {
      id: 1,
      person: {
        image: logo,
        name: "Warmer Smith",
        title: "Product Developer"
      },
      message: "High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education."
    },
    {
      id: 2,
      person: {
        image: logo1,
        name: "Jeffrey Williams",
        title: "Product Developer"
      },
      message: "High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education."
    },
    {
      id: 3,
      person: {
        image: logo2,
        name: "Bill Wigs",
        title: "Product Developer"
      },
      message: "High-Definition Video Is Video Of Higher Resolution And Quality Than Standard Definition. Build Your Future With Our Quality Education."
    },
  ];

  return (
    <div className='slider-container' id='fourth'>
      <Slider {...settings} className='slide'>
        {images.map((image) => (
          <div key={image.id} className='slide'>
            <img src={image.person.image} alt={image.person.name} />
            <div className="slide-content">
              <p className="message">{image.message}</p>
              <div className="person-info">
                <span>{image.person.name}</span>
                <span className="title">{image.person.title}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

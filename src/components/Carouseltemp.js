import React from 'react';
import Slider from "react-slick";

import LeftArrow from "./css/left-arrow.svg"
import RightArrow from "./css/right-arrow.svg"
function Carouseltemp({title,data}) {
    // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    //     <img src={LeftArrow} alt="prevArrow" {...props} />
    //   );
    
    //   const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    //     <img src={RightArrow} alt="nextArrow" {...props} />
    //   );
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: true,
            afterChange: function(index) {
              console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
              );
            }
        };
        return (
         <>
         <h2>Swipe To Slide</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
         </>
    )
}

export default Carouseltemp

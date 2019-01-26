import React from 'react'
import Slider from 'react-slick'
import slide_one from '../../resources/images/slide_one.jpg'
import slide_two from "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";

export default function Carrousel() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 200
    }
    return <div className="carrousel_wrapper" style={{ overflow: "hidden", height: `${window.innerHeight}px` }}>
        <Slider {...settings}>
          <div>
            <div style={{ background: `url(${slide_one})`, height: `${window.innerHeight}px` }} className="carrousel_image" />
          </div>
          <div>
            <div style={{ background: `url(${slide_two})`, height: `${window.innerHeight}px` }} className="carrousel_image" />
          </div>
          <div>
            <div style={{ background: `url(${slide_three})`, height: `${window.innerHeight}px` }} className="carrousel_image" />
          </div>
        </Slider>
      </div>;
}

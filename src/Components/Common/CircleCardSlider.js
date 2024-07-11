import React from "react";
import Slider from "react-slick";
import CircleCard from "./CircleCard";

function CircleCardSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    navs: true,
    autoplay:true,
    speed: 2000,
    autoplaySpeed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear"
  };
  return (
    <>
      <section>
        {props.sliderHeading && <h6>{props.sliderHeading}</h6>}
        {props.sliderData && (
          <div>
            <Slider {...settings}>
              {props.sliderData &&
                props.sliderData.map((each) => {
                  return (
                    <div>
                      <CircleCard data={each} />
                    </div>
                  );
                })}
            </Slider>
          </div>
        )}
      </section>
    </>
  );
}

export default CircleCardSlider;

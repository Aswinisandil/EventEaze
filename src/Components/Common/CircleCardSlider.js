import React from "react";
import Slider from "react-slick";
import CircleCard from "./CircleCard";

function CircleCardSlider(props) {
  const settings = {
    dots: true,
    infinite: false,
    navs: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

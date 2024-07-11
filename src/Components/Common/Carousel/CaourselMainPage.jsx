import React from 'react';
import css from './CarouselMainPage.module.css';
import Slider from "react-slick";
import Images from "../Images";

const CaourselMainPage = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        navs: true,
        autoplay:true,
        speed: 2000,
        autoplaySpeed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear"
      };

  return (
        <>
      <section>
        {props.sliderHeading && <h6>{props.sliderHeading}</h6>}
        {props.sliderData && (
          <div className={css.Maincontainer}>
            <Slider {...settings}>
              {props.sliderData &&
                props.sliderData.map((each) => {
                  return (
                    <div>
                      <Images data={each} />
                    </div>
                  );
                })}
            </Slider>
          </div>
        )}
      </section>
    </>
  )
}

export default CaourselMainPage
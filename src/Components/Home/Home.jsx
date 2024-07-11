import React from 'react';
import css from './Home.module.css';
import CarouselMainPage from '../Common/Carousel/CaourselMainPage';
import { HeroCardData } from '../../StaticData/HomePageData';
import ContactExpert from '../Contact Expert/ContactExpert';

const Home = () => {
  return (
    <div className={css.container}>
        <CarouselMainPage sliderData = {HeroCardData}/>
        <div className={css.content}>
            <h1>EventEaze</h1>
            <h4>Your Vision Our Mission For Event Perfection!</h4>
        </div>
        <ContactExpert/>
    </div>
  )
}

export default Home
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.scss';

import TourKind from '../sections/Home/TourKind';
import Intro from '../sections/Home/Intro';
// import OurTrip from '../sections/Home/OurTrip';
import WhyUs from '../sections/Home/WhyUs';
import OurService from '../sections/Home/OurService';

class Home extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <section className="section-carousel">
          <Carousel showArrows={true}>
            <div>
              <img src={require("../assets/carousel-one.png")} alt="Carousel Pundi Tour" />
            </div>
            <div>
              <img src={require("../assets/carousel-two.png")} alt="Carousel Pundi Tour" />
            </div>
            <div>
              <img src={require("../assets/carousel-three.png")} alt="Carousel Pundi Tour" />
            </div>
          </Carousel>
        </section>

        <TourKind />
        <Intro />
        <OurService />
        {/* <OurTrip /> */}
        <WhyUs />
      </div>
    );
  }
}

export default Home;

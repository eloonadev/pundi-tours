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

  render() {
    return (
      <div>
        <section className="section-carousel">
          <Carousel showArrows={true}>
            <div>
              <img src="https://images.pexels.com/photos/4557822/pexels-photo-4557822.jpeg?auto=compress&crop=focalpoints&cs=tinysrgb&fit=crop&h=1250.0&sharp=5&w=5000" alt="lapada" />
            </div>
            <div>
              <img src="https://images.pexels.com/photos/4557822/pexels-photo-4557822.jpeg?auto=compress&crop=focalpoints&cs=tinysrgb&fit=crop&h=1250.0&sharp=5&w=5000" alt="lapada" />
            </div>
            <div>
              <img src="https://images.pexels.com/photos/4557822/pexels-photo-4557822.jpeg?auto=compress&crop=focalpoints&cs=tinysrgb&fit=crop&h=1250.0&sharp=5&w=5000" alt="lapada" />
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

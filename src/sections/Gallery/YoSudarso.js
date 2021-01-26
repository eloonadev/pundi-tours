import React from 'react';

import '../../scss/AlKaffah.scss';
import photo_1 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3117.JPG';
import photo_2 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3126.JPG';
import photo_3 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3153.JPG';
import photo_4 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3159.JPG';
import photo_5 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3171.JPG';
import photo_6 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3175.JPG';
import photo_7 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3179.JPG';
import photo_8 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3190.JPG';
import photo_9 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3206.JPG';
import photo_10 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3246.JPG';
import photo_11 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3273.JPG';
import photo_12 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3284.JPG';
import photo_13 from '../../assets/YOS_SUDARSO_HIGH_SCHOOL_FAMILY_TRIP/IMG_3326.JPG';

class YoSudarso extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          photo: photo_1
        },
        {
          photo: photo_2
        },
        {
          photo: photo_3
        },
        {
          photo: photo_4
        },
        {
          photo: photo_5
        },
        {
          photo: photo_6
        },
        {
          photo: photo_7
        },
        {
          photo: photo_8
        },
        {
          photo: photo_9
        },
        {
          photo: photo_10
        },
        {
          photo: photo_11
        },
        {
          photo: photo_12
        },
        {
          photo: photo_13
        },
      ]
    }
  }

  render() {
    const Maps = this.state.data.map(item => {
      return (
        <li className="grid-photo--list">
        <div className="image-wrapper">
          <img src={item.photo} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
        </div>
      </li>
      );
    });
    return (
      <section className="hero-al-kaffah">
        <div className="hero-al-kaffah--inner">
          <h2>YOS SUDARSO HIGH SCHOOL FAMILY TRIP</h2>
          <div className="pundi-tour-porto">
            <ul className="grid-photo">
              {Maps}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default YoSudarso;

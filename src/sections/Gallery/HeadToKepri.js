import React from 'react';

import '../../scss/AlKaffah.scss';
import photo_1 from '../../assets/HEAD_MASTER_OF_BATAM_CITY_GOES_TO_KEPRI_CORAL_RESORT/IMG_2931.JPG';
import photo_2 from '../../assets/HEAD_MASTER_OF_BATAM_CITY_GOES_TO_KEPRI_CORAL_RESORT/IMG_2946.JPG';
import photo_3 from '../../assets/HEAD_MASTER_OF_BATAM_CITY_GOES_TO_KEPRI_CORAL_RESORT/IMG_2949.JPG';
import photo_4 from '../../assets/HEAD_MASTER_OF_BATAM_CITY_GOES_TO_KEPRI_CORAL_RESORT/IMG_2958.JPG';
import photo_5 from '../../assets/HEAD_MASTER_OF_BATAM_CITY_GOES_TO_KEPRI_CORAL_RESORT/IMG_2968.JPG';
import photo_6 from '../../assets/HEAD_MASTER_OF_BATAM_CITY_GOES_TO_KEPRI_CORAL_RESORT/IMG_2972.JPG';
import photo_7 from '../../assets/HEAD_MASTER_OF_BATAM_CITY_GOES_TO_KEPRI_CORAL_RESORT/IMG_3049.JPG';
import photo_8 from '../../assets/HEAD_MASTER_OF_BATAM_CITY_GOES_TO_KEPRI_CORAL_RESORT/IMG_3071.JPG';
import photo_9 from '../../assets/HEAD_MASTER_OF_BATAM_CITY_GOES_TO_KEPRI_CORAL_RESORT/IMG_3075.JPG';
import photo_10 from '../../assets/HEAD_MASTER_OF_BATAM_CITY_GOES_TO_KEPRI_CORAL_RESORT/IMG_3080.JPG';
import photo_11 from '../../assets/HEAD_MASTER_OF_BATAM_CITY_GOES_TO_KEPRI_CORAL_RESORT/IMG_3104.JPG';

class HeadToKepri extends React.Component {
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
          <h2>HEAD MASTER OF BATAM CITY GOES TO KEPRI CORAL RESORT</h2>
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

export default HeadToKepri;

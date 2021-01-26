import React from 'react';

import '../../scss/AlKaffah.scss';
import photo_1 from '../../assets/FAMILY_TRIP_TO_KEPRI_CORAL_RESORT/IMG_2944.JPG';
import photo_2 from '../../assets/FAMILY_TRIP_TO_KEPRI_CORAL_RESORT/IMG_2959.JPG';
import photo_3 from '../../assets/FAMILY_TRIP_TO_KEPRI_CORAL_RESORT/IMG_2960.JPG';
import photo_4 from '../../assets/FAMILY_TRIP_TO_KEPRI_CORAL_RESORT/IMG_2964.JPG';
import photo_5 from '../../assets/FAMILY_TRIP_TO_KEPRI_CORAL_RESORT/IMG_3037.JPG';
import photo_6 from '../../assets/FAMILY_TRIP_TO_KEPRI_CORAL_RESORT/IMG_3087.JPG';
import photo_7 from '../../assets/FAMILY_TRIP_TO_KEPRI_CORAL_RESORT/IMG_3115.JPG';
import photo_8 from '../../assets/FAMILY_TRIP_TO_KEPRI_CORAL_RESORT/IMG_3116.JPG';

class FamilyTripToCoral extends React.Component {
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
          <h2>FAMILY TRIP TO KEPRI CORAL RESORT</h2>
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

export default FamilyTripToCoral;

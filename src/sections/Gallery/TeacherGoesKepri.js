import React from 'react';

import '../../scss/AlKaffah.scss';
import photo_1 from '../../assets/TEACHERS_GOES_TO_KEPRI_CORAL_RESORT/IMG_3336.JPG';
import photo_2 from '../../assets/TEACHERS_GOES_TO_KEPRI_CORAL_RESORT/IMG_3422.JPG';
import photo_3 from '../../assets/TEACHERS_GOES_TO_KEPRI_CORAL_RESORT/IMG_3476.JPG';
import photo_4 from '../../assets/TEACHERS_GOES_TO_KEPRI_CORAL_RESORT/IMG_3491.JPG';
import photo_5 from '../../assets/TEACHERS_GOES_TO_KEPRI_CORAL_RESORT/IMG_3618.JPG';

class TeacherGoesKepri extends React.Component {
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
          <h2>TEACHERS GOES TO KEPRI CORAL RESORT</h2>
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

export default TeacherGoesKepri;

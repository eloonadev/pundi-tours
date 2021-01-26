import React from 'react';
import '../../scss/AlKaffah.scss';

import AlKaffahOne from '../../assets/al_kaffah/landscape_one.png';
import AlKaffahTwo from '../../assets/al_kaffah/al-kaffah-one.png';
import AlKaffahThree from '../../assets/al_kaffah/al-kaffah-two.png';
import AlKaffahFour from '../../assets/al_kaffah/al-kaffah-three.png';
import AlKaffahFive from '../../assets/al_kaffah/al-kaffah-fou.png';
import photo_1 from '../../assets/al_kaffah/IMG_3350.JPG';
import photo_2 from '../../assets/al_kaffah/IMG_3353.JPG';
import photo_3 from '../../assets/al_kaffah/IMG_3359.JPG';
import photo_4 from '../../assets/al_kaffah/IMG_3420.JPG';
import photo_5 from '../../assets/al_kaffah/IMG_3454.JPG';
import photo_6 from '../../assets/al_kaffah/IMG_3459.JPG';
import photo_7 from '../../assets/al_kaffah/IMG_3461.JPG';
import photo_8 from '../../assets/al_kaffah/IMG_3466.JPG';
import photo_9 from '../../assets/al_kaffah/IMG_3507.JPG';
import photo_10 from '../../assets/al_kaffah/IMG_3635.JPG';
import photo_11 from '../../assets/al_kaffah/IMG_3641.JPG';

class AlKaffah extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          photo: AlKaffahOne
        },
        {
          photo: AlKaffahTwo
        },
        {
          photo: AlKaffahThree
        },
        {
          photo: AlKaffahFour
        },
        {
          photo: AlKaffahFive
        },
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
    })
    return (
      <section className="hero-al-kaffah">
        <div className="hero-al-kaffah--inner">
          <h2>AL KAFFAH ELEMENTARY SCHOOL BATAM STUDY TOUR</h2>
          <div className="pundi-tour-porto">
            <ul className="grid-photo">
              {Maps}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default AlKaffah;

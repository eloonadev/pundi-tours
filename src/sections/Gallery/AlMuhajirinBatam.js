import React from 'react';

import '../../scss/AlKaffah.scss';
import photo_1 from '../../assets/AL_MUHAJIRIN_ELEMENTARY_SCHOOL_BATAM/IMG_3331.JPG';
import photo_2 from '../../assets/AL_MUHAJIRIN_ELEMENTARY_SCHOOL_BATAM/IMG_3341.JPG';
import photo_3 from '../../assets/AL_MUHAJIRIN_ELEMENTARY_SCHOOL_BATAM/IMG_3363.JPG';
import photo_4 from '../../assets/AL_MUHAJIRIN_ELEMENTARY_SCHOOL_BATAM/IMG_3378.JPG';
import photo_5 from '../../assets/AL_MUHAJIRIN_ELEMENTARY_SCHOOL_BATAM/IMG_3403.JPG';
import photo_6 from '../../assets/AL_MUHAJIRIN_ELEMENTARY_SCHOOL_BATAM/IMG_3417.JPG';
import photo_7 from '../../assets/AL_MUHAJIRIN_ELEMENTARY_SCHOOL_BATAM/IMG_3479.JPG';
import photo_8 from '../../assets/AL_MUHAJIRIN_ELEMENTARY_SCHOOL_BATAM/IMG_3554.JPG';
import photo_9 from '../../assets/AL_MUHAJIRIN_ELEMENTARY_SCHOOL_BATAM/IMG_3554.JPG';
import photo_10 from '../../assets/AL_MUHAJIRIN_ELEMENTARY_SCHOOL_BATAM/IMG_3628.JPG';

class AlMuhajirinBatam extends React.Component {
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
          <h2>AL MUHAJIRIN ELEMENTARY SCHOOL BATAM</h2>
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

export default AlMuhajirinBatam;

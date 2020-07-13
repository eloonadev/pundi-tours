import React from 'react';
import '../../scss/AlKaffah.scss';

import AlKaffahOne from '../../assets/al_kaffah/landscape_one.png';
import AlKaffahTwo from '../../assets/al_kaffah/al-kaffah-one.png';
import AlKaffahThree from '../../assets/al_kaffah/al-kaffah-two.png';
import AlKaffahFour from '../../assets/al_kaffah/al-kaffah-three.png';
import AlKaffahFive from '../../assets/al_kaffah/al-kaffah-fou.png';

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

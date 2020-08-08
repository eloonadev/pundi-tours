import React from 'react';
import '../../scss/Special.scss';

import RanohIsland from '../../assets/special_interest_tour/RANOH ISLAND.jpeg';
import KepriCoral from '../../assets/special_interest_tour/KEPRI CORAL ISLAND.jpg';
import LabunIsland from '../../assets/special_interest_tour/LABUN ISLAND.jpg';

class Special extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          "name": "Ranoh Island",
          "destination_url": "https://drive.google.com/file/d/1MpvUCO3Y3iP3Mh4Xl6y5G0SDSyGl3Dy0/view?usp=sharing",
          "photo": RanohIsland
        },
        {
          "name": "Kepri Coral Island",
          "destination_url": "https://drive.google.com/file/d/1Dw1mZ32i59pU7ApLFPchEeUIizgYamr4/view?usp=sharing",
          "photo": KepriCoral
        },
        {
          "name": "Labun Island",
          "destination_url": "https://drive.google.com/file/d/1QUYnGj8dKYQSEhLvGHxoCTQ7pt52wgtr/view?usp=sharing",
          "photo": LabunIsland
        },
      ]
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const Maps = this.state.data.map(item => {
      return (
        <li className="grid-service--list">
          <div className="card-wrapper">
            <img src={item.photo} style={{ width: "240px", height: "200px" }} alt={item.name} />
            <a href={item.destination_url} className="title-wrapper" target="_blank" rel="noopener noreferrer">
              <p>{item.name}</p>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </li>
      );
    })
    return (
      <section className="hero-special">
        <div className="hero-special--inner">
          <h2>Special Interest Tour</h2>
          <div className="pundi-tour-places">
            <ul className="grid-servive">
              {Maps}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Special;

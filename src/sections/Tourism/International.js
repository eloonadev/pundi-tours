import React from 'react';
import '../../scss/International.scss';

import TigaNegara from '../../assets/tour_luar_negeri/TOUR3NEGARA.png';
import MalaySpore from '../../assets/tour_luar_negeri/SINGAPORE.jpg';

class International extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          "name": "Tour 3 Negara (In-Out Batam)",
          "destination_url": "https://drive.google.com/file/d/1gfkMIg2h1YILvc6zoF52hSwkDfciezmV/view?usp=sharing",
          "photo": TigaNegara
        },
        {
          "name": "Tour Malaysia & Singapore",
          "destination_url": "https://drive.google.com/file/d/19rFjuNuarq6YHYN-9iQPS8A4-SKRkzHb/view?usp=sharing",
          "photo": MalaySpore
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
      <section className="hero-international">
        <div className="hero-international--inner">
          <h2>Tour Luar Negeri</h2>
          <div className="pundi-tour-places">
            <ul className="grid-servive">
              {Maps}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default International;

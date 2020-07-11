import React from 'react';
import '../../scss/Special.scss';

import Golf from '../../assets/special_interest_tour/GOLF.jpg';
import Honeymoon from '../../assets/special_interest_tour/HONEYMOON.jpg';
import Lainnya from '../../assets/special_interest_tour/LAINNYA.jpg';

class Special extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [
        {
          "name": "Golf",
          "destination_url": "/",
          "photo": Golf
        },
        {
          "name": "Honeymoon",
          "destination_url": "https://drive.google.com/file/d/144IEVjcV9Yu7TYkUUXCR4ja6ujc4PQjn/view?usp=sharing",
          "photo": Honeymoon
        },
        {
          "name": "Lainnya",
          "destination_url": "https://drive.google.com/file/d/12BKiLqJwMsEyrJtZMzy4Ljq_akMxiRIl/view?usp=sharing",
          "photo": Lainnya
        },
      ]
    }
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

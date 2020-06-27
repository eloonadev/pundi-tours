import React from 'react';
import '../../scss/Special.scss';

const Special = () => (
  <section className="hero-special">
    <div className="hero-special--inner">
      <h2>Special Interest Tour</h2>
      <div className="pundi-tour-places">
        <ul className="grid-servive">
        <li className="grid-service--list">
            <div className="card-wrapper">
              <img src={require("../../assets/special_interest_tour/GOLF.jpg")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
              <a href="/" className="title-wrapper">
                <p>Golf</p>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </li>
          <li className="grid-service--list">
            <div className="card-wrapper">
              <img src={require("../../assets/special_interest_tour/HONEYMOON.jpg")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
              <a href="/" className="title-wrapper">
                <p>Honeymoon</p>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </li>
          <li className="grid-service--list">
            <div className="card-wrapper">
              <img src={require("../../assets/special_interest_tour/LAINNYA.jpg")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
              <a href="/" className="title-wrapper">
                <p>Lainnya</p>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  </section>
)

export default Special;

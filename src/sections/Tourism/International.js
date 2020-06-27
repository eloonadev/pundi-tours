import React from 'react';
import '../../scss/International.scss';

const International = () => (
  <section className="hero-international">
    <div className="hero-international--inner">
      <h2>Tour Luar Negeri</h2>
      <div className="pundi-tour-places">
        <ul className="grid-servive">
          <li className="grid-service--list">
            <div className="card-wrapper">
              <img src={require("../../assets/tour_luar_negeri/3negara.jpg")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
              <a href="/" className="title-wrapper">
                <p>Tour Tiga Negara (In Out Batam)</p>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </li>
          <li className="grid-service--list">
            <div className="card-wrapper">
              <img src={require("../../assets/tour_luar_negeri/SINGAPORE.jpg")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
              <a href="/" className="title-wrapper">
                <p>Tour Malaysia & Singapore</p>
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default International;

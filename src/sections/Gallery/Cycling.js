import React from 'react';

const Cycling = () => (
  <section className="hero-al-kaffah">
    <div className="hero-al-kaffah--inner">
      <h2>CYCLING TOUR</h2>
      <div className="pundi-tour-porto">
        <ul className="grid-photo">
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/cycling_tour/ct_1.jpeg")} style={{ width: "240px", height: "200px" }} alt="Cycling Tour" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/cycling_tour/ct_2.jpeg")} style={{ width: "240px", height: "200px" }} alt="Cycling Tour" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/cycling_tour/ct_3.jpeg")} style={{ width: "240px", height: "200px" }} alt="Cycling Tour" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/cycling_tour/ct_4.jpeg")} style={{ width: "240px", height: "200px" }} alt="Cycling Tour" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Cycling;

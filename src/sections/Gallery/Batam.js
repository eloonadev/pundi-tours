import React from 'react';

const Batam = () => (
  <section className="hero-al-kaffah">
    <div className="hero-al-kaffah--inner">
      <h2>TEACHERS OF MUHAMMADIYAH VOCATIONAL HIGH SCHOOL BATAM WEEKEND TRIP</h2>
      <div className="pundi-tour-porto">
        <ul className="grid-photo">
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/batam/batam.jpg")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/batam/batam_1.jpg")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/batam/batam_2.jpg")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/batam/batam_3.jpg")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/batam/batam_4.jpg")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/batam/batam_5.jpg")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Batam;

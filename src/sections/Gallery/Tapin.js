import React from 'react';

const Tapin = () => (
  <section className="hero-al-kaffah">
    <div className="hero-al-kaffah--inner">
      <h2>OFFICIAL TOUR OF TAPIN CITY GOVERNMENT WITH THE MAJOR BAPAK ARIFIN ARPAN</h2>
      <div className="pundi-tour-porto">
        <ul className="grid-photo">
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/tapin/tapin_1.jpeg")} style={{ width: "240px", height: "200px" }} alt="Cycling Tour" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/tapin/tapin_2.jpeg")} style={{ width: "140px", height: "200px" }} alt="Cycling Tour" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/tapin/tapin_3.jpeg")} style={{ width: "150px", height: "200px" }} alt="Cycling Tour" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/tapin/tapin_4.jpeg")} style={{ width: "240px", height: "200px" }} alt="Cycling Tour" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Tapin;

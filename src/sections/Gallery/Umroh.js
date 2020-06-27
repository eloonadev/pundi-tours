import React from 'react';

const Umroh = () => (
  <section className="hero-al-kaffah">
    <div className="hero-al-kaffah--inner">
    <h2>UMROH WITH PUNDI TOURS</h2>
      <div className="pundi-tour-porto">
        <ul className="grid-photo">
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/umroh/umroh_1.jpeg")} style={{ width: "240px", height: "200px" }} alt="Cycling Tour" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/umroh/umroh_2.jpeg")} style={{ width: "240px", height: "200px" }} alt="Cycling Tour" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Umroh;

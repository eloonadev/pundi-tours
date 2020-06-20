import React from 'react';

const AlKaffah = () => (
  <section className="hero-our-trip">
    <div className="hero-our-trip--inner">
      <h2>PERJALANAN KAMI</h2>
      {/* <button type="button" onClick={this.show}>Button</button> */}
      <div className="pundi-tour-porto">
        <ul className="grid-photo">
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/al_kaffah/landscape_one.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/al_kaffah/al-kaffah-one.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/al_kaffah/al-kaffah-two.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/al_kaffah/al-kaffah-three.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/al_kaffah/al-kaffah-fou.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default AlKaffah;

import React from 'react';
import '../../scss/OurTrip.scss';

const OurTrip = () => (
  <section className="hero-our-trip">
    <div className="hero-our-trip--inner">
      <h2>PERJALANAN KAMI</h2>
      <div className="pundi-tour-porto">
        <ul className="grid-photo">
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/al_kaffah/landscape_one.png")} style={{ width: "200px", height: "200px" }} alt="Al Kaffah" />
              <p>AL KAFFAH ELEMENTARY SCHOOL BATAM STUDY TOUR</p>
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/surabaya/surabaya.jpg")} style={{ width: "200px", height: "200px" }} alt="Tour with Surabayan" />
              <p>BENCHMARK SIGHTSEEING OF SURABAYA CITY GOVERNMENT WITH THE MAJOR IBU RISMA</p>
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/samarinda/samarinda.JPG")} style={{ width: "200px", height: "200px" }} alt="Tour with Samarinda School" />
              <p>FASHTABIQUL KHAIRAT ELEMENTARY SCHOOL SAMARINDA STUDY TOUR</p>
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/batam/batam.jpg")} style={{ width: "200px", height: "200px" }} alt="Tour with Batam School" />
              <p>TEACHERS OF MUHAMMADIYAH VOCATIONAL HIGH SCHOOL BATAM WEEKEND TRIP</p>
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/meranti/meranti.jpg")} style={{ width: "200px", height: "200px" }} alt="Meeting Meranti Citi" />
              <p>THE MEETING OF MERANTI CITY GOVERNMENT</p>
            </div>
          </li>
          <li className="grid-photo--list">
            <div className="image-wrapper">
              <img src={require("../../assets/tiens/tiens.jpg")} style={{ width: "200px", height: "200px" }} alt="Tour with Tiens" />
              <p>TIENS INDONESIA TOUR</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default OurTrip;

import React from 'react';
import '../../scss/Hotel.scss';

const Hotel = () => (
  <section className="hero-hotel" id="#hotel">
    <div className="hero-hotel--inner">
      <div className="content-wrapper">
        <h2>Hotel</h2>
        <h4>“Temukan kamar hotel idaman anda di sini”</h4>
        <p>Bingung ingin menginap di mana? Hubungi kami untuk menemukan hotel favorit anda. Kami menyediakan layanan pemesanan kamar hotel dalam dan luar negeri dengan harga terbaik dan sesuai dengan budget anda.</p>
      </div>
      <div className="image-wrapper">
        <img src={require("../../assets/HOTEL.jpeg")} alt="Hotel" />
      </div>
    </div>
  </section>
)

export default Hotel;

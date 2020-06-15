import React from 'react';
import '../../scss/Hotel.scss';

const Hotel = () => (
  <section className="hero-hotel">
    <div className="hero-hotel--inner">
      <div className="content-wrapper">
        <h2>Hotel</h2>
        <h4>“Temukan kamar hotel idaman anda di sini”</h4>
        <p>Bingung ingin menginap di mana? Hubungi kami untuk menemukan hotel favorit anda dengan harga terbaik.</p>
      </div>
      <div className="image-wrapper">
        <img src="https://images.pexels.com/photos/3801439/pexels-photo-3801439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="whyus" />
      </div>
    </div>
  </section>
)

export default Hotel;

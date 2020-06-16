import React from 'react';
import '../../scss/Transportation.scss';

const Transportation = () => (
  <section className="hero-transport" id="#transportation">
    <div className="hero-transport--inner">
      <div className="content-wrapper">
        <h2>TRANSPORTASI</h2>
        <h4>“Ingin sewa kendaraan untuk perjalanan wisata anda ?”</h4>
        <p>Pundi Tours menyediakan berbagai pilihan transportasi mulai dari Sedan, Van, Mini Bus, hingga Big Bus di destinasi-destinasi wisata baik dalam maupun luar negeri.</p>
      </div>
      <div className="image-wrapper">
        <img src={require("../../assets/TRANSPORTASI.jpeg")} alt="Transportasi" />
      </div>
    </div>
  </section>
)

export default Transportation;

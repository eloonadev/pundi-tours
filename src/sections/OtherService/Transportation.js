import React from 'react';
import '../../scss/Transportation.scss';

const Transportation = () => (
  <section className="hero-transport" id="#transportation">
    <div className="hero-transport--inner">
      <div className="content-wrapper">
        <h2>TRANSPORTASI</h2>
        <div className="desc-wrapper">
          <h4>“Ingin sewa kendaraan untuk perjalanan wisata anda ?”</h4>
          <a href="https://drive.google.com/file/d/1rbfq_nq4wSTKr1ZwO5ZsQPBNhql_AFcn/view?usp=sharing" target="_blank" rel="noopener noreferrer">(click here)</a>
        </div>
        <p>Pundi Tours menyediakan berbagai pilihan transportasi wisata baik dalam maupun luar negeri antara lain :</p>
        <ul>
          <li>Sedan</li>
          <li>MPV (Avanza, Innova, dsb)</li>
          <li>Alphard</li>
          <li>Van</li>
          <li>Coaster</li>
          <li>Medium Bus (25-32 Seater)</li>
          <li>Big Bus (40-60 Seater)</li>
        </ul>
      </div>
      <div className="image-wrapper">
        <img src={require("../../assets/TRANSPORTASI.png")} alt="Transportasi" />
      </div>
    </div>
  </section>
)

export default Transportation;

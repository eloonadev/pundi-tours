import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/Experience.scss';

const Experience = () => (
  <section className="hero-experience">
    <div className="hero-experience--inner">
      <div className="image-wrapper">
        <img src={require("../../assets/mengapa_kami/mengapa_kami.JPG")} alt="whyus" />
      </div>
      <div className="content-wrapper">
        <h2>ANDAL DAN BERPENGALAMAN</h2>
        <p>Menangani perjalanan wisata sejak 2003 merupakan perjalanan panjang bagi sebuah Biro Perjalanan Wisata. Kami terbukti menjadi perusahaan yang dapat diandalkan dan sangat berpengalaman dalam menangani banyak sekali kebutuhan perjalanan wisata klien kami baik dalam maupun luar negeri.</p>
        <div className="btn-wrapper">
          <Link className="button" to="/aboutus">Tentang Kami</Link>
        </div>
      </div>
    </div>
  </section>
)

export default Experience;

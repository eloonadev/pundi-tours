import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/Legal.scss';

const Service = () => (
  <section className="hero-legal">
    <div className="hero-legal--inner">
      <div className="content-wrapper">
        <h2>BERAGAM DESTINASI DAN LAYANAN</h2>
        <p>Kami menyediakan berbagai paket wisata ke banyak destinasi baik dalam maupun luar negeri. Kami juga menyediakan layanan lainnya demi memberikan pelayanan prima kepada klien kami.</p>
        <div className="btn-wrapper">
          <Link className="button" to="/">Paket Wisata</Link>
          {/* <Link className="button" to="/">Layanan Lainnya</Link> */}
        </div>
      </div>
      <div className="image-wrapper">
        <img src={require("../../assets/mengapa_kami/mengapa_kami_3.jpg")} alt="whyus" />
      </div>
    </div>
  </section>
)

export default Service;

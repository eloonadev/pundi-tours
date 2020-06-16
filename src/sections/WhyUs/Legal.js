import React from 'react';
import '../../scss/Legal.scss';
import { Link } from 'react-router-dom';

const Legal = () => (
  <section className="hero-legal">
    <div className="hero-legal--inner">
      <div className="content-wrapper">
        <h2>LEGALITAS LENGKAP</h2>
        <p>Pastikan anda mempercayakan perjalanan wisata anda dengan Biro Perjalanan Wisata yang terpercaya. Pundi Tours adalah perusahaan resmi berbadan hukum yaitu PT. DWI PUNDI WISATA.</p>
        <div className="btn-wrapper">
          <Link className="button" to="/aboutus">LIHAT PROFIL PERUSAHAAN</Link>
        </div>
      </div>
      <div className="image-wrapper">
        <img src="https://images.pexels.com/photos/3801439/pexels-photo-3801439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="whyus" />
      </div>
    </div>
  </section>
)

export default Legal;

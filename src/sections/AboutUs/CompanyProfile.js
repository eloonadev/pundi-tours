import React from 'react';
import '../../scss/CompanyProfile.scss';

const CompanyProfile = () => (
  <section className="hero-profile">
    <div className="hero-profile--inner">
      <div className="copy-content">
        <h2>Profil Perusahaan</h2>
        <div className="copy-content--one">
          <p>Pundi Tours merupakan sebuah Biro Perjalanan Wisata yang berdiri sejak 11 April 2003. Waktu tersebut menjadi tonggak awal dari komitmen kami untuk menjadi sahabat terbaik bagi klien kami dalam menyiapkan segala keperluan dalam kegiatan perjalanan wisata.</p>
        </div>
        <div className="copy-content--two">
          <p>Perjalanan panjang membuat kami kini bertransformasi menjadi perusahaan yang giat menjalin kerja sama dengan perusahaan nasional maupun internasional. Kerja sama tersebut meliputi kerja sama dengan perusahaan penerbangan, perhotelan, restoran, serta Biro Perjalanan Wisata lainnya baik dalam maupun luar negeri. Berbagai perubahan dan perbaikan kami lakukan demi memberikan pelayanan yang terbaik kepada konsumen kami.</p>
        </div>
      </div>
      <div className="copy-image">
        <img src={require("../../assets/profile-perusahaan.JPG")} alt="Profil Perusahaan" />
      </div>
    </div>
  </section>
)

export default CompanyProfile;

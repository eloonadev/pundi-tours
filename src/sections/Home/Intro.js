import React from 'react';
import '../../scss/Intro.scss';

const Intro = () => (
  <section className="hero-intro">
    <div className="hero-intro--inner">
      <div className="image-content">
        <img src={require("../../assets/siapakami.JPG")} alt="PundiTeam" />
      </div>
      <div className="copy-content">
        <h2>SIAPA KAMI</h2>
        <p>Pundi Tours merupakan sebuah Biro Perjalanan Wisata yang berdiri sejak 11 April 2003. Waktu tersebut menjadi tonggak awal dari komitmen kami untuk menjadi sahabat terbaik bagi klien kami dalam menyiapkan segala keperluan dalam kegiatan perjalanan wisata. <br /><br />

              Perjalanan panjang membuat kami kini bertransformasi menjadi perusahaan yang giat menjalin kerja sama dengan perusahaan nasional maupun internasional. Kerja sama tersebut meliputi kerja sama dengan perusahaan penerbangan, perhotelan, restoran, serta Biro Perjalanan Wisata lainnya baik dalam maupun luar negeri. Berbagai perubahan dan perbaikan kami lakukan demi memberikan pelayanan yang terbaik kepada konsumen kami. </p>
      </div>
    </div>
  </section>
)

export default Intro;

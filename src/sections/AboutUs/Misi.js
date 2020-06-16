import React from 'react';
import '../../scss/Misi.scss';

const Misi = () => (
  <section className="hero-misi">
    <div className="hero-misi--inner">
      <div className="copy-image">
       <img src={require("../../assets/misi.JPG")} alt="Misi" />
      </div>
      <div className="copy-content">
        <h2>Misi</h2>
        <div className="content-wrapper">
          <ul>
            <li>
              <p>Membangun sinergitas yang kuat dalam internal perusahaan.</p>
            </li>
            <li>
              <p>Membangun jaringan yang luas dan hubungan baik kepada penyedia jasa perjalanan wisata di dalam dan luar negeri.</p>
            </li>
            <li>
              <p>Menjadi Biro Perjalanan Wisata yang mengedepankan kualitas pelayanan dan kepuasan pelanggan.</p>
            </li>
            <li>
              <p>Berkomitmen memberikan harga yang terjangkau bagi klien.</p>
            </li>
            <li>
              <p>Senantiasa melakukan evaluasi serta inovasi terhadap produk yang ditawarkan.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Misi;

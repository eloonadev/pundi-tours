import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer--content">
      <div className="first-col">
        <img style={{ height: "60px" }} src={require("../assets/pundi-logo.png")} alt="PundiTourLogo" />
        <p>Pundi Tour adalah perusahaan yang bergerak di bidang Biro Perjalanan Wisata (TDUP). Kami memiliki beragam pilihan wisata dan layanan lain demi memenuhi kebutuhan, kenyamanan dan kemudahan Anda.</p>
      </div>
      <div className="second-col">
        <h2>Kantor</h2>
        <div className="address">
          <i class="fas fa-map-marker-alt"></i>
          <span>Jl. Raja Isa Ruko Purimas Blok A No 32, Kota Batam, Indonesia</span>
        </div>
        <div className="telephone">
          <div className="icon">
            <i class="fas fa-phone"></i>
          </div>
          <div className="num">
            <h4>Telephone</h4>
            <p>+62 778 749 5858</p>
          </div>
        </div>
        <div className="mobile-phone">
          <div className="icon">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <div className="num">
            <h4>Phone</h4>
            <p>+62 821 6967 1918</p>
            <p>+62 811 6926 888</p>
            <p>+62 878 7447 1460</p>
          </div>
        </div>
        <div className="email">
          <div className="icon">
            <i class="fas fa-envelope"></i>
          </div>
          <div className="num">
            <h4>Email</h4>
            <p>travel@punditours.com</p>
            <p>punditours01@gmail.com</p>
            <p>punditours02@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer--social">
      <a href="https://www.instagram.com/punditours/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/punditours/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook"></i>
      </a>
    </div>
  </footer>
);

export default Footer;

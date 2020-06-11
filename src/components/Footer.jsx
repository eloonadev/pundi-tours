import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer--content">
      <div className="first-col">
        <img style={{ height: "60px" }} src={require("../assets/pundi-logo.png")} alt="PundiTourLogo" />
        <p>Pundi Tours merupakan sebuah Biro Perjalanan Wisata yang berdiri sejak 11 April 2003. Waktu tersebut menjadi tonggak awal dari komitmen kami untuk menjadi sahabat terbaik bagi klien kami dalam menyiapkan segala keperluan dalam kegiatan perjalanan wisata.</p>
      </div>
      <div className="second-col">
        <h2>Kantor</h2>
        <div className="address">
          <div className="icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="num">
            <h4>Address</h4>
            <p>Jl. Raja Isa Ruko Purimas Blok A No 32, Kota Batam, Indonesia</p>
          </div>
        </div>
        <div className="telephone">
          <div className="icon">
            <i className="fas fa-phone"></i>
          </div>
          <div className="num">
            <h4>Telephone</h4>
            <p>+62 778 749 5858 (Office)</p>
          </div>
        </div>
        <div className="mobile-phone">
          <div className="icon">
            <i className="fab fa-whatsapp"></i>
          </div>
          <div className="num">
            <h4>Phone / Whats App</h4>
            <p>+62 821 6967 1918 (Office)</p>
            <p>+62 811 6926 888 (Mr.Sampun)</p>
            <p>+62 878 7447 1460 (Mr.Akbar)</p>
          </div>
        </div>
        <div className="email">
          <div className="icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="num">
            <h4>Email</h4>
            <p>travel@pundi-tours.com</p>
            <p>punditours01@gmail.com (Mr.Akbar)</p>
            <p>punditours02@gmail.com (Mr.Akbar)</p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer--social">
      <a href="https://www.instagram.com/punditours/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/punditours/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
      </a>
      <span>Copyright PT. Dwi Pundi Wisata - All Right Reserved</span>
    </div>
  </footer>
);

export default Footer;

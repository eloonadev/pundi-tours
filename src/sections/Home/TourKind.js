import React from 'react';
import '../../scss/TourKind.scss';

const TourKind = () => (
  <section className="tour-kind">
    <div className="tour-kind--iner">
      <div className="card-wrapper">
        <img className="image" src="https://images.pexels.com/photos/2450218/pexels-photo-2450218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="FerryBoat" />
        <div className="copy">
          <div className="copy--icon">
            <i className="fa fa-bus fa-2x"></i>
          </div>
          <div className="copy--content">
            <h3>Tour Indonesia</h3>
            <p>Mulai dari Aceh hingga Papua, serta beragam destinasi wisata lainnya di Indonesia seperti Bali, Lombok, Jogja, Jakarta, dan lainnya.</p>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <img className="image" src="https://images.pexels.com/photos/1842332/pexels-photo-1842332.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="FerryBoat" />
        <div className="copy">
          <div className="copy--icon">
            <i className="fa fa-plane fa-2x icon"></i>
          </div>
          <div className="copy--content">
            <h3>Tour Luar Negeri</h3>
            <p>Perjalanan nyaman dan menyenangkan dengan berbagai pilihan destinasi mulai dari Asia, Eropa hingga Amerika.</p>
          </div>
        </div>
      </div>
      <div className="card-wrapper">
        <img className="image__vitamin-sea" src={require("../../assets/VITAMIN SEA.jpg")} alt="Vitamin Sea" />
        <div className="copy">
          <div className="copy--icon">
            <i className="fas fa-water fa-2x"></i>
          </div>
          <div className="copy--content">
            <h3>Vitamin Sea</h3>
            <p>Nikmati keindahan pantai dan panorama laut Indonesia yang begitu istimewa</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TourKind;

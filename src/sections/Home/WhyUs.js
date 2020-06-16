import React from 'react';
import '../../scss/WhyUs.scss';

const WhyUs = () => (
  <section className="hero-why-us">
    <div className="hero-why-us--inner">
      <div className="copy-content">
        <h2>MENGAPA KAMI</h2>
        <div className="list-advantage">
          <span className="fa-stack">
            <i className="fas fa-check-circle"></i>
          </span>
          <span className="copy-writing">LEGALITAS LENGKAP</span>
        </div>
        <div className="list-advantage">
          <span className="fa-stack">
            <i className="fas fa-check-circle"></i>
          </span>
          <span className="copy-writing">ANDAL DAN BERPENGALAMAN</span>
        </div>
        <div className="list-advantage">
          <span className="fa-stack">
            <i className="fas fa-check-circle"></i>
          </span>
          <span className="copy-writing">BERAGAM DESTINASI DAN PENGALAMAN</span>
        </div>
      </div>
      <div className="copy-image">
        <img src={require("../../assets/mengapakami.JPG")} alt="PundiTeam-WhyUs" />
      </div>
    </div>
  </section>
)

export default WhyUs;

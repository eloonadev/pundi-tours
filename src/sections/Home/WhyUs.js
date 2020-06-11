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
        <img src="https://images.pexels.com/photos/3801439/pexels-photo-3801439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="whyus" />
      </div>
    </div>
  </section>
)

export default WhyUs;

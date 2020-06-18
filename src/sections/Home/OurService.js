import React from 'react';
import '../../scss/OurService.scss';

const OurService = () => (
  <section className="hero-service">
    <div className="hero-service--inner">
      <h2>layanan lain</h2>
      <div className="content-wrapper">
        <div className="card-content">
          <i class="far fa-handshake"></i>
          <div className="copy-wrapper">
            <h3>MICE</h3>
            <p>Pundi Tours berpengalaman dalam penyelenggaraan MICE (Meeting, Incentive, Conference, Exhibition) dari berbagai perusahaan maupun instansi pemerintahan.</p>
          </div>
        </div>
        <div className="card-content">
          <i className="fas fa-ticket-alt"></i>
          <div className="copy-wrapper">
            <h3>Tiket</h3>
            <p>Kami menyediakan layanan pemesanan tiket pesawat dalam dan luar negeri, tiket Pelni, tiket ferry ke Singapore dan Malaysia, tiket kereta api, dan lain-lain.</p>
          </div>
        </div>
        <div className="card-content">
          <i className="fas fa-hotel"></i>
          <div className="copy-wrapper">
            <h3>Voucher Hotel</h3>
            <p>Bingung ingin menginap di mana? Hubungi kami untuk menemukan hotel favorit anda dengan harga terbaik.</p>
          </div>
        </div>
        <div className="card-content">
          <i className="fas fa-car"></i>
          <div className="copy-wrapper">
            <h3>Rental Transportasi</h3>
            <p>Pundi Tours menyediakan berbagai pilihan transportasi mulai dari Sedan, Van, Mini Bus, hingga Big Bus di destinasi-destinasi wisata baik dalam maupun luar negeri.</p>
          </div>
        </div>
        <div className="card-content">
          <i className="fas fa-money-check-alt"></i>
          <div className="copy-wrapper">
            <h3>Layanan Pembayaran</h3>
            <p>Kami melayani berbagai tagihan pembayaran, seperti Pemabarayan Listrik, Air ATB, Indovision, Indihome, Kartu Kredit, dll.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default OurService;

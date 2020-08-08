import React, { useEffect } from 'react';
import '../../scss/Ticket.scss';

const Ticket = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
  <section className="hero-ticket" id="#ticket">
    <div className="hero-ticket--inner">
      <div className="content-wrapper">
        <h2>TIKET</h2>
        <h4>“Pesan tiket perjalanan anda di Pundi Tours”</h4>
        <p>Kami menyediakan layanan pemesanan tiket pesawat dalam dan luar negeri, tiket Pelni, tiket ferry ke Singapore dan Malaysia, tiket kereta api, dan lain-lain.</p>
      </div>
      <div className="image-wrapper">
        <img src={require("../../assets/TIKET.jpeg")} alt="Tiket" />
      </div>
    </div>
  </section>
)}

export default Ticket;

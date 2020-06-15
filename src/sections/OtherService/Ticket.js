import React from 'react';
import '../../scss/Ticket.scss';

const Ticket = () => (
  <section className="hero-ticket" id="#ticket">
    <div className="hero-ticket--inner">
      <div className="content-wrapper">
        <h2>TIKET</h2>
        <h4>“Pesan tiket perjalanan anda di Pundi Tours”</h4>
        <p>Kami menyediakan layanan pemesanan tiket pesawat dalam dan luar negeri, tiket Pelni, tiket ferry ke Singapore dan Malaysia, tiket kereta api, dan lain-lain.</p>
      </div>
      <div className="image-wrapper">
        <img src="https://images.pexels.com/photos/3801439/pexels-photo-3801439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="whyus" />
      </div>
    </div>
  </section>
)

export default Ticket;

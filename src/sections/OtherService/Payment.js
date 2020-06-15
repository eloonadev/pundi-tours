import React from 'react';
import '../../scss/Payment.scss';

const Payment = () => (
  <section className="hero-payment">
    <div className="hero-payment--inner">
      <div className="content-wrapper">
        <h2>MULTI PAYMENT SERVICE</h2>
        <h4>“Bayar berbagai macam tagihan anda di sini”</h4>
        <p>Kami melayani berbagai tagihan pembayaran, antara lain :</p>
        <ul>
          <li>Pembayaran Listrik PLN</li>
          <li>Pembayaran Air ATB</li>
          <li>Indovision</li>
          <li>Indihome</li>
          <li>Kartu Kredit</li>
          <li>Finance (WOM, BAF, FIF, KPR BTN, Mega Auto Finance, Mega Central Finance, OTO, MPM, RADANA, Mega Finance)</li>
          <li>Indosat Postpaid</li>
          <li>Telkomsel Postpaid</li>
          <li>XL Postpaid</li>
          <li>Dan lain-lain</li>
        </ul>
      </div>
      <div className="image-wrapper">
        <img src="https://images.pexels.com/photos/3801439/pexels-photo-3801439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="whyus" />
      </div>
    </div>
  </section>
)

export default Payment;

import React, { useEffect } from 'react';
import '../../scss/Payment.scss';

const Payment = () => { 
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
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
        <img src={require("../../assets/payment.jpg")} alt="Multi Payment" />
      </div>
    </div>
  </section>
)}

export default Payment;

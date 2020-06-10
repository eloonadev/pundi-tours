import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.scss';

class Home extends React.Component {

  render() {
    return (
      <div>
        <section className="section-carousel">
          <Carousel showArrows={true}>
            <div>
              <img src="https://images.pexels.com/photos/4557822/pexels-photo-4557822.jpeg?auto=compress&crop=focalpoints&cs=tinysrgb&fit=crop&h=1250.0&sharp=5&w=5000" alt="lapada" />
            </div>
            <div>
              <img src="https://images.pexels.com/photos/4557822/pexels-photo-4557822.jpeg?auto=compress&crop=focalpoints&cs=tinysrgb&fit=crop&h=1250.0&sharp=5&w=5000" alt="lapada" />
            </div>
            <div>
              <img src="https://images.pexels.com/photos/4557822/pexels-photo-4557822.jpeg?auto=compress&crop=focalpoints&cs=tinysrgb&fit=crop&h=1250.0&sharp=5&w=5000" alt="lapada" />
            </div>
          </Carousel>
        </section>

        <section className="tour-kind">
          <div className="tour-kind--iner">
            <div className="card-wrapper">
              <img className="image" src="https://images.pexels.com/photos/654/clouds-cloudy-agriculture-farm.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="FerryBoat" />
              <div className="copy">
                <div className="copy--icon">
                  <i className="fa fa-ship fa-2x"></i>
                </div>
                <div className="copy--content">
                  <h3>Special Interest Tour</h3>
                  <p>Rasakan pengalaman baru mengunjungi destinasi populer secara istimewa</p>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <img className="image" src="https://images.pexels.com/photos/2450218/pexels-photo-2450218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="FerryBoat" />
              <div className="copy">
                <div className="copy--icon">
                  <i className="fa fa-bus fa-2x"></i>
                </div>
                <div className="copy--content">
                  <h3>Tour Domestik</h3>
                  <p>Mulai dari Belitung hingga Bali, Lombok hingga Kalimantan, serta beragam destinasi wisata di Indonesia.</p>
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
                  <h3>Tour International</h3>
                  <p>Perjalanan nyaman dan menyenangkan dengan berbagai pilihan destinasi mulai dari Asia, Eropa hingga Amerika.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hero-intro">
          <div className="hero-intro--inner">
            <div className="image-content">
              <img src="https://images.pexels.com/photos/3777920/pexels-photo-3777920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="WhoIsUs" />
            </div>
            <div className="copy-content">
              <h2>SIAPA KAMI</h2>
              <p>Pundi Tours merupakan sebuah Biro Perjalanan Wisata yang berdiri sejak 11 April 2003. Waktu tersebut menjadi tonggak awal dari komitmen kami untuk menjadi sahabat terbaik bagi klien kami dalam menyiapkan segala keperluan dalam kegiatan perjalanan wisata. <br/><br/>

Perjalanan panjang membuat kami kini bertransformasi menjadi perusahaan yang giat menjalin kerja sama dengan perusahaan nasional maupun internasional. Kerja sama tersebut meliputi kerja sama dengan perusahaan penerbangan, perhotelan, restoran, serta Biro Perjalanan Wisata lainnya baik dalam maupun luar negeri. Berbagai perubahan dan perbaikan kami lakukan demi memberikan pelayanan yang terbaik kepada konsumen kami. </p>
            </div>
          </div>
        </section>

        <section className="hero-our-trip">
          <div className="hero-our-trip--inner">
            <h2>PERJALANAN KAMI</h2>
            <div className="pundi-tour-porto">
              <ul className="grid-photo">
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src="https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src="https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src="https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src="https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src="https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src="https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src="https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src="https://images.pexels.com/photos/3060930/pexels-photo-3060930.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

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
                  <i class="fas fa-check-circle"></i>
                </span>
                <span className="copy-writing">ANDAL DAN BERPENGALAMAN</span>
              </div>
              <div className="list-advantage">
                <span className="fa-stack">
                  <i class="fas fa-check-circle"></i>
                </span>
                <span className="copy-writing">BERAGAM DESTINASI DAN PENGALAMAN</span>
              </div>
            </div>
            <div className="copy-image">
              {/* <img src={require("../assets/lintas-buana-mengapa-kami.jpg")} alt="WhyUs" /> */}
              <img src="https://images.pexels.com/photos/3801439/pexels-photo-3801439.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="whyus" />
            </div>
          </div>
        </section>

        <section className="hero-service">
          <div className="hero-service--inner">
            <h2>layanan dari kami</h2>
            <div className="content-wrapper">
              <div className="card-content">
                <i className="fas fa-ticket-alt"></i>
                <div className="copy-wrapper">
                  <h3>Tiket</h3>
                  <p>Butuh tiket untuk tujuan dalam dan luar negeri? Kontak kami segera. Tak perlu repot dan risau. Layanan booking tiket penerbangan dari Lintas Buana Tour & Travel siap membantu Anda.</p>
                </div>
              </div>
              <div className="card-content">
                <i className="fas fa-hotel"></i>
                <div className="copy-wrapper">
                  <h3>Voucher Hotel</h3>
                  <p>Butuh tiket untuk tujuan dalam dan luar negeri? Kontak kami segera. Tak perlu repot dan risau. Layanan booking tiket penerbangan dari Lintas Buana Tour & Travel siap membantu Anda.</p>
                </div>
              </div>
              <div className="card-content">
                <i className="fas fa-car"></i>
                <div className="copy-wrapper">
                  <h3>Rental Transportasi</h3>
                  <p>Butuh tiket untuk tujuan dalam dan luar negeri? Kontak kami segera. Tak perlu repot dan risau. Layanan booking tiket penerbangan dari Lintas Buana Tour & Travel siap membantu Anda.</p>
                </div>
              </div>
              <div className="card-content">
                <i className="fas fa-money-check-alt"></i>
                <div className="copy-wrapper">
                  <h3>Layanan Pembayaran</h3>
                  <p>Butuh tiket untuk tujuan dalam dan luar negeri? Kontak kami segera. Tak perlu repot dan risau. Layanan booking tiket penerbangan dari Lintas Buana Tour & Travel siap membantu Anda.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

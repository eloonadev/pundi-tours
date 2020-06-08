import React from 'react';
import './Home.scss';

class Home extends React.Component {

  render() {
    return (
      <div>
        {/* <section className="image-landing"></section> */}
        <section className="tour-kind">
          <div className="tour-kind--iner">
            <div className="card-wrapper">
              <img className="image" src={require("../assets/kapal-pesiar-royal-caribbean.jpg")} alt="FerryBoat" />
              <div className="copy">
                <div className="copy--icon">
                  <i className="fa fa-ship fa-2x"></i>
                </div>
                <div className="copy--content">
                  <h3>Tour Kapan Pesiar</h3>
                  <p>Rasakan pengalaman baru mengunjungi destinasi populer di Asia Tenggara menggunakan kapal pesiar.</p>
                </div>
              </div>
            </div>
            <div className="card-wrapper">
              <img className="image" src={require("../assets/domestik-intro.jpg")} alt="FerryBoat" />
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
              <img className="image" src={require("../assets/internasional-central-europe-france.jpg")} alt="FerryBoat" />
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
              <img src={require("../assets/lintas-buana-siapa-kami.jpg")} alt="WhoIsUs" />
            </div>
            <div className="copy-content">
              <h2>SIAPA KAMI</h2>
              <p>Dengan pengalaman menyediakan perjalanan wisata kepada puluhan perusahaan ternama dan perseorangan yang tak terhitung lagi jumlahnya, Lintas Buana Tour &amp; Travel siap memberikan yang terbaik. Beragam pilihan wisata maupun layanan lain, kami sediakan demi memenuhi kebutuhan, kenyamanan, serta kemudahan bagi Anda.</p>
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
                    <img src={require("../assets/lintas-buana-siapa-kami.jpg")} alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src={require("../assets/lintas-buana-siapa-kami.jpg")} alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src={require("../assets/lintas-buana-siapa-kami.jpg")} alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src={require("../assets/lintas-buana-siapa-kami.jpg")} alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src={require("../assets/lintas-buana-siapa-kami.jpg")} alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src={require("../assets/lintas-buana-siapa-kami.jpg")} alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src={require("../assets/lintas-buana-siapa-kami.jpg")} alt="" style={{ width: "200px", height: "200px" }} />
                  </div>
                </li>
                <li className="grid-photo--list">
                  <div className="image-wrapper">
                    <img src={require("../assets/lintas-buana-siapa-kami.jpg")} alt="" style={{ width: "200px", height: "200px" }} />
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
                <span className="fa-stack"></span>
                <span>LEGALITAS LENGKAP</span>
              </div>
              <div className="list-advantage">
                <span className="fa-stack"></span>
                <span>ANDAL DAN BERPENGALAMAN</span>
              </div>
              <div className="list-advantage">
                <span className="fa-stack"></span>
                <span>BERAGAM DESTINASI DAN PENGALAMAN</span>
              </div>
            </div>
            <div className="copy-image">
              <img src={require("../assets/lintas-buana-mengapa-kami.jpg")} alt="WhyUs" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

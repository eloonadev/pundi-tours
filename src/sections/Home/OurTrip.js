import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/OurTrip.scss';

class OurTrip extends React.Component {
  state = {
    isClick: false
  }

  show = () => {
    this.setState((prevState) => {
      return { isClick: !prevState.isClick }
    });
  }


  render() {
    let gridClass = "grid-photo"
    let imgClass = "image-wrapper"
    if (this.state.isClick) {
      gridClass = "grid-photo close"
      imgClass = "image-wrapper close"
    }
    return (
      <section className="hero-our-trip">
        <div className="hero-our-trip--inner">
          <h2>PERJALANAN KAMI</h2>
          {/* <button type="button" onClick={this.show}>Button</button> */}
          <div className="pundi-tour-porto">
            <ul className={gridClass}>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <Link to="/gallery/al-kaffah">
                    <img src={require("../../assets/al_kaffah/landscape_one.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
                    <p>AL KAFFAH ELEMENTARY SCHOOL BATAM STUDY TOUR</p>
                  </Link>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <Link to="/gallery/surabaya">
                    <img src={require("../../assets/surabaya/surabaya.jpg")} style={{ width: "240px", height: "200px" }} alt="Tour with Surabayan" />
                    <p>BENCHMARK SIGHTSEEING OF SURABAYA CITY GOVERNMENT WITH THE MAJOR IBU RISMA</p>
                  </Link>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <Link to="/gallery/samarinda">
                    <img src={require("../../assets/samarinda/samarinda.JPG")} style={{ width: "240px", height: "200px" }} alt="Tour with Samarinda School" />
                    <p>FASHTABIQUL KHAIRAT ELEMENTARY SCHOOL SAMARINDA STUDY TOUR</p>
                  </Link>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <Link to="/gallery/batam">
                    <img src={require("../../assets/batam/batam.jpg")} style={{ width: "240px", height: "200px" }} alt="Tour with Batam School" />
                    <p>TEACHERS OF MUHAMMADIYAH VOCATIONAL HIGH SCHOOL BATAM WEEKEND TRIP</p>
                  </Link>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <Link to="/gallery/meranti">
                    <img src={require("../../assets/meranti/meranti.jpg")} style={{ width: "240px", height: "200px" }} alt="Meeting Meranti Citi" />
                    <p>THE MEETING OF MERANTI CITY GOVERNMENT</p>
                  </Link>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <Link to="/gallery/tiens">
                    <img src={require("../../assets/tiens/tiens.jpg")} style={{ width: "240px", height: "200px" }} alt="Tour with Tiens" />
                    <p>TIENS INDONESIA TOUR</p>
                  </Link>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <Link to="/gallery/cycling">
                    <img src={require("../../assets/cycling_tour/ct_1.jpeg")} style={{ width: "240px", height: "200px" }} alt="Cycling Tour" />
                    <p>CYCLING TOUR</p>
                  </Link>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <Link to="/gallery/tapin">
                    <img src={require("../../assets/tapin/tapin_1.jpeg")} style={{ width: "240px", height: "200px" }} alt="Cycling Tour" />
                    <p>OFFICIAL TOUR OF TAPIN CITY GOVERNMENT WITH THE MAJOR BAPAK ARIFIN ARPAN</p>
                  </Link>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <Link to="/gallery/umroh">
                    <img src={require("../../assets/umroh/umroh_1.jpeg")} style={{ width: "240px", height: "200px" }} alt="Cycling Tour" />
                    <p>UMROH WITH PUNDI TOURS</p>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default OurTrip;

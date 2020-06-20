import React from 'react';
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
    console.log(this.state.isClick)
    let gridClass = "grid-photo"
    let imgClass = "image-wrapper"
    let imgComClass = "image-wrapper close"
    let gridComClass = "grid-photo close"
    if (this.state.isClick) {
      gridClass = "grid-photo close"
      imgClass = "image-wrapper close"
      gridComClass = "grid-photo"
      imgComClass = "image-wrapper"
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
                  <img src={require("../../assets/al_kaffah/landscape_one.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
                  <p>AL KAFFAH ELEMENTARY SCHOOL BATAM STUDY TOUR</p>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <img src={require("../../assets/surabaya/surabaya.jpg")} style={{ width: "240px", height: "200px" }} alt="Tour with Surabayan" />
                  <p>BENCHMARK SIGHTSEEING OF SURABAYA CITY GOVERNMENT WITH THE MAJOR IBU RISMA</p>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <img src={require("../../assets/samarinda/samarinda.JPG")} style={{ width: "240px", height: "200px" }} alt="Tour with Samarinda School" />
                  <p>FASHTABIQUL KHAIRAT ELEMENTARY SCHOOL SAMARINDA STUDY TOUR</p>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <img src={require("../../assets/batam/batam.jpg")} style={{ width: "240px", height: "200px" }} alt="Tour with Batam School" />
                  <p>TEACHERS OF MUHAMMADIYAH VOCATIONAL HIGH SCHOOL BATAM WEEKEND TRIP</p>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <img src={require("../../assets/meranti/meranti.jpg")} style={{ width: "240px", height: "200px" }} alt="Meeting Meranti Citi" />
                  <p>THE MEETING OF MERANTI CITY GOVERNMENT</p>
                </div>
              </li>
              <li className="grid-photo--list">
                <div className={imgClass}>
                  <img src={require("../../assets/tiens/tiens.jpg")} style={{ width: "240px", height: "200px" }} alt="Tour with Tiens" />
                  <p>TIENS INDONESIA TOUR</p>
                </div>
              </li>
            </ul>
            {/* <ul className={gridComClass}>
              <li onClick={this.show} className="grid-photo--list">
                <div className={imgComClass}>
                  <img src={require("../../assets/al_kaffah/landscape_one.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
                </div>
              </li>
              <li onClick={this.show} className="grid-photo--list">
                <div className={imgComClass}>
                  <img src={require("../../assets/al_kaffah/al-kaffah-one.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
                </div>
              </li>
              <li onClick={this.show} className="grid-photo--list">
                <div className={imgComClass}>
                  <img src={require("../../assets/al_kaffah/al-kaffah-two.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
                </div>
              </li>
              <li onClick={this.show} className="grid-photo--list">
                <div className={imgComClass}>
                  <img src={require("../../assets/al_kaffah/al-kaffah-three.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
                </div>
              </li>
              <li onClick={this.show} className="grid-photo--list">
                <div className={imgComClass}>
                  <img src={require("../../assets/al_kaffah/al-kaffah-fou.png")} style={{ width: "240px", height: "200px" }} alt="Al Kaffah" />
                </div>
              </li>
            </ul> */}
          </div>
        </div>
      </section>
    )
  }
}

export default OurTrip;

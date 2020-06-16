import React from 'react';
import { Link } from 'react-router-dom';
import "./SideDrawerComponent.scss";

const sideDrawerComponent = props => {

  let accordion = "accordion";
  if (props.toggle) {
    accordion = "accordion open"
  }

  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }

  let chevClass = "fas fa-chevron-down"
  if (props.toggle) {
    chevClass = "fas fa-chevron-up"
  }

  return (
    <nav className={drawerClasses}>
      <div className="logo"><img style={{ height: "40px" }} src={require("../assets/pundi-logo.png")} alt="pundi-logo" /></div>
      <ul className="navdrawer">
        <li onClick={props.click}><Link to="/">BERANDA</Link></li>
        <li onClick={props.click}><Link to="/aboutus">TENTANG KAMI</Link></li>
        <li onClick={props.click}><Link to="/">WISATA</Link></li>
        <li onClick={props.toggleClick} style={{ color: "#000", fontSize: "1.5rem"}}>LAYANAN LAIN<span ><i style={{ marginLeft: "4px"}} className={chevClass}></i></span>
          <ul className={accordion}>
            <li onClick={props.click}><Link to="/other/mice">MICE</Link></li>
            <li onClick={props.click}><Link to="/other/ticket">Tiket</Link></li>
            <li onClick={props.click}><Link to="/other/hotel">Hotel</Link></li>
            <li onClick={props.click}><Link to="/other/transportation">Transportasi</Link></li>
            <li onClick={props.click}><Link to="/other/payment">Multi Payment Service</Link></li>
          </ul>
        </li>
        <li onClick={props.click}><Link to="/whyus">MENGAPA KAMI</Link></li>
        <li onClick={props.click}><Link to="/gallery">GALLERY</Link></li>
        <li onClick={props.click}><a style={{ background: "#4c4c4c", color: "#fff", padding: "10px", borderRadius: "2px" }} href="#footer">KONTAK</a></li>
      </ul>
    </nav>
  )
};

export default sideDrawerComponent;

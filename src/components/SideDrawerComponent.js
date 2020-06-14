import React from 'react';
import { Link } from 'react-router-dom';
import "./SideDrawerComponent.scss";

const sideDrawerComponent = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <div className="logo"><img style={{ height:"40px"}} src={require("../assets/pundi-logo.png")} alt="pundi-logo" /></div>
      <ul>
        <li><Link to="/">BERANDA</Link></li>
        <li><Link to="/aboutus">TENTANG KAMI</Link></li>
        <li><Link to="/">WISATA</Link></li>
        <li><Link to="/">LAYANAN LAIN</Link></li>
        <li><Link to="/whyus">MENGAPA KAMI</Link></li>
        <li><Link to="/galerry">GALLERY</Link></li>
        <li><Link to="/">KONTAK</Link></li>
      </ul>
    </nav>
  )
};

export default sideDrawerComponent;

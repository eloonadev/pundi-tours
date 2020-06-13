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
      <div className="logo"><a href="/">THE LOGO</a></div>
      <ul>
        <li><a href="/">BERANDA</a></li>
        <li><Link to="/aboutus">TENTANG KAMI</Link></li>
        <li><a href="/">WISATA</a></li>
        <li><a href="/">LAYANAN LAIN</a></li>
        <li><Link to="/whyus">MENGAPA KAMI</Link></li>
        <li><a href="/">KONTAK</a></li>
      </ul>
    </nav>
  )
};

export default sideDrawerComponent;

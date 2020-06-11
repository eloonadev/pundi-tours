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
        <li><a href="/">Beranda</a></li>
        <li><Link to="/aboutus">TENTANG KAMI</Link></li>
        <li><a href="/">Wisata</a></li>
        <li><a href="/">Layanan Lain</a></li>
        <li><a href="/">Mengapa Kami</a></li>
        <li><a href="/">Kontak</a></li>
      </ul>
    </nav>
  )
};

export default sideDrawerComponent;

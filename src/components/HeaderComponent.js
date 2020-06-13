import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import { Link } from 'react-router-dom';
import './HeaderComponent.scss';

const HeaderComponent = props => (
  <header className="header">
    <nav className="navigation">
      <div className="navigation--toggle">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navigation--logo"><a href="/"><img style={{ height:"40px"}} src={require("../assets/pundi-logo.png")} alt="pundi-logo" /></a></div>
      <div className="spacer" />
      <div className="navigation--items">
        <ul>
          <li><Link to="/">BERANDA</Link></li>
          <li><Link to="/aboutus">TENTANG KAMI</Link></li>
          <li><Link to="/">WISATA</Link></li>
          <li><Link to="/">LAYANAN LAIN</Link></li>
          <li><Link to="/whyus">MENGAPA KAMI</Link></li>
          <li><Link to="/">KONTAK</Link></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default HeaderComponent;

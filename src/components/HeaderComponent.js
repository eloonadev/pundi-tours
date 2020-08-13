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
      <div className="navigation--logo"><a href="/"><img style={{ height: "40px" }} src={require("../assets/pundi-logo.png")} alt="pundi-logo" /></a></div>
      <div className="spacer" />
      <div className="navigation--items">
        <ul>
          <li><Link className="header-component__navigation-link" to="/">BERANDA</Link></li>
          <li><Link className="header-component__navigation-link" to="/aboutus">TENTANG KAMI</Link></li>
          <li className="dropdown"><Link className="header-component__navigation-link dropdown-toggle" to="/" data-toggle="dropdown">WISATA<span><i className="fas fa-chevron-down"></i></span></Link>
            <ul className="dropdown-menu">
              <li><Link className="header-component__navigation-link dropdown-content" to="/tourism/tour-indonesia">Tour Indonesia</Link></li>
              <li><Link className="header-component__navigation-link dropdown-content" to="/tourism/tour-international">Tour Luar Negeri</Link></li>
              <li><Link className="header-component__navigation-link dropdown-content" to="/tourism/special-tour">Vitamin Sea</Link></li>
            </ul>
          </li>
          <li className="dropdown"><Link className="header-component__navigation-link dropdown-toggle" to="/" data-toggle="dropdown">LAYANAN LAIN<span><i className="fas fa-chevron-down"></i></span></Link>
            <ul className="dropdown-menu">
              <li><Link className="header-component__navigation-link dropdown-content" to="/other/mice">MICE</Link></li>
              <li><Link className="header-component__navigation-link dropdown-content" to="/other/ticket">Tiket</Link></li>
              <li><Link className="header-component__navigation-link dropdown-content" to="/other/hotel">Hotel</Link></li>
              <li><Link className="header-component__navigation-link dropdown-content" to="/other/transportation">Transportasi</Link></li>
              <li><Link className="header-component__navigation-link dropdown-content" to="/other/payment">Multi Payment Service</Link></li>
            </ul>
          </li>
          <li><Link className="header-component__navigation-link" to="/whyus">MENGAPA KAMI</Link></li>
          <li><Link className="header-component__navigation-link" to="/gallery">GALLERY</Link></li>
          <li><a className="header-component__button-contact" href="#footer">KONTAK</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default HeaderComponent;

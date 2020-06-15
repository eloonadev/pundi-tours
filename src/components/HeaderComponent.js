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
          <li><Link to="/">BERANDA</Link></li>
          <li><Link to="/aboutus">TENTANG KAMI</Link></li>
          <li className="dropdown"><Link to="/" className="dropdown-toggle" data-toggle="dropdown">WISATA<span class="caret"></span></Link>
            <ul className="dropdown-menu">
              <li><Link to="/tourism" className="dropdown-content">Tour Indonesia</Link></li>
              <li><Link to="/" className="dropdown-content">Tour Luar Negeri</Link></li>
              <li><Link to="/" className="dropdown-content">Special Interest Tour</Link></li>
            </ul>
          </li>
          <li className="dropdown"><Link to="/" className="dropdown-toggle" data-toggle="dropdown">LAYANAN LAIN<span class="caret"></span></Link>
            <ul className="dropdown-menu">
              <li><Link to="/other">MICE</Link></li>
              <li><Link to="/">Tiket</Link></li>
              <li><Link to="/">Hotel</Link></li>
              <li><Link to="/">Transportasi</Link></li>
              <li><Link to="/">Multi Payment Service</Link></li>
            </ul>
          </li>
          <li><Link to="/whyus">MENGAPA KAMI</Link></li>
          <li><Link to="/gallery">GALLERY</Link></li>
          <li><Link style={{ background: "#4c4c4c", color: "#fff", padding: "10px", borderRadius: "2px" }}to="/">KONTAK</Link></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default HeaderComponent;

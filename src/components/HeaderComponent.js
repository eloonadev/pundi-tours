import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import './HeaderComponent.scss';

const HeaderComponent = props => (
  <header className="header">
    <nav className="navigation">
      <div className="navigation--toggle">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="navigation--logo"><a href="/">THE LOGO</a></div>
      <div className="spacer" />
      <div className="navigation--items">
        <ul>
          <li><a href="/">BERANDA</a></li>
          <li><a href="/">TENTANG KAMI</a></li>
          <li><a href="/">WISATA</a></li>
          <li><a href="/">LAYANAN LAIN</a></li>
          <li><a href="/">MENGAPA KAMI</a></li>
          <li><a href="/">KONTAK</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default HeaderComponent;
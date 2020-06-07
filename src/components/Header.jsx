import React from 'react';
import HeaderComponent from './HeaderComponent';
import SideDrawerComponent from './SideDrawerComponent';
import BackdropComponent from './BackdropComponent';

class Header extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackdropComponent click={this.backdropClickHandler} />
    }

    return (
      <div>
        <HeaderComponent drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawerComponent show={this.state.sideDrawerOpen} />
        {backdrop}
      </div>
    );
  }
}


export default Header;

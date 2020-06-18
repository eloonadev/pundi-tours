import React from 'react';
import HeaderComponent from './HeaderComponent';
import SideDrawerComponent from './SideDrawerComponent';
import BackdropComponent from './BackdropComponent';

class Header extends React.Component {
  state = {
    sideDrawerOpen: false,
    dropdown: false,
    dropdownTwo: false
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

  dropdownToggle = () => {
    this.setState((prevState) => {
      return { dropdown: !prevState.dropdown }
    });
  };

  dropdownTwoToggle = () => {
    this.setState((prevState) => {
      return { dropdownTwo: !prevState.dropdownTwo }
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
        <SideDrawerComponent
          toggle={this.state.dropdown}
          toggleTwo={this.state.dropdownTwo}
          toggleClick={this.dropdownToggle}
          toggleClickTwo={this.dropdownTwoToggle}
          show={this.state.sideDrawerOpen}
          click={this.backdropClickHandler}
        />
        {backdrop}
      </div>
    );
  }
}


export default Header;

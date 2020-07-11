import React from 'react';
import './Fab.scss';

class Fab extends React.Component {
  constructor() {
    super()
    this.state = {
      isExpand: false,
    }
  }

  expandFab() {
    this.setState((prevState) => {
      return { isExpand: !prevState.isExpand }
    })
  }

  render() {
    let ulClass = 'content close';
    let icon = 'fab fa-whatsapp'

    if (this.state.isExpand) {
      ulClass = 'content'
      icon = 'far fa-times-circle'
    }

    return (
      <div className="pop-up-wrapper">
        <div className={ulClass}>
          <div className="text-wrapper">
            <i className="fab fa-whatsapp"></i>
            <h1>Mulai Percakapan</h1>
            <h1>Halo! klik salah satu kontak di bawah ini</h1>
          </div>
          <div className="contact-list">
            <a className="list-web" href="https://web.whatsapp.com/send?phone=628116926888" target="_blank" rel="noopener noreferrer">
              <div className="logo-wrapper">
                <i className="fab fa-whatsapp"></i>
                <span>Mr. Sampun</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
            <a className="list-mobile" href="https://wa.me/628116926888" target="_blank" rel="noopener noreferrer">
              <div className="logo-wrapper">
                <i className="fab fa-whatsapp"></i>
                <span>Mr. Sampun</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
            <a className="list-web" href="https://web.whatsapp.com/send?phone=6287874471460" target="_blank" rel="noopener noreferrer">
              <div className="logo-wrapper">
                <i className="fab fa-whatsapp"></i>
                <span>Mr. Akbar</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
            <a className="list-mobile" href="https://wa.me/6287874471460" target="_blank" rel="noopener noreferrer">
              <div className="logo-wrapper">
                <i className="fab fa-whatsapp"></i>
                <span>Mr. Akbar</span>
              </div>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
        <div className="fab-container" onClick={() => this.expandFab()}>
          <div className="fab">
            <i className={icon}></i>
          </div>
        </div>
      </div>
    )
  }
}

export default Fab;

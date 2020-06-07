import React from 'react';
import './BackdropComponent.scss';

const backdropComponent = props => (
  <div className="backdrop" onClick={props.click}/>
);

export default backdropComponent;

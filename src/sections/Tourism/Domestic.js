import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/Domestic.scss';

const Domestic = () => (
  <section className="hero-tourind">
    <div className="hero-tourind--inner">
      <Link className="wrapper" to="/tourism/tour-indonesia/domestic-market">
        <p>Domestic/Indonesian Market</p>
      </Link>
      {/* <Link className="wrapper" to="/tourism/tour-indonesia/asean-market">
        <p>ASEAN Market</p>
      </Link> */}
      <Link className="wrapper" to="/tourism/tour-indonesia/foreign-market">
        <p>All/Foreign Market</p>
      </Link>
    </div>
  </section>
)

export default Domestic;

import React from 'react';
import '../../scss/Mice.scss';

const Mice = () => (
  <section className="hero-mice" id="#mice">
    <div className="hero-mice--inner">
      <div className="content-wrapper">
        <h2>MICE</h2>
        <h4>“Percayakan penyelenggaraan acara anda pada kami”</h4>
        <p>Pundi Tours berpengalaman dalam penyelenggaraan MICE (Meeting, Incentive, Conference, Exhibition) dari berbagai perusahaan maupun instansi pemerintahan, serta penyelenggaraan pernikahan (Wedding Organizer).</p>
      </div>
      <div className="image-wrapper">
       <img src={require("../../assets/MICE.jpg")} alt="MICE Service" sizes="(min-width: 400px) 80vw" />
      </div>
    </div>
  </section>
)

export default Mice;

import React from 'react';
import Legal from '../sections/WhyUs/Legal';
import Experience from '../sections/WhyUs/Experience';
import Service from '../sections/WhyUs/Service';
import { useEffect } from 'react';

const WhyUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
return (
  <div>
    <Legal />
    <Experience />
    <Service />
  </div>
)}

export default WhyUs;

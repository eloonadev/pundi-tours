import React from 'react';

import CompanyProfile from '../sections/AboutUs/CompanyProfile';
import Visi from '../sections/AboutUs/Visi';
import Misi from '../sections/AboutUs/Misi';
import OurClients from '../sections/AboutUs/OurClients';
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
return (
  <div>
    <CompanyProfile />
    <Visi />
    <Misi />
    <OurClients />
  </div>
)}

export default AboutUs;

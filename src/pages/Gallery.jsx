import React from 'react';
import OurTrip from '../sections/Home/OurTrip';
import { useEffect } from 'react';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

return (
  <div>
    <OurTrip />
  </div>
)}

export default Gallery;

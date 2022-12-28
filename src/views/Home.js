import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
// import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import TouchableCarousel from '../components/sections/TouchableCarousel';


const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <TouchableCarousel />
      {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;
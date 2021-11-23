import React from 'react';

import Banner from './Banner';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Achievement from './Achievement';
import Portfolio from './Portfolio';
import Testimonial from './Testimonial';
import ContactForm from './ContactForm';

const Home = (props) => {
  return (
    <>
      <Banner />
      <AboutMe />
      {/* <Resume />
      <Achievement />
      <Portfolio />
      <Testimonial />
      <ContactForm /> */}
    </>
  );
};

export default Home;

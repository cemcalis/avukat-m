import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesPreview from '../components/sections/ServicesPreview';
import AboutPreview from '../components/sections/AboutPreview';
import TeamPreview from '../components/sections/TeamPreview';
import ContactPreview from '../components/sections/ContactPreview';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <TeamPreview />
      <Testimonials />
      <ContactPreview />
    </div>
  );
};

export default Home;

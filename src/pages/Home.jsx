import React from 'react';
import Brands from '../components/Brands';
import Projects from '../components/Projects';
import Hero from '../components/Hero';
import About from '../components/About';
import Service from '../components/Service';
import HomePagdData from '../data/HomePagdData.json';
import Contact from '../components/Contact';

export default function Home() {
  const {
    hero,
    socialBtns,
    brands,
    about,
    projects,
    service,
    contact,
  } = HomePagdData;
  return (
    <>
      <Hero data={hero} socialData={socialBtns} />
      <Brands data={brands} />
      <About data={about} />
      <Projects data={projects} />
      <Service data={service} />
      <Contact data={contact} socialData={socialBtns} />
    </>
  );
}

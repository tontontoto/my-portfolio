import React from 'react';
import { Hero } from '../components/Hero';
import { TechStack } from '../components/TechStack';
import { Projects } from '../components/Projects';
import { Experience } from '../components/Experience';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';

export const Home = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};

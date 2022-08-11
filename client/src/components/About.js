import React from 'react';
import AboutCard from './AboutCard';
import info from '../info/aboutInfo';

const About = () => {
  return (
    <>
      {info.map((person) => (
        <AboutCard person={person} />
      ))}
    </>
  );
};

export default About;

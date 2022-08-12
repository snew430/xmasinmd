import './About.css';
import AboutCard from '../AboutCard/AboutCard';
import info from '../../info/aboutInfo';

const About = () => {
  return (
    <>
      {info.map((person) => (
        <AboutCard key={person.title} person={person} />
      ))}
    </>
  );
};

export default About;

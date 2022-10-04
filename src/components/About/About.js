import './About.css';
import AboutCard from '../AboutCard/AboutCard';
import info from '../../info/aboutInfo';

const About = () => {
  return (
    <div className="cards">
      {info.map((person) => (
        <AboutCard key={person.title} person={person} />
      ))}
    </div>
  );
};

export default About;

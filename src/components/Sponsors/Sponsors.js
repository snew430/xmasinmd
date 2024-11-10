import React from 'react';
import sponsors from '../../info/sponsorInfo';
import './Sponsors.css';

const Sponsors = () => {
  return (
    <>
      <h5>A very special thank you to our sponsor</h5>
      <div className="sponsor-links">
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.website}
            target="_blank"
            rel="noreferrer"
          >
            {sponsor.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Sponsors;

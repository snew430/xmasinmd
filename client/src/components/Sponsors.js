import React from 'react';
import sponsors from '../info/sponsorInfo';

const Sponsors = () => {
  return (
    <div>
      {sponsors.map((sponsor) => (
        <a href={sponsor.website} target="_blank" rel="noreferrer">
          {sponsor.name}
        </a>
      ))}
    </div>
  );
};

export default Sponsors;

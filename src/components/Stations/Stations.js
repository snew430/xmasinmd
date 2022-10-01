import React from 'react';
import stations from '../../info/stationInfo';
import './Stations.css';

const Stations = () => {
  return (
    <>
      <h3 className="tune">Stations to Tune Into...</h3>
      {stations.map(({ name, location, freq, dates, link }) => (
        
        <div class="station-conatiner">
        <div key={name} className="station-card">
          <h5>{name}</h5>
          <p>
            ({location}) - {freq}
          </p>
          <p>
            Dates
            {dates.map((date) => (
              <p key={date}>{date}</p>
            ))}
          </p>
          <a href={link}>Website</a>
          
        </div>
        </div>
        
      ))}
    </>
  );
};

export default Stations;

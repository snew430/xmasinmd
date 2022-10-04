import React from 'react';
import stations from '../../info/stationInfo';
import './Stations.css';

const Stations = () => {
  return (
    <>
      <h3 className="tune">Stations to Tune Into...</h3>
      <div className="station-container">
        {stations.map(({ name, location, freq, dates, link }) => (
          <div key={name} className="station-card">
            <h5>{name}</h5>
            <p>
              ({location}) - {freq}
            </p>
            <div>
              Dates
              {dates.map((date) => (
                <p key={name + date}>{date}</p>
              ))}
            </div>
            <a href={link}>Website</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stations;

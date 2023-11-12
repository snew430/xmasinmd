import React from 'react';
import stations from '../../info/stationInfo';
import './Stations.css';

const Stations = () => {
  return (
    <>
      <h3 className="tune">Stations to Tune Into</h3>
      <div className="station-container">
        {stations.map(({name, location, freq, dates, link}) => (
          <a href={link} target="_blank" rel="noreferrer">
            <div key={name} className="station-card">
              <h5 className="station-name">{name}</h5>
              <p className="station-location">
                ({location}) - {freq}
              </p>
              <div className="station-dates">
                {dates.length > 0 ? (
                  dates.map((date) => <p key={name + date}>{date}</p>)
                ) : (
                  <p>Dates Coming Soon</p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Stations;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Hour.css';
import { hour1, hour2, hour3, hour4, hour5, hour6 } from '../../info/hourInfo';

const Hour = () => {
  const [currentHour, setCurrentHour] = useState(hour1);

  const changeHour = (e, hour) => {
    document.getElementById('hourHeader').textContent = e.target.textContent;
    setCurrentHour(hour);
  };

  // return <div>Show Schedule Coming Soon</div>;
  return (
    <div className="coming-soon">
      <h1 className='coming-soon-h1'>Hourly Information Coming Soon</h1>
    </div>
  );

  return (
    <div className="hour-info">
      <div className="hour-buttons">
        <ButtonGroup aria-label="Basic example">
          <Button onClick={(e) => changeHour(e, hour1)} variant="success">
            Hour 1
          </Button>
          <Button onClick={(e) => changeHour(e, hour2)} variant="success">
            Hour 2
          </Button>
          <Button onClick={(e) => changeHour(e, hour3)} variant="success">
            Hour 3
          </Button>
          <Button onClick={(e) => changeHour(e, hour4)} variant="success">
            Hour 4
          </Button>
          <Button onClick={(e) => changeHour(e, hour5)} variant="success">
            Hour 5
          </Button>
          <Button onClick={(e) => changeHour(e, hour6)} variant="success">
            Hour 6
          </Button>
        </ButtonGroup>
      </div>
      <h3 id="hourHeader">Hour 1</h3>
      <section className="hour-section">
        {currentHour.map((hourcontent) => (
          <>
            <p>{hourcontent}</p>
            <hr />
          </>
        ))}
      </section>
    </div>
  );
};

export default Hour;

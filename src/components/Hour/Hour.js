import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Hour.css';
import {hour1, hour2, hour3, hour4, hour5} from '../../info/hourInfo';

const Hour = () => {
  const [currentHour, setCurrentHour] = useState(hour1);

  return (
    <div className="hour-info">
      <div className="hour-buttons">
        <ButtonGroup aria-label="Basic example">
          {[hour1, hour2, hour3, hour4, hour5].map((hour) => (
            <Button onClick={() => setCurrentHour(hour)} variant="success">
              {hour.tab}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <h3 id="hourHeader">{currentHour.tab}</h3>
      <section className="hour-section">
        {currentHour.details.map((hourcontent) => (
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

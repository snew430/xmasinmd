import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AboutCard = ({ person }) => {
  const { title, bio, pic, link } = person;

  return (
    <div className="biography">
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Img className="card-image" variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
      <p className="bio-text">{bio}</p>
    </div>
  );
};

export default AboutCard;

import React from 'react';
import Card from 'react-bootstrap/Card';

const AboutCard = ({ person }) => {
  const { title, bio, pic, link } = person;

  return (
    <div className="biography">
      <Card className="card" style={{ width: '18rem' }}>
        <Card.Img className="card-image" variant="top" src={pic} />
        <Card.Body>
          <Card.Title>
            <a href={`mailto:${link}`} target="_blank" rel="noreferrer">
              {title}
            </a>
          </Card.Title>
          <Card.Text>
            <p className="bio-text">{bio}</p>
            <a href={`mailto:${link}`} target="_blank" rel="noreferrer">
              Email
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutCard;

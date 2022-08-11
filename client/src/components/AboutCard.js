import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AboutCard = ({ person }) => {
  const { title, bio, pic, link } = person;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{bio}</Card.Text>
        <Button variant="primary">My Link</Button>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;

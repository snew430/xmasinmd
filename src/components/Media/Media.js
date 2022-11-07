import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import media from '../../assets/media';
import './media.css';

const Media = () => {
  const [currentMedia, setCurrentMedia] = useState(media[0]);

  function changeMedia(subject) {
    setCurrentMedia(subject);
    console.log(subject.audio);
  }

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        {media.map((category, i) => (
          <Button
            key={i}
            variant="secondary"
            onClick={() => changeMedia(category)}
          >
            {category.name}
          </Button>
        ))}
      </ButtonGroup>
      {currentMedia.photos.map((photo, i) => (
        <img className="photo" src={photo} key={i}></img>
      ))}
      {currentMedia.videos.map((video, i) => (
        <div key={i}></div>
      ))}

      {currentMedia.audio.map((aud, i) => (
        <audio key={i} src={aud} controls />
      ))}
    </div>
  );
};

export default Media;

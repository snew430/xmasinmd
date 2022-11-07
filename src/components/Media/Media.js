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
        {/* <Button
          variant="secondary"
          onClick={() => changeMedia(media.christmasCountdown)}
        >
          Christmas Countdown
        </Button>
        <Button
          variant="secondary"
          onClick={() => changeMedia(media.crabs4Christmas)}
        >
          Crabs For Christmas
        </Button>
        <Button
          variant="secondary"
          onClick={() => changeMedia(media.doyleGrisham)}
        >
          Doyle Grisham
        </Button>
        <Button
          variant="secondary"
          onClick={() => changeMedia(media.joeThornhill)}
        >
          Joe Thornhill
        </Button>
        <Button
          variant="secondary"
          onClick={() => changeMedia(media.lutherCornish)}
        >
          Luther Cornish
        </Button>
        <Button
          variant="secondary"
          onClick={() => changeMedia(media.merriweather)}
        >
          Merriweather
        </Button>
        <Button
          variant="secondary"
          onClick={() => changeMedia(media.merriweather)}
        >
          Merriweather
        </Button> */}
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

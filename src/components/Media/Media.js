import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {media} from '../../assets/media';
import './media.css';

const Media = () => {
  const [currentMedia, setCurrentMedia] = useState(media[0]);

  function changeMedia(subject) {
    setCurrentMedia(subject);
    console.log(subject.audio);
  }

  return (
    <>
      <div className="buttons">
        <ButtonGroup aria-label="Basic example" size={'sm'}>
          {media.map((category, i) => (
            <Button
              key={i}
              variant="secondary"
              onClick={() => changeMedia(category)}
            >
              {category.tab}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className="media">
        <h2>{currentMedia.name}</h2>
        <p>{currentMedia.description}</p>
        {currentMedia.audio.length > 0 && (
          <h2 className="title">Audio</h2>
        )}
        {currentMedia.audio.map((aud, i) => (
          <audio key={i} src={aud} controls />
        ))}
        {currentMedia.videos.length > 0 && <h2 className="title">Videos</h2>}
        {currentMedia.videos.map(({video, poster}, i) => (
          <video
            poster={poster}
            controls="controls"
            width="800"
            height="600"
            name="Video Name"
          >
            <source src={video} />
          </video>
        ))}
        {currentMedia.photos.length > 0 && <h2 className="title">Photos</h2>}
        {currentMedia.photos.map((photo, i) => (
          <img className="photo" src={photo} key={i}></img>
        ))}
      </div>
    </>
  );
};

export default Media;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import media from '../../assets/media';
import './media.css';

const Media = () =>
{
  const [ currentMedia, setCurrentMedia ] = useState(media[ 0 ]);

  function changeMedia(subject)
  {
    setCurrentMedia(subject);
    console.log(subject.audio);
  }

  return (
    <>
      <div className="buttons">
        <ButtonGroup aria-label="Basic example" size={ 'sm' }>
          { media.map((category, i) => (
            <Button
              key={ i }
              variant="secondary"
              onClick={ () => changeMedia(category) }
            >
              { category.name }
            </Button>
          )) }
        </ButtonGroup>
      </div>
      <div className="media">
        { currentMedia.audio.length &&
          <h2 className="title">Audio Clips</h2>
        }
        { currentMedia.audio.map((aud, i) => (
          <audio key={ i } src={ aud } controls />
        )) }
        { currentMedia.videos.length > 0 && <h2 className="title">Videos</h2> }
        { currentMedia.videos.map((video, i) => (
          <video controls="controls" width="800" height="600" name="Video Name">
            <source src={ video } />
          </video>
        )) }
        { currentMedia.photos.length && <h2 className="title">Photos</h2> }
        { currentMedia.photos.map((photo, i) => (
          <img className="photo" src={ photo } key={ i }></img>
        )) }
      </div>
    </>
  );
};

export default Media;

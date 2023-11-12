import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {media} from '../../assets/media';
import './media.css';

console.log(media);

const Media = () => {
  const [currentMedia, setCurrentMedia] = useState(media[0]);

  return (
    <>
      <div className="buttons">
        {media.map((category) => (
          <Button
            key={category.tab}
            variant="secondary"
            onClick={() => setCurrentMedia(category)}
            size="lg"
          >
            {category.tab}
          </Button>
        ))}
      </div>
      <div className="media">
        <h2>{currentMedia.name}</h2>
        <p>{currentMedia.description}</p>
        {currentMedia.audio.length > 0 && <h2 className="title">Audio</h2>}
        {currentMedia.audio.map((aud, i) => (
          <audio key={`${currentMedia.name}audio${i}`} src={aud} controls />
        ))}
        {currentMedia.videos.length > 0 && <h2 className="title">Videos</h2>}
        {currentMedia.videos.map(({video, poster}, i) => (
          <video
            poster={poster}
            controls="controls"
            width="800"
            height="600"
            name="Video Name"
            key={`${currentMedia.name}video${i}`}
          >
            <source src={video} />
          </video>
        ))}
        {currentMedia.photos.length > 0 && <h2 className="title">Photos</h2>}
        {currentMedia.photos.map((photo, i) => (
          <img
            className="photo"
            src={photo}
            key={`${currentMedia.name}photo${i}`}
            alt={`${currentMedia.name} #${i}`}
          ></img>
        ))}
      </div>
    </>
  );
};

export default Media;

import React from 'react';
import { Carousel } from "react-bootstrap";

import tree from '../../assets/images/tree.jpg';
import santaOrnament from '../../assets/images/santa-ornament.jpg';
import presents from '../../assets/images/presents.jpg';
import fireplace from '../../assets/images/fireplace.jpg';
import snowyTrees from '../../assets/images/snowy-trees.jpg';

const CarouselComponent = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50vh"
          src={tree}
          alt="Tree"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-50vh"
          src={santaOrnament}
          alt="Santa Ornament"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-50vh"
          src={presents}
          alt="Presents"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-50vh"
          src={fireplace}
          alt="Fireplace"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 h-50vh"
          src={snowyTrees}
          alt="Snowy Trees"
        />
      </Carousel.Item>

    </Carousel>
  )
}

export default CarouselComponent;
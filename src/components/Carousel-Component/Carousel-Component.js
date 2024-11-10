import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Carousel-Component.css';

// import tree from '../../assets/images/tree-pan.jpg';
// import santaOrnament from '../../assets/images/santa-ornament-pan.jpg';
// import presents from '../../assets/images/presents-pan.jpg';
// import fireplace from '../../assets/images/fireplace-pan.jpg';
// import lights from '../../assets/images/lights-pan.jpg';
import bohTree from '../../assets/images/bohTree.jpg';
import presentsUnderTree from '../../assets/images/presentsUnderTree.jpg';

const CarouselComponent = () => {
  return (
    <Carousel fade>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={tree}
          alt="Tree"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={santaOrnament}
          alt="Santa Ornament"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={presents}
          alt="Presents"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fireplace}
          alt="Fireplace"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lights}
          alt="Lights"
        />
      </Carousel.Item> */}
      <Carousel.Item>
        <img className="d-block w-100" src={bohTree} alt="Fireplace" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={presentsUnderTree}
          alt="Fireplace"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;

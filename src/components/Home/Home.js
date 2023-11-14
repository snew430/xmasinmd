import React, {useState} from 'react';
import CarouselComponent from '../Carousel-Component/Carousel-Component';
import './Home.css';
import wlifImage from '../../assets/images/wlifAppearance.jpg';
import wlifMp3 from '../../assets/media/Wlif/wlifAppearance.mp3';
import Snowfall from 'react-snowfall';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="home-body">
      <Snowfall
        color="lightblue"
        snowflakeCount={30}
        style={{
          width: '100vw',
          height: '100vh',
          zIndex: '10',
          position: 'fixed',
        }}
      />

      <div className="home-banner">
        <h2 className="home-header">Christmas in Maryland</h2>
      </div>

      <CarouselComponent />

      <section className="p-text">
        <h3>On "Q" Productions proudly presents</h3>

        <span className="shoutout">Christmas in Maryland</span>
        <div>
          <img className="photo" src={wlifImage} alt="" />
          <br />
          <audio src={wlifMp3} controls />
        </div>
        <p>
          Christmas In Maryland with host John Patti returns for a second year
          on 101.9 WLIF-FM, Baltimore's Christmas music station. Listen Sunday
          nights at 7pm beginning November 19, 2023.
        </p>
        <p>
          A very special thanks to Greg Carpenter, Gina Crash and all of our
          friends at WLIF-FM.
        </p>
        <span className="shoutout">MERRY CHRISTMAS</span>
        <p>
          Christmas in Maryland is a five-hour audio journey letting listeners
          pause and feel the tradition that lives nestled between the mountains
          of western Maryland and the beaches of the Atlantic shore. Christmas
          in Maryland takes you from the big city to the small towns of
          Maryland, capturing the stories of the season at every stop!
        </p>
        <p>
          Christmas in Maryland has captured Maryland at Christmastime. It’s a
          visit to world-famous 34th Street in Baltimore. It’s spending time
          with family in Little Italy on Christmas Eve. It’s taking a sleighride
          through Frostburg and living the dream of the western Maryland Polar
          Express. It’s also a visit behind the counter of the Bethlehem,
          Maryland Post Office as special postmarks are affixed to holiday mail.
        </p>
        <p>
          We’ll also visit with famous Marylanders including Cal Ripken, Jr.,
          Brooks Robinson, Steve Bisciotti, Boog Powell, John Waters and Pat
          Sajak to see what Christmas in Maryland means to them.
        </p>
      </section>

      {/* <Button variant="secondary" onClick={handleShow}>
          We would love to hear from you! Click Here to provide your feedback
        </Button> */}

      {/* <Modal show={showModal} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Christmas In Maryland Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>How can we do better?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default Home;

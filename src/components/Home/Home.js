import React, {useState} from 'react';
import CarouselComponent from '../Carousel-Component/Carousel-Component';
import './Home.css';
import wlifImage from '../../assets/images/wlifAppearance.jpg';
import wlifMp3 from '../../assets/media/Wlif/wlifAppearance.mp3';
import Snowfall from 'react-snowfall';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from 'emailjs-com';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    audio: '',
    places: '',
    futureHappenings: '',
    futureMusic: '',
    feedback: '',
  });
  const [formThankYou, setFormThankYou] = useState(false);

  const handleShow = () => setShowModal(true);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //John Pattis
    const response = await emailjs.send(
      'service_9y9c91u',
      'template_rllf8x8',
      formData,
      'iHZKvGQZm10JDnZpb'
    );

    response
      ? console.log('SUCCESS!', response.status, response.text)
      : console.log('FAILED...');

    setFormThankYou(true);
    setTimeout(() => {
      setShowModal(false);
      setFormThankYou(false);
    }, 1000 * 3);
  };

  const handleFormData = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

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

      <Button
        variant="secondary"
        onClick={handleShow}
        size="lg"
        className="mt-3"
      >
        We would love to hear from you! Click Here to provide your feedback
      </Button>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Christmas In Maryland Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formThankYou ? (
            <h2>Thank you for your response!</h2>
          ) : (
            <Form>
              <Form.Group className="mb-3" controlId="formemail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                  name="email"
                  onChange={handleFormData}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAudio">
                <Form.Label>What was your favorite audio feature?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="audio"
                  required
                  onChange={handleFormData}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPlaces">
                <Form.Label>
                  What surprised you most about any of the places we visited?
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="places"
                  required
                  onChange={handleFormData}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formFutureHappenings">
                <Form.Label>
                  Give us some suggested Christmas Holiday happenings to visit
                  for future shows
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="futureHappenings"
                  required
                  onChange={handleFormData}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formFutureMusic">
                <Form.Label>
                  Give us some holiday music selections to consider for future
                  shows
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="futureMusic"
                  required
                  onChange={handleFormData}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Any other Feedback for us?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="feedback"
                  required
                  onChange={handleFormData}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          {!formThankYou && (
            <Button variant="primary" onClick={handleFormSubmit}>
              Send
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;

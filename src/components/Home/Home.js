import React, {useState} from 'react';
import CarouselComponent from '../Carousel-Component/Carousel-Component';
import './Home.css';
import wlifImage from '../../assets/images/wlifAppearance.jpeg';
import wlifMp3 from '../../assets/media/Wlif/wlifAppearance.MP3';
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
          Our thanks to 101.9 WLIF-FM, Baltimore's Christmas Music Station, and
          the Archdiocese of Baltimore for bringing you, our listeners, another
          fantastic Christmas season. This year join us as we visit more
          Maryland Christmas happenings than ever before. Please go to the
          bottom of this page and request a song or tell us about a
          Christmastime happening in your area.
        </p>
        <p>
          A very special thanks to Greg Carpenter, Gina Crash and all of our
          friends at WLIF-FM.
        </p>
        <span className="shoutout">MERRY CHRISTMAS</span>
        <p>
          Christmas In Maryland is a five-hour audio journey allowing listeners
          to pause and feel the tradition that lives nestled between the
          mountains of western Maryland and the beaches of the Atlantic shore.
          Christmas In Maryland takes you from the big city to the small towns
          of Maryland, capturing the stories of the season at every stop, all
          wrapped around your favorite holiday songs.
        </p>
        <p>Christmas In Maryland has captured Maryland at Christmastime!</p>
        <p>
          It's a visit to world-famous 34th Street in Baltimore. It's spending
          time with family in LIttle Italy on Christmas Eve. It's tagging along
          with Santa on one of his visits to western Maryland, and living the
          dream of the Western Maryland Polar Express. It's also a sneak peak at
          what has become known as "Christmastown" in Pittsville on Maryland's
          eastern shore. You will also meet a couple from Cambridge who went to
          "Santa School" to learn how to become Santa & Mrs. Claus. We'll
          explain how hundreds of Marylanders have been starting the holiday
          season in north Baltimore since the early 2000's. It involves brass,
          bagpipes and a cathedral.
        </p>
        <p>
          We'll also visit with famous Marylanders including Cal Ripken Jr.,
          Brooks Robinson, Steve Bisciotti, and John Waters. Plus TV game-show
          legend Pat Sajak plays DJ for us and reveals what Christmas In
          Maryland means to him.
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

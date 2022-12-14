import React from 'react';
import CarouselComponent from '../Carousel-Component/Carousel-Component';
import './Home.css';

import Snowfall from 'react-snowfall';

const Home = () => {
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
        <p>Thank you for a merry 2022 Holiday Season! See you in 2023</p>
        {/* <p>
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
        </p> */}
      </section>
    </div>
  );
};

export default Home;

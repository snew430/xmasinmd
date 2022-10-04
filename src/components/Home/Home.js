import React from 'react';
import './Home.css';
import santa from '../../assets/images/962.jpg';
import flag from '../../assets/images/flag.jpg';
import Snowfall from 'react-snowfall';

const Home = () => {
  return (
    <div className="home-body">
      <Snowfall
        color="lightblue"
        snowflakeCount={200}
        style={{ width: '100vw', height: '45vh' }}
      />

      <div className="home-banner">
        <img className="banner-image" src={flag} alt="" />
        <h2 className="home-header">Christmas in Maryland...</h2>
      </div>

      <section className="p-text">
        <p>
          <span className="shoutout">On "Q" Productions</span> proudly presents{' '}
          <span className="shoutout">Christmas in Maryland</span>
        </p>
        <p>
          <span className="shoutout">Christmas in Maryland</span> is a 14-hour
          audio journey that lets listeners pause and feel the tradition that
          lives nestled between the mountains of Western Maryland and the
          beaches of the Atlantic shore.{' '}
          <span className="shoutout">Christmas in Maryland</span> takes you from
          the big city to the small towns of Maryland, capturing the stories of
          the season at every stop.
        </p>

        <p>
          Every year it's the same story. From Thanksgiving to Christmas Eve,
          the holiday spirit slowly makes its way into our lives. We go from our
          busy workdays to even busier evenings. It's all pointing toward that
          one day.
        </p>

        <p>
          Then the evening of December 24th comes and suddenly the world puts
          its problems on hold. Traffic disappears, stores close, and we prepare
          for the peace and tranquility of Christmas Day. For that one day it's
          an escape to family gatherings, scenes of smiling faces, and all
          around good cheer. It's Christmas!
        </p>

        <p>
          <span className="shoutout">Christmas in Maryland</span> has captured
          Maryland at Christmastime. it's the guy with two-hundred-thousand
          holiday lights in his yard. It's spending time with family in Little
          Italy on Christmas Eve. It's taking a sleigh ride through Frostburg
          and living the dream of the Western Maryland Polar Express. It's also
          a visit behind the counter in Bethlehem, Maryland as special postmarks
          are affixed to holiday mail.
        </p>

        <p>
          And we'll meet some famous Marylanders including John Waters, Pat
          Sajak, John Harbaugh, Cal Ripken, Jr., and Boog Powell, to see what
          <span className="shoutout">Christmas in Maryland</span> means to them.
        </p>

        <p>
          Some of the features for this year's presentation include a ride
          through Ocean City's Winterfest light display, a visit to The
          Christmas House in Howard County, and a walk down Main Street in
          Middletown, to see how they celebrate "Christmas in the Valley." Plus
          we'll get a holiday serenade from the Heart of Maryland Chorus, and a
          celebration of Christmas on the Potomac. And we'll tag along with
          Santa as he delivers both pork and pine in Baltimore!
        </p>

        <p>
          Returning favorites this year include visits to An East Baltimore
          Christmas - Polish style, Crabs For Christmas at John and Donna
          McKenna's, and the Pocomoke City Christmas Parade. Plus, we'll tag
          along with the Grove family as they find the Perfect Christmas Tree.
        </p>

        <p>
          You'll also hear the story of how It's Always Christmastime At
          Sparky's, The Lazzati Family Christmas Card, The Trigg Christmas
          Country Biscuit Brunch, and The Kellner Family Train Garden, plus how
          some Marylanders say Merry Christmas - Island Style!
        </p>
      </section>
    </div>
  );
};

export default Home;

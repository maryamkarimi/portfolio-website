import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
import './Banner.scss';

const Banner = ({ image }) => (
  <ParallaxBanner
    layers={[
      {
        image,
        amount: 0.1,
      },
    ]}
    style={{}}
  />
);

Banner.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Banner;

import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

const ParallaxImage = ({
  image, alt, y1, y2,
}) => (
  <Parallax className="custom-class" y={[y1, y2]} tagOuter="figure">
    <img src={image} alt={alt} />
  </Parallax>
);

ParallaxImage.propTypes = {
  image: PropTypes.element.isRequired,
  alt: PropTypes.string.isRequired,
  y1: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
};

export default ParallaxImage;

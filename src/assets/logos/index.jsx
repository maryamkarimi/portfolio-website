import React from 'react';
import PropTypes from 'prop-types';
import universityLogo from '../images/universityLogo.gif';
import highschoolLogo from '../images/sampadLogo.jpg';
import shopifyLogo from '../images/shopifyLogo.jpg';
import autodataLogo from '../images/autodataLogo.jpg';
import autodataLogo from '../images/googleLogo.png';
import './logos.scss';

const iconsLookup = {
  university: universityLogo,
  highschool: highschoolLogo,
  shopify: shopifyLogo,
  autodata: autodataLogo,
  google: googleLogo,
};

const Icon = ({ name }) => (
    <img alt={name} className="logo-img" src={iconsLookup[name]} />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

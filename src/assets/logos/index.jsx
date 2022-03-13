import React from 'react';
import PropTypes from 'prop-types';
import universityLogo from '../images/universityLogo.gif';
import highschoolLogo from '../images/sampadLogo.png';
import shopifyLogo from '../images/shopifyLogo.png';
import autodataLogo from '../images/autodataLogo.jpg';
import googleLogo from '../images/googleLogo.png';
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

import React from 'react';

import './capital.styles.css';

import PropTypes from 'prop-types';

const Capital = ({ cidade, min, max }) => (
  <div className="capital">
    <p className="minCapital">{min}°</p>
    <p className="maxCapital">{max}°</p>
    <p className="nomeCapital">{cidade}</p>
  </div>
);

Capital.propTypes = {
  cidade: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default Capital;

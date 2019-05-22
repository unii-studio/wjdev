import React from 'react';
import { CardText } from 'react-mdl';
import { oneOfType, arrayOf, node } from 'prop-types';

const TextStyle = {
  fontFamily: 'Open Sans',
  fontSize: '15px',
};

const Text = ({ children }) => (
  <CardText style={TextStyle}>{children}</CardText>
);

Text.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Text;

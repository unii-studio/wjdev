import React from 'react';
import { CardText } from 'react-mdl';

const TextStyle = {
  fontFamily: 'Open Sans',
  fontSize: '15px',
};

const Text = props => <CardText style={TextStyle}>{props.children}</CardText>;

export default Text;

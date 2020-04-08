import React from 'react';
import { CardTitle } from 'react-mdl';
import { oneOfType, arrayOf, node, string } from 'prop-types';

const TitleStyle = {
  color: '#fff',
  height: '250px',
  backgroundSize: 'cover',
  fontFamily: 'Open Sans',
};

const Title = ({ children, img }) => (
  <CardTitle shadow={5} style={{ background: img, ...TitleStyle }}>
    {children}
  </CardTitle>
);

Title.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  img: string.isRequired,
};

export default Title;

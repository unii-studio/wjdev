import { Link } from 'react-router-dom';
import React from 'react';

import { oneOfType, arrayOf, node, string } from 'prop-types';

const DomLink = ({ color='white', children, to}) => (
  <Link
    style={{
      textDecoration: 'none',
      color: color,
      fontFamily: 'Raleway',
      padding: '0.8em',
    }}
    to={to}
  >
    {children}
  </Link>
);

DomLink.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  to: string.isRequired,
};

export default DomLink;

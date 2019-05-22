import { Link } from 'react-router-dom';
import React from 'react';

const DomLink = ({ to, children }) => (
  <Link
    style={{
      textDecoration: 'none',
      color: 'white',
      fontFamily: 'Raleway',
    }}
    to={to}
  >
    {children}
  </Link>
);

export default DomLink;

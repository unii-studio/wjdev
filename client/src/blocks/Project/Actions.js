import React from 'react';
import { CardActions } from 'react-mdl';
import { oneOfType, arrayOf, node } from 'prop-types';

const Actions = ({ children }) => (
  <CardActions
    border
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {children}
  </CardActions>
);

Actions.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Actions;

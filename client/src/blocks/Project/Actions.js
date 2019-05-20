import React from 'react';
import { CardActions } from 'react-mdl';

const Actions = props => (
  <CardActions
    border
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {props.children}
  </CardActions>
);

export default Actions;

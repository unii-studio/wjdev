import React from 'react';
import { Button } from 'react-mdl';

const ButtonLink = props => (
  <Button colored href={props.link} rel="noopener noreferrer" target="_blank">
    {props.text}
  </Button>
);

export default ButtonLink;

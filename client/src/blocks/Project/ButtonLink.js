import React from 'react';
import { Button } from 'react-mdl';
import { string } from 'prop-types';

const ButtonLink = ({ text, link }) => (
  <Button colored href={link} rel="noopener noreferrer" target="_blank">
    {text}
  </Button>
);

ButtonLink.propTypes = {
  text: string.isRequired,
  link: string,
};

ButtonLink.defaultProps = {
  link: '#',
};

export default ButtonLink;

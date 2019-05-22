import React from 'react';
import { Card } from 'react-mdl';
import { oneOfType, arrayOf, node } from 'prop-types';

import Text from './Text';
import Title from './Title';
import ButtonLink from './ButtonLink';
import Actions from './Actions';
import Spacer from './Spacer';

const CardStyle = {
  margin: 'auto',
};

const Project = ({ children }) => (
  <Card shadow={5} style={CardStyle}>
    {children}
  </Card>
);

Project.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

Project.Text = Text;
Project.Title = Title;
Project.Button = ButtonLink;
Project.Actions = Actions;
Project.Spacer = Spacer;

export default Project;

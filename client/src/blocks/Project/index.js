import React from 'react';
import { Card } from 'react-mdl';

import Text from './Text';
import Title from './Title';
import ButtonLink from './ButtonLink';
import Actions from './Actions';
import Spacer from './Spacer';

const CardStyle = {
  margin: 'auto',
};

const Project = props => (
  <Card shadow={5} style={CardStyle}>
    {props.children}
  </Card>
);

Project.Text = Text;
Project.Title = Title;
Project.ButtonLink = ButtonLink;
Project.Actions = Actions;
Project.Spacer = Spacer;

export default Project;

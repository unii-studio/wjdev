import React from 'react';
import { Card } from 'react-mdl';

import Text from './Text';
import Title from './Title';

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

export default Project;

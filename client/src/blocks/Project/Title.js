import React from 'react';
import { CardTitle } from 'react-mdl';

const TitleStyle = {
  color: '#fff',
  height: '176px',
  backgroundSize: 'cover',
  fontFamily: 'Open Sans',
};

const Title = props => (
  <CardTitle shadow={5} style={{ background: props.img, ...TitleStyle }}>
    {props.children}
  </CardTitle>
);

export default Title;

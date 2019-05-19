import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 250px;
  padding-top: 5em;
  padding-bottom: 4em;
  /* filter: invert(100%); */
`;

const Logo = () => <Img src="wjdev.png" alt="avatar" className="logo-img" />;

export default Logo;

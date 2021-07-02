import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  height: 250px;
  padding-top: 7.5em;
  padding-bottom: 4em;
  @keyframes bob {
    from {
      height: 265px;
    }
    to {
      height: 230px;
    }
  }
  
  animation-duration: 2s;
  animation-name: bob;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in;

`;

const Logo = () => <Img src="wjdev.png" alt="avatar" className="logo-img" />;

export default Logo;

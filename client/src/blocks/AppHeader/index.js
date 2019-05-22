import styled from 'styled-components';
import React from 'react';
import { Header } from 'react-mdl';
import DomLink from './DomLink';

const AppHeader = styled(Header)`
  background: #780206; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #780206,
    #061161
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #780206,
    #061161
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-family: 'Raleway', Sans-Serif;
`;

AppHeader.Link = DomLink;

export default AppHeader;

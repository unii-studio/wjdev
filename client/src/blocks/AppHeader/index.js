import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import DomLink from './DomLink';

const AppHeader = styled(AppBar)`
  background: #780206; /* fallback for old browsers */
  box-shadow: none;
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
  @media (max-width: 720px) {
    font-size: 3.3em;
  }
`;

AppHeader.Link = DomLink;

export default AppHeader;

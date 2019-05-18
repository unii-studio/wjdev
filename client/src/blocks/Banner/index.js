import styled from 'styled-components';

import Title from './Title';
import Text from './Text';

const Banner = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.6;
  width: 50%;
  margin: auto;
  border-radius: 10px;
  padding: 2em;
  font-family: 'Open Sans', Sans-Serif;

  hr {
    border: 2px double white;
    width: 60%;
    margin: auto;
  }
`;

Banner.Title = Title;
Banner.Text = Text;

export default Banner;

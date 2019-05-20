import styled from 'styled-components';

import Title from './Title';
import Text from './Text';
import Split from './Split';

const Banner = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.6;
  width: 50%;
  margin: auto;
  border-radius: 10px;
  padding: 2em;
`;

Banner.Title = Title;
Banner.Text = Text;
Banner.Split = Split;

export default Banner;

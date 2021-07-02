import styled from 'styled-components';

import Title from './Title';
import Text from './Text';
import Split from './Split';

const Banner = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.6;
  width: 50%;
  margin: auto;
  justify-content: center;
  border-radius: 10px;
  padding: 2em;

  @media (max-width: 720px) {
    width: 80%;
  }
`;

Banner.Title = Title;
Banner.Text = Text;
Banner.Split = Split;

export default Banner;

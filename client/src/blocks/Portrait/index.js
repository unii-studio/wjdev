import styled from 'styled-components';

import Image from './Image';
import Title from './Title';
import Split from './Split';

const Portrait = styled.div`
  text-align: center;
`;

Portrait.Image = Image;
Portrait.Title = Title;
Portrait.Split = Split;

export default Portrait;

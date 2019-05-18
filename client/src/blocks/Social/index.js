import styled from 'styled-components';

import Link from './Link';
import Icon from './Icon';

const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
`;

Social.Link = Link;
Social.Icon = Icon;

export default Social;

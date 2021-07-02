import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import Link from './Link';
import Icon from './Icon';

const Social = styled(Grid)`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto;
`;

Social.Link = Link;
Social.Icon = Icon;

export default Social;

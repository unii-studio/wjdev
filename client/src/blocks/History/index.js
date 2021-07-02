import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import Split from './Split';

const History = styled(Grid)`
  background: rgba(1, 1, 1, 0.9);
  color: white;
  padding: 2em;
  border-radius: 10px;
`;

History.Split = Split;

export default History;

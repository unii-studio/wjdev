import styled from 'styled-components';
import { Cell } from 'react-mdl';

import Split from './Split';

const History = styled(Cell)`
  background: rgba(1, 1, 1, 0.9);
  color: white;
  padding: 2em;
  border-radius: 10px;
`;

History.Split = Split;

export default History;

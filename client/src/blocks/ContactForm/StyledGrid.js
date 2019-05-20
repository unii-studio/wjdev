import styled from 'styled-components';

import { Grid } from 'react-mdl';

const StyledGrid = styled(Grid)`
  text-align: center;
  justify-content: center;
  width: 60%;
  height: 550px;
  color: black;
  margin-bottom: 0px;

  hr {
    border: 2px double #061161;
    width: 100%;
    margin: auto;
    margin-bottom: 25px;
  }
`;

export default StyledGrid;

import styled from 'styled-components';
import { Grid } from 'react-mdl';

const LandGrid = styled(Grid)`
  background: #780206; /* fallback for old browsers */
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
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default LandGrid;

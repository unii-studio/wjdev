import styled from 'styled-components';
import React from 'react';
import H2 from '../../elements/H2';

const PaddedH2 = styled(H2)`
  padding-top: 0.6em;
`;

const Name = () => <PaddedH2>Willie Liwa Johnson</PaddedH2>;

export default Name;

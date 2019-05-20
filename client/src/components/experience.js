import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { number, string } from 'prop-types';

import H4 from '../elements/H4';
import P from '../elements/P';

const Experience = ({ startYear, endYear, jobName, jobDescription }) => (
  <Grid>
    <Cell col={4}>
      <P>
        {startYear} - {endYear}
      </P>
    </Cell>
    <Cell col={8}>
      <H4>{jobName}</H4>
      <P>{jobDescription}</P>
    </Cell>
  </Grid>
);

Experience.propTypes = {
  startYear: number.isRequired,
  endYear: number.isRequired,
  jobName: string.isRequired,
  jobDescription: string.isRequired,
};

export default Experience;

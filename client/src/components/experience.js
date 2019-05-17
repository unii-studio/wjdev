import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { number, string } from 'prop-types';

const Experience = ({ startYear, endYear, jobName, jobDescription }) => (
  <Grid>
    <Cell col={4}>
      <p>
        {startYear} - {endYear}
      </p>
    </Cell>
    <Cell col={8}>
      <h4 style={{ marginTop: '0px', fontFamily: 'Open Sans' }}>{jobName}</h4>
      <p style={{ fontFamily: 'Open Sans' }}>{jobDescription}</p>
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

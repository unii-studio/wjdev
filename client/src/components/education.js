import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { number, string } from 'prop-types';

const Education = ({ startYear, endYear, schoolName, schoolDescription }) => (
  <Grid>
    <Cell col={4}>
      <p>
        {startYear} - {endYear}
      </p>
    </Cell>
    <Cell col={8}>
      <h4 style={{ marginTop: '0px' }}>{schoolName}</h4>
      <p>{schoolDescription}</p>
    </Cell>
  </Grid>
);

Education.propTypes = {
  startYear: number.isRequired,
  endYear: number.isRequired,
  schoolName: string.isRequired,
  schoolDescription: string.isRequired,
};

export default Education;

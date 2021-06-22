import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import { number, string } from 'prop-types';
import H6 from '../elements/H6';

const Skills = ({ skill, years, progress }) => (
  <Grid
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    align="stretch"
  >
    <Cell col={4}>
      <H6>{skill}</H6>
      {years} years
    </Cell>
    <Cell col={8}>
      <ProgressBar style={{ width: '95%' }} progress={progress} />
    </Cell>
  </Grid>
);

Skills.propTypes = {
  skill: string.isRequired,
  years: number.isRequired,
  progress: number.isRequired,
};

export default Skills;

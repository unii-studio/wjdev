import React from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';
import { number, string } from 'prop-types';

const Skills = ({ skill, progress }) => (
  <Grid>
    <Cell col={6}>{skill}</Cell>
    <Cell col={6}>
      <ProgressBar
        style={{
          margin: 'auto',
          width: '75',
          backgroundColor: '#061161',
          alignSelf: 'flex-end',
        }}
        progress={progress}
      />{' '}
    </Cell>
  </Grid>
);

Skills.propTypes = {
  skill: string.isRequired,
  progress: number.isRequired,
};

export default Skills;

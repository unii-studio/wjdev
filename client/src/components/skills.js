import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={6}>{this.props.skill}</Cell>
        <Cell col={6}>
          <ProgressBar
            style={{
              margin: 'auto',
              width: '75',
              backgroundColor: '#061161',
              alignSelf: 'flex-end',
            }}
            progress={this.props.progress}
          />{' '}
        </Cell>
      </Grid>
    );
  }
}

export default Skills;

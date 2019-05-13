import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{ display: 'flex' }}>
            <p>{this.props.skill}</p>{' '}
            <ProgressBar
              style={{
                margin: 'auto',
                width: '75',
                backgroundColor: '#061161',
                alignSelf: 'flex-end',
              }}
              progress={this.props.progress}
            />{' '}
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Skills;

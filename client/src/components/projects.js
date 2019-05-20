import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from 'react-mdl';

import styled from 'styled-components';
import H1 from '../elements/H1';

import Project from '../blocks/Project';

const Div = styled.div`
  display: flex;
`;

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories = () => {
    const { activeTab } = this.state;

    /* iOS */
    if (activeTab === 0) {
      return (
        <Div>
          {/* Project 1 */}
          <Project>
            <Project.Title img="url(https://i.imgur.com/lFuuL5V.jpg) no-repeat center center">
              Vybes
            </Project.Title>
            <Project.Text>
              A journal and meditation app designed to help you find calm in
              your daily life. Designed and developed by yours truly.
            </Project.Text>
            <Project.Actions>
              <Project.ButtonLink
                text="GitHub"
                link="https://github.com/willieLjohnson/Vybes"
              />
              <Project.Spacer />
              <Project.ButtonLink
                text="iOS"
                link="https://itunes.apple.com/us/developer/willie-johnson/id1384634583?mt=8"
              />
            </Project.Actions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Project>
        </Div>
      );
    }

    /* Unity */
    if (activeTab === 1) {
      return (
        <Div>
          {/* Project 1 */}
          <Project>
            <Project.Title img="url(https://i.imgur.com/LhwFdwI.gif) no-repeat center center">
              Surge
            </Project.Title>
            <Project.Text>
              Super intense arcade game inspired by Pong. Music changes with
              difficult and there are a variety of levels to get high-scores in.
            </Project.Text>
            <Project.Actions>
              <Project.ButtonLink
                text="GitHub"
                link="https://github.com/willieLjohnson/Surge"
              />
              <Project.ButtonLink
                text="iOS"
                link="https://itunes.apple.com/US/app/id1392635397?mt=8"
              />
              <Project.ButtonLink
                text="Android"
                link="https://play.google.com/store/apps/details?id=com.willynillygames.surge"
              />
            </Project.Actions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Project>
        </Div>
      );
    }

    /* React */
    if (activeTab === 2) {
      return (
        <Div>
          {/* Project 1 */}
          <H1>This is react</H1>
        </Div>
      );
    }

    /* MongoDB */
    if (activeTab === 3) {
      return (
        <Div>
          <H1>This is MongoDB</H1>
        </Div>
      );
    }

    return (
      <Div>
        <H1>404! How'd you get all the way here!?</H1>
      </Div>
    );
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div>
        <Tabs
          activeTab={activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>iOS</Tab>
          <Tab>Unity</Tab>
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

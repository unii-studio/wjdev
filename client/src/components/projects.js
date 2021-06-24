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
            <Project.Title img="url(https://res.cloudinary.com/deaktgkfq/image/upload/v1586290897/WJDEV/vybes.jpg) no-repeat center center">
              Vybes
            </Project.Title>
            <Project.Text>
              A journal and meditation app designed to help you find calm in
              your daily life. Designed and developed by yours truly.
            </Project.Text>
            <Project.Actions>
              <Project.Button
                text="GitHub"
                link="https://github.com/willieLjohnson/Vybes"
              />
              <Project.Spacer />
              <Project.Button
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
            <Project.Title img="url(https://res.cloudinary.com/deaktgkfq/image/upload/v1586291177/WJDEV/surge.gif) no-repeat center center">
              Surge
            </Project.Title>
            <Project.Text>
              Super intense arcade game inspired by Pong. Music changes with
              difficult and there are a variety of levels to get high-scores in.
            </Project.Text>
            <Project.Actions>
              <Project.Button
                text="GitHub"
                link="https://github.com/willieLjohnson/Surge"
              />
              <Project.Button
                text="iOS"
                link="https://itunes.apple.com/US/app/id1392635397?mt=8"
              />
              <Project.Button
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
          <Project>
            <Project.Title img="url(https://i.imgur.com/TvmZHF8.png) no-repeat center center">
            WJ Dev
            </Project.Title>
            <Project.Text>
            Website made using React and MongoDB.
            </Project.Text>
            <Project.Actions>
              <Project.Button
                text="GitHub"
                link="https://github.com/unii-studio/wjdev"
              />
              <Project.Button
                text="Website"
                link="https://portfolio.liwatec.xyz"
              />
            </Project.Actions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Project>
        </Div>
      );
    }

    /* MongoDB */
    if (activeTab === 3) {
      return (
        <Div>
          <H1>This website uses MongoDB</H1>
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

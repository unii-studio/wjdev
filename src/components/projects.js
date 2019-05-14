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

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <p>Dev account currently expeired so appstore links don't work :(</p>
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://i.imgur.com/lFuuL5V.jpg) no-repeat center center',
                backgroundSize: 'cover',
              }}
            >
              Vybes
            </CardTitle>
            <CardText>
              A journal and meditation app designed to help you find calm in
              your daily life. Designed and developed by yours truly.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button
                colored
                href="https://itunes.apple.com/us/developer/willie-johnson/id1384634583?mt=8"
                rel="noopener noreferrer"
                target="_blank"
              >
                AppStore
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle
              style={{
                color: '#fff',
                height: '176px',
                background:
                  'url(https://i.imgur.com/LhwFdwI.gif) no-repeat center center',
                backgroundSize: 'cover',
              }}
            >
              Surge
            </CardTitle>
            <CardText>
              Super intense arcade game insipred by Pong. Music changes with
              difficult and there are a variaty of levels to get high-scores in.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/willieLjohnson/Surge"
                colored
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                href="https://itunes.apple.com/US/app/id1392635397?mt=8"
                colored
                rel="noopener noreferrer"
                target="_blank"
              >
                AppStore
              </Button>
              <Button
                href="https://play.google.com/store/apps/details?id=com.willynillygames.surge"
                colored
                rel="noopener noreferrer"
                target="_blank"
              >
                PlayStore
              </Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <h1> This is react</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
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

import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <div>
                <Link style={{ textDecoration: 'blue', color: 'white' }} to="/">
                  W.J DEV
                </Link>
              </div>
            }
            scroll
          >
            <Navigation>
              <Link className="one" to="/aboutme">
                ABOUT
              </Link>
              <Link className="two" to="/contact">
                CONTACT
              </Link>
              <Link className="three" to="/projects">
                PROJECTS
              </Link>
              <Link className="four" to="/resume">
                RESUME
              </Link>
            </Navigation>
          </Header>

          {/* <Drawer
            title={
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                W.J DEV
              </Link>
            }
          >
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
            </Navigation>
          </Drawer> */}
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

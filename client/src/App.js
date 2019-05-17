import React, { Component } from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/main';

const App = () => (
  <div className="demo-big-content">
    <Layout>
      <Header
        className="header-color"
        title={
          <div>
            <Link
              style={{
                textDecoration: 'blue',
                color: 'white',
                fontFamily: 'Raleway',
              }}
              to="/"
            >
              WJ DEV
            </Link>
          </div>
        }
        scroll
      >
        <Navigation>
          {/* <Link className="one" to="/aboutme">
                ABOUT
              </Link> */}
          <Link to="/projects">PROJECTS</Link>
          <Link to="/resume">RESUME</Link>
          <Link to="/contact">CONTACT</Link>
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

export default App;

import React from 'react';
import { Layout, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import AppHeader from './blocks/AppHeader';

const App = () => (
  <div>
    <Layout>
      <AppHeader
        title={
          <div>
            <Link // TODO: Replace with styled component. Currently not possible due to react-mdl css.
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
      </AppHeader>
      <Content>
        <div className="page-content" />
        <Main />
      </Content>
    </Layout>
  </div>
);

export default App;

import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Landing = () => (
  <div style={{ width: '100%', margin: 'auto' }}>
    <Grid className="landing-grid">
      <Cell col={12}>
        <img src="wjdev.png" alt="avatar" className="logo-img" />

        <div className="banner-text">
          <p>IOS APPS | UNITY GAMES | REACT WEBSITES | MONGO DATABASES</p>
          <hr />
          <div className="social-links">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/willie-liwa-johnson/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            {/* Github */}
            <a
              href="https://github.com/willieLjohnson"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/Xillioneur?lang=en"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </a>

            {/* Youtube */}
            <a
              href="https://www.youtube.com/user/MrWizzy606/featured?view_as=public"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-youtube-square" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Cell>
    </Grid>
  </div>
);

export default Landing;

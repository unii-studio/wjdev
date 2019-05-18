import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Banner from '../blocks/Banner';
import Social from '../blocks/Social';

const Landing = () => (
  <div style={{ width: '100%', margin: 'auto' }}>
    <Grid className="landing-grid">
      <Cell col={12}>
        <img src="wjdev.png" alt="avatar" className="logo-img" />

        <Banner>
          <Banner.Text>
            IOS APPS | UNITY GAMES | REACT WEBSITES | MONGO DATABASES
          </Banner.Text>
          <hr />
          <Social>
            {/* LinkedIn */}
            <Social.Link
              href="https://www.linkedin.com/in/willie-liwa-johnson/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Social.Icon
                className="fa fa-linkedin-square"
                aria-hidden="true"
              />
            </Social.Link>

            {/* Github */}
            <Social.Link
              href="https://github.com/willieLjohnson"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Social.Icon className="fa fa-github-square" aria-hidden="true" />
            </Social.Link>

            {/* Twitter */}
            <Social.Link
              href="https://twitter.com/Xillioneur?lang=en"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Social.Icon
                className="fa fa-twitter-square"
                aria-hidden="true"
              />
            </Social.Link>

            {/* YouTube */}
            <Social.Link
              href="https://www.youtube.com/user/MrWizzy606/featured?view_as=public"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Social.Icon
                className="fa fa-youtube-square"
                aria-hidden="true"
              />
            </Social.Link>
          </Social>
        </Banner>
      </Cell>
    </Grid>
  </div>
);

export default Landing;

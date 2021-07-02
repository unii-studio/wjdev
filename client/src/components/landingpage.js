import React from 'react';
import Grid from '@material-ui/core/Grid';
import Intro from '../blocks/Intro';
import Banner from '../blocks/Banner';
import Social from '../blocks/Social';
import Logo from '../elements/Logo';

const Landing = () => (
  <Intro>
    <Intro.LandGrid>
      <Logo />

      <Banner>
        <Grid item xs={12}>
          <Banner.Text>
            IOS APPS | UNITY GAMES | REACT WEBSITES | MONGO DATABASES
          </Banner.Text>
        </Grid>

        <Banner.Split />
        <Social container spacing={0}>
          {/* LinkedIn */}
          <Social item xs={3}>
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
          </Social>

          {/* Github */}
          <Social item xs={3}>
            <Social.Link
              href="https://github.com/willieLjohnson"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Social.Icon className="fa fa-github-square" aria-hidden="true" />
            </Social.Link>
          </Social>

          {/* Twitter */}
          <Social item xs={3}>
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
          </Social>


          {/* YouTube */}
          <Social item xs={3}>
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

        </Social>
      </Banner>
    </Intro.LandGrid>
  </Intro>
);

export default Landing;

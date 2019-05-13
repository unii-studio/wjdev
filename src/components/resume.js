import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                className="portrait-img"
                src="portrait-1.jpg"
                alt="Portrait of Willie Liwa Johnson"
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ paddingTop: '0.5em' }}>Willie Liwa Johnson</h2>
              <h4 style={{ color: 'grey' }}>Software Developer</h4>
              <hr
                style={{
                  borderTop: '3px solid #061161',
                  width: '100%',
                }}
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <hr style={{ borderTop: '3px solid #061161', width: '100%' }} />
              <h5>Address</h5>
              <p>
                <a
                  href="https://www.google.com/maps/place/MONTGOMRY+VLG,+MD+20879/@39.1708499,-77.1858614,14.74z/data=!4m5!3m4!1s0x89b62b579a467b6d:0xe2ea76d8df38b7a8!8m2!3d39.1733025!4d-77.1772737"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Gaithersburg, MD 20879
                </a>
              </p>
              <h5>Phone</h5>
              <p>
                <a
                  href="tel:240-550-5589"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  (240) 550-5589
                </a>
              </p>
              <h5>Email</h5>
              <p>
                <a
                  href={
                    "mailto:liwa.johnson@gmail.com?subject=Let's get in touch"
                  }
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  liwa.johnson@gmail.com
                </a>
              </p>
              <h5>Web</h5>
              <p>
                <a
                  href="http://unii.design"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  unii.design
                </a>
              </p>
              <hr style={{ borderTop: '3px solid #061161', width: '100%' }} />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Education
              startYear={2007}
              endYear={2009}
              schoolName="My 2nd University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: '3px solid #780206' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />

            <Experience
              startYear={2012}
              endYear={2016}
              jobName="Second Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            />
            <hr style={{ borderTop: '3px solid #780206' }} />
            <h2>Skills</h2>
            <Skills skill="iOS/Swift" progress={100} />
            <Skills skill="Unity" progress={85} />
            <Skills skill="HTML/CSS" progress={70} />
            <Skills skill="javascript" progress={50} />
            <Skills skill="NodeJS" progress={40} />
            <Skills skill="React" progress={25} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

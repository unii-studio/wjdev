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
              <h2 style={{ paddingTop: '0.6em' }}>Willie Liwa Johnson</h2>
              <h4 style={{ color: 'grey' }}>Software Developer</h4>
              <hr
                style={{
                  borderTop: '3px solid #061161',
                  width: '100%',
                }}
              />
              <p>
                I'm a software engineer who specializes in iOS Development. With
                a variety of projects under my belt I have experience using many
                different technologies. I love to develop video games,
                productivity apps, augmented reality apps, and dev tools.
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
            {/* Skills */}
            <h2>Skills</h2>
            <Skills skill="iOS/Swift" progress={100} />
            <Skills skill="Unity" progress={85} />
            <Skills skill="HTML/CSS" progress={70} />
            <Skills skill="JavaScript" progress={50} />
            <Skills skill="NodeJS" progress={40} />
            <Skills skill="React" progress={25} />
            <hr style={{ borderTop: '3px solid #780206' }} />

            {/* Education */}
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2019}
              schoolName="Make School Product College"
              schoolDescription="Developed numerous iOS apps working with Swift, Python & Flask and Ruby & Rails to acquire knowledge of Full Stack iOS development and touching on multithreading and advanced UIKit.
Implemented CS Data Structures using Python and analyzed their Big-O complexity. 
Collaborated with many developers on projects with teams of 4+ members and in the community."
            />
            <hr style={{ borderTop: '3px solid #780206' }} />

            {/* Experience */}
            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2018}
              jobName="Make School Summer Academy Curriculum Assistant"
              jobDescription="Wrote iOS tutorials for Make School using markdown. Created a tutorial to help explain the process of networking and decoding JSON in swift 4."
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

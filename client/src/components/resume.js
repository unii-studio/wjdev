import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

import Portrait from '../blocks/Portrait';
import History from '../blocks/History';

import P from '../elements/P';
import H2 from '../elements/H2';
import H5 from '../elements/H5';

const Resume = () => (
  <Grid>
    <Cell col={4}>
      <Portrait>
        <Portrait.Image />
        <H2>Willie Johnson</H2>
        <Portrait.Title>Full-Stack Developer</Portrait.Title>
        <Portrait.Split />
        <P>
          “I am a Full-Stack Developer experienced in mobile, web, and game
          development. I have a passion for Computer Science that spans many
          different subjects from designing applications to modeling 3D
          animations. This passion gives me the drive to learn and hone my
          skills every day, undaunted by difficult problems and projects. Given
          the opportunity, I will bring this passion, eagerness too learn, and
          tenacity to build business applications and solve real world problems
          for great companies like yours.“
        </P>
        <Portrait.Split />
        {/* <H5>Address</H5>
        <P>
          <a
            href="https://www.google.com/maps/place/MONTGOMRY+VLG,+MD+20879/@39.1708499,-77.1858614,14.74z/data=!4m5!3m4!1s0x89b62b579a467b6d:0xe2ea76d8df38b7a8!8m2!3d39.1733025!4d-77.1772737"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gaithersburg, MD 20879
          </a>
        </P> */}
        <H5>Phone</H5>
        <P>
          <a href="tel:240-907-8829" rel="noopener noreferrer" target="_blank">
            (240) 907-8829
          </a>
        </P>
        <H5>Email</H5>
        <P>
          <a
            href={"mailto:liwa.johnson@gmail.com?subject=Let's get in touch"}
            rel="noopener noreferrer"
            target="_blank"
          >
            liwa.johnson@gmail.com
          </a>
        </P>
        <H5>Web</H5>
        <P>
          <a
            href="https://portfolio.liwatec.xyz/"
            rel="noopener noreferrer"
            target="_blank"
          >
            wjdev (you are here)
          </a>
        </P>
        <Portrait.Split />
      </Portrait>
    </Cell>
    <History col={8}>
      {/* Skills */}
      <H2>Skills</H2>
      <Skills skill="Git/GitHub" years={5} progress={100} />
      <Skills skill="Web Development" years={3} progress={85} />
      <Skills skill="Game Development" years={3} progress={80} />
      <Skills skill="Python" years={3} progress={70} />
      <Skills skill="Mobile Development" years={2} progress={65} />
      <Skills skill="MS Office" years={3} progress={80} />
      <History.Split />

      {/* Education */}
      <H2>Education</H2>
      <Education
        startYear={2017}
        endYear={2019}
        schoolName="Make School Product College"
        schoolDescription="Developed numerous iOS apps working with Swift, Python & Flask and Ruby & Rails to acquire knowledge of Full Stack iOS development and touching on multithreading and advanced UIKit.
Implemented CS Data Structures using Python and analyzed their Big-O complexity. 
Collaborated with many developers on projects with teams of 4+ members and in the community."
      />
      <History.Split />

      {/* Experience */}
      <H2>Experience</H2>
      <Experience
        startYear={2018}
        endYear={2018}
        jobName="Make School Summer Academy Curriculum Assistant"
        jobDescription="Wrote iOS tutorials for Make School using markdown. Created a tutorial to help explain the process of networking and decoding JSON in swift 4."
      />
    </History>
  </Grid>
);

export default Resume;

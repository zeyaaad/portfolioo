import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            My name is <b>Zeyad Mohamed</b>, and I'm in my final year at <b>WE Applied Technology School</b>, majoring in <b>Web Development</b> (a technical high school).<br/><br/>
            I'm a <b>MERN Stack Developer</b> and have worked on many <b>personal</b>, <b>team</b>, and <b>freelance projects</b> for companies and clients in different fields.<br/><br/>
            I'm always passionate about learning something new in tech and development. If you're interested in connecting, feel free to check the links in the footer.<br/><br/>
            Besides coding, I enjoy playing <b>chess</b>, watching and playing <b>football</b>, and having <b>coffee</b> with friends.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='TypeScript' />
        <Skills skill='PHP' />
        <Skills skill='Laravel' />
        <Skills skill='MySQL' />
        <Skills skill='Python' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
      </div>
    </>
  );
};

export default About;

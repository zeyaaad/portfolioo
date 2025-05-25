import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import ZImage from '../images/z.jpg';
import { CiCoffeeCup } from "react-icons/ci";

const floatStyle = {
  border: '4px solid #fff',
  borderRadius: '12px',
  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  width: '280px',
  objectFit: 'cover',
  animation: 'float 4s ease-in-out infinite',
};

const Home = () => {
  return (
    <div>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Zeyad Mohamed</b></h1>
          <Typed/>   
        </div>

        {/* Static illustration image with inline float style */}
        <img 
          className="illustration" 
          src={ZImage} 
          alt="Zeyad Illustration"
          style={floatStyle}
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>Introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. I want to do work that challenges me as a developer 
            & work that I can be proud of.<br /><br />
            I am fluent in <b>JavaScript</b>, know a bit of <b>Python</b>, and am 
            working on MERN-stack projects. I plan to learn <b>Next.js</b> and 
            <b> Nest.js</b> soon.<br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="Avatar" />
        </Tilt>
      </div>

      {/* Put your keyframes somewhere global, e.g. in App.css or index.css */}
      <style>
        {`
          @keyframes float {
            0%   { transform: translateY(0px); }
            50%  { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </div>
  );
}

export default Home;

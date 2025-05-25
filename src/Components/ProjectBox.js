import React from 'react';
import {
  FaGithub, FaReact, FaNodeJs, FaBootstrap, FaHtml5,
  FaCss3Alt, FaJs, FaDatabase
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMui, SiMailchimp } from "react-icons/si";
import { CgFileDocument } from "react-icons/cg";
import "./css.css";

// Import images as modules
import rivellaStore from '../images/rivellaStore.png';
import ecommerceImg from '../images/ecommerce.png';
import sara7aImg from '../images/sara7a.png';
import zmoviesImg from '../images/z-movies.png';
import challengeHubImg from '../images/challageHub.png';

const projects = {
  RivellaExplore: {
    photo: rivellaStore,
    desc: "A full-featured chalet rental and booking platform built on the MERN stack. Users can browse and filter available chalets, book in real-time, and enjoy secure user authentication. The admin panel offers complete control over listings, bookings, and user inquiries, ensuring seamless operations.",
    demo: "https://rivellaexplore.com/",
    tech: ["Node", "Express", "MongoDB", "React", "MUI"],
    github: ""
  },
  Ecommerce: {
    photo: ecommerceImg,
    desc: "A comprehensive e-commerce platform featuring secure login, intuitive product browsing with advanced filters, and Stripe-powered payments. The admin dashboard supports product/category management, order tracking, and data export for streamlined operations.",
    demo: "https://ecommerco.vercel.app",
    tech: ["Node", "Express", "MongoDB", "CSS", "React"],
    github: ""
  },
  Sara7aApp: {
    photo: sara7aImg,
    desc: "An anonymous social networking app inspired by Sara7a, offering private messaging, profile insights, and an admin dashboard to monitor user activity and manage reports efficiently.",
    demo: "https://zeyaaad.github.io/sara7a_app_FrontEnd",
    tech: ["Node", "Express", "MongoDB", "CSS", "React"],
    github: ""
  },
  ZMovies: {
    photo: zmoviesImg,
    desc: "A front-end interface to explore movies, TV shows, and actors. Users can create custom watchlists and wishlists, powered by real-time API calls and intuitive UI components.",
    demo: "https://zeyaaad.github.io/Z-Movies",
    tech: ["React", "CSS", "Axios", "Bootstrap"],
    github: ""
  },
  ChallengeHub: {
    photo: challengeHubImg,
    desc: "An innovative platform for hosting and managing both online and offline tournaments. Participants enjoy smooth registration and scoring, while admins benefit from robust event creation and leaderboard tools.",
    demo: "https://challengehuub.vercel.app",
    tech: ["Node", "Express", "MongoDB", "React", "CSS"],
    github: ""
  }
};

const icons = {
  HTML: <FaHtml5 color="#e44d26" />,
  CSS: <FaCss3Alt color="#2965f1" />,
  JavaScript: <FaJs color="#f7df1e" />,
  Bootstrap: <FaBootstrap color="#7952b3" />,
  React: <FaReact color="#61dbfb" />,
  Node: <FaNodeJs color="#3c873a" />,
  Express: <SiExpress color="#000000" />,
  MongoDB: <SiMongodb color="#47a248" />,
  MUI: <SiMui color="#007FFF" />,
  "Mailchimp API": <SiMailchimp color="#ffe01b" />,
  MySQL: <FaDatabase color="#00758f" />,
  Axios: <FaJs color="#0080ff" /> // fallback icon
};

const ProjectBox = ({ projectKey }) => {
  const project = projects[projectKey];
  if (!project) return <div>Project not found</div>;

  return (
    <div className='projectBox'>
      <img
        className='projectPhoto'
        src={project.photo}
        alt={`${projectKey} display`}
      />
      <div>
        <h3>{projectKey.replace(/([A-Z])/g, ' $1').trim()}</h3>
        <p>{project.desc}</p>

        <div className="projectButtons">
          {project.github && (
            <a href={project.github} target='_blank' rel='noreferrer'>
              <button className='projectbtn'><FaGithub /> Github</button>
            </a>
          )}
          <a href={project.demo} target='_blank' rel='noreferrer'>
            <button className='projectbtn'><CgFileDocument /> Demo</button>
          </a>
        </div>

        <div className='projectTech'>
          <h4>🛠️ Technologies Used:</h4>
          <div className='techBadges'>
            {project.tech.map((tech, i) => (
              <div key={i} className='techBadge'>
                {icons[tech] ? <span className='techIcon'>{icons[tech]}</span> : null}
                <span className='techName'>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;

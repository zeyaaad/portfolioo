import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { 
  FaReact, 
  FaPython, 
  FaGitAlt, 
  FaGithub, 
  FaNpm, 
  FaFigma, 
  FaBootstrap, 
  FaPhp, 
  FaLaravel 
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { 
  SiExpress, 
  SiMongodb, 
  SiPostman, 
  SiVercel, 
  SiMysql, 
  SiTypescript 
} from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    'C++': <CgCPlusPlus />,
    'Postman': <SiPostman />,
    'React': <FaReact />,
    'Javascript': <DiJavascript1 />,
    'TypeScript': <SiTypescript />,   // ← added!
    'Node': <DiNodejs />,
    'Express': <SiExpress />,
    'MongoDb': <SiMongodb />,
    'Git': <FaGitAlt />,
    'Github': <FaGithub />,
    'Npm': <FaNpm />,
    'Figma': <FaFigma />,
    'Bootstrap': <FaBootstrap />,
    'Vercel': <SiVercel />,
    'PHP': <FaPhp />,
    'Laravel': <FaLaravel />,
    'MySQL': <SiMysql />,
    'Python': <FaPython />,
  };

  return (
    <div title={skill} className='SkillBox'>
      {icon[skill] || <span style={{ fontSize: '0.8rem' }}>No Icon</span>}
    </div>
  );
};

export default Skills;

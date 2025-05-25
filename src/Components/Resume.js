import React from 'react';
import { BsBoxArrowUpRight } from "react-icons/bs";
import "./cv.css";

const DRIVE_PDF_LINK = "https://drive.google.com/file/d/1Z7OGYhyfCCMgNqEp7yUc9Q4m-2gzxnCr/view?usp=sharing";
const DRIVE_PDF_EMBED = "https://drive.google.com/file/d/1Z7OGYhyfCCMgNqEp7yUc9Q4m-2gzxnCr/preview";

const Resume = () => {
  return (
    <div className='ResumePage'>
      <div className="resumeButtons">
        <a href={DRIVE_PDF_LINK} target='_blank' rel="noreferrer">
          <button className='openCV' type='button'>
            <BsBoxArrowUpRight />&nbsp; Open CV
          </button>
        </a>
      </div>

      <div className="iframeContainer">
        <iframe
          src={DRIVE_PDF_EMBED}
          title="Resume"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Resume;

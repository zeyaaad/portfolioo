import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Zeyad Mohamed</h4>
      <h4>Copyright &copy; 2025 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/zeyaaad" target='_blank' rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/zeyad-mohamed-2a3097287/" target='_blank' rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:zeyad14112006@gmail.com" target='_blank' rel="noreferrer">
          <GrMail />
        </a>
        <a href="https://www.facebook.com/dev.zoz" target='_blank' rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://wa.me/201122788629" target='_blank' rel="noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

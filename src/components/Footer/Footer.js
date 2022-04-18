import React from 'react';
import './Footer.css'
import { FaFacebookSquare, FaGithub } from 'react-icons/fa';


const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className=" p-10 text-neutral-content">
      <div className='footer-grid'>
        <div className='div'>
          <span className='title-footer text-center'>Developed By <a href="https://wild-photographer-f106f.web.app/">Zahid Miran</a> | &#169;

            {year} All rights reserved.</span>

        </div>
        <div className='items-center div'>
          <span className="title-footer">Social</span>
          <div className="social">
            <a className='footer-icon' target='_blank' href='https://www.facebook.com/'> <FaFacebookSquare /> </a>
            <a className='footer-icon' href='https://github.com/zahidmiran' target='_blank'> <FaGithub /> </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
import React from 'react'
import './componentCss/Footer.css';
import { IoLogoGithub } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <ul className='footer-ul'>
        <li className='footer-li'>
        <a href="https://github.com/oyelestepe" target='_blank' className='footer-link'>
          <IoLogoGithub className='footer-icon'/>
        </a>
        </li>

        <li className='footer-li'>
        <a href="" target='_blank' className='footer-link'>
          <FaInstagram className='footer-icon'/>
        </a>
        </li>
      </ul>
      <p className='footer-text'>All rights reserved</p>
    </footer>
  )
}

export default Footer
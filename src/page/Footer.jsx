import React from 'react'
import { Bio } from '../data/Bio';
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const footerContainer = "bg-gray-950 text-gray-200";
const footerWrapper = `flex flex-col justify-center items-center gap-5 p-4`;
const logo = `mt-5 md:mt-7 text-center text-2xl text-light text-yellow-400 `;
const nav = `flex justify-center items-center`;
const navLink = `ml-3 md:mx-5 hover:text-yellow-400 text:sm md:text-xl text-gray-100`;
const socialMediaWrapper = `flex justify-center items-center`;
const socialMediaIcon = `ml-4 md:mx-5 hover:text-yellow-400 text-2xl`;
const copyright = ` mb-5 text-light text-yellow-400 flex flex-col md:flex-row md:gap-3 justify-center items-center`;

function Footer() {
  return (

    <footer className={footerContainer}>

      <div className={footerWrapper}>

        <div className={logo}> {Bio.name}</div>

        <div className={nav}>
          <div className={navLink}>About</div>
          <div className={navLink}>Skills</div>
          <div className={navLink}>Projects</div>
          <div className={navLink}>Blogs</div>
          <div className={navLink}>Contact</div>
        </div>

        <div className={socialMediaWrapper}>
          <a className={socialMediaIcon} href={Bio.github} target='_blank'><FaGithub /></a>
          <a className={socialMediaIcon} href={Bio.linkedin} target='_blank'><FaLinkedin /></a>
          <a className={socialMediaIcon} href={Bio.youtube} target='_blank'><FaYoutube /></a>
          <a className={socialMediaIcon} href={Bio.twitter} target='_blank'><FaTwitter /></a>
          <a className={socialMediaIcon} href={Bio.facebook} target='_blank'><FaFacebook /></a>
          <a className={socialMediaIcon} href={Bio.instagram} target='_blank'><FaInstagram /></a>
        </div>

        <div className={copyright}>
          <span>&copy; 2023 </span>
          <span>All rights reserved.</span>
          <span>A Family of Love & Affection. </span>
        </div>

      </div>
    </footer >

  )
}

export default Footer
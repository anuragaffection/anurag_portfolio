import React from 'react'
import { Bio } from '../data/Bio';
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const footerContainer = "bg-gray-950 text-gray-200";
const footerWrapper = `flex flex-col justify-center items-center gap-5 p-4`;
const logo = `mt-5 md:mt-7 text-center text-2xl text-light text-yellow-400 `;
const nav = `flex`;
const navLink = `mx-3 md:mx-5 hover:text-yellow-400 text-xl text-gray-100`;
const socialMediaWrapper = `flex`;
const socialMediaIcon = `mx-3 md:mx-5 hover:text-yellow-400 text-2xl`;
const copyright = `mt-5 mb-5 text-light text-yellow-400`;

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
          &copy; 2023 A Family of Love & Affection. All rights reserved.
        </div>

      </div>
    </footer >

  )
}

export default Footer
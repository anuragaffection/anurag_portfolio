import React from 'react'
import { Bio } from '../data/Bio';
import AnuragAffection from '../assets/anuragaffection.jpg'

const navbarContainer = `flex justify-between bg-gray-900 text-gray-100 text-lg w-full flex-col md:flex-row p-1 gap-2 sticky top-0`;
const logo = ` text-xl text-yellow-400 font-semibold`;
const logoImg = 'rounded-full'
const logoWrapper = `flex justify-center items-center gap-2 ml-4 mt-2 md:mt-0`
const nav = `flex justify-center items-center list-none gap-4 md:gap-8 mr-4 md:mr-8 mb-2 md:mb-0 mt-2 md:mt-0`;
const navLink = `hover:text-yellow-400 md:text-xl`;

function Navbar() {
    return (
        <>
            <div className={navbarContainer}>

                <div className={logoWrapper}>
                    <img
                        className={logoImg}
                        src={AnuragAffection}
                        alt="Logo"
                        height={'40px'}
                        width={'40px'}
                    />
                    <div className={logo}>{Bio.name}</div>
                </div>

                <div className={nav}>
                    <li className={navLink}>Home </li>
                    <li className={navLink}>About</li>
                    <li className={navLink}>Skills</li>
                    <li className={navLink}>Projects</li>
                    <li className={navLink}>Blogs </li>
                    <li className={navLink}>Contact </li>
                </div>

            </div>

        </>

    )
}

export default Navbar;
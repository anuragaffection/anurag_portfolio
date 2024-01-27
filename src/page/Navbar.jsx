import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import AnuragAffection from '../assets/anuragaffection.jpg'
import { Bio } from '../data/Bio';


const navbarContainer = `flex justify-around items-center bg-gray-950 p-4`;
const logoWrapper = `flex justify-center items-center gap-2 `
const logoImg = 'rounded-full'
const logo = ` text-xl text-amber-500 font-bold`;
const nav = ` hidden md:flex justify-center items-center list-none gap-10 `;
const navLink = `hover:text-lime-400 text-xl font-semibold duration-500`;


function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const sections = ['Skills', 'Experience', 'Projects', 'Blogs', 'Contact'];

    return (
        <>
            <div className='sticky top-0 text-lime-600'>

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
                        {
                            sections && sections.map((section, index) => (
                                <li key={index} className={navLink}> {section} </li>
                            ))
                        }
                    </div>

                    <button
                        className='hidden lg:flex bg-lime-600 hover:bg-lime-400 duration-500 text-gray-950 rounded-lg p-3 px-8'> LinkedIn
                    </button>

                    <div
                        onClick={() => setIsMobile(!isMobile)}
                        className='md:hidden cursor-pointer text-lime-600 hover:text-lime-400 duration-200'
                    >
                        {
                            isMobile ? <FaTimes size={30} /> : <FaBars size={30} />
                        }
                    </div>


                </div>

                {
                    isMobile && (
                        <div
                            onClick={() => setIsMobile(!isMobile)}
                            className='md:hidden h-screen bg-gray-950 w-1/2 fixed right-0 p-4'>
                            <ul className='flex flex-col gap-7 justify-center items-center'>
                                {
                                    sections && sections.map((section, index) => (
                                        <li key={index} className={navLink}> {section} </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Navbar;
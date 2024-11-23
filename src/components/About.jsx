import React from 'react'
import anuragImage from '../assets/anuragImage.jpg'
import { ReactTyped } from 'react-typed'
import { Bio } from '../data/Bio'

const container = ' text-gray-100 text-xl p-8 md:px-24 md:py-10 flex flex-col lg:flex-row-reverse gap-6 justify-center items-center'
const imgWrapper = 'flex-1 flex justify-center items-center'
const imgStyle = 'rounded-full border border-lime-800 hover:border-lime-500 duration-500'
const introAboutWrapper = 'flex flex-1 flex-col flex-wrap gap-8'
const introWrapper = 'flex flex-col gap-3'
const hiStyle = 'text-amber-500 text-4xl font-bold'
const nameStyle = 'text-amber-500 text-3xl font-bold'
const typedWrapper = 'text-xl font-semibold mt-2'
const aStyle = 'font-bold mr-2'
const typedStyle = 'text-xl text-gray-950 p-1 px-4 rounded bg-gradient-to-l from-amber-600 to-lime-600'
const btnStyle = 'flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:bg-gradient-to-l duration-500 text-gray-950 font-semibold rounded-lg p-3 px-5 max-h-14'
const linkStyle = 'flex justify-center items-center'


function About() {
  return (
    <div name='about' className={container}>
      <div className={imgWrapper}>
        <img
          className={imgStyle}
          src={anuragImage}
          alt={'myImage'}
          height={'300px'}
          width={'300px'}
        />

      </div>
      <div className={introAboutWrapper}>
        <div className={introWrapper}>
          <h1 className={hiStyle}> Hi, I am</h1>
          <h1 className={nameStyle}>{Bio.name}</h1>
          <div className={typedWrapper}>
            <span className={aStyle}>a</span>
            <ReactTyped
              className={typedStyle}
              strings={Bio.roles}
              startDelay={100}
              typeSpeed={50}
              backDelay={2000}
              backSpeed={30}
              loop={true}
            />
          </div>
        </div>
        <div className='font-khula leading-relaxed text-lg font-semibold text-gray-300'> {Bio.description}</div>

        <div className='flex flex-col md:flex-row flex-wrap gap-4 lg:gap-8 xl:gap-10'>
          <button
            className={btnStyle}
          >
            <a className={linkStyle} href={`mailto:${Bio.contactEmail}`} target="_blank">  Quick Mail </a>
          </button>
          <button
            className={btnStyle}
          >
            <a className={linkStyle} href={Bio.twitter} target="_blank">  Connect on X </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About


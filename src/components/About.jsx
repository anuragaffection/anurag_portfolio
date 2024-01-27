import React from 'react'
import { ReactTyped } from 'react-typed'
import anuragaffection from '../assets/anuragaffection.jpg'
import { Bio } from '../data/Bio'

function About() {




  return (
    <div className='bg-gradient-to-b from-slate-950 to-slate-900 text-gray-100 text-xl p-8 md:px-24 md:py-20 flex flex-col md:flex-row-reverse gap-6 justify-center items-center'>

      <div className='flex-1 flex justify-center items-center'>
        <img
          className='rounded-full border border-lime-800 hover:border-lime-500 duration-500'
          src={anuragaffection}
          alt={'myImage'}
          height={'300px'}
          width={'300px'}
        />
      </div>

      <div className='flex flex-1 flex-col flex-wrap gap-8'>

        <div className='flex flex-col gap-3'>
          <h1 className='text-amber-500 text-4xl font-bold'> Hi, I am</h1>
          <h1 className='text-amber-500 text-3xl font-bold'>Anurag Affection</h1>
          <div className='text-xl font-semibold mt-2'>
            <span className='font-bold mr-2 '>a</span>
            <ReactTyped
              className='text-xl text-gray-950 p-1 px-4 rounded bg-gradient-to-l from-amber-600 to-lime-600 '
              strings={Bio.roles}
              startDelay={100}
              typeSpeed={50}
              backDelay={2000}
              backSpeed={30}
              loop={true}
            />

          </div>
        </div>

        <div> {Bio.description}</div>



        <button
          className='w-1/2 md:w-1/3 bg-gradient-to-r from-cyan-500 to-blue-500 shadow hover:shadow-cyan-400 duration-500 text-gray-950 font-semibold rounded-lg p-3 px-5'> Github
        </button>
      </div>


    </div>
  )
}

export default About


import React from 'react'
import { Bio } from '../data/Bio'

function About() {
  return (
    <div className='bg-gradient-to-t from-gray-800 to-gray-900 text-gray-100 h-96'>About
       <div >
        {Bio.description}
       
      </div>
    </div>
  )
}

export default About
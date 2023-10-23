import React from 'react'
import { Bio } from '../data/Bio'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'

function Home() {
  return (
    <>
      <div className='bg-slate-800 text-gray-100 h-96'>
        {Bio.description}
       
      </div>
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />

    </>
  )
}

export default Home
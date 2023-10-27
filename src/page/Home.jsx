import React from 'react'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'
import Experience from '../components/Experience'

function Home() {
  return (
    <>
      <About />
      <Skills />
      <Experience/>
      <Projects />
      <Blogs />
      <Contact />

    </>
  )
}

export default Home
import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Works from '../components/Works'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default Home
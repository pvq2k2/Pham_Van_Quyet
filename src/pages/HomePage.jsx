import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Skill from '../components/Skill'

const HomePage = () => {
  return (
    <div className="h-screen">
        <Header />
        <Home />
        <About />
        <Skill />
        <Portfolio />
    </div>
  )
}

export default HomePage
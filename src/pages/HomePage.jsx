import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Home from '../components/Home'
import Skill from '../components/Skill'

const HomePage = () => {
  return (
    <div className="h-screen">
        <Header />
        <Home />
        <About />
        <Skill />
    </div>
  )
}

export default HomePage
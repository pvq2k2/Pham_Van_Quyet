import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Home from '../components/Home'

const HomePage = () => {
  return (
    <div className="h-screen">
        <Header />
        <Home />
        <About />
    </div>
  )
}

export default HomePage
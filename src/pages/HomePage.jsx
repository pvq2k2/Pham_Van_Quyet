import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'

const HomePage = () => {
  return (
    <div>
        <Header />
        <main className="h-screen bg-slate-50 dark:bg-[#1F2235] transition duration-500">
          <Home />
        </main>
    </div>
  )
}

export default HomePage
import { useState } from 'react'
import logo from './logo.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
      </Routes>
    </div>
  )
}

export default App

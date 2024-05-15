import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <div className='w-full h-screen bg-black py-2 px-8'>
        <Nav />
        <Home />
      </div>
    </div>
  )
}

export default App
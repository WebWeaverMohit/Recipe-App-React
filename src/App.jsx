import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Recipes from './components/Recipes'
import About from './components/About'
import Contact from './components/Contact'
import Details from './components/Details'
import Create from './components/Create'
import Update from './components/Update'

const App = () => {
  return (
      <div className='w-full h-screen relative bg-black py-2 px-8'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes/:id" element={<Details />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
  )
}

export default App
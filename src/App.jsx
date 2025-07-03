import { useState } from 'react'
import MovieCards from './components/movie_cards'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Fav from './pages/fav'
import Navbar from './components/navbar'
function App() {
  return (
    <>
    <div>
      <Navbar></Navbar>
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/fav" element={<Fav />}></Route>

      </Routes>
    </main>
    </div>
    </>
  )
}
export default App
function Test({display}){
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

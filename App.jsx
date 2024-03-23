
import React from 'react'
import Home from './Project Recipe2/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from'./Project Recipe2/Navbar'
import SpecificCategory from './Project Recipe2/SpecificCategory'
import Meals from './Project Recipe2/Meals'
function App() {
  return (
    <div>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    <Route path="/specificcategory" element={<SpecificCategory/>} ></Route>
    <Route path="/meals" element={<Meals/>}></Route>
    </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App







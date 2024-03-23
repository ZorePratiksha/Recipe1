import React from 'react'

import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='Navbar'>
        <nav className='navbar'>
            <div className='Logo'> 
            <img src={'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'}height={'150px'} width={'150px'}></img>


            </div>
            <div className='Link'>
           <Link to={'/'}>Home</Link>
           <input type=' text' placeholder="search recipe Image"></input>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
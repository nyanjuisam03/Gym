import React from 'react'
import {Link }from 'react-router-dom'

function Homelevel() {
  return (
    <div>
    
      <div className="level">
      <h2>Level of intensity</h2>
      <Link to={'/beginner'}>
        <div className='midlevel'>
            <img src="./src/pictures/beginner.jpg" alt="" /> 
            <h2>Beginner</h2>
        </div>
        </Link>
        <Link to={'/intermediate'}>
         <div className='midlevel1'>
         <img src="./src/pictures/inter.jpg" alt="" /> 
            <h2>Intermediate</h2>
        </div>
        </Link>
        <Link to={'/advance'}>
        <div className='midlevel'>
        <img src="./src/pictures/hard.jpg" alt="" /> 
            <h2>Advanced</h2>
        </div> 
        </Link>
      </div>
    </div>
  )
}

export default Homelevel

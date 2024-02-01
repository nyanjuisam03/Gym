import React from 'react'
import Homelevel from '../subpages/homelevel'
import {Link }from 'react-router-dom'



function Home() {
  return (
    <div>
      <h2>Focus Area</h2>
     <div className='workout-area'>
       <Link to={'/fullworkout'}>
        <div className='fullbody-area'> 
        <img src="./src/pictures/fullw.png" alt="" />
        <h3>Full body</h3>
        </div>
        </Link>
        <Link to={'/chest'}>
        <div className='fullbody-area'> 
        <img src='./src/pictures/chest.png'></img>
        <h3>Chest</h3>
        </div>
        </Link>
        <Link to={'/core'}>
        <div className='fullbody-area'> 
        <img src="./src/pictures/core.png" alt="" />
        <h3>Core</h3>
        </div>
        </Link>
        <Link to={'/back'}>
        <div className='fullbody-area'> 
        <img src="./src/pictures/back.png" alt="" />
        <h3>Back</h3>
        </div>
        </Link>
        <Link to={'/arms'}>
        <div className='fullbody-area'> 
        <img src="./src/pictures/arm.png" alt="" />
        <h3>Arms</h3>
        </div>
        </Link>
        <Link to={'/legs'}>
        <div className='fullbody-area'> 
        <img src="./src/pictures/leg.png" alt="" />
        <h3>Legs</h3>
        </div>
        </Link>
     </div>
<Homelevel/>
    </div>
  )
}

export default Home

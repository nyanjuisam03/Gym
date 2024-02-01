import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'



function Instructions() {
let param=useParams()

const [instructionsData, setInstructions] = useState({})


  return (
    <div>
      instructions
    </div>
  )
}

export default Instructions

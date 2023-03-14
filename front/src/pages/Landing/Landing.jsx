import React from 'react'
import '../Landing/Landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='initial-container'>
        <div className='title-container'>
          <h1>Henry Countries</h1>
        <Link to='/home' className='ov-btn-grow-ellipse'>Continuar</Link>
        </div>
    </div>
  )
}

export default Landing
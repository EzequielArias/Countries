import React from 'react'
import '../Landing/Landing.css'
import { Link } from 'react-router-dom'
import wallpaper from '../../assets/mapaMundi.jpg'

const Landing = () => {
  return (
    <div className='initial-container'>
        <img src={wallpaper} alt='backgroundYummy'/>
        <h1>Henry Countries</h1>
        <Link to='/home' className='ov-btn-grow-ellipse'>Continuar</Link>
    </div>
  )
}

export default Landing
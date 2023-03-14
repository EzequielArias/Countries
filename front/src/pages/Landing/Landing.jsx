import React from 'react'
import '../Landing/Landing.css'
import { Link } from 'react-router-dom'
import wallpaper from '../../assets/mapaMundi.jpg'

const Landing = () => {
  return (
    <div className='initial-container'>
        <img src={wallpaper} alt='backgroundYummy'/>
        <h1>Travel</h1>
        <p>You don't know what to do?</p>
        <Link to='/home' className='ov-btn-grow-ellipse'>Click Me !</Link>
    </div>
  )
}

export default Landing
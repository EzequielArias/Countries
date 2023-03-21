import React from 'react'
import {  useLocation } from 'react-router-dom'
import './Footer.css'

const Footer = () => {

    let url = useLocation()

  return (
    <>
    {
        url.pathname === '/' ? ''
        : <div className='footer-container'>
        <p>Soy un Footer</p>
        <p>This website was made for <a 
        className='linkedin'
        href='https://www.linkedin.com/in/ezequiel-arias734/'
        >Ezequiel arias</a></p>
      </div>
    }
    </>
  )
}

export default Footer

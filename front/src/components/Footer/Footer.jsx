import React from 'react'
import { useLocation } from 'react-router-dom'
import './Footer.css'

const Footer = () => {

    let url = useLocation()

  return (
    <>
    {
        url.pathname === '/' ? ''
        : <div className='footer-container'>
        <p>Soy un Footer</p>
        <p>This website was made for Ezequiel Arias</p>
      </div>
    }
    </>
  )
}

export default Footer

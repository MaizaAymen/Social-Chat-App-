import React from 'react'
import './header.css'
const header = () => {
  return (
    <div className="header-container">
    <img src="assets/header_img.png" alt="Header Image" className="header-image" />
    <h1 className="header-title">
      Hey Developer{' '}
      <img src="assets/hand_wave.png" alt="Wave" className="wave-image" />
    </h1>
  </div>
  )
}

export default header

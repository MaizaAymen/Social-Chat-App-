import React from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full'>
      <img src="assets/favicon.svg" />
      <button onClick={()=>navigate('/login')}> login <img src="assets/arrow_icon.svg" alt="" /></button>
    </div>
  )
}

export default Navbar

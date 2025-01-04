import React, { useState } from 'react'
import './login.css'

const Login = () => {
const [state,setState]=useState('sign up') 
  return (
    <div className="login-container">
    <img
      src="assets/logo.svg"
      alt="Logo"
      className="login-logo"
      onClick={() => console.log('Logo Clicked')} // Add functionality if needed
    />
    <div className="login-content">
      <h2>{state === 'sign up' ? 'Create Account' : 'Login to Your Account'}</h2>
      <p>{state === 'sign up' ? 'Create your account' : 'Login to your account!'}</p>
      <form className="login-form">
        { state==='sign up' &&(
        <div className="input-container">
          <img src="assets/person_icon.svg" alt="Person Icon" />
          <input type="text" placeholder="Enter your username" />
        </div>
        ) }
        <div className="input-container">
          <img src="assets/lock_icon.svg" alt="Lock Icon" />
          <input type="password" placeholder="Enter your password" />
        </div>
        <div className="input-container">
          <img src="assets\mail_icon.svg" alt="Lock Icon" />
          <input type="email" placeholder="Enter your Email" />
        </div>
        <p className=''>forget password</p>
        <button type="submit" className="submit-button">
          {state}
        </button>
      </form>
      {state ==='sign up' ? (<p>Already have an account ?{' '}<span> login here</span></p>
      )
      :
      (<p>Don't have an account ?{' '}<span> sign here</span></p>
        )}
      
      
    </div>
  </div>
  )
}

export default Login

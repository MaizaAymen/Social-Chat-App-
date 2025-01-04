import React, { useContext, useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/Appcontext'
const Login = () => {
  const navigate =useNavigate()
  const {backendUrl , setislogin}=useContext(AppContent)
const [state,setState]=useState('sign up') 
const [name,setname]=useState('')
const [email,setemail]=useState('')
const [password,setpassword]=useState('')
 
  return (
    <div className="login-container">
    <img
    onClick={()=>navigate('/Home')}
      src="assets/logo.svg"
      alt="Logo"
      className="login-logo"
      // Add functionality if needed
    />
    <div className="login-content">
      <h2>{state === 'sign up' ? 'Create Account' : 'Login to Your Account'}</h2>
      <p>{state === 'sign up' ? 'Create your account' : 'Login to your account!'}</p>
      <form className="login-form">
        { state==='sign up' &&(
        <div className="input-container">
          <img src="assets/person_icon.svg" alt="Person Icon" />
          <input type="text" placeholder="Enter your username" 
          onChange={(e)=> setname(e.target.value)}
          value={name}
          />
        </div>
        ) }
        <div className="input-container">
          <img src="assets/lock_icon.svg" alt="Lock Icon" />
          <input type="password" placeholder="Enter your password" 
          onChange={(e)=> setpassword(e.target.value)}
          value={password}/>
        </div>
        <div className="input-container">
          <img src="assets\mail_icon.svg" alt="Lock Icon" />
          <input type="email" placeholder="Enter your Email" 
          onChange={(e)=> setemail(e.target.value)}
          value={email}/>
        </div>
        <p className='' onClick={()=>navigate('/Resetpassword')}>forget password</p>
        <button type="submit" className="submit-button">
          {state}
        </button>
      </form>
      {state ==='sign up' ? (<p>Already have an account ?{' '}<span onClick={()=>setState('login')}> login here</span></p>
      )
      :
      (<p>Don't have an account ?{' '}<span onClick={()=>setState('sign up')}>sign here</span></p>
        )}
      
      
    </div>
  </div>
  )
}

export default Login

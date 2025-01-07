import React, { useContext } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/Appcontext';
import axios from 'axios';
const Navbar = () => {
    const navigate = useNavigate();
    const {userData ,backendUrl ,setIsLogin ,setUserData}=useContext(AppContent)
    const logout=()=>{
      try {
        axios.defaults.withCredentials=true;
        const {data}=await axios.get
      } catch (error) {
        
      }
    }
 
    return (
    <div className='w-full'>
      <img src="assets/favicon.svg" />
      {userData ? 
      <div class="custom-div group">
        {userData.name[0].toUpperCase()}
        <div class="custom-tooltip">
        <ul class="custom-list">
          {!userData.isAcconuntVerified && <li>verify email</li>}
          
          <li class="last">logout</li>
        </ul>
        </div>
      </div>
    :
    <button onClick={()=>navigate('/Login')}> login <img src="assets/arrow_icon.svg" alt="" /></button>
    }
     
    </div>
  )
}

export default Navbar

import React, { useContext } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/Appcontext';
import axios from 'axios';
import { toast } from 'react-toastify';
const Navbar = () => {
    const navigate = useNavigate();
    const {userData ,backendUrl ,setIsLogin ,setUserData}=useContext(AppContent)
    const logout= async()=>{
      try {
        axios.defaults.withCredentials=true;
        const {data}=await axios.post('http://localhost:4000/api/auth/logout')
          data.success && setIsLogin(false)
          data.success && setUserData(false)
          navigate('/Home');
      } catch (error) {
        toast.error(error.message)
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
          
          <li class="last" onClick={logout}>logout</li>
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

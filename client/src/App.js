import './App.css';
import Auth from './auth/auth';
import Chat from './Chat/Chat';
import User from './usernavbar/user';
import login from './pages/login';
import Home from './pages/Home';
import resetPassword from './pages/resetPassword';
import EmailVerify from './pages/EmailVerify';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter here */}
      <div className="App">
        <Routes>
          <Route path="/" element={<User/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/Auth" element={<Auth/>} />
          <Route path="/login" element={<login/>} />
          
        </Routes>
      </div>
    </BrowserRouter> 

  );
}

export default App;

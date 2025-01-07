import './App.css';
import Auth from './auth/auth';
import Chat from './Chat/Chat';
import User from './usernavbar/user';
import Login from './pages/login';
import Home from './pages/Home';
import ResetPassword from './pages/resetPassword';
import EmailVerify from './pages/EmailVerify';
import Navbar from './components/navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter here */}
      <div className="App">
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/Auth" element={<Auth/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/EmailVerify" element={<EmailVerify/>} />
          <Route path="/navbar" element={<Navbar/>} />
          <Route path="/header" element={<Header/>} />
        </Routes>
      </div>
    </BrowserRouter> 

  );
}

export default App;

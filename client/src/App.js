import './App.css';
import Auth from './auth/auth';
import Chat from './Chat/Chat';
import User from './usernavbar/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> {/* Use BrowserRouter here */}
      <div className="App">
        <Routes>
          <Route path="/" element={<User/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/Auth" element={<Auth/>} />
        </Routes>
      </div>
    </BrowserRouter> 

  );
}

export default App;

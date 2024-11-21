import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homes from './components/home';
import Landing from './components/Landing';
import Chats from './components/Chats';
import Create from './components/Create';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import { Connection } from 'mongoose';
import Connections from './components/Connections';
import Portfolio from './components/Portfolio';
import Signup from './components/Signup';
import Signin from './components/Signin';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>} />
         <Route path='/home' element={<Homes/>} />
        <Route path='/signup' element={<Signup/>} />
         <Route path='/signin' element={<Signin/>} />
            <Route path='/chats' element={<Chats/>} />
              <Route path='/create' element={<Create/>} />
                    <Route path='/edit' element={<EditProfile/>} />
 <Route path='/profile' element={<Profile/>} />
 <Route path='/connections' element={<Connections/>} />
  <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>
    </>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

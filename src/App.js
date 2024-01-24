import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/Home.js';
import ButtonAppBar from './components/Appbar.js';
import StolenCards from './pages/StolenCards.js';
import Transactions from './pages/Transactions.js';
import Users from './pages/Users.js';
import Login from './pages/Login.js';

function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar/>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/transactions' element={<Transactions/>} />
          <Route path='/cards' element={<StolenCards/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
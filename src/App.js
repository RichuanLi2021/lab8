import './App.css';
import FormSignup from './FormSignup';
import FormLogin from './FormLogin';
import Profile from './Homes';
import Dashboard from './dashboard/dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormSignup />} />
        <Route path="FormSignup" element={<FormSignup />} />
        <Route path="FormLogin" element={<FormLogin setUser={setUser} />} />
        <Route 
          path="/Homes" 
          element={user ? <Profile user={user} /> : <div>Please login first.</div>}
        />
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard /> : <div>Please login first.</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
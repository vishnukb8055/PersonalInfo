// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalInfo from './pages/PersonalInfo';
import ServicePlans from './pages/ServicePlans';

function App() {
  return (
    <div className="App">
      <PersonalInfo />
    </div>
    /*
    <Router>
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/service-plans" element={<ServicePlans />} />
      </Routes>
    </Router>
    */
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Login, MainApp, Register } from '../../pages';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mainapp" element={<MainApp />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes;

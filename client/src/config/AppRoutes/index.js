import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Home, Login, MainApp, Register } from '../../pages';
=======
import { Home, Login, Register } from '../../pages';
>>>>>>> origin/main

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
<<<<<<< HEAD
            <Route path="/home" element={<Home />} />
            <Route path="/mainapp" element={<MainApp />} />
=======
            <Route path="/" element={<Home />} />
>>>>>>> origin/main
        </Routes>
    </Router>
  )
}

export default AppRoutes;

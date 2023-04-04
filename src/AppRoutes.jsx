import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from './pages/Login';
import Registry from './pages/Registry';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/registry" element={<Registry/>} />
    </Routes>
  );
}

export default AppRoutes;
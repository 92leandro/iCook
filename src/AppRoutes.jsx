import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Drinks from "./pages/Drinks";
import Foods from "./pages/Foods";
import Home from "./pages/Home";
import Login from './pages/Login';
import Registry from './pages/Registry';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/registry" element={<Registry/>} />
      <Route exact path="/foods" element={<Foods/>} />
      <Route exact path="/drinks" element={<Drinks/>} />

    </Routes>
  );
}

export default AppRoutes;

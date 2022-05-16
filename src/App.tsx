import React from 'react';
import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Home/>} path="/home"/>
        <Route element={<Detail/>} path="/detail"/>
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;

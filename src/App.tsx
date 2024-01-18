import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './pages/login/loginScreen';
import HomeScreen from './pages/home/home';

function App() {
  return (
    <div className="w-full h-screen flex justify-center">
    <div className="w-full">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen/>} />
            <Route path="/home" element={<HomeScreen/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;

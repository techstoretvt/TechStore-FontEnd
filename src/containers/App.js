import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { path } from '../utils/constant'
import './App.scss'
import ScrollToTop from "react-scroll-to-top";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";



function App() {

  return (
    <div className="main-container">
      <Routes>
        <Route path={path.homePage} element={<HomePage />} />
        <Route path={path.login} element={<LoginPage />} />



        {/* default */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ScrollToTop smooth top='400' />
    </div>
  );
}

export default App;

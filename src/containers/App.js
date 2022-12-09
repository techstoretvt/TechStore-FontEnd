import React from "react";
import { Route, Routes } from "react-router-dom";

import { path } from '../utils/constant'
import './App.scss'
import HomePage from "./pages/HomePage";



function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path={path.homePage} element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

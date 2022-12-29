import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { path } from '../utils/constant'
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss'
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from 'react-toastify';

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import VerifyForm from "../components/sections/VerifyRegister/VerifyForm";
import AdminPage from "./admin/AdminPage";
import ProductManagement from "../components/admin/ProductManagement/ProductManagement";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="main-container">
      <Routes>
        <Route path={path.homePage} element={<HomePage />} />
        <Route path={path.login} element={<LoginPage />} />
        <Route path={path.register} element={<RegisterPage />} />






        <Route path={path.veryfyRegister} element={<VerifyForm />} />
        {/* admin */}
        <Route path={path.admin} >
          <Route path={'/admin'} element={<AdminPage />} />
          <Route path={'/admin/product'} element={<ProductManagement />} />
        </Route>
        {/* default */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
      <ScrollToTop smooth top='400' />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;

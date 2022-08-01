import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home.js';
import Login from './pages/LoginCadastro/Login.jsx'
import Cadastro from './pages/LoginCadastro/Cadastro.jsx';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/Entrar" element={<Login/>}/>
      <Route path="/Cadastrar" element={<Cadastro/>}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

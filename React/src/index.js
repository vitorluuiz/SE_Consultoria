import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import Home from './pages/Home/Home.js';
import Login from './pages/LoginCadastro/Login.js'
import Cadastro from './pages/LoginCadastro/Cadastro.js';
import CatalogoVenda from './pages/Catalogo/catalogo';
import ViewItem from './pages/viewItem/viewItem';
import CadastroImmo from './pages/CreatePost/immoPost.js';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:5000/api/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="Entrar" element={<Login />} />
      <Route path="Cadastrar" element={<Cadastro />} />
      <Route path="Catalogo/:idTipoAnuncio" element={<CatalogoVenda />} />
      <Route path="Info/:id" element={<ViewItem />} />
      <Route path="Cadastrar/Imovel" element={<CadastroImmo />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

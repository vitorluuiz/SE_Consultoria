import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import Home from './pages/home/home.js';
import Login from './pages/loginCadastro/login.js'
import Cadastro from './pages/loginCadastro/cadastro.js';
import CatalogoVenda from './pages/catalogo/catalogo';
import ViewItem from './pages/viewItem/viewItem';
import CadastroImmo from './pages/createPost/immoPost.js';
import AuditoriaPosts from './pages/administrativo/auditoriaPosts.js';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Assinalados from './pages/assinalados/assinalados.js';

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
        <Route path="Auditoria/Posts" element={<AuditoriaPosts />} />
        <Route path="Assinalados" element={<Assinalados />} />
      </Routes>
  </BrowserRouter>
);

reportWebVitals();

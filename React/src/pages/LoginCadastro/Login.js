import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

import Footer from '../../components/footer.js'
import MaskedInput from "../../assets/jsExtentions/MaskedInput/maskedInput.js";

import { getToken, setToken } from "../../services/authUser.js";
import { FormatCelular } from '../../services/formater.js';

import Logo from '../../assets/img/logos/brancaNegativa.png'

import '../../assets/css/login.css'

export default function Login() {

    const navigate = useNavigate();
    const [Celular, setCelular] = useState('');
    const [Senha, setSenha] = useState('');

    const EfetuarLogin = (event) => {
        event.preventDefault();

        axios.post('Login', {
            celular: FormatCelular(Celular),
            senha: Senha
        })
            .then(response => {
                if (response.status === 200) {
                    setToken(response.data);
                    navigate('/')
                }
            })
    }

    return (
        <div className="fundo_login column">

            <div className="bloco_login containerBox column alinhado">
                <img id="logo_login" src={Logo} alt='Logo da SE Consultoria de imóveis' />

                <form className="column alinhado">

                    <div className="inputs-apoio">
                        <div className="labed-input">
                            <label htmlFor="telefone">Telefone</label>
                            <MaskedInput className="masked_input" id="telefone" mask="(99) 99999-9999" placeholder="(DDD) 98765-4321" value={Celular} onChange={(e) => setCelular(e.target.value)} ></MaskedInput>
                        </div>

                        <div className="labed-input">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" value={Senha} onChange={(e) => setSenha(e.target.value)}></input>
                        </div>
                    </div>

                    <div className="button-box-login">
                        <Link to="/Cadastrar" className="pressionavel">Ainda não tenho conta</Link>
                        <button className="btnPressionavel btnLogin" onClick={EfetuarLogin}>Entre</button>
                    </div>


                </form>

            </div>

            <Footer />
        </div>
    );
}
import React, { useEffect, useState } from "react";
import Footer from '../../components/footer.js'
import { Link } from 'react-router-dom'
import '../../assets/css/loginCadastro.css'
import Logo from '../../assets/img/logos/brancaNegativa.png'
import MaskedInput from "../../assets/jsExtentions/MaskedInput/maskedInput.js";

export default function Login() {

    const [Telefone, setTelefone] = useState('');
    const [Senha, setSenha] = useState('');

    return (
        <div className="fundo_login column">

            <div className="bloco_login containerBox column alinhado">

                <img id="logo_login" src={Logo} alt='Logo da SE Consultoria de imóveis'/>

                <form id="login" className="column alinhado">

                    <div id="login" className="inputs_apoio">
                        <div id="login" className="input row">
                            <label for="telefone">Telefone</label>
                            <MaskedInput className="masked_input" id="telefone" mask="(99) 99999-9999" placeholder="(DDD) 98765-4321" value={Telefone} onChange={(e) => setTelefone(e.target.value)} ></MaskedInput>
                        </div>

                        <div id="login" className="input column">
                            <label for="senha">Senha</label>
                            <input type="password" id="senha" value={Senha} onChange={(e) => setSenha(e.target.value)}></input>
                        </div>
                    </div>

                    <Link to="/Cadastrar" className="pressionavel">Ainda não tenho conta</Link>
                    <button className="btnPressionavel btnLogin">Entre</button>

                </form>

            </div>

            <Footer />
        </div>
    );
}
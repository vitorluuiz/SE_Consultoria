import React from "react";
import Footer from '../../components/footer.js'
import { Link } from 'react-router-dom'
import '../../assets/css/loginCadastro.css'
import Logo from '../../assets/img/logos/brancaNegativa.png'
import MaskedInput from "../../assets/jsExtentions/MaskedInput/maskedInput.js";

export default function Login() {
    return (
        <div>
            <div className="fundoLogin column">

                <div className="bloco_Login__div containerBox column alinhado">
                    <img id="logo_Login" src={Logo} alt='Logo da SE Consultoria de Imóveis' />
                    <form className="form_Login column alinhado">
                        <div className="apoioForm_Login__div column">
                            <label for="telefone">Telefone</label>
                            <MaskedInput className="input_Form" name="tel" mask="(99) 99999-9999" id="telefone"></MaskedInput>
                        </div>

                        <div className="apoioForm_Login__div column">
                            <label for="senha">Senha</label>
                            <input className="input_Form" type="password" id="senha"></input>
                        </div>
                        <Link to="/Cadastrar" className="pressionavel">Ainda não tenho conta</Link>
                        <buttom id="btnEntrar__Login" className="btnPressionavel">Entre</buttom>
                    </form>
                </div>

            </div>
            <Footer />
        </div>
    );
}
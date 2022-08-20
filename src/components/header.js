import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/styles.css'
import '../assets/css/headerFooter.css'

import logo from '../assets/img/logos/pretaSimples.png'

export default function Header() {
    return (
        <header>
            <div className="apoioHeader__div container row alinhado espacado">
                <div className="infosLeft__div row alinhado espacado">
                    <Link to="/" id="logoPrincipal">
                        <img id="logoPrincipal" src={logo} alt="Logo da SE Consultoria de imóveis" />
                    </Link>
                    <div className="contato__div column espacado">
                        <span>Fale Conosco</span>
                        <span>11 962666205</span>
                    </div>
                </div>

                <nav className="infosCenter__nav row alinhado espacado">
                    <Link to='/Catalogo/Aluguel' className="pressionavel" >Locação</Link>
                    <hr className="linha_vertical" id="header" />
                    <Link to='/Catalogo/Venda' className="pressionavel">Venda</Link>
                </nav>

                <nav className="infosRight__nav row alinhado espacado">
                    <Link to='/Cadastrar' id="cadastrar" className="pressionavel">Cadastre-se</Link>
                    <Link to='/Entrar' id="botaoEntrar" className="btnPressionavel flex alinhado">Entre</Link>
                </nav>
            </div>
        </header>
    )
}
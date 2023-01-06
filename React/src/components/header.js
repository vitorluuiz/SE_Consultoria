import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/styles.css'
import '../assets/css/headerFooter.css'

import logo from '../assets/img/logos/pretaSimples.png'

export default function Header() {

    return (
        <header>
            <div id="home" className="apoioHeader container row alinhado espacado">
                <div className="infosLeft row alinhado espacado">
                    <Link to="/" id="logoPrincipal">
                        <img id="logoPrincipal" src={logo} alt="Logo da SE Consultoria de imóveis" />
                    </Link>
                </div>

                <nav className="infosCenter__nav row alinhado espacado">
                    <Link to='/Catalogo/2' id="aluguel" className="pressionavel" >Locação</Link>
                    <hr className="linha_vertical" id="header" />
                    <Link to='/Catalogo/1' className="pressionavel">Venda</Link>
                </nav>

                <nav className="infosRight__nav row alinhado espacado">
                    <Link to='/Entrar' id="botaoEntrar" className="btnPressionavel flex alinhado">Entre</Link>
                </nav>
            </div>
        </header>
    )
}
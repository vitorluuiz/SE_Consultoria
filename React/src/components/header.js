import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/styles.css'
import '../assets/css/headerFooter.css'

import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

import { getToken, deleteToken, getUserId } from "../services/authUser";

import logo from '../assets/img/logos/pretaSimples.png'
import { Badge } from "@mui/material";

export default function Header() {

    const [isLogado, setLogado] = useState(false);
    const [IdUsuario, setidUsuario] = useState(0);

    function GetUsuario() {
        setidUsuario(getUserId())

        if (getUserId() != undefined) {
            setLogado(true)
        }
    }

    useEffect(GetUsuario, [])

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

                {isLogado == false ?
                    <nav className="infosRight__nav row alinhado espacado">
                        <Link to='/Entrar' id="botaoEntrar" className="btnPressionavel flex alinhado">Entre</Link>
                    </nav>
                    : IdUsuario == 1 ?
                        <nav className="infosRight__nav row alinhado espacado">
                            <Link to='/Auditoria/Posts' id="botaoEntrar" className="btnPressionavel flex alinhado">
                                <Badge badgeContent={0} color="info">
                                    <SecurityOutlinedIcon />
                                </Badge>
                            </Link>
                            <Link onClick={() => {
                                deleteToken()
                            }} to='/Entrar' id="botaoEntrar" className="btnPressionavel flex alinhado">Sair</Link>
                        </nav>
                        : IdUsuario != 0 ?
                            <nav className="infosRight__nav row alinhado espacado">
                                <Link to="/Assinalados" id="botaoEntrar" className="btnPressionavel flex alinhado">
                                    <Badge badgeContent={0} color="info">
                                        <StarOutlineOutlinedIcon />
                                    </Badge>
                                </Link>
                                <Link onClick={() => {
                                    deleteToken()
                                }} to='/Entrar' id="botaoEntrar" className="btnPressionavel flex alinhado">Sair</Link>
                            </nav>
                            :
                            null
                }
            </div>
        </header>
    )
}
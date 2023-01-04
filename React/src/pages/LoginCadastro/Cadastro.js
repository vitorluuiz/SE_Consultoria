import React, { useState } from "react";
import axios from "axios";

import { FormatCelular, FormatDDD } from '../../services/formater.js';

import Footer from '../../components/footer.js'
import MaskedInput from '../../assets/jsExtentions/MaskedInput/maskedInput.js'

import '../../assets/css/login.css'
import { useNavigate } from "react-router-dom";

export default function Cadastro() {

    const navigate = useNavigate();
    const [Nome, setNome] = useState('');
    const [Celular, setCelular] = useState('');
    const [Senha, setSenha] = useState('');
    const [ContraSenha, setContraSenha] = useState('');

    function CadastrarUsuario(event) {
        event.preventDefault();

        if (Senha === ContraSenha && Nome != null && Celular != null) {
            axios.post('Usuarios', {
                nomeUsuario: Nome,
                ddd: FormatDDD(Celular),
                celular: FormatCelular(Celular),
                senha: Senha
            })
                .then(response => {
                    if (response.status === 201) {
                        navigate('/');
                    }
                    else {
                        window.alert('Não foi possível concluir o cadastro')
                    }
                })
        }
    }

    return (
        <div className="fundo_login column">

            <div className="bloco_login containerBox column alinhado">

                <form className="form_login column alinhado">

                    <div className="inputs-apoio" id="cadastro">
                        <div className="labed-input">
                            <label for="nome">Nome de usuário</label>
                            <input id="nome" value={Nome} onChange={(e) => setNome(e.target.value)}></input>
                        </div>

                        <div className="labed-input">
                            <label for="telefone">Telefone</label>
                            <MaskedInput mask="(99) 99999-9999" placeholder="(DDD) 98765-4321" id="telefone" value={Celular} onChange={(e) => setCelular(e.target.value)}></MaskedInput>
                        </div>

                        <div className="labed-input">
                            <label for="senha">Senha</label>
                            <input type="password" id="senha" value={Senha} onChange={(e) => setSenha(e.target.value)}></input>
                        </div>

                        <div className="labed-input">
                            <label for="contraSenha">Confirme a senha</label>
                            <input type="password" id="contraSenha" value={ContraSenha} onChange={(e) => setContraSenha(e.target.value)}></input>
                        </div>
                    </div>

                    <button className="btnPressionavel btnLogin" onClick={CadastrarUsuario}>Cadastro</button>
                </form>

            </div>

            <div className="boxInfo container column centrado" id="cadastro">
                <h2>Por que preciso realizar um cadastro?</h2>
                <p>Seu cadastro é opicional, e necessário apenas para assinalar interesse em determinados imóveis no qual tenha se interessado. Tendo assim, maior facilidade em analizar vários imóveis ao mesmo tempo, e futuramente escolher a oportunidade que mais se adequa ao seu perfil.
                    Seus dados serão estritamente utilizados a fim de diferenciar você dos outros usuários da rede, e não podem ser processados ou vendidos para terceiros. Além do sigilo e da privacidade no armazenamento dos dados sensíveis, seguindo as ordens vigentes da LGPD (Lei geral de proteção de dados).</p>
            </div>
            <Footer />
        </div>
    );
}
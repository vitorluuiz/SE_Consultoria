import React, { useEffect, useState } from "react";
import Footer from '../../components/footer.js'
import '../../assets/css/loginCadastro.css'
import MaskedInput from '../../assets/jsExtentions/MaskedInput/maskedInput.js'
import axios from 'axios';

export default function Cadastro() {

    const [Nome, setNome] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Senha, setSenha] = useState('');
    const [ContraSenha, setContraSenha] = useState('');

    return (
        <div className="fundo_login column">

            <div className="bloco_login containerBox column alinhado" id="cadastro">

                <form className="form_login column alinhado" id="cadastro">

                    <div className="inputs_apoio" id="cadastro">
                        <div className="input column" id="cadastro">
                            <label for="nome">Nome de usuário</label>
                            <input id="nome" value={Nome} onChange={(e) => setNome(e.target.value)}></input>
                        </div>

                        <div className="input column" id="cadastro">
                            <label for="telefone">Telefone</label>
                            <MaskedInput mask="(99) 99999-9999" placeholder="(DDD) 98765-4321" id="telefone" value={Telefone} onChange={(e) => setTelefone(e.target.value)}></MaskedInput>
                        </div>

                        <div className="input column" id="cadastro">
                            <label for="senha">Senha</label>
                            <input type="password" id="senha" value={Senha} onChange={(e) => setSenha(e.target.value)}></input>
                        </div>

                        <div className="input column" id="cadastro">
                            <label for="contraSenha">Confirme a senha</label>
                            <input type="password" id="contraSenha" value={ContraSenha} onChange={(e) => setContraSenha(e.target.value)}></input>
                        </div>

                    </div>

                    <buttom className="btnPressionavel btnLogin">Cadastro</buttom>
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
import React from "react";
import Footer from '../../components/footer.js'
import '../../assets/css/loginCadastro.css'
import MaskedInput from '../../assets/jsExtentions/MaskedInput/maskedInput.js'
export default function Cadastro() {
    return (
        <div>
            <div className="fundoLogin column">

                <div className="bloco_Login__div containerBox column alinhado">
                    <form className="form_Login column alinhado">
                        <div className="apoioForm_Login__div column">
                            <label for="telefone">Nome completo</label>
                            <input className="input_Form" id="telefone"></input>
                        </div>

                        <div className="apoioForm_Login__div column">
                            <label for="telefone">Telefone</label>
                            <MaskedInput className="input_Form" mask="(99) 99999-9999" id="telefone"></MaskedInput>
                        </div>

                        <div className="apoioForm_Login__div column">
                            <label for="telefone">Senha</label>
                            <input className="input_Form" type="password" id="telefone"></input>
                        </div>

                        <div className="apoioForm_Login__div column">
                            <label for="senha">Confirme a senha</label>
                            <input className="input_Form" type="password" id="senha"></input>
                        </div>
                        <buttom id="btnEntrar__Login" className="btnPressionavel">Cadastro</buttom>
                    </form>
                </div>

            </div>
            <Footer />
        </div>
    );
}
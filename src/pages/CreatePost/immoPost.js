import React from 'react'

import Footer from '../../components/footer.js'

import salaIcon from '../../assets/img/icones/chair.svg'
import cozinhaIcon from '../../assets/img/icones/cooking.svg'
import banheiroIcon from '../../assets/img/icones/shower.svg'
import quartoIcon from '../../assets/img/icones/bed.svg'
import garagemIcon from '../../assets/img/icones/garage.svg'
import adicionarIcon from '../../assets/img/icones/add.svg'
import adicionarBrancoIcon from '../../assets/img/icones/addWhite.svg'
import img from '../../assets/img/icones/image.svg'

import '../../assets/css/immo.css'

export default function CadastroImmo() {

    return (
        <div className='background_immo'>

            <div className='suport_immo container'>

                <section className='column'>
                    <h1 id='post-tittle'>Cadastrar Imóvel</h1>

                    <form className='form-post'>

                        <div className='inputBox labed-input'>
                            <label>Titulo da publicação</label>
                            <input></input>
                        </div>

                        <div className='double-input row espacado'>
                            <div className='inputBox labed-input'>
                                <label>Categoria da publicação</label>
                                <select>
                                    <option value='0'>Escolher</option>
                                </select>
                            </div>

                            <div className='inputBox labed-input'>
                                <label>Categoria da propriedade</label>
                                <select>
                                    <option value='0'>Escolher</option>
                                </select>
                            </div>
                        </div>

                        <div className='inputBox labed-input'>
                            <label>Bairro</label>
                            <select>
                                <option value='0' selected>Escolher</option>
                                <option value='1' >Carrão</option>
                            </select>
                        </div>

                        <div id='immo' className='double-input row espacado'>
                            <div className='inputBox labed-input'>
                                <label>Aluguel</label>
                                <input></input>
                            </div>
                            <div className='inputBox labed-input'>
                                <label>IPTU + Condomínio</label>
                                <input></input>
                            </div>
                        </div>

                        <div id='immo' className='double-input row espacado'>
                            <div className='inputBox labed-input'>
                                <label>Preço da venda</label>
                                <input></input>
                            </div>
                            <div className='inputBox labed-input'>
                                <label>Área contruida</label>
                                <input></input>
                            </div>
                        </div>

                    </form>

                </section>

                <section className='column espacado' id='immo'>

                    <div className='row background_immo_rooms espacado'>

                        <article className='immo_rooms column alinhado'>
                            <label>Quartos</label>
                            <input></input>
                        </article>

                        <article className='immo_rooms column alinhado'>
                            <label>Salas</label>
                            <input></input>
                        </article>

                        <article className='immo_rooms column alinhado'>
                            <label>Cozinhas</label>
                            <input></input>
                        </article>

                        <article className='immo_rooms column alinhado'>
                            <label>Banheiros</label>
                            <input></input>
                        </article>

                        <article className='immo_rooms column alinhado'>
                            <label>Garagem</label>
                            <input></input>
                        </article>

                        <article className='immo_rooms column alinhado'>
                            <label>Terreno</label>
                            <input></input>
                        </article>

                    </div>

                    <div id='img_immo_suport' className='row espacado alinhado'>
                        <div className='suport_img_immo'>
                            <label>Foto principal</label>
                            <div className='flex alinhado centrado background_img_immo'>
                                <img alt='Icone de adicionar imagem principal' id='icone_branco' src={adicionarBrancoIcon} />
                            </div>
                        </div>
                        <div className='addImg_immo'>
                            <img alt='Icone de adicionar mais imagens' src={adicionarIcon} />
                            <label>Mais fotos</label>
                        </div>

                    </div>

                    <button id='btnAprove' className='btnPressionavel'>Solicitar aprovação</button>



                </section>
            </div>

            <div className="boxInfo container column centrado" id="cadastro">
                <h2>Por que o meu imóvel precisa passar por aprovação?</h2>
                <p>Nós da SE Consultoria de Imóveis, prezamos pelo controle de qualidade das publicações no nosso site, a fim que possibilitar que os nossos usuários tenham maior segurança e credibilidade enquanto utilizam nosso sistema. Tudo para que você que está querendo vender ou alugar seu imóvel, consiga maior alcance na plataforma e maiores chances de sucesso na transação, tudo com o profissionalismo de uma empresa que já é atuante há mais de 10 anos no mercado. Nossa avaliação não irá demorar muito, relaxe e deixe seu trabalho conosco.</p>
            </div>

            <Footer />
        </div>
    )
}
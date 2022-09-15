import React from 'react'

import Footer from '../../components/footer.js'

import sala from '../../assets/img/icones/chair.svg'
import cozinha from '../../assets/img/icones/cooking.svg'
import banheiro from '../../assets/img/icones/shower.svg'
import quarto from '../../assets/img/icones/bed.svg'
import garagem from '../../assets/img/icones/garage.svg'
import adicionar from '../../assets/img/icones/add.svg'
import adicionarBranco from '../../assets/img/icones/addWhite.svg'
import imagem from '../../assets/img/icones/image.svg'

import '../../assets/css/immoScreen.css'

export default function CadastroImmo() {

    return (
        <div className='background_immo'>
            <div className='container row espacado alinhado suport_immo'>
                <section id='immo' className='column'>
                    <h1 id='immo'>Cadastrar Imóvel</h1>
                    <form id='immo'>
                        <div id='immo' className='input'>
                            <label>Titulo da publicação</label>
                            <input></input>
                        </div>
                        <div id='immo' className='input'>
                            <label>Categoria da publicação</label>
                            <input></input>
                        </div>
                        <div id='immo' className='input'>
                            <label>Categoria da propriedade</label>
                            <input></input>
                        </div>
                        <div id='immo' className='row espacado'>
                            <div className='input'>
                                <label>CEP (opicional)</label>
                                <input></input>
                            </div>
                            <div className='input'>
                                <label>Bairro</label>
                                <input></input>
                            </div>
                        </div>
                        <div id='immo' className='row espacado'>
                            <div className='input'>
                                <label>Aluguel</label>
                                <input></input>
                            </div>
                            <div className='input'>
                                <label>IPTU + Condomínio</label>
                                <input></input>
                            </div>
                        </div>
                        <div id='immo' className='row espacado'>
                            <div className='input'>
                                <label>Preço da venda</label>
                                <input></input>
                            </div>
                            <div className='input'>
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
                            <div className='row alinhado centrado'>
                                <img alt='Icone de uma cama' src={quarto} />
                                <input></input>
                            </div>
                        </article>

                        <article className='immo_rooms column alinhado'>
                            <label>Salas</label>
                            <div className='row alinhado centrado'>
                                <img alt='Icone de uma poltrona' src={sala} />
                                <input></input>
                            </div>
                        </article>
                        <article className='immo_rooms column alinhado'>
                            <label>Cozinhas</label>
                            <div className='row alinhado centrado'>
                                <img alt='icone de um forno' src={cozinha} />
                                <input></input>
                            </div>
                        </article>
                        <article className='immo_rooms column alinhado'>
                            <label>Banheiros</label>
                            <div className='row alinhado centrado'>
                                <img alt='Icone de um chuveiro' src={banheiro} />
                                <input></input>
                            </div>
                        </article>
                        <article className='immo_rooms column alinhado'>
                            <label>Garagem</label>
                            <div className='row alinhado centrado'>
                                <img alt='Icone de uma garagem' src={garagem} />
                                <input></input>
                            </div>
                        </article>
                        <article id='input_terreno' className='immo_rooms column alinhado'>
                            <label>Terreno</label>
                            <div className='row alinhado centrado'>
                                <input></input>
                            </div>
                        </article>
                    </div>

                    <div id='img_immo_suport' className='row espacado alinhado'>
                        <div className='suport_img_immo'>
                            <label>Foto principal</label>
                            <div className='flex alinhado centrado background_img_immo'>
                                <img alt='Icone de adicionar imagem principal' id='icone_branco' src={adicionarBranco} />
                            </div>
                        </div>
                        <div className='suport_img_immo'>
                            <label>Todas as fotos</label>
                            <div className='flex alinhado centrado background_img_immo'>
                                <img alt='Icone de ver imagens' id='icone_branco' src={imagem} />
                            </div>
                        </div>
                        <div className='addImg_immo'>
                            <img alt='Icone de adicionar mais imagens' src={adicionar} />
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
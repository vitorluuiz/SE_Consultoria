import {
    useState,
    useEffect,
    React
} from 'react';

import { Link } from 'react-router-dom'

import '../../assets/css/viewItem.css'
import '../../assets/css/catalogo.css'

import sala from '../../assets/img/icones/chair.svg'
import banheiro from '../../assets/img/icones/shower.svg'
import quarto from '../../assets/img/icones/bed.svg'
import garagem from '../../assets/img/icones/garage.svg'

import Header from '../../components/header'
import Footer from '../../components/footer'

export default function ViewItem() {
    return (
        <div className='body_page'>
            <Header />

            <div className='apoio_banner_img'>
                <img src={'https://richtergruppe.com.br/wp-content/uploads/312484-como-escolher-o-momento-certo-para-vender-um-terreno-ou-imovel.jpg'} />
            </div>

            <section className="column info_imovel">
                <h1 id='view_item'>Vende-se casa com 4 Suites no Morumbi próximo ao Metrô</h1>

                <div className='row desc_suport'>
                    {/* Esquerda */}
                    <div className='row apoio_articles'>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Quartos</span>
                            <div className='row alinhado centrado bloco_icone'>
                                <img src={quarto} />
                                <span>2</span>
                            </div>
                        </article>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Sala</span>
                            <div className='row alinhado centrado bloco_icone'>
                                <img src={sala} />
                                <span>1</span>
                            </div>
                        </article>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Banheiros</span>
                            <div className='row alinhado centrado bloco_icone'>
                                <img src={banheiro} />
                                <span>1</span>
                            </div>
                        </article>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Garagem</span>
                            <div className='row alinhado centrado bloco_icone'>
                                <img src={garagem} />
                                <span>1</span>
                            </div>
                        </article>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Terreno</span>
                            <div className='row alinhado centrado bloco_icone'>
                                <span>120m²</span>
                            </div>
                        </article>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Área total</span>
                            <div className='row alinhado centrado bloco_icone'>
                                <span>200m²</span>
                            </div>
                        </article>

                    </div>

                    {/* Direita */}

                    <div className='column right_side'>
                        <span className='suport_span'>11 962666205 e 11 947454331</span>
                        <div id="valor_botao" className='column'>
                            <span id='valor'>A partir de R$1.300.000,00</span>
                            <button id='assinalar' className='btnPressionavel flex alinhado centrado'>assinalar interesse</button>
                        </div>
                        <span className='suport_span'>Morumbi, São Paulo</span>
                    </div>

                </div>

            </section>

            <h2 className='container' id='titulo_lista'>Mais imóveis em Morombi</h2>
            <section className="apoio_conteudo_catalogo container row">

                <article className="item_conteudo">
                    {/* Imagem */}
                    <div>
                        <img className="item_img" src='https://richtergruppe.com.br/wp-content/uploads/312484-como-escolher-o-momento-certo-para-vender-um-terreno-ou-imovel.jpg' />
                    </div>

                    {/* Informacoes */}
                    <div className="item_infos">
                        <h2 id="catalogo" >Vende-se casa com 3 suites no Morumbi próximo ao metrô</h2>
                        <div className="row apoio_infos">

                            {/* Esquerda */}
                            <div className="column infos_left">
                                <div className="row descricao_imovel">
                                    <div id="catalogo" className="column">
                                        <span>1 Dormitório</span>
                                        <span>1 Cozinha</span>
                                        <span>1 Banheiro</span>
                                    </div>

                                    <div id="span_right" className="column">
                                        <span>200m² de terreno</span>
                                        <span>110m² construídos</span>
                                        <span>2 Vagas de garagem</span>
                                    </div>
                                </div>
                                <span id="localizacao" className='span_preto'>Morumbi, São Paulo</span>
                            </div>

                            {/* Direita */}
                            <div className="column infos_right">
                                <span id="valor_catalogo" className='span_preto'>R$1.300.000,00 A vista</span>
                                <div id="botao_vermais" >
                                    <Link className="btnPressionavel row alinhado" to='/info'>Ver mais</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </article>

            </section>


            <Footer />
        </div>
    )
}
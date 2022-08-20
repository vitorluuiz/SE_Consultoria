import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import Filtro from "../../components/filtroCatalogo.js";
import '../../assets/css/catalogo.css'

export default function CatalogoVenda() {

    return (
        <div>
            <Header />
            <Filtro />
            <main id="catalogo">

                <section className="apoio_conteudo_catalogo container row">

                        <article className="item_conteudo">
                            {/* Imagem */}
                            <div>
                                <img className="item_img" src='https://www.casanovavrb.com.br/wp-content/uploads/2019/08/20190726_133414.jpg' />
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
                                        <span id="localizacao">Morumbi, São Paulo</span>
                                    </div>

                                    {/* Direita */}
                                    <div className="column infos_right">
                                        <span id="valor_catalogo">R$1.300.000,00 A vista</span>
                                        <div id="botao_vermais" >
                                            <Link className="btnPressionavel row alinhado" to='/info'>Ver mais</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </article>
                        {/* Segundo bloco */}
                        <article className="item_conteudo">
                            {/* Imagem */}
                            <div>
                                <img className="item_img" src='https://www.casanovavrb.com.br/wp-content/uploads/2019/08/20190726_133414.jpg' />
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
                                        <span id="localizacao">Morumbi, São Paulo</span>
                                    </div>

                                    {/* Direita */}
                                    <div className="column infos_right">
                                        <span id="valor_catalogo">R$1.300.000,00 A vista</span>
                                        <div id="botao_vermais" >
                                            <Link className="btnPressionavel row alinhado" to='/'>Ver mais</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </article>
                        <article className="item_conteudo">
                            {/* Imagem */}
                            <div>
                                <img className="item_img" src='https://www.casanovavrb.com.br/wp-content/uploads/2019/08/20190726_133414.jpg' />
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
                                        <span id="localizacao">Morumbi, São Paulo</span>
                                    </div>

                                    {/* Direita */}
                                    <div className="column infos_right">
                                        <span id="valor_catalogo">R$1.300.000,00 A vista</span>
                                        <div id="botao_vermais" >
                                            <Link className="btnPressionavel row alinhado" to='/'>Ver mais</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </article>


                </section>

            </main>
            <Footer />
        </div>
    );
}
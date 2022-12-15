import React from "react";
import { Link } from "react-router-dom";

import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import Filtro from "../../components/filtroCatalogo.js";

import Quartos from '../../assets/img/icones/bed-room.png'
import Salas from '../../assets/img/icones/chair.png'
import Cozinhas from '../../assets/img/icones/cook.png'
import Banheiros from '../../assets/img/icones/shower.png'

import '../../assets/css/catalog.css'

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
                            <img className="item_img" alt='foto principal do imóvel' src='https://richtergruppe.com.br/wp-content/uploads/312484-como-escolher-o-momento-certo-para-vender-um-terreno-ou-imovel.jpg' />
                        </div>

                        {/* Informacoes */}
                        <div className="item_infos">
                            <h2 id="catalogo" >Vende-se casa com 3 suites no Morumbi próximo ao metrô</h2>
                            <div className="row apoio_infos">

                                {/* Esquerda */}
                                <div className="column infos_left">
                                    <div className="row descricao_imovel">

                                        <div className="labed-img">
                                            <label>Quartos</label>
                                            <div className="block-img">
                                                <img src={Quartos} />
                                                <span>1</span>
                                            </div>
                                        </div>

                                        <div className="labed-img">
                                            <label>Salas</label>
                                            <div className="block-img">
                                                <img src={Salas} />
                                                <span>1</span>
                                            </div>
                                        </div>

                                        <div className="labed-img">
                                            <label>Cozinhas</label>
                                            <div className="block-img">
                                                <img src={Cozinhas} />
                                                <span>1</span>
                                            </div>
                                        </div>

                                        <div className="labed-img">
                                            <label>Banheiros</label>
                                            <div className="block-img">
                                                <img src={Banheiros} />
                                                <span>1</span>
                                            </div>
                                        </div>

                                    </div>
                                    <span id="localizacao">Morumbi, São Paulo</span>
                                </div>

                                {/* Direita */}
                                <div className="column infos_right">
                                    <span id="valor_catalogo">R$1.300.000 A vista</span>
                                    <div id="botao_vermais" >
                                        <Link className="btnPressionavel row alinhado" to='/info'>Ver mais</Link>
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
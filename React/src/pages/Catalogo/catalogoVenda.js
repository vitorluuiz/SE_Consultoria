import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import Filtro from "../../components/filtroCatalogo.js";

import Quartos from '../../assets/img/icones/bed-room.png'
import Salas from '../../assets/img/icones/chair.png'
import Cozinhas from '../../assets/img/icones/cook.png'
import Banheiros from '../../assets/img/icones/shower.png'

import '../../assets/css/catalog.css'

export default function CatalogoVenda() {

    const navigate = useNavigate();
    const [ImovelList, setImovelList] = useState([])

    function BuscarImoveis() {
        axios.get('Imovel')
            .then(response => {
                if (response.status === 200) {
                    setImovelList(response.data)
                }
            });
    }

    function DeletarImovel(click) {
        axios.delete('Imovel/' + click.target.id)
            .then(response => {
                if (response.status === 204) {
                    window.location.reload()
                }
            });
    }

    useEffect(BuscarImoveis, [])

    return (
        <div>
            <Header />
            <Filtro />

            <main id="catalogo">

                <section className="apoio_conteudo_catalogo container row">

                    {ImovelList.map((imovel => {
                        return (
                            <article key={imovel.idImovel} className="item_conteudo">
                                {/* Imagem */}
                                <div>
                                    <img id={imovel.idImovel} onClick={DeletarImovel} className="item_img" alt='foto principal do imóvel' src='https://s2.glbimg.com/1M6NNB5hCbd0qGOEbCzyG9_nzzE=/smart/e.glbimg.com/og/ed/f/original/2021/08/04/apartamento-47-m-decoracao-pratica_6.jpg' />
                                </div>
                                {/* Informacoes */}
                                <div className="item_infos">
                                    <h2 id="catalogo" >{imovel.titulo}</h2>

                                    <div className="row apoio_infos">
                                        {/* Esquerda */}
                                        <div className="column infos_left">

                                            <div className="row descricao_imovel">
                                                {imovel.informacoesAdicionais.map((info) => {
                                                    return (
                                                        info.idTipoInfo === 1 ?
                                                            <div key={info.idTipoInfo} className="labed-img">
                                                                <label>Quartos</label>
                                                                <div className="block-img">
                                                                    <img alt="Icone de uma cama" src={Quartos} />
                                                                    <span>{info.quantidade}</span>
                                                                </div>
                                                            </div>
                                                            : info.idTipoInfo === 2 ?
                                                                <div key={info.idTipoInfo} className="labed-img">
                                                                    <label>Salas</label>
                                                                    <div className="block-img">
                                                                        <img alt="Icone de um sofá" src={Salas} />
                                                                        <span>{info.quantidade}</span>
                                                                    </div>
                                                                </div>
                                                                : info.idTipoInfo === 3 ?
                                                                    <div key={info.idTipoInfo} className="labed-img">
                                                                        <label>Cozinhas</label>
                                                                        <div className="block-img">
                                                                            <img alt="Icone de um forno de cozinha" src={Cozinhas} />
                                                                            <span>{info.quantidade}</span>
                                                                        </div>
                                                                    </div>
                                                                    : info.idTipoInfo === 4 ?
                                                                        <div key={info.idTipoInfo} className="labed-img">
                                                                            <label>Banheiros</label>
                                                                            <div className="block-img">
                                                                                <img alt="Icone de um chuveiro" src={Banheiros} />
                                                                                <span>{info.quantidade}</span>
                                                                            </div>
                                                                        </div>
                                                                        : <div key={info.idTipoInfo} className="labed-img">
                                                                            <label>Garagem</label>
                                                                            <div className="block-img">
                                                                                <img alt="Icone de um chuveiro" src={Banheiros} />
                                                                                <span>{info.quantidade}</span>
                                                                            </div>
                                                                        </div>
                                                    )
                                                })}

                                                <div className="labed-img">
                                                    <label>Terreno</label>
                                                    <div className="block-img">
                                                        <span>{imovel.terreno}m²</span>
                                                    </div>
                                                </div>

                                                <div className="labed-img">
                                                    <label>Construído</label>
                                                    <div className="block-img">
                                                        <span>{imovel.construido}m²</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <span id="local">{imovel.bairro}</span>
                                        </div>

                                        {/* Direita */}
                                        <div className="column infos_right">
                                            <span id="valor_catalogo">{imovel.valor?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                            <div id="botao_vermais" >
                                                <Link className="btnPressionavel row alinhado" to='/Info'>Ver mais</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    }))}

                </section>
            </main>
            <Footer />
        </div>
    );
}
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { imgRoot } from "../../services/api.js";
import reducer from "../../services/reducer.js";

import { getUserId } from "../../services/authUser.js";

import Filtro from "../../components/filtroCatalogo.js";
import Footer from '../../components/footer.js';
import Header from '../../components/header.js';

import Quartos from '../../assets/img/icones/bed-room.png';
import Salas from '../../assets/img/icones/chair.png';
import Cozinhas from '../../assets/img/icones/cook.png';
import Garagem from '../../assets/img/icones/garage.png';
import Endereco from '../../assets/img/icones/local.png';
import Banheiros from '../../assets/img/icones/shower.png';

import '../../assets/css/catalog.css';

export default function CatalogoVenda({ main, auditoria, idException, bairro, assinalados }) {

    const updateStage = {
        count: 0
    }

    const [updates, dispatch] = useReducer(reducer, updateStage);

    const Bairro = bairro;
    const [ImovelList, setImovelList] = useState([])
    const [IdUsuario, setidUsuario] = useState(0)

    async function BuscarImoveis() {
        if (auditoria === true) {
            await axios.get('Imovel/ListarPorAprovacao/3')
                .then(response => {
                    if (response.status === 200) {
                        setImovelList(response.data)
                    }
                });
        }
        else if (main === false) {
            await axios.get('Imovel/ListarPorBairro/' + Bairro + '/' + idException)
                .then(response => {
                    if (response.status === 200) {
                        setImovelList(response.data)
                    }
                });
        }
        else if (assinalados === true) {
            setImovelList(JSON.parse(localStorage.getItem('assinalados')))
        }
        else {
            setImovelList(JSON.parse(localStorage.getItem('immo-list')))
        }
    }

    const AlterarAprovacao = (idAprovacao, idImovel) => {
        axios.patch('Imovel/AlterarAprovacao/' + idAprovacao + '/' + idImovel)
            .then(response => {
                if (response.status === 200) {
                    window.location.reload()
                }
            });
    }

    function AprovarImovel(click) {
        AlterarAprovacao(1, click.target.id)
    }

    function NegarImovel(click) {
        AlterarAprovacao(2, click.target.id)
    }

    function RevisarImovel(click) {
        AlterarAprovacao(3, click.target.id)
    }

    function DeletarImovel(click) {
        axios.delete('Imovel/' + click.target.id)
            .then(response => {
                if (response.status === 204) {
                    window.location.reload()
                }
            });
    }

    useEffect(() => {
        setidUsuario(getUserId())
        BuscarImoveis()
    }, [Bairro, updates.count])

    return (
        <div>
            {main !== false ?
                <div>
                    <Header />
                    {
                        assinalados === true ?
                            null
                            :
                            <Filtro dispatch={dispatch} />
                    }
                </div>
                :
                null
            }

            <main id="catalogo">
                {
                    ImovelList.length !== 0 ?
                        <section className="apoio_conteudo_catalogo container row">
                            {ImovelList.map((imovel => {
                                return (
                                    <article key={imovel.idImovel} className="item_conteudo">
                                        {/* Imagem */}
                                        <div>
                                            <img id={imovel.idImovel} className="item_img" alt='foto principal do imóvel' src={imgRoot + '/' + imovel.imgPrincipal} />
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
                                                                                    <label>Vagas</label>
                                                                                    <div className="block-img">
                                                                                        <img alt="Icone de uma vaga de garagem" src={Garagem} />
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

                                                    <div className='row alinhado'>
                                                        <img alt='Icone de local' src={Endereco}></img>
                                                        <span id='local'>{imovel.bairro}</span>
                                                    </div>
                                                </div>
                                                {/* Direita */}
                                                <div className="column infos_right">
                                                    {imovel.aluguel !== undefined && imovel.valor !== undefined ?
                                                        <div className="suport_valor">
                                                            <span style={{ textAlign: 'end' }} >Aluguel <span id="valor_catalogo">{imovel.aluguel?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}  </span></span>
                                                            <span >Valor {imovel.valor?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                                        </div>
                                                        : imovel.valor === undefined ?
                                                            <span id="valor_catalogo">{imovel.aluguel?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                                            :
                                                            <span id="valor_catalogo">{imovel.valor?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                                    }
                                                    {auditoria === true && main === false ?
                                                        <div style={{ width: '100%' }}>
                                                            <div style={{ margin: '6px 0' }} id="botao_vermais" >
                                                                <button id={imovel.idImovel} onClick={DeletarImovel} className="btnPressionavel row alinhado">Deletar</button>
                                                            </div>
                                                            <div style={{ margin: '6px 0' }} id="botao_vermais" >
                                                                <button id={imovel.idImovel} onClick={AprovarImovel} className="btnPressionavel row alinhado">Aprovar</button>
                                                            </div>
                                                        </div>
                                                        : main === undefined && IdUsuario === 1 ?
                                                            <div style={{ width: '100%', margin: '6px 0' }}>
                                                                <button id={imovel.idImovel} style={{ width: '100%', margin: '2px 0' }} className="btnPressionavel row alinhado" onClick={RevisarImovel}>Revisar</button>
                                                            </div>
                                                            :
                                                            null
                                                    }
                                                    <div id="botao_vermais" >
                                                        <Link className="btnPressionavel row alinhado" to={{ pathname: '/Info/' + imovel.idImovel }} onClick={() => {
                                                            window.location.replace();
                                                        }}>Ver mais
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                )
                            }))}

                        </section>
                        :
                        <section>
                            <h2 id="empty-list">Não foi possível encontrar imóveis com os filtros aplicados</h2>
                        </section>
                }

            </main>
            {
                main !== false ?
                    <Footer />
                    :
                    null
            }
        </div>
    );
}
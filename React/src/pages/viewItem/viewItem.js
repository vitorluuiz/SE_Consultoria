import {
    React, useEffect, useState
} from 'react';

import axios from 'axios'

import { Link } from 'react-router-dom'

import Header from '../../components/header'
import Footer from '../../components/footer'

import '../../assets/css/immo.css'
import '../../assets/css/catalog.css'

import Quartos from '../../assets/img/icones/bed-room.png'
import Salas from '../../assets/img/icones/chair.png'
import Cozinhas from '../../assets/img/icones/cook.png'
import Banheiros from '../../assets/img/icones/shower.png'

export default function ViewItem() {

    const [Imovel, setImovelInfos] = useState([]);
    const [ImovelList, setImovelList] = useState([])

    function BuscarImoveis() {
        axios.get('Imovel')
            .then(response => {
                if (response.status === 200) {
                    setImovelList(response.data);
                }
            });

        axios.get('Imovel/ListarPorId/54')
            .then(response => {
                if (response.status === 200) {
                    setImovelInfos(response.data)
                }
            })
    }

    var info1 = {
        idTipoInfo: 1,
        quantidade: 1
    }

    useEffect(BuscarImoveis, [])
    return (
        <div className='body_page'>
            <Header />

            <div className='apoio_banner'>
                <img alt='foto principal do imóvel' src={'https://s2.glbimg.com/1M6NNB5hCbd0qGOEbCzyG9_nzzE=/smart/e.glbimg.com/og/ed/f/original/2021/08/04/apartamento-47-m-decoracao-pratica_6.jpg'} />
            </div>

            <section className='column desc-suport'>
                <h1 className='titulo-immo'>{Imovel.titulo}</h1>

                <div className='row info-cards'>
                    <div className='left-info-card'>
                        <div className="row descricao_imovel">
                            {Imovel.informacoesAdicionais.map((info) => {
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
                                                    :
                                                    <div key={info.idTipoInfo} className="labed-img">
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
                                    <span>{Imovel.terreno}m²</span>
                                </div>
                            </div>

                            <div className="labed-img">
                                <label>Construído</label>
                                <div className="block-img">
                                    <span>{Imovel.construido}m²</span>
                                </div>
                            </div>
                        </div>
                        <p className='desc-immo'>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>
                        <span id='local'>{Imovel.bairro}</span>
                    </div>

                    <div className='right-info-card'>
                        <button>Assinalar interesse</button>
                    </div>
                </div>
            </section >














            <h2 className='container' id='titulo_lista'>Mais imóveis em {Imovel.bairro}</h2>
            <main id="catalogo">

                <section className="apoio_conteudo_catalogo container row">

                    {ImovelList.map((imovel => {
                        return (
                            <article key={imovel.idImovel} className="item_conteudo">
                                {/* Imagem */}
                                <div>
                                    <img id={imovel.idImovel} className="item_img" alt='foto principal do imóvel' src='https://s2.glbimg.com/1M6NNB5hCbd0qGOEbCzyG9_nzzE=/smart/e.glbimg.com/og/ed/f/original/2021/08/04/apartamento-47-m-decoracao-pratica_6.jpg' />
                                </div>
                                {/* Informacoes */}
                                <div className="item_infos">
                                    <h2 id="catalogo" >{imovel.titulo}</h2>

                                    <div className="row apoio_infos">
                                        {/* Esquerda */}
                                        <div className="column infos_left">

                                            <div className="row descricao_imovel">
                                                {imovel.informacoesAdicionais.map((info => {
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
                                                                        :
                                                                        <div key={info.idTipoInfo} className="labed-img">
                                                                            <label>Garagem</label>
                                                                            <div className="block-img">
                                                                                <img alt="Icone de um chuveiro" src={Banheiros} />
                                                                                <span>{info.quantidade}</span>
                                                                            </div>
                                                                        </div>
                                                    )
                                                }))}

                                                <div key={imovel.idImovel} className="labed-img">
                                                    <label>Terreno</label>
                                                    <div className="block-img">
                                                        <span>{imovel.terreno}m²</span>
                                                    </div>
                                                </div>

                                                <div key={imovel.idImovel} className="labed-img">
                                                    <label>Construído</label>
                                                    <div className="block-img">
                                                        <span>{imovel.construido}m²</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <span id="localizacao">{imovel.bairro}</span>
                                        </div>

                                        {/* Direita */}
                                        <div className="column infos_right">
                                            <span id="valor_catalogo">{imovel.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                                            <div id="botao_vermais" >
                                                <Link className="btnPressionavel row alinhado" to='/info'>Ver mais</Link>
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
        </div >
    )
}
import {
    React, useEffect, useState, useRef
} from 'react';
import { imgRoot } from '../../services/api';

import axios from 'axios'
import { motion } from 'framer-motion'

import { useNavigate, useParams } from 'react-router-dom'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Catalogo from '../Catalogo/catalogo'

import '../../assets/css/immo.css'
import '../../assets/css/catalog.css'

import Quartos from '../../assets/img/icones/bed-room.png'
import Salas from '../../assets/img/icones/chair.png'
import Cozinhas from '../../assets/img/icones/cook.png'
import Banheiros from '../../assets/img/icones/shower.png'
import Garagens from '../../assets/img/icones/garage.png'
import Endereco from '../../assets/img/icones/local.png'

import whatsappIcon from '../../assets/img/logos/whatsapp_logo.png'

export default function ViewItem() {

    const carousel = useRef()
    const [width, setWidth] = useState(Number)

    const { id } = useParams();
    const [Imovel, setImovelInfos] = useState([]);
    const [ImgsImovel, setImgsImovel] = useState([]);
    const [ExtraInfos, setExtraInfos] = useState([]);
    const [hasError, setError] = useState(false);
    const [hasPulled, setPulled] = useState(false);

    async function BuscarImoveis() {

        await axios.get('Img/' + id)
            .then(response => {
                if (response.status === 200) {
                    setImgsImovel(response.data)
                }
            })

        await axios.get('Imovel/ListarPorId/' + id)
            .then(response => {
                if (response.status === 200) {
                    setImovelInfos(response.data)
                    setExtraInfos(response.data.informacoesAdicionais)
                }
            })

        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        console.log(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }

    useEffect(() => {
        BuscarImoveis()
    }, [])

    return (
        <div className='body_page'>
            <Header />
            <div className='suport-banner'>
                <motion.div ref={carousel} className='apoio-banner' whileTap={{ cursor: "grabbing" }}>
                    <motion.div
                        className='inner-banner'
                        drag='x'
                        dragConstraints={{ right: 0, left: -width }}
                    >
                        <motion.div className='unique-img'>
                            <img alt='foto principal do imóvel' src={imgRoot + '/' + Imovel.imgPrincipal} />
                        </motion.div>

                        {ImgsImovel.map(image => (
                            <motion.div key={image} className='unique-img'>
                                <img alt='foto principal do imóvel' src={imgRoot + '/' + image} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <section className='column desc-suport'>
                <h1 className='titulo-immo'>{Imovel.titulo}</h1>

                <div className='row info-cards'>
                    <div className='left-info-card'>
                        <div className="row descricao_imovel">
                            {ExtraInfos.map((info) => {
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
                                                        <label>Vagas</label>
                                                        <div className="block-img">
                                                            <img alt="Icone de um chuveiro" src={Garagens} />
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
                            {/* Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                            The standard chunk of Lorem  Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. */}
                        </p>

                        <div className='row alinhado'>
                            <img alt='Icone de local' src={Endereco}></img>
                            <span id='local'>{Imovel.bairro}</span>
                        </div>
                    </div>

                    <div className='column right-info-card'>
                        <div id='viewImmo' className="suport_social_info row centrado">
                            <div onClick={() => {
                                window.location.href = 'http://wa.me/5511962666205'
                            }} className="social_info hover_cinza">
                                <img alt='icone do whatsapp' src={whatsappIcon} />
                                <span>11 96266-6205</span>
                            </div>

                            <div onClick={() => {
                                window.location.href = 'http://wa.me/5511962666205'
                            }} className="social_info hover_cinza">
                                <img alt='icone do whatsapp' src={whatsappIcon} />
                                <span>11 96266-6205</span>
                            </div>
                        </div>

                        <span id='price'>Valor de venda {Imovel.valor?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        <button id='assign-btn' className='btnPressionavel'>Assinalar interesse</button>
                    </div>
                </div>
            </section >
            <h2 className='container' id='titulo_lista'>Mais imóveis em {Imovel.bairro}</h2>
            {Imovel.bairro !== undefined ?
                <Catalogo main={false} idException={id} bairro={Imovel?.bairro} />
                :
                null
            }
            <Footer />
        </div >
    )
}
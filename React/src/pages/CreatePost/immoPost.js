import React, { useEffect, useState } from 'react'

import Footer from '../../components/footer.js'

import adicionarIcon from '../../assets/img/icones/add.svg'
import adicionarBrancoIcon from '../../assets/img/icones/addWhite.svg'

import '../../assets/css/immo.css'
import axios from 'axios'

export default function CadastroImmo() {

    const [Titulo, setTitulo] = useState('')
    const [TipoAnuncio, setTipoAnuncio] = useState('')
    const [CategoriaPropriedade, setCategoriaPropriedade] = useState('')
    const [Bairro, setBairro] = useState('')
    const [Aluguel, setAluguel] = useState('')
    const [Valor, setValor] = useState('')
    const [Custos, setCustos] = useState('')
    const [AreaConstruida, setAreaConstruida] = useState('')
    const [Terreno, setTerreno] = useState('')

    const [Quartos, setQuartos] = useState('')
    const [Salas, setSalas] = useState('')
    const [Cozinhas, setCozinhas] = useState('')
    const [Banheiros, setBanheiros] = useState('')
    const [Garagem, setGaragem] = useState('')

    const [ListTipoAnuncio, setListTipoAnuncios] = useState([])
    const [ListCategorias, setListCategorias] = useState([])
    const [ListBairros, setListBairros] = useState([])
    const [hasPulledSelects, setPulled] = useState(false)

    function PullSelects() {
        if (!hasPulledSelects) {
            axios.get('Categorias')
                .then(response => {
                    if (response.status === 200) {
                        setListCategorias(response.data)
                    }
                })

            axios.get('TiposAnuncio')
                .then(response => {
                    if (response.status === 200) {
                        setListTipoAnuncios(response.data)
                    }
                })

            axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos')
                .then(response => {
                    if (response.status) {
                        setListBairros(response.data)
                    }
                }
                )
            setPulled();
        }
    }

    function Sugerir() {
        axios.post('Imovel/SugerirImovel', {
            idTipoAnuncio: TipoAnuncio,
            idCategoria: CategoriaPropriedade,
            // imgPrincipal:
            titulo: Titulo,
            // descricao:
            bairro: Bairro,
            aluguel: Aluguel,
            valor: Valor,
            custosMensais: Custos,
            construido: AreaConstruida,
            terreno: Terreno
        }).then(response => {
            if (response.status === 201) {
                window.alert("Sucesso");
            }

            var stringJson = JSON.stringify(
                [{
                    idTipoInfo: '1',
                    quantidade: Quartos
                },
                {
                    idTipoInfo: '2',
                    quantidade: Salas
                },
                {
                    idTipoInfo: '3',
                    quantidade: Cozinhas
                },
                {
                    idTipoInfo: '4',
                    quantidade: Banheiros
                }
                ]
            )

            axios.post('InformacoesAdicionais/Multiplas/' + response.data.idImovel, {
                json: stringJson
            })
        })
    }

    useEffect(PullSelects, [])

    return (
        <div className='background_immo'>

            <div className='suport_immo container'>

                <section className='column'>
                    <h1 id='post-tittle'>Cadastrar Imóvel</h1>

                    <form className='form-post'>

                        <div className='inputBox labed-input'>
                            <label>Titulo da publicação</label>
                            <input value={Titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                        </div>

                        <div className='double-input row espacado'>
                            <div className='inputBox labed-input'>
                                <label>Categoria da publicação</label>
                                <select value={TipoAnuncio} onChange={(e) => setTipoAnuncio(e.target.value)}>
                                    <option key='0' defaultValue='0'>Escolher</option>
                                    {ListTipoAnuncio.map((tipoAnuncio => {
                                        return (
                                            <option key={tipoAnuncio.idTipoAnuncio} value={tipoAnuncio.idTipoAnuncio}>{tipoAnuncio.tipoAnuncio}</option>
                                        )
                                    }))}
                                </select>
                            </div>

                            <div className='inputBox labed-input'>
                                <label>Categoria da propriedade</label>
                                <select value={CategoriaPropriedade} onChange={(e) => setCategoriaPropriedade(e.target.value)}>
                                    <option defaultValue='0'>Escolher</option>
                                    {ListCategorias.map((categoria => {
                                        return (
                                            <option key={categoria.idCategoria} value={categoria.idCategoria}>{categoria.categoria1}</option>
                                        )
                                    }))}
                                </select>
                            </div>
                        </div>

                        <div className='inputBox labed-input'>
                            <label>Bairro</label>
                            <select value={Bairro} onChange={(e) => setBairro(e.target.value)}>
                                <option defaultValue='0'>Escolher</option>
                                {ListBairros.map((bairro => {
                                    return (
                                        <option key={bairro.id} value={bairro.nome}>{bairro.nome}</option>
                                    )
                                }))}
                            </select>
                        </div>

                        <div id='immo' className='double-input row espacado'>
                            <div className='inputBox labed-input'>
                                <label>Aluguel</label>
                                <input value={Aluguel} onChange={(e) => setAluguel(e.target.value)}></input>
                            </div>
                            <div className='inputBox labed-input'>
                                <label>IPTU + Condomínio</label>
                                <input value={Custos} onChange={(e) => setCustos(e.target.value)}></input>
                            </div>
                        </div>

                        <div id='immo' className='double-input row espacado'>
                            <div className='inputBox labed-input'>
                                <label>Preço da venda</label>
                                <input value={Valor} onChange={(e) => setValor(e.target.value)}></input>
                            </div>
                            <div className='inputBox labed-input'>
                                <label>Área contruida</label>
                                <input value={AreaConstruida} onChange={(e) => setAreaConstruida(e.target.value)}></input>
                            </div>
                        </div>

                    </form>

                </section>

                <section className='column espacado' id='immo'>

                    <div className='row background_immo_rooms espacado'>

                        <article className='immo_rooms column alinhado'>
                            <label>Quartos</label>
                            <input value={Quartos} onChange={(e) => setQuartos(e.target.value)}></input>
                        </article>

                        <article className='immo_rooms column alinhado'>
                            <label>Salas</label>
                            <input value={Salas} onChange={(e) => setSalas(e.target.value)}></input>
                        </article>

                        <article className='immo_rooms column alinhado'>
                            <label>Cozinhas</label>
                            <input value={Cozinhas} onChange={(e) => setCozinhas(e.target.value)}></input>
                        </article>

                        <article className='immo_rooms column alinhado'>
                            <label>Banheiros</label>
                            <input value={Banheiros} onChange={(e) => setBanheiros(e.target.value)}></input>
                        </article>

                        <article className='immo_rooms column alinhado'>
                            <label>Garagem</label>
                            <input value={Garagem} onChange={(e) => setGaragem(e.target.value)}></input>
                        </article>

                        <article className='immo_rooms column alinhado'>
                            <label>Terreno</label>
                            <input value={Terreno} onChange={(e) => setTerreno(e.target.value)}></input>
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

                    <button id='btnAprove' className='btnPressionavel' onClick={Sugerir}>Solicitar aprovação</button>



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
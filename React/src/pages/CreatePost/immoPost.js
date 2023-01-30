import React, { useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup, FormLabel, MenuItem, Select, FormControl, InputLabel, TextField, ImageList, ImageListItem } from '@mui/material'

import Footer from '../../components/footer.js'

import adicionarIcon from '../../assets/img/icones/add.svg'

import '../../assets/css/immo.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function CadastroImmo() {

    const [Titulo, setTitulo] = useState('')
    const [Descricao, setDescricao] = useState('')
    const [TipoAnuncio, setTipoAnuncio] = useState('')
    const [CategoriaPropriedade, setCategoriaPropriedade] = useState('')
    const [Bairro, setBairro] = useState('')
    const [Aluguel, setAluguel] = useState('')
    const [Valor, setValor] = useState('')
    const [IPTU, setIPTU] = useState('')
    const [Condominio, setCondominio] = useState('')
    const [AreaConstruida, setAreaConstruida] = useState('')
    const [Terreno, setTerreno] = useState('')


    const [Quartos, setQuartos] = useState('')
    const [Salas, setSalas] = useState('')
    const [Cozinhas, setCozinhas] = useState('')
    const [Banheiros, setBanheiros] = useState('')
    const [Garagem, setGaragem] = useState('')

    const [MainImg, setMainImg] = useState('')
    const [ListImgs, setListImgs] = useState([])
    const [ListTipoAnuncio, setListTipoAnuncios] = useState([])
    const [ListCategorias, setListCategorias] = useState([])
    const [BairrosList, setBairrosList] = useState([])
    const [isUpdatedImgs, setImgsUpdated] = useState(false)
    const [hasPulledSelects, setPulled] = useState(false)
    const navigate = useNavigate();

    const getMainImg = () => {
        var imgElement = document.getElementById('imgPrincipal');
        if (imgElement.files.length == 1) {
            var urlImg = URL.createObjectURL(imgElement.files[0])
            setMainImg(urlImg);
        }
    }

    const getImagesFiles = () => {
        const imgsElement = document.getElementById('moreImgs');
        if (imgsElement.files.length != 0) {
            var fileList = imgsElement.files
            var urlImages = [];
            for (let index = 0; index < fileList.length; index++) {
                var urlImage = {
                    id: index,
                    img: URL.createObjectURL(fileList[index])
                }
                urlImages.push(urlImage);
            }
            if (!isUpdatedImgs) {
                setListImgs(urlImages);
                setImgsUpdated(true);
            }
        }
    }

    // Não funcionando
    const deleteImageInFiles = (click) => {
        var imgsElement = document.getElementById('moreImgs');
        if (ListImgs.length != 0) {
            var urlImages = ListImgs;
            for (let index = 0; index < ListImgs.length; index++) {
                if (index == click.target.id) {
                    urlImages.splice(index, 1)
                }
            }
            console.log(imgsElement.files)
            imgsElement.fileList = urlImages
            console.log(imgsElement.fileList)
            setListImgs(urlImages);
            setImgsUpdated(false);
        }
    }

    async function PullSelects() {
        if (!hasPulledSelects) {
            await axios.get('Categorias')
                .then(response => {
                    if (response.status === 200) {
                        setListCategorias(response.data)
                    }
                })

            await axios.get('TiposAnuncio')
                .then(response => {
                    if (response.status === 200) {
                        setListTipoAnuncios(response.data)
                    }
                })

            await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos')
                .then(response => {
                    if (response.status) {
                        setBairrosList(response.data)
                    }
                })
            setPulled();
        }
    }

    const Sugerir = (event) => {
        event.preventDefault();

        var formData = new FormData();
        const element = document.getElementById('imgPrincipal')
        const imgPrincipal = element.files[0];

        formData.append('imagem', imgPrincipal, imgPrincipal.name)
        formData.append('idCategoria', CategoriaPropriedade)
        formData.append('idTipoAnuncio', TipoAnuncio)
        formData.append('titulo', Titulo)
        formData.append('bairro', Bairro)
        formData.append('aluguel', Aluguel)
        formData.append('valor', Valor)
        formData.append('custosMensais', IPTU + Condominio)
        formData.append('construido', AreaConstruida)
        formData.append('terreno', Terreno)
        formData.append('descricao', Descricao)

        axios({
            method: "post",
            url: "Imovel/SugerirImovel",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(response => {

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
                },
                {
                    idTipoInfo: '5',
                    quantidade: Garagem
                }
                ]
            )

            var idImovel = response.data.idImovel;

            var formImg = new FormData();
            const element = document.getElementById('moreImgs')
            const imagens = element.files;

            for (let n = 0; n < imagens.length; n++) {
                formImg.append('imagens', imagens[n], imagens[n].name)
            }

            formImg.append('idImovel', idImovel)

            axios({
                method: "post",
                url: "Img",
                data: formImg,
                headers: { "Content-Type": "multipart/form-data" }
            })

            axios.post('InformacoesAdicionais/Multiplas/' + response.data.idImovel, {
                json: stringJson
            })
                .then(response => {
                    if (response.status === 201) {
                        navigate('/');
                    }
                })
        })
    }

    useEffect(() => {
        PullSelects()
        getImagesFiles()
    }, [ListImgs])

    return (
        <div className='background_immo'>

            <div className='suport_immo container'>

                <form onSubmit={Sugerir} className='form-post'>
                    <section className='column side-box'>
                        <h1 id='post-tittle'>Cadastrar Imóvel</h1>

                        <div className='labed-input'><TextField value={Titulo} onChange={(e) => setTitulo(e.target.value)} label="Título da publicação" variant="outlined" /></div>
                        <div className='labed-input double-input row espacado'>

                            <FormControl required className='immo_rooms'>
                                <InputLabel>Categoria</InputLabel>
                                <Select
                                    value={TipoAnuncio}
                                    onChange={(e) => setTipoAnuncio(e.target.value)}
                                    labelId="demo-simple-select-label"
                                    label="Categoria"
                                >
                                    {ListTipoAnuncio.map((tipoAnuncio => {
                                        return (
                                            <MenuItem key={tipoAnuncio.idTipoAnuncio} value={tipoAnuncio.idTipoAnuncio}>{tipoAnuncio.tipoAnuncio}</MenuItem>
                                        )
                                    }))}
                                </Select>
                            </FormControl>

                            <FormControl required className='immo_rooms'>
                                <InputLabel>Tipo de Imóvel</InputLabel>
                                <Select
                                    value={CategoriaPropriedade}
                                    onChange={(e) => setCategoriaPropriedade(e.target.value)}
                                    labelId="demo-simple-select-label"
                                    label="Quartos"
                                >
                                    {ListCategorias.map((categoria => {
                                        return (
                                            <MenuItem key={categoria.idCategoria} value={categoria.idCategoria}>{categoria.categoria1}</MenuItem>
                                        )
                                    }))}
                                </Select>
                            </FormControl>
                        </div>

                        <div className='inputBox labed-input'>
                            <FormControl required>
                                <InputLabel>Distrito</InputLabel>
                                <Select
                                    value={Bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                >
                                    {BairrosList.map((bairro => {
                                        return (
                                            <MenuItem key={bairro.id} value={bairro.nome}>{bairro.nome}</MenuItem>
                                        )
                                    }))}
                                </Select>
                            </FormControl>

                        </div>

                        <div id='immo' className='labed-input double-input row espacado'>
                            <TextField value={IPTU} label="IPTU" onChange={(e) => setIPTU(e.target.value)} />

                            <TextField value={Condominio} label="Condomínio" onChange={(e) => setCondominio(e.target.value)} />
                        </div>

                        <div id='immo' className='labed-input double-input row espacado'>
                            <TextField value={Terreno} required label="Terreno" onChange={(e) => setTerreno(e.target.value)} />

                            <TextField value={AreaConstruida} required label="Construído" onChange={(e) => setAreaConstruida(e.target.value)} />
                        </div>

                        {TipoAnuncio == 1 ?
                            <div id='immo' className='labed-input double-input row espacado'>
                                <TextField value={Valor} required label="Preço" onChange={(e) => setValor(e.target.value)} />
                                <TextField value={Aluguel} disabled label="Não aplicável" onChange={(e) => setAluguel(e.target.value)} />
                            </div>
                            : TipoAnuncio == 2 ?
                                <div id='immo' className='labed-input double-input row espacado'>
                                    <TextField value={Valor} disabled label="Não aplicável" onChange={(e) => setValor(e.target.value)} />
                                    <TextField value={Aluguel} required label="Aluguel" onChange={(e) => setAluguel(e.target.value)} />
                                </div>
                                :
                                <div id='immo' className='labed-input double-input row espacado'>
                                    <TextField value={Valor} required label="Preço" onChange={(e) => setValor(e.target.value)} />
                                    <TextField value={Aluguel} required label="Aluguel" onChange={(e) => setAluguel(e.target.value)} />
                                </div>
                        }


                        <div className='row background_immo_rooms espacado'>

                            <FormControl className='immo_rooms'>
                                <InputLabel>Quartos</InputLabel>
                                <Select
                                    value={Quartos}
                                    onChange={(e) => setQuartos(e.target.value)}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className='immo_rooms'>
                                <InputLabel>Salas</InputLabel>
                                <Select
                                    value={Salas}
                                    onChange={(e) => setSalas(e.target.value)}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className='immo_rooms'>
                                <InputLabel>Cozinhas</InputLabel>
                                <Select
                                    value={Cozinhas}
                                    onChange={(e) => setCozinhas(e.target.value)}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl className='immo_rooms'>
                                <InputLabel>Banheiros</InputLabel>
                                <Select
                                    value={Banheiros}
                                    onChange={(e) => setBanheiros(e.target.value)}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <TextField value={Descricao} inputProps={{ maxLength: 200 }} type="number" multiline label="Descrição do Imóvel" variant="outlined" onChange={(e) => setDescricao(e.target.value)} />

                    </section>

                    <section className='column espacado side-box' id='immo'>

                        <div className='row extra-infos'>

                            <FormGroup >
                                <FormLabel component='legend'>Características</FormLabel>
                                <FormControlLabel control={<Checkbox id='checkbox-label' />} label="Academia" />
                                <FormControlLabel control={<Checkbox id='checkbox-label' />} label="Espaço Kids" />
                                <FormControlLabel control={<Checkbox id='checkbox-label' />} label="Quadra Esportiva" />
                                <FormControlLabel control={<Checkbox id='checkbox-label' />} label="Piscina" />
                            </FormGroup>

                            <FormGroup >
                                <FormLabel component='legend'>Extras</FormLabel>
                                <FormControlLabel control={<Checkbox id='checkbox-label' />} label="Aceita Pets" />
                                <FormControlLabel control={<Checkbox id='checkbox-label' />} label="Silencioso" />
                            </FormGroup>
                        </div>

                        <div id='img_immo_suport' className='row espacado alinhado'>
                            {MainImg == '' ?
                                <label htmlFor='imgPrincipal' className='suport_img_immo background_img_immo column alinhado centrado'>
                                    <img alt='Icone de adicionar imagem principal' id='icone_branco' src={adicionarIcon} />
                                    <span>Adicionar foto principal*</span>
                                    <input onInput={getMainImg} required id='imgPrincipal' type="file" accept="image/png; image/jpeg; image/jpg" className='flex alinhado centrado'></input>
                                </label>
                                :
                                <label htmlFor='imgPrincipal' className='suport_img_immo background_img_immo column alinhado centrado'>
                                    <img alt='Icone de adicionar imagem principal' className='main-img' id='icone_branco' src={MainImg} />
                                    <input onInput={getMainImg} required id='imgPrincipal' type="file" accept="image/png; image/jpeg; image/jpg" className='flex alinhado centrado'></input>
                                </label>
                            }

                            <label htmlFor="moreImgs" className='addImg_immo background_img_immo'>
                                <img alt='Icone de adicionar mais imagens' src={adicionarIcon} />
                                <input onInput={getImagesFiles} id='moreImgs' type='file' accept="image/png; image/jpeg; image/jpg" multiple></input>
                                <label>Mais fotos</label>
                            </label>

                        </div>
                        <ImageList
                            style={{ marginBottom: '10px' }}
                            variant="standard"
                            cols={6}
                        >
                            {ListImgs.map((item) => (
                                <ImageListItem key={item.id} cols={1} rows={1}>
                                    <img
                                        onClick={deleteImageInFiles}
                                        id={item.id}
                                        src={item.img}
                                        alt="Exemplar de foto do imóvel"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>

                        <button id='btnAprove' type='submit' className='btnPressionavel'>Solicitar aprovação</button>
                    </section>
                </form>
            </div>

            <div className="boxInfo container column centrado" id="cadastro">
                <h2>Por que o meu imóvel precisa passar por aprovação?</h2>
                <p>Nós da SE Consultoria de Imóveis, prezamos pelo controle de qualidade das publicações no nosso site, a fim que possibilitar que os nossos usuários tenham maior segurança e credibilidade enquanto utilizam nosso sistema. Tudo para que você que está querendo vender ou alugar seu imóvel, consiga maior alcance na plataforma e maiores chances de sucesso na transação, tudo com o profissionalismo de uma empresa que já é atuante há mais de 10 anos no mercado. Nossa avaliação não irá demorar muito, relaxe e deixe seu trabalho conosco.</p>
            </div>

            <Footer />
        </div >
    )
}
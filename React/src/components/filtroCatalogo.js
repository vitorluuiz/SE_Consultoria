import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material'

import CloseBar from '../assets/img/icones/close_modal.png'

import '../assets/css/catalog.css'

export default function FiltroCatalogo({ dispatch }) {

    const [maxValue, setMaxValue] = useState(0);
    const [categoria, setCategoria] = useState(0);
    const [distrito, setDistrito] = useState('');
    const [minQuartos, setMinQuartos] = useState(0);
    const [minBanheiros, setMinBanheiros] = useState(0);
    const [minSalas, setMinSalas] = useState(0);
    const [minCozinhas, setMinCozinhas] = useState(0);
    const [OrderStates, setOrderstates] = useState([0, 0]);

    const [ImovelList, setImovelList] = useState([])
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [hasPulledSelects, setPulled] = useState(false);
    const [BairrosList, setBairrosList] = useState([]);
    const [CategoriasList, setCategoriasList] = useState([]);
    const { idTipoAnuncio } = useParams();

    function filtrarImoveis() {
        let data = ImovelList;
        if (maxValue > 0) {
            data = data.filter(item => item.valor <= maxValue);
        }
        if (categoria > 0) {
            data = data.filter(item => item.idCategoria === categoria);
        }
        if (distrito !== '') {
            data = data.filter(item => item.bairro === distrito);
        }
        // if (minQuartos > 0) {
        //     data = data.filter(item => item.Quartos >= minQuartos);
        // }
        // if (minBanheiros > 0) {
        //     data = data.filter(item => item.banheiros >= minBanheiros);
        // }
        // if (minSalas > 0) {
        //     data = data.filter(item => item.salas >= minSalas);
        // }
        // if (minCozinhas > 0) {
        //     data = data.filter(item => item.cozinhas >= minCozinhas);
        // }
        localStorage.setItem('immo-list',
            JSON.stringify(data)
        )
        dispatch({ type: 'update' })
    }

    async function PullSelects() {
        if (!hasPulledSelects) {
            await axios.get('Categorias')
                .then(response => {
                    if (response.status === 200) {
                        setCategoriasList(response.data)
                    }
                })
            await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos')
                .then(response => {
                    if (response.status) {
                        setBairrosList(response.data)
                    }
                })
            setPulled(true);
        }
        await axios.get('Imovel/ListarPorTipoAnuncio/1/' + idTipoAnuncio)
            .then(response => {
                if (response.status === 200) {
                    setImovelList(response.data)
                    localStorage.setItem('immo-list', JSON.stringify(response.data))
                }
            });
        dispatch({ type: 'update' });
    }

    const handleChangeFilter = (click) => {
        let states = OrderStates;
        let clickedFilter = document.getElementById(click.target.id).classList;

        if (states[click.target.id] === 0) {
            states[click.target.id] = 1;
            clickedFilter.add('ordenarSelected')
        }
        else {
            states[click.target.id] = 0;
            clickedFilter.remove('ordenarSelected');
        }
        setOrderstates(states);
    }

    const handleChangeBar = () => {
        let bar = document.getElementById('filter_bar').classList;

        if (isFilterVisible) {
            bar.remove('filtro_visivel');
            setFilterVisible(false);
        }
        else {
            bar.add('filtro_visivel');
            setFilterVisible(true);
        }
    }

    useEffect(() => {
        filtrarImoveis()
    }, [maxValue, categoria, distrito, minQuartos, minSalas, minCozinhas, minBanheiros])

    useEffect(() => {
        PullSelects()
    }, [idTipoAnuncio])

    return (
        <div className="background_filter">

            <div className="suport_filter">

                <div id="filter_bar" className="filtro">
                    <div id='background_modal' className="column">

                        <div className="filtering-top container">

                            <div className="labed-input">
                                <FormControl>
                                    <InputLabel>Valor máximo</InputLabel>
                                    <Select
                                        value={maxValue}
                                        onChange={(e) => setMaxValue(e.target.value)}
                                        labelId="demo-simple-select-label"
                                        label="Cozinhas"
                                    >
                                        <MenuItem value={0}>Indiferente</MenuItem>
                                        <MenuItem value={200000}>R$200.000</MenuItem>
                                        <MenuItem value={300000}>R$300.000</MenuItem>
                                        <MenuItem value={400000}>R$400.000</MenuItem>
                                        <MenuItem value={500000}>R$500.000</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="labed-input">
                                <FormControl>
                                    <InputLabel>Categoria</InputLabel>
                                    <Select
                                        defaultValue="Uncontrolled Input"
                                        value={categoria}
                                        onChange={(e) => setCategoria(e.target.value)}
                                        labelId="demo-simple-select-label"
                                        label="Categoria"
                                    >
                                        <MenuItem value={0}>Indiferente</MenuItem>
                                        {CategoriasList.map((tipoAnuncio => {
                                            return (
                                                <MenuItem key={tipoAnuncio.idCategoria} value={tipoAnuncio.idCategoria}>{tipoAnuncio.categoria1}</MenuItem>
                                            )
                                        }))}
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="labed-input">
                                <FormControl>
                                    <InputLabel>Distrito</InputLabel>
                                    <Select
                                        value={distrito}
                                        onChange={(e) => setDistrito(e.target.value)}
                                        labelId="demo-simple-select-label"
                                        label="Bairro"
                                    >
                                        <MenuItem value=''>Indiferente</MenuItem>

                                        {BairrosList.map((bairro => {
                                            return (
                                                <MenuItem key={bairro.id} value={bairro.nome}>{bairro.nome}</MenuItem>
                                            )
                                        }))}
                                    </Select>
                                </FormControl>
                            </div>

                        </div>


                        <div id="filterBar" className="container row">

                            <div className="row qnt-rooms">
                                <FormControl >
                                    <InputLabel>Quartos</InputLabel>
                                    <Select
                                        value={minQuartos}
                                        onChange={(e) => setMinQuartos(e.target.value)}
                                        labelId="demo-simple-select-label"
                                    >
                                        <MenuItem value={0}>Indiferente</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl >
                                    <InputLabel>Salas</InputLabel>
                                    <Select
                                        value={minSalas}
                                        onChange={(e) => setMinSalas(e.target.value)}
                                        labelId="demo-simple-select-label"
                                    >
                                        <MenuItem value={0}>Indiferente</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel>Cozinhas</InputLabel>
                                    <Select
                                        value={minCozinhas}
                                        onChange={(e) => setMinCozinhas(e.target.value)}
                                        labelId="demo-simple-select-label"
                                    >
                                        <MenuItem value={0}>Indiferente</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel>Banheiros</InputLabel>
                                    <Select
                                        value={minBanheiros}
                                        onChange={(e) => setMinBanheiros(e.target.value)}
                                        labelId="demo-simple-select-label"
                                        label="Quartos"
                                    >
                                        <MenuItem value={0}>Indiferente</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div id="ordenar" className="row">
                                <button onClick={handleChangeFilter} id="0" className="btnPressionavel ordenar">Mais barato</button>
                                <button onClick={handleChangeFilter} id="1" className="btnPressionavel ordenar last_option">Maior terreno</button>
                            </div>

                        </div>

                        <div onClick={() => {
                            handleChangeBar()
                            filtrarImoveis()
                            dispatch({ type: 'update' })
                        }} id="closeBar" className="row centrado alinhado">
                            <img id="btn_close_modal" alt='botão de fechamento da barra de filtragem' src={CloseBar} />
                        </div>

                    </div>

                </div>

                <div className="barra_ordem row alinhado espacado container">
                    <h2>Imóveis recomendados</h2>

                    <button id="filtrar" onClick={() => { handleChangeBar() }} className="btnPressionavel">Filtrar</button>
                </div>
            </div>
        </div>
    )
}
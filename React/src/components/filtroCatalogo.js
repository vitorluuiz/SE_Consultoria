import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, FormLabel, MenuItem, Select, FormControl, InputLabel, TextField, Autocomplete } from '@mui/material'

import axios from 'axios';

import CloseBar from '../assets/img/icones/close_modal.png'

import '../assets/css/catalog.css'

export default function FiltroCatalogo() {
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [hasPulledSelects, setPulled] = useState(false);
    const [OrderStates, setOrderstates] = useState([0, 0]);
    const [BairrosList, setBairrosList] = useState([]);
    const [CategoriasList, setCategoriasList] = useState([]);

    const [FilterStates, setStates] = useState([
        {
            name: 'cep',
            value: ''
        },
        {
            name: 'bairro',
            value: ''
        },
        {
            name: 'tipoImovel',
            value: ''
        },
        {
            name: 'maxValue',
            value: ''
        },
        {
            name: 'minBanheiros',
            value: ''
        },
        {
            name: 'minQuartos',
            value: ''
        }
    ])

    function setFilterStates(stateName, newValue) {
        var statesAtualizados = FilterStates;
        setStates(FilterStates.filter(function (state) {
            if (state.name == stateName) {
                statesAtualizados.filter(function (e) {
                    if (e.id == stateName) {
                        e.value = newValue;
                    }
                })
            }
            console.log(statesAtualizados)
            return statesAtualizados;
        }))
    }

    async function PullSelects() {
        if (!hasPulledSelects) {
            await axios.get('Categorias')
                .then(response => {
                    if (response.status === 200) {
                        setCategoriasList(response.data)
                        console.log(response.data)
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
        PullSelects()
    }, [])

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
                                        labelId="demo-simple-select-label"
                                        label="Cozinhas"
                                    >
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
                                        labelId="demo-simple-select-label"
                                        label="Categoria"
                                    >
                                        {CategoriasList.map((tipoAnuncio => {
                                            return (
                                                <MenuItem key={tipoAnuncio.idCategoria} value={tipoAnuncio.categoria1}>{tipoAnuncio.categoria1}</MenuItem>
                                            )
                                        }))}
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="labed-input">
                                <FormControl>
                                    <InputLabel>Distrito</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        label="Bairro"
                                    >
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
                                        labelId="demo-simple-select-label"
                                        label="Quartos"
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl >
                                    <InputLabel>Salas</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        label="Quartos"
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel>Cozinhas</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        label="Quartos"
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl >
                                    <InputLabel>Banheiros</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        label="Quartos"
                                    >
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

                        <div onClick={handleChangeBar} id="closeBar" className="row centrado alinhado">
                            <img id="btn_close_modal" alt='botão de fechamento da barra de filtragem' src={CloseBar} />
                        </div>

                    </div>

                </div>

                <div className="barra_ordem row alinhado espacado container">
                    <h2>Imóveis recomendados</h2>

                    <button id="filtrar" onClick={handleChangeBar} className="btnPressionavel">Filtrar</button>
                </div>
            </div>
        </div>
    )
}
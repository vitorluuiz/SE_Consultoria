import React, { useEffect, useState } from "react";
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

    // Precisa de aperfeiçoamentos para não alterar o state 6 vezes com o mesmo
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
                                <label>Valor máximo</label>
                                <select onChange={(e) => setFilterStates('maxValue', e.target.value)}>
                                    <option defaultValue={null}>Indiferente</option>
                                    <option value='100000'>Menor que R$100.000</option>
                                    <option value='150000'>Menor que R$150.000</option>
                                    <option value='200000'>Menor que R$200.000</option>
                                    <option value='250000'>Menor que R$250.000</option>
                                    <option value='300000'>Menor que R$300.000</option>
                                    <option value='350000'>Menor que R$350.000</option>
                                    <option value='400000'>Menor que R$400.000</option>
                                    <option value='500000'>Menor que R$500.000</option>
                                </select>
                            </div>

                            <div className="labed-input">
                                <label>Tipo de propriedade</label>
                                <select onChange={(e) => setFilterStates('tipoImovel', e.target.value)}>
                                    <option defaultValue={null}>Tipo de propriedade</option>
                                    {CategoriasList.map((categoria) => {
                                        return (
                                            <option key={categoria.idCategoria} value={categoria.categoria1}>{categoria.categoria1}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            <div className="labed-input">
                                <label>Bairro</label>
                                <select onChange={(e) => setFilterStates('bairro', e.target.value)}>
                                    <option defaultValue={null}>Indiferente</option>
                                    {BairrosList.map((bairro) => {
                                        return (
                                            <option key={bairro.id} value={bairro.nome}>{bairro.nome}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            {/* <div className="labed-input">
                                <label>CEP</label>
                                <input onChange={(e) => setFilterStates('cep', e.target.innerText)} placeholder="Buscar perto de mim" />
                            </div> */}

                        </div>


                        <div id="filterBar" className="container row">

                            <div id="requisitos" className="row">
                                <div className="labed-input ordenar first_option">
                                    <select onChange={(e) => setFilterStates('minQuartos', e.target.value)}>
                                        <option defaultValue='99' >Minímo de quartos</option>
                                        <option value='1' >1 Quarto</option>
                                        <option value='2' >2 Quartos</option>
                                    </select>
                                </div>

                                <div className="labed-input ordenar">
                                    <select onChange={(e) => setFilterStates('minBanheiros', e.target.value)}>
                                        <option defaultValue='99'>Minímo de banheiros</option>
                                        <option value='1' >1 Banheiro</option>
                                        <option value='2' >2 Banheiros</option>
                                    </select>
                                </div>
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
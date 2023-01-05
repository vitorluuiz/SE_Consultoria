import React, { useState } from "react";

import CloseBar from '../assets/img/icones/close_modal.png'

import '../assets/css/catalog.css'

export default function FiltroCatalogo() {
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [FiltersStates, setFilterStates] = useState([0, 0]);

    function handleChangeFilter(click) {
        let states = FiltersStates;
        let clickedFilter = document.getElementById(click.target.id).classList;

        if (states[click.target.id] === 0) {
            states[click.target.id] = 1;
            clickedFilter.add('ordenarSelected')
        }
        else {
            states[click.target.id] = 0;
            clickedFilter.remove('ordenarSelected');
        }
        setFilterStates(states);
    }

    function handleChangeBar() {
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

    return (
        <div className="background_filter">

            <div className="suport_filter">

                <div id="filter_bar" className="filtro">
                    <div id='background_modal' className="column">

                        <div className="filtering-top container">

                            <div className="labed-input">
                                <label>Valor máximo</label>
                                <select>
                                    <option defaultValue='0'>Indiferente</option>
                                    <option value='1'>Menor que R$100.000</option>
                                </select>
                            </div>

                            <div className="labed-input">
                                <label>Tipo de propriedade</label>
                                <select>
                                    <option value='0' disabled>Tipo de propriedade</option>
                                    <option value='1' >Casa</option>
                                    <option value='2' >Galpão</option>
                                </select>
                            </div>

                            <div className="labed-input">
                                <label>Bairro</label>
                                <select>
                                    <option defaultValue='0'>Indiferente</option>
                                    <option value='1'>Carrão</option>
                                </select>
                            </div>

                            <div className="labed-input">
                                <label>CEP</label>
                                <input placeholder="Buscar perto de mim"/>
                            </div>

                        </div>


                        <div id="filterBar" className="container row">

                            <div id="requisitos" className="row">
                                <div className="labed-input ordenar first_option">
                                    <select>
                                        <option value='0' disabled >Minímo de quartos</option>
                                        <option value='1' >1 Quarto</option>
                                        <option value='2' >2 Quartos</option>
                                    </select>
                                </div>

                                <div className="labed-input ordenar">
                                    <select>
                                        <option value='0' disabled>Minímo de banheiros</option>
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
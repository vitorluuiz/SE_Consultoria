import React, { useEffect, useState } from "react";
import CloseBar from '../assets/img/icones/close_modal.png'
import '../assets/css/filtro.css'

export default function FiltroCatalogo() {
    const [isFilterVisible, setFilterVisible] = useState(false);
    // const [ValorMax, setValorMax] = useState('');
    // const [TipoPropriedade, setTipoPropriedade] = useState('');
    // const [Bairro, setBairro] = useState('');
    // const [CEP, setCEP] = useState('');

    window.addEventListener('mousemove', (e) => {
        // document.getElementById('filtrar').innerHTML = e.pageY * e.pageX;
    })

    function ChangeFilter() {
        var bar = document.getElementById('filter_bar').classList
        var content = document.getElementById('filtro')

        if (isFilterVisible) {
            setFilterVisible(false);
            bar.remove('filtro_visivel');
        }
        else {
            bar.add('filtro_visivel');
            setFilterVisible(true);
        }
    }

    return (
        <div className="fundo_filtro">
            <div className="apoio_filtro">
                <div id="filter_bar" className="filtro">
                    <div id='background_modal' className="column">

                        <div className="inputs row alinhado espacado container" id="filtro">
                            <div className="input">
                                <label>Valor máximo</label>
                                <input />
                            </div>
                            <div className="input">
                                <label>Tipo de propriedade</label>
                                <select>
                                    <option value='0' disabled selected>Tipo de propriedade</option>
                                    <option value='1' >Casa</option>
                                    <option value='2' >Galpão</option>
                                </select>
                            </div>
                            <div className="input">
                                <label>Bairro</label>
                                <input />
                            </div>
                            <div className="input">
                                <label>CEP</label>
                                <input />
                            </div>
                        </div>

                        <div id="filterBar" className="container row">

                            <div id="requisitos" className="row">
                                <div className="input ordenar first_option">
                                    <select>
                                        <option value='0' disabled selected>Minímo de quartos</option>
                                        <option value='1' >1 Quarto</option>
                                        <option value='2' >2 Quartos</option>
                                    </select>
                                </div>

                                <div className="input ordenar">
                                    <select>
                                        <option value='0' disabled selected>Minímo de banheiros</option>
                                        <option value='1' >1 Banheiro</option>
                                        <option value='2' >2 Banheiros</option>
                                    </select>
                                </div>
                            </div>

                            <div id="ordenar" className="row">
                                <button className="btnPressionavel ordenar">Mais baratos</button>
                                <button className="btnPressionavel ordenar last_option">Maior terreno</button>
                            </div>
                        </div>

                        <div onClick={ChangeFilter} id="closeBar" className="row centrado alinhado">
                            <img id="btn_close_modal" src={CloseBar} />
                        </div>
                    </div>
                </div>
                <div className="barra_ordem row alinhado espacado container">

                    <h2>Imóveis recomendados</h2>

                    <button id="filtrar" onClick={ChangeFilter} className="btnPressionavel">Procurar</button>
                </div>
            </div>
        </div>
    )
}
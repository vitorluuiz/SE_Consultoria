import React, { useEffect, useState } from "react";
import iconeOrdem from '../assets/img/icone_ordem.png'
import '../assets/css/filtro.css'
import { wait } from "@testing-library/user-event/dist/utils";

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
                <div onClick={ChangeFilter} id="filter_bar" className="filtro">
                    <div id='background_modal'>

                        <div className="inputs row alinhado espacado container" id="filtro">
                            <div className="input">
                                <label>Valor máximo</label>
                                <input />
                            </div>
                            <div className="input">
                                <label>Tipo de propriedade</label>
                                <input />
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
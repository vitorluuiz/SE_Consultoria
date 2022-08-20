import React, { useEffect, useState } from "react";
import iconeOrdem from '../assets/img/icone_ordem.png'
import '../assets/css/filtro.css'

export default function FiltroCatalogo() {

    // const [ValorMax, setValorMax] = useState('');
    // const [TipoPropriedade, setTipoPropriedade] = useState('');
    // const [Bairro, setBairro] = useState('');
    // const [CEP, setCEP] = useState('');

    return (
        <div className="fundo_filtro">
            <div className="apoio_filtro">

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

                <div className="barra_ordem row alinhado espacado container">

                    <h2>Imóveis recomendados</h2>

                    <div className="ordenador row espacado alinhado">
                        <div className="ordens row">
                            <span>Mais recente primeiro</span>
                            <img src={iconeOrdem} />
                        </div>
                        <div className="ordens row">
                            <span>Maior valor primeiro</span>
                            <img src={iconeOrdem} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
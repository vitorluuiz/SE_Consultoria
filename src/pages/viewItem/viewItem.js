import {
    useState,
    useEffect,
    React
} from 'react';

import '../../assets/css/viewItem.css'

import banheiro from '../../assets/img/restroom.png'

import Header from '../../components/header'
import Footer from '../../components/footer'

export default function ViewItem() {
    return (
        <div className='body_page'>
            <Header />

            <div className='apoio_banner_img'>
                <img src={'https://www.casanovavrb.com.br/wp-content/uploads/2019/08/20190726_133414.jpg'} />
            </div>

            <section className="column info_imovel">
                <h1 id='view_item'>Vende-se casa com 4 Suites no Morumbi próximo ao Metrô</h1>

                <div className='row desc_suport'>
                    {/* Esquerda */}
                    <div className='row apoio_articles'>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Quartos</span>
                            <div className='row alinhado centrado'>
                                <img src={banheiro} />
                                <span>1</span>
                            </div>
                        </article>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Quartos</span>
                            <div className='row alinhado centrado'>
                                <img src={banheiro} />
                                <span>1</span>
                            </div>
                        </article>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Quartos</span>
                            <div className='row alinhado centrado'>
                                <img src={banheiro} />
                                <span>1</span>
                            </div>
                        </article>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Quartos</span>
                            <div className='row alinhado centrado'>
                                <img src={banheiro} />
                                <span>1</span>
                            </div>
                        </article>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Quartos</span>
                            <div className='row alinhado centrado'>
                                <img src={banheiro} />
                                <span>1</span>
                            </div>
                        </article>
                        <article id='feature' className='column alinhado centrado'>
                            <span>Quartos</span>
                            <div className='row alinhado centrado'>
                                <img src={banheiro} />
                                <span>1</span>
                            </div>
                        </article>

                    </div>

                    {/* Direita */}

                    <div className='column right_side'>
                        <span className='suport_span'>11 962666205 e 11 947454331</span>
                        <div id="valor_botao" className='column'>
                            <span id='valor'>A partir de R$1.300.000,00</span>
                            <button id='assinalar' className='btnPressionavel flex alinhado centrado'>assinalar interesse</button>
                        </div>
                        <span className='suport_span'>Morumbi, São Paulo</span>
                    </div>

                </div>

            </section>


            <Footer />
        </div>
    )
}
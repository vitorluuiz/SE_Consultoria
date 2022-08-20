import React from "react";
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import { Link } from "react-router-dom";
import '../../assets/css/home.css'
import '../../assets/css/styles.css'
import WhatsApp from '../../assets/img/logos/logoWhatsApp.svg'
import Instagram from '../../assets/img/logos/logoInstagram.svg'

export default function Home() {
  return (
    <div>
      <Header />

      <div className="bannerHome column alinhado espacado">
        <h1 id="home">Traga seu imóvel pra cá</h1>
        <Link to='/CadastrarImovel' className="btnCadastreImovel btnPressionavel alinhado">Cadastrar Imóvel</Link>
      </div>

      <div id="fundoRedes" className="row container centrado">
        <div className="apoioRedes row alinhado espacado">
          <div className="column">
            <span>11 962666205</span>
            {/* <span>11 947454331</span> */}
          </div>
          <img className="logoRedeSocial" src={WhatsApp} alt="Logo do Whatsapp" />
        </div>


        <div className="apoioRedes row alinhado espacado">
          <img className="logoRedeSocial" src={Instagram} alt="Logo do Instagram" />
          <span>@se.lesteimoveis</span>
        </div>
      </div>

      <div className="apoio_section">
        <section className="apoioTextos container row alinhado espacado">
          <article className="blocoTexto">
            <h2 id="home">Como atuamos?</h2>
            <p id="home">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </article>
          <article className="blocoTexto">
            <h2 id="home">Por que trazer seu imóvel pra cá?</h2>
            <p id="home">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </article>
        </section>
      </div>

      <Footer />
    </div>
  );
}

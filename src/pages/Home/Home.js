import React from "react";
import Header from '../../components/header.js'
import Footer from '../../components/footer.js'
import { Link } from "react-router-dom";
import '../../assets/css/home.css'
import '../../assets/css/styles.css'
import Whatsapp from '../../assets/img/logos/whatsapp_logo.png'
import Instagram from '../../assets/img/logos/instagram_logo.png'
import Facebook from '../../assets/img/logos/facebook_logo.png'

export default function Home() {
  return (
    <div>
      <Header />

      <div className="bannerHome column alinhado espacado">
        
        <h1 id="titulo_home">Traga seu imóvel pra cá</h1>
        <Link to='/Cadastrar/Imovel' id="cadastrarBtn" className="btnPressionavel">Cadastrar Imóvel</Link>
        
      </div>

      <div className="suport_social_info row centrado">

        <div className="social_info hover_cinza">
          <img src={Facebook} />
          <span>SE Consultoria de imóveis</span>
        </div>

        <div className="social_info hover_cinza">
          <img src={Instagram} />
          <span>@se.lesteimoveis</span>
        </div>

        <div className="social_info hover_cinza">
          <img src={Whatsapp} />
          <span>11 98116-2489</span>
        </div>

        <div className="social_info hover_cinza">
          <img src={Whatsapp} />
          <span>11 98116-2489</span>
        </div>

      </div>

      <Footer />
    </div>
  );
}

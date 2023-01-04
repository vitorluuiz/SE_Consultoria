import React from "react";
import { Link } from "react-router-dom";

import Header from '../../components/header.js'
import Footer from '../../components/footer.js'

import '../../assets/css/home.css'
import '../../assets/css/styles.css'

import whatsappIcon from '../../assets/img/logos/whatsapp_logo.png'
import instagramIcon from '../../assets/img/logos/instagram_logo.png'
import facebookIcon from '../../assets/img/logos/facebook_logo.png'

export default function Home() {
  return (
    <div>
      <Header />

      <div className="bannerHome column alinhado espacado">

        <h1 id="tittle_home">Traga seu imóvel pra cá</h1>
        <Link to='/Cadastrar/Imovel' id="cadastrarBtn" className="btnPressionavel">Cadastrar Imóvel</Link>

      </div>

      <div className="suport_social_info row centrado">

        <div className="social_info hover_cinza">
          <img alt="icone do facebook" src={facebookIcon} />
          <span>SE Consultoria de imóveis</span>
        </div>

        <div className="social_info hover_cinza">
          <img alt="icone do instagram" src={instagramIcon} />
          <span>@se.lesteimoveis</span>
        </div>

        <div className="social_info hover_cinza">
          <img alt='icone do whatsapp' src={whatsappIcon} />
          <span>11 98116-2489</span>
        </div>

        <div className="social_info hover_cinza">
          <img alt='icone do whatsapp' src={whatsappIcon} />
          <span>11 98116-2489</span>
        </div>

      </div>

    </div>
  );
}

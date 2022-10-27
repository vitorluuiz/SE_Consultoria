import '../assets/css/styles.css'
import '../assets/css/headerFooter.css'
import {Link} from 'react-router-dom'

import logo from '../assets/img/logos/pretaSimples.png'

export default function Footer() {
    return (
        <footer className="flex alinhado">
            <div className="apoio_footer__div container row alinhado espacado">
                <span>Copyright SE consultoria de imóveis 2022</span>
               <Link to="/" id="logo_footer__img">
                <img id="logo_footer__img" src={logo} alt="Logo SE Consultoria de Imóveis"/>
               </Link>
                <nav className="apoioCreditos__nav">
                    <span>Desenvolvido por </span>
                    <a className="pressionavel" id="creditos__a" href="https://github.com/vitorluuiz">Vitor Luiz Gonçalves</a>
                </nav>
            </div>
        </footer>
    )
}
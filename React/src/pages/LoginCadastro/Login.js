import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


import { TextField } from '@mui/material'

import Footer from '../../components/footer.js'
import MaskedInput from "../../assets/jsExtentions/MaskedInput/maskedInput.js";

import { getToken, setToken } from "../../services/authUser.js";
import { FormatCelular } from '../../services/formater.js';

import Logo from '../../assets/img/logos/brancaNegativa.png'

import '../../assets/css/login.css'

export default function Login() {


    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [Celular, setCelular] = useState('');
    const [Senha, setSenha] = useState('');

    const handleClickShowPassword = () => setShowPassword((show => !show))

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const EfetuarLogin = (event) => {
        event.preventDefault();

        axios.post('Login', {
            celular: FormatCelular(Celular),
            senha: Senha
        })
            .then(response => {
                if (response.status === 200) {
                    setToken(response.data.token);
                    navigate('/')
                }
            })
    }

    return (
        <div className="fundo_login column">

            <div className="bloco_login containerBox column alinhado">
                <img id="logo_login" src={Logo} alt='Logo da SE Consultoria de imóveis' />

                <form className="column alinhado" onSubmit={EfetuarLogin}>

                    <div className="inputs-apoio">
                        <div className='labed-input'><TextField onChange={(e) => setCelular(e.target.value)} label="Telefone" variant="outlined" /></div>

                        <FormControl style={{ width: '100%', marginLeft: '0' }} sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                onChange={(e) => setSenha(e.target.value)}
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>

                    <div className="button-box-login">
                        <Link to="/Cadastrar" className="pressionavel">Ainda não tenho conta</Link>
                        <button className="btnPressionavel btnLogin" type="submit">Entre</button>
                    </div>


                </form>

            </div>

            <Footer />
        </div>
    );
}
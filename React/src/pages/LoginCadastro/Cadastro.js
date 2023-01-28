import React, { useEffect, useState } from "react";
import axios from "axios";


import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { TextField } from '@mui/material'

import { FormatCelular, FormatDDD } from '../../services/formater.js';

import Footer from '../../components/footer.js'
import MaskedInput from '../../assets/jsExtentions/MaskedInput/maskedInput.js'

import '../../assets/css/login.css'
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [Nome, setNome] = useState('');
    const [Celular, setCelular] = useState('');
    const [Senha, setSenha] = useState('');
    const [ContraSenha, setContraSenha] = useState('');

    const handleClickShowPassword = () => setShowPassword((show => !show))

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function CadastrarUsuario(event) {
        event.preventDefault();

        if (Senha === ContraSenha && Nome != null && Celular != null) {
            axios.post('Usuarios', {
                nomeUsuario: Nome,
                ddd: FormatDDD(Celular),
                celular: FormatCelular(Celular),
                senha: Senha
            })
                .then(response => {
                    if (response.status === 201) {
                        navigate('/');
                    }
                    else {
                        window.alert('Não foi possível concluir o cadastro')
                    }
                })
        }
    }

    useEffect(() => {
        console.log(Nome, Celular, Senha, ContraSenha)
    }, [Senha])

    return (
        <div className="fundo_login column">

            <div className="bloco_login containerBox column alinhado">

                <form onSubmit={CadastrarUsuario} className="form_login column alinhado">

                    <div className="inputs-apoio" id="cadastro">
                        <div className='labed-input'><TextField onChange={(e) => setNome(e.target.value)} label="Nome completo" variant="outlined" /></div>

                        <div className='labed-input'><TextField onChange={(e) => setCelular(e.target.value)} label="Telefone" variant="outlined" /></div>

                        <div id='immo' className='labed-input double-input row espacado'>
                            <FormControl style={{ width: '48%', marginLeft: '0' }} sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    label="Senha"
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </FormControl>
                            <FormControl style={{ width: '48%', marginLeft: '0' }} sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Contra Senha</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={(e) => setContraSenha(e.target.value)}
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
                                    label="Confirme a senha"
                                />
                            </FormControl>
                        </div>
                    </div>

                    <button className="btnPressionavel btnLogin" type="submit">Cadastro</button>
                </form>

            </div>

            <div className="boxInfo container column centrado" id="cadastro">
                <h2>Por que preciso realizar um cadastro?</h2>
                <p>Seu cadastro é opicional, e necessário apenas para assinalar interesse em determinados imóveis no qual tenha se interessado. Tendo assim, maior facilidade em analizar vários imóveis ao mesmo tempo, e futuramente escolher a oportunidade que mais se adequa ao seu perfil.
                    Seus dados serão estritamente utilizados a fim de diferenciar você dos outros usuários da rede, e não podem ser processados ou vendidos para terceiros. Além do sigilo e da privacidade no armazenamento dos dados sensíveis, seguindo as ordens vigentes da LGPD (Lei geral de proteção de dados).</p>
            </div>
            <Footer />
        </div>
    );
}
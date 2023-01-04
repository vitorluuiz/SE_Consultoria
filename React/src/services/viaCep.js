import axios from "axios"

export function Consult(cep) {
    axios.get('http://viacep.com.br/ws/' + cep + '/json/')
        .then(response => {
            var bairro = response.data.bairro
            return bairro;
        })
}
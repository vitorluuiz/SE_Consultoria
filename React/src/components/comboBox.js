import * as React from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
    const [BairrosList, setBairrosList] = React.useState([]);
    const [isPulled, setPulled] = React.useState(false)


    const getBairros = () => {
        if (!isPulled) {
            axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/3550308/distritos')
                .then(response => {
                    if (response.status == 200) {
                        setBairrosList(response.data)
                        setPulled();
                    }
                })
        }
    }

    React.useEffect(getBairros, [])

    return (
        <Autocomplete
            disablePortal
            options={BairrosList}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Distrito" />}
        />
    );
}


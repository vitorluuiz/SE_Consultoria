export function FormatCelular(Celular) {
    if (Celular.length === 11) {
        let stringCelular = Celular.slice(2)
        return stringCelular;
    }
}

export function FormatDDD(Celular){
    if (Celular.length === 11) {
        let stringDDD = Celular.substr(0, 2);
        return stringDDD;
    }
}
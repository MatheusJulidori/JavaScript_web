class DateHelper {

    constructor() {
        throw new Error("DateHelper is static and should not be instantiated")
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;

    }

    static textoParaData(texto) {

        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error("Format must be aaaa-mm-dd") //Expressão regular que testa se texto tem o padrao aaaa - mm - dd\ d { 4 } = aaaa, 4 digitos, e assim por diante
        }

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

    }
}
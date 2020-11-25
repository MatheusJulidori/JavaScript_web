class ListaNegociacoes {
    constructor() {
        this._negociacoes = []
    }

    adicionaNaLista(negociacao) {
        if (!(negociacao instanceof Negociacao)) throw new Error("Invalid negotiation")

        this._negociacoes.push(negociacao)
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}
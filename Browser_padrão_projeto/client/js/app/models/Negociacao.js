class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        this._volume = valor * quantidade;
        Object.freeze(this);
    }

    get quantidade() {
        return this._quantidade;
    }

    get data() {
        let data = new Date(this._data.getTime());
        return data;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._volume;
    }

}
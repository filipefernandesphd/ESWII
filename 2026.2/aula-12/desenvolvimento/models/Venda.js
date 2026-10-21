const ItemVenda = require("./ItemVenda");

class Venda {
    constructor(id){
        if (id === undefined || id === null) {
            throw new Error("Informar ID da venda!");
        }

        this.id = id;
        this.itens = [];
    }

    adicionarItem(item){
        if(item == undefined || item == null || !(item instanceof ItemVenda)) {
            throw new Error("Adicione um produto válido!");
        }

        if(item.qtd == undefined || item.qtd == null || !Number.isInteger(item.qtd)) {
            throw new Error("Adicione uma quantidade válida!");
        }

        this.itens.push(item);
    }
}

module.exports = Venda;
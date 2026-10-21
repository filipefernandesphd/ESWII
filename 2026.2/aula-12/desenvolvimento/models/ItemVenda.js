const Produto = require("./Produto");

class ItemVenda {
    constructor(produto, qtd){
        this.produto = produto;
        this.qtd = qtd;
    }
}

module.exports = ItemVenda;
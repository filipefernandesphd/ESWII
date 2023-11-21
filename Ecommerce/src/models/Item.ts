export class ItemCtrl {
    private _nome: string;
    private _descricao: string;
    private _preco: number;

    constructor() {
        this._nome = "";
        this._descricao = "";
        this._preco = 0;
    }

    // Getters e Setters para o atributo 'nome'
    getNome(): string {
        return this._nome;
    }

    setNome(novoNome: string) {
        this._nome = novoNome;
    }

    // Getters e Setters para o atributo 'descricao'
    getDescricao(): string {
        return this._descricao;
    }

    setDescricao(novaDescricao: string) {
        this._descricao = novaDescricao;
    }

    // Getters e Setters para o atributo 'preco'
    getPreco(): number {
        return this._preco;
    }

    setPreco(novoPreco: number) {
        if (novoPreco >= 0) {
        this._preco = novoPreco;
        } else {
        console.log("O preço não pode ser negativo.");
        }
    }
}
  
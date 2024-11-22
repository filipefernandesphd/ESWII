export class Item {
    private nome!: string;
    private valor!: number;
    private quantidade!: number;

    // Set e Get Nome
    public setNome(nome: string): void {
        if(nome == ""){throw new Error("O nome deve ser informado!");}
        this.nome = nome;
    }

    public getNome(): string { 
        if(this.nome == undefined || this.nome == ""){ throw new Error("O nome do item deve ser definido!"); }
        return this.nome;
    }

    // Set e Get Valor
    public setValor(valor: number): void { 
        if(valor <=0){throw new Error("O valor deve ser maior que zero!");}
        this.valor = valor;
    }
    public getValor(): number { return this.valor; }

    // Set e Get Quanidade
    public setQuantidade(quantidade: number): void {
        if(quantidade <= 0){throw new Error("A quantidade deve ser maior que zero!");}
        this.quantidade = quantidade
    }
    public getQuantidade(): number { 
        if(this.quantidade == undefined){ throw new Error("A quantidade do item deve ser definida!"); }
        return this.quantidade;
    }

    // Retorna o valor total considerando a quantidade e o preco unitário
    public totalItem(): number { 
        if(this.valor == undefined || this.valor <=0){throw new Error("O valor deve ser informado!");}
        if(this.quantidade == undefined || this.quantidade <=0){throw new Error("A quanidade deve ser informada!");}
        return this.quantidade * this.valor;
    }
}
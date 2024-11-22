import { Pagamento } from "./Pagamento";
import { IPagamentoAvista } from "./IPagamentoAvista";

export class PagamentoAvista extends Pagamento implements IPagamentoAvista {
    private nome!: string;
    private valorMinimo!: number;
    private valorMaximo!: number;

    // Set e Get Nome
    public setNome(nome: string): void {
        if(nome == ""){throw new Error("O nome do pagamento deve ser informado!");}
        this.nome = nome;
    }

    public getNome(): string { 
        if(this.nome == undefined){ throw new Error("O nome do pagamento deve ser definido!"); }
        return this.nome;
    }
    
    // Set e Get valor mínimo da compra
    public setValorMininoCompra(valor: number): void {
        if(valor <=0){throw new Error("O valor mínimo para compra deve ser informado!");}
        if(valor < 10){throw new Error("O valor mínimo para compra deve ser R$ 10,00!");}
        this.valorMinimo = valor;
    }

    public getValorMininoCompra(): number {
        if(this.valorMinimo == undefined){ throw new Error("O valor mínimo deve ser definido!"); }
        return this.valorMinimo;
    }

    // Set e Get valor máximo da compra
    public setValorMaximoCompra(valor: number): void {
        if(valor <=0){throw new Error("O valor máximo para compra deve ser informado!");}
        if(valor > 100000){throw new Error("Compras acima de R$ 100.000,00 não serão efetuadas pelo app. Entre em contato por telefone.");}
        this.valorMaximo = valor;
    }

    public getValorMaximoCompra(): number {
        if(this.valorMaximo == undefined){ throw new Error("O valor máximo deve ser definido!"); }
        return this.valorMaximo;
    }
}
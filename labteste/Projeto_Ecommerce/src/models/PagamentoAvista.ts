import { Pagamento } from "./Pagamento";
import { IPagamentoAvista } from "./IPagamentoAvista";

export class PagamentoAvista extends Pagamento implements IPagamentoAvista {
    private nome!: string;
    private valorMinimo!: number;

    // Set e Get Nome
    public setNome(nome: string): void {
        if(this.nome == undefined || this.nome == ""){throw new Error("O nome deve ser informado!");}
        this.nome = nome;
    }
    public getNome(): string { return this.nome; }
    
    // Set e Get valor mínimo da compra
    public setValorMininoCompra(valor: number): void {
        if(this.valorMinimo == undefined || this.valorMinimo <=0){throw new Error("O valor mínimo para compra deve ser informado!");}
        if(this.valorMinimo < 10){throw new Error("O valor mínimo para compra deve ser R$ 10,00!");}
        this.valorMinimo = valor;
    }

    public getValorMininoCompra(): number {
        return this.valorMinimo;
    }
}
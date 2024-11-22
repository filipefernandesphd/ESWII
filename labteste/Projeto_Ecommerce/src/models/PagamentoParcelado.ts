import { Pagamento } from "./Pagamento";
import { IPagamentoParcelado } from "./IPagamentoParcelado";

export class PagamentoParcelado extends Pagamento implements IPagamentoParcelado {
    private nome!: string;
    private valorMinimo!: number;
    private valorMaximo!: number;
    private parcelaMaxima!: number;
    
    // Set e Get Nome
    public setNome(nome: string): void {
        if(this.nome == undefined || this.nome == ""){throw new Error("O nome deve ser informado!");}
        this.nome = nome;
    }

    public getNome(): string { return this.nome; }
    
    // Set e Get valor mínimo da compra
    public setValorMininoCompra(valor: number): void {
        if(this.valorMinimo==undefined || this.valorMinimo <=0){throw new Error("O valor mínimo para compra deve ser informado!");}
        if(this.valorMinimo <10){throw new Error("O valor mínimo para compra deve ser R$ 10,00!");}
        this.valorMinimo = valor;
    }

    public getValorMininoCompra(): number {
        return this.valorMinimo;
    }

    // Set e Get da quantidade de parcelas
    setQuantidadeMaximaParcelas(valor: number): void {
        if(this.parcelaMaxima == undefined || this.parcelaMaxima == 0){throw new Error("A quantidade de parcelas para compra deve ser informada!");}
        if(!Number.isInteger(this.parcelaMaxima)){throw new Error("A quantidade de parcelas deve ser um número inteiro!");}

        if(this.valorMinimo == undefined || this.valorMinimo == 0){throw new Error("O valor mínimo deve ser informado!");}
        if(this.valorMaximo == undefined || this.valorMaximo == 0){throw new Error("O valor máximo deve ser informado!");}
        
        if(this.parcelaMaxima == 3 && this.valorMinimo != 100){throw new Error("O valor mínimo deve ser R$ 100,00!");}
        if(this.parcelaMaxima == 3 && this.valorMaximo != 300){throw new Error("O valor máximo deve ser R$ 300,00!");}

        if(this.parcelaMaxima == 5 && this.valorMinimo <= 300){throw new Error("O valor mínimo deve ser maior que R$ 300,00!");}
        if(this.parcelaMaxima == 5 && this.valorMaximo > 100000){throw new Error("O valor máximo deve ser até R$ 100.000,00!");}

        this.parcelaMaxima = valor;
    }
    getQuantidadeMaximaParcelas(valor: number): number {
        return this.parcelaMaxima;
    }
}

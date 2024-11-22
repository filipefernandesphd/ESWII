import { Pagamento } from "./Pagamento";
import { IPagamentoParcelado } from "./IPagamentoParcelado";

export class PagamentoParcelado extends Pagamento implements IPagamentoParcelado {
    private nome!: string;
    private valorMinimo!: number;
    private valorMaximo!: number;
    private parcelaMaxima!: number;
    
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
        if(valor <10){throw new Error("O valor mínimo para compra deve ser R$ 10,00!");}
        this.valorMinimo = valor;
    }

    public getValorMininoCompra(): number {
        if(this.valorMinimo == undefined){ throw new Error("O valor mínimo deve ser definido!"); }
        return this.valorMinimo;
    }

    // Set e Get valor máximo da compra
    public setValorMaximoCompra(valor: number): void {
        if(valor <=0){throw new Error("O valor mínimo para compra deve ser informado!");}
        if(valor > 100000){throw new Error("Compras acima de R$ 100.000,00 não serão efetuadas pelo app. Entre em contato por telefone.");}
        this.valorMaximo = valor;
    }

    public getValorMaximoCompra(): number {
        if(this.valorMaximo == undefined){ throw new Error("O valor máximo deve ser definido!"); }
        return this.valorMaximo;
    }

    // Set e Get da quantidade de parcelas
    setQuantidadeMaximaParcelas(valor: number): void {
        if(valor <=0){throw new Error("O valor da parcela deve ser informado!");}
        if(!Number.isInteger(valor)){throw new Error("A quantidade de parcelas deve ser um número inteiro!");}

        if(this.valorMinimo == undefined || this.valorMinimo == 0){throw new Error("O valor mínimo deve ser informado!");}
        if(this.valorMaximo == undefined || this.valorMaximo == 0){throw new Error("O valor máximo deve ser informado!");}
        
        if(valor == 3 && this.valorMinimo != 100){throw new Error("O valor mínimo deve ser R$ 100,00!");}
        if(valor == 3 && this.valorMaximo != 300){throw new Error("O valor máximo deve ser R$ 300,00!");}

        if(valor == 5 && this.valorMinimo <= 300){throw new Error("O valor mínimo deve ser maior que R$ 300,00!");}
        if(valor == 5 && this.valorMaximo > 100000){throw new Error("O valor máximo deve ser até R$ 100.000,00!");}

        this.parcelaMaxima = valor;
    }
    
    getQuantidadeMaximaParcelas(): number {
        if(this.parcelaMaxima == undefined){ throw new Error("O valor da parcela deve ser definida!"); }
        return this.parcelaMaxima;
    }
}

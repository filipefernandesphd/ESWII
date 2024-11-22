import { Item } from "./Item";
import { Pagamento } from "./Pagamento";

export class Carrinho {
    private itens: Item[] = [];         // lista de itens do carrinho
    private subtotal!: number           // preço total SEM frete
    private frete!: number;             // preço do frete
    private total!: number;             // preço total COM frete
    private tipoPagamento!: Pagamento   // tipo de pagamento

    // adiciona um item ao carrinho
    public adicionarItem(item: Item): void {
        this.itens.push();
    }   

    // mostra todos os itens do carrinho
    public listarItens(): Item[] {
        return this.itens;
    }

    public calcularSubTotal(): number {
        return this.subtotal = this.itens.reduce((soma, item)=> soma + item.totalItem(), 0);
    }

    // adiciona o preço do frete
    public adicionarFrete(valor: number): void {
        if(this.frete == undefined || this.frete <=0){throw new Error("O frete deve ser informado!");}
        this.frete = valor;
    }

    // calcula o preço total a pagar
    public calcularTotal(): number {
        if(this.frete == undefined || this.frete <=0){ throw new Error("O frete deve ser informado!"); }
        if(this.subtotal == undefined || this.subtotal <=0){ throw new Error("O subtotal deve ser calculado!"); }
        return this.total = this.subtotal + this.frete;
    }

    // finalizar compra
    public finalizarCompra(): void {
        
    }
}
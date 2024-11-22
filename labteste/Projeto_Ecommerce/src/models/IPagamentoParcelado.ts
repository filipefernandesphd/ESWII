export interface IPagamentoParcelado {
    setNome(valor:string): void;
    getNome(): string;
    
    setValorMininoCompra(valor:number): void;
    getValorMininoCompra(valor:number): number;

    setQuantidadeMaximaParcelas(valor:number): void;
    getQuantidadeMaximaParcelas(valor:number): number;
}
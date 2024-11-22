export interface IPagamentoAvista {
    setNome(valor:string): void;
    getNome(): string;
    
    setValorMininoCompra(valor:number): void;
    getValorMininoCompra(): number;
}
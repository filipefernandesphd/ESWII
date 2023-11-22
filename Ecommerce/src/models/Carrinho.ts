import { Item } from "./Item";
import { Usuario } from "./Usuario";

export class Carrinho {
    private _usuario: Usuario;
    private _itens: Item[];
    private _cupomDesconto: string;
    private _cidade: string = "";
  
    constructor(usuario: Usuario, itens: Item[], cupomDesconto: string) {
      this._usuario = usuario;
      this._itens = [];
      this._cupomDesconto = cupomDesconto;
    }
  
    // Getters e Setters para o atributo 'usuario'
    getUsuario(): Usuario {
      return this._usuario;
    }
  
    setUsuario(novoUsuario: Usuario) {
      this._usuario = novoUsuario;
    }
  
    // Getters e Setters para o atributo 'itens'
    getItens(): Item[] {
      return this._itens;
    }
  
    setItens(novosItens: Item[]) {
      this._itens = novosItens;
    }
  
    // Getters e Setters para o atributo 'cupomDesconto'
    getCupomDesconto(): string {
      return this._cupomDesconto;
    }
  
    setCupomDesconto(novoCupomDesconto: string) {
      this._cupomDesconto = novoCupomDesconto;
    }

    // Getters e Setters para o atributo 'cidade'
    getCidade(){
      return this._cidade;
    }

    setCidade(cidade: string){
      this._cidade = cidade;
    }
}

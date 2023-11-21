import { ItemCtrl } from "./Item";
import { Usuario } from "./Usuario";

export class Carrinho {
    private _usuario: Usuario;
    private _itens: ItemCtrl[];
    private _cupomDesconto: string;
  
    constructor(usuario: Usuario, itens: ItemCtrl[], cupomDesconto: string) {
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
    getItens(): ItemCtrl[] {
      return this._itens;
    }
  
    setItens(novosItens: ItemCtrl[]) {
      this._itens = novosItens;
    }
  
    // Getters e Setters para o atributo 'cupomDesconto'
    getCupomDesconto(): string {
      return this._cupomDesconto;
    }
  
    setCupomDesconto(novoCupomDesconto: string) {
      this._cupomDesconto = novoCupomDesconto;
    }
}

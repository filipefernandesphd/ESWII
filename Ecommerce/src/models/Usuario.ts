import { Request, Response } from 'express';

export class Usuario {
    private _nome: string;
    private _email: string;
  
    constructor(nome: string, email:string) {
      this._nome = nome;
      this._email = email;
    }
  
    // Métodos de acesso para o atributo 'nome'
    getNome(): string {
      return this._nome;
    }
  
    setNome(novoNome: string) {
      this._nome = novoNome;
    }
  
    // Métodos de acesso para o atributo 'email'
    getEmail(): string {
      return this._email;
    }
  
    setEmail(novoEmail: string) {
      this._email = novoEmail;
    }
  }
  
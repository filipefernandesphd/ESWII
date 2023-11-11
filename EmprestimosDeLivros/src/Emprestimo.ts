import { Aluno } from "./Aluno";
import { Livro } from "./Livro";

export class Emprestimo {
    private aluno: Aluno;
    private livro: Livro;
    private devolucao: Date;

    constructor(aluno: Aluno, livro: Livro, devolucao: Date){
        this.aluno = aluno;
        this.livro = livro;
        this.devolucao = devolucao;
    }

    getAluno(){
        return this.aluno;
    }

    getLivro(){
        return this.livro;
    }

    getDevolucao(){
        return this.devolucao;
    }
}
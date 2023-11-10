"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
class Emprestimo {
    constructor(aluno, livro, devolucao) {
        this.aluno = aluno;
        this.livro = livro;
        this.devolucao = devolucao;
    }
    getAluno() {
        return this.aluno;
    }
    getLivro() {
        return this.livro;
    }
    getDevolucao() {
        return this.devolucao;
    }
}
exports.Emprestimo = Emprestimo;

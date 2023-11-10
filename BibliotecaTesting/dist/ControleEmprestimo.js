"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControleEmprestimo = void 0;
const Emprestimo_1 = require("./Emprestimo");
class ControleEmprestimo {
    constructor() {
        this.emprestimos = [];
    }
    getEmprestimos() {
        return this.emprestimos;
    }
    realizarEmprestimo(aluno, livro) {
        // verificar se há emprestimos
        if (this.emprestimos.length == 0) {
            this.emprestarLivro(aluno, livro, this.gerarDataDevolucao());
        }
        else {
            // verificar se o livro já está emprestado
            for (const emprestimo of this.emprestimos) {
                // se o livro já está emprestado...
                if (livro === emprestimo.getLivro()) {
                    console.log(`${aluno}, não é possível realizar o empréstimo do livro '${livro.getTitulo()}'.`);
                }
                else {
                    this.emprestarLivro(aluno, livro, this.gerarDataDevolucao());
                }
            }
        }
    }
    emprestarLivro(aluno, livro, devolucao) {
        this.emprestimos.push(new Emprestimo_1.Emprestimo(aluno, livro, devolucao));
        console.log(`Livro '${livro.getTitulo()}' emprestado para o aluno '${aluno.getNome()}' com sucesso! \nA data de devolução é ${devolucao}`);
    }
    gerarDataDevolucao() {
        const dataAtual = new Date();
        const dataDevolucao = new Date(dataAtual.getTime() + 7 * 24 * 60 * 60 * 1000);
        return dataDevolucao;
    }
}
exports.ControleEmprestimo = ControleEmprestimo;

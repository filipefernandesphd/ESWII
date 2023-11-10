"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
class Aluno {
    // Construtor
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
}
exports.Aluno = Aluno;

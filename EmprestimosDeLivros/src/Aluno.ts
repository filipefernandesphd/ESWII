export class Aluno {
    // Atributos da classe
    private nome: string;
    private matricula: number;

    // Construtor
    constructor(nome: string, matricula: number) {
        this.nome = nome;
        this.matricula = matricula;
    }

    getNome(){
        return this.nome;
    }

    setNome(nome: string){
        this.nome = nome;
    }

    getMatricula(){
        return this.matricula;
    }

    setMatricula(matricula: number){
        this.matricula = matricula;
    }
}
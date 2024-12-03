import { Aluno } from "./Aluno";
import { Avaliacao } from "./Avaliacao";

export class Disciplina {
    private nome!: string;
    private codigo!: string;
    private alunos: Aluno[] = [];
    
    // Getters e Setters
    getNome(): string {
        if (this.nome === undefined) { throw new Error('O nome não pode estar indefinido!'); }
        return this.nome;
    }

    setNome(valor: string) {
        if (valor == '') { throw new Error('O nome não pode estar vazio!'); }
        this.nome = valor;
    }

    // Getters e Setters
    getCodigo(): string {
        if (this.codigo === undefined) { throw new Error('O código não pode estar indefinido!'); }
        return this.codigo;
    }

    setCodigo(valor: string) {
        if (valor == '' || !this.verificarFormato(valor)) { throw new Error('O código deve ser válido!'); }
        this.codigo = valor;
    }

    // Verificar codigo
    /* istanbul ignore next */
    private verificarFormato(str: string): boolean {
        // Expressão regular para validar o formato
        const regex = /^[A-Za-z]{3}\d{5}$/;
      
        // Testa a string contra o padrão
        return regex.test(str);
      }

    getAlunos(): Aluno[]{
        return this.alunos;
    }

    adicionarAluno(aluno: Aluno): void {
        if( !(aluno instanceof Aluno) ){ throw new Error('Deve ser adicionado um aluno!');}
        this.alunos.push(aluno);
    }

}
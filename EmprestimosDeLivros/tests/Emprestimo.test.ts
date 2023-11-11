import { Aluno } from "../src/Aluno";
import { Livro } from "../src/Livro";
import { Emprestimo } from "../src/Emprestimo";

describe('Emprestimo', ()=>{
    // deve ser criado corretamente
    it('deve ser criado corretamente', ()=>{
        const aluno = new Aluno("José das Couves", 123456);
        const livro = new Livro("Poeira em alto mar");
        const devolucao = new Date(2023, 12, 5);

        const emprestimo = new Emprestimo(aluno, livro, devolucao);

        expect(emprestimo.getAluno()).toBe(aluno);
        expect(emprestimo.getLivro()).toBe(livro);
        expect(emprestimo.getDevolucao()).toBe(devolucao);
    });
});
import { Aluno } from "../src/Aluno";
import { Livro } from "../src/Livro";
import { Emprestimo } from "../src/Emprestimo";
import { ControleEmprestimo } from "../src/ControleEmprestimo";

describe('Controle Emprestimo', ()=>{
    // deve retornar a lista de emprestimos vazia assim que é criado
    it('deve retornar a lista de emprestimos vazia assim que é criado', ()=>{
        const controleemprestimo = new ControleEmprestimo();
        expect(controleemprestimo.getEmprestimos().length).toBe(0);
    });

    // deve realizar um emprestimo corretamente
    it('deve realizar um emprestimo corretamente', ()=>{
        const controleemprestimo = new ControleEmprestimo();
        const aluno = new Aluno("José das Couves", 123456);
        const livro = new Livro("Poeira em alto mar");

        controleemprestimo.realizarEmprestimo(aluno, livro);
        const emprestimos = controleemprestimo.getEmprestimos();

        expect(emprestimos.length).toBe(1);
        expect(emprestimos[0].getAluno()).toBe(aluno);
        expect(emprestimos[0].getLivro()).toBe(livro);
    });

    // deve gerar a data de devolução 7 dias à frente
    it('deve gerar a data de devolução 7 dias à frente', ()=>{
        function converterData(data: Date): string{
            const dia = String(data.getDate()).padStart(2, '0');
            const mes = String(data.getMonth() + 1).padStart(2, '0');
            const ano = data.getFullYear();

            return `${dia}/${mes}/${ano}`;
        }
        
        function gerarDevolucao(): Date{
            const dataAtual = new Date();
            const dataDevolucao = new Date(dataAtual.getTime() + 7 * 24 * 60 * 60 * 1000);
            return dataDevolucao;
        }

        const controleemprestimo = new ControleEmprestimo();
        const aluno = new Aluno("José das Couves", 123456);
        const livro = new Livro("Poeira em alto mar");

        controleemprestimo.realizarEmprestimo(aluno, livro);
        const emprestimos = controleemprestimo.getEmprestimos();

        expect(converterData(emprestimos[0].getDevolucao())).toBe(converterData(gerarDevolucao()));
    });

    // deve negar empréstimo caso o livro já esteja emprestado
    it('deve negar empréstimo caso o livro já esteja emprestado', ()=>{
        const controleemprestimo = new ControleEmprestimo();
        const aluno1 = new Aluno("José das Couves", 123456);
        const aluno2 = new Aluno("Maria das Flores", 654321);
        const livro = new Livro("Poeira em alto mar");

        controleemprestimo.realizarEmprestimo(aluno1, livro);
        controleemprestimo.realizarEmprestimo(aluno2, livro);
        const emprestimos = controleemprestimo.getEmprestimos();

        expect(emprestimos.length).toBe(1);
    });
});


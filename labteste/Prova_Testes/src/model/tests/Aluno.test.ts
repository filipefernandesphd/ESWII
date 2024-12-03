import crypto from 'crypto';
import { Aluno } from "../Aluno";

let aluno: Aluno;

beforeEach(()=>{
    aluno = new Aluno();
});

// Nome do aluno
describe('Nome do aluno', ()=>{
    // deve ser atribuído
    it('deve ser atribuído', ()=>{
        aluno.setNome('Filipe');
        expect(aluno.getNome()).toBe('Filipe');
    });

    // deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido
    it('deve lançar uma exceção quando chamar o getNome() e this.nome estiver indefinido', ()=>{
        expect( ()=>aluno.getNome() ).toThrow(/^O nome não pode estar indefinido!$/);
    });

    // deve lançar uma exceção quando for vazio
    it('deve lançar uma exceção quando o nome for vazio', ()=>{
        expect( ()=>aluno.setNome('') ).toThrow(/^O nome não pode estar vazio!$/);
    });
});

// Matrícula do aluno
describe('Matrícula do aluno', ()=>{
    // deve ser atribuído
    it('deve ser atribuído', ()=>{
        aluno.setMatricula('20241234');
        expect(aluno.getMatricula()).toEqual('20241234');
    });

    // deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido
    it('deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido', ()=>{
        expect( ()=>aluno.getMatricula() ).toThrow(/^A matrícula não pode estar indefinida!$/);
    });

    // deve lançar uma exceção quando for vazio ou se for inválido
    it('deve lançar uma exceção quando for vazio', ()=>{
        expect( ()=>aluno.setMatricula('') ).toThrow(/^A matrícula deve ser válida!$/);
        expect( ()=>aluno.setMatricula('1234') ).toThrow(/^A matrícula deve ser válida!$/);
    }); 
});

// CPF do aluno
describe('CPF do aluno', ()=>{
    // deve ser atribuído
    it('deve ser atribuído', ()=>{
        aluno.setCpf('12345678909');
        expect(aluno.getCpf()).toBe('12345678909');
    });

    // deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido
    it('deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido', ()=>{
        expect( ()=>aluno.getCpf() ).toThrow(/^O CPF não pode estar indefinido!$/);
    });

    // deve lançar uma exceção quando for vazio ou se for inválido
    it('deve lançar uma exceção quando for vazio ou se for inválido', ()=>{
        expect( ()=>aluno.setCpf('') ).toThrow(/^O CPF deve ser válido!$/);
        expect( ()=>aluno.setCpf('1234') ).toThrow(/^O CPF deve ser válido!$/);
    }); 
});

// E-mail do aluno
describe('E-mail do aluno', ()=>{
    // deve ser atribuído
    it('deve ser atribuído', ()=>{
        aluno.setEmail('filipe.fernandes@ifsudestemg.edu.br');
        expect(aluno.getEmail()).toBe('filipe.fernandes@ifsudestemg.edu.br');
    });

    // deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido
    it('deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido', ()=>{
        expect( ()=>aluno.getEmail() ).toThrow(/^O email não pode estar indefinido!$/);
    });

    // deve lançar uma exceção quando for vazio ou se for inválido
    it('deve lançar uma exceção quando for vazio ou se for inválido', ()=>{
        expect( ()=>aluno.setEmail('') ).toThrow(/^O email deve ser válido!$/);

        expect( ()=>aluno.setEmail('asdf@asdf') ).toThrow(/^O email deve ser válido!$/);
        expect( ()=>aluno.setEmail('asdf@') ).toThrow(/^O email deve ser válido!$/);
        expect( ()=>aluno.setEmail('@') ).toThrow(/^O email deve ser válido!$/);
        expect( ()=>aluno.setEmail('@com.br') ).toThrow(/^O email deve ser válido!$/);
    }); 
});

// Senha do aluno
describe('Senha do aluno', ()=>{
    // deve ser atribuído
    it('deve ser atribuído', ()=>{
        aluno.setSenha('A@1asdfg');
        expect(aluno.getSenha()).toBe('A@1asdfg');
    });

    // deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido
    it('deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido', ()=>{
        expect( ()=>aluno.getSenha() ).toThrow(/^A senha não pode estar indefinida!$/);
    });

    // deve lançar uma exceção quando for vazio ou se for inválido
    it('deve lançar uma exceção quando for vazio ou se for inválido', ()=>{
        expect( ()=>aluno.setSenha('') ).toThrow(/^A senha deve ser válida!$/);                     // senha vazia

        expect( ()=>aluno.setSenha('asdfghjkl') ).toThrow(/^A senha deve ser válida!$/);            // somente letras minúsculas
        expect( ()=>aluno.setSenha('WEDFTGGHHJ') ).toThrow(/^A senha deve ser válida!$/);           // somente letras maiúsculas
        expect( ()=>aluno.setSenha('1234567890') ).toThrow(/^A senha deve ser válida!$/);           // somente números
        expect( ()=>aluno.setSenha('!@#$%ˆ&*()(') ).toThrow(/^A senha deve ser válida!$/);          // somente caracteres especiais
    }); 
});
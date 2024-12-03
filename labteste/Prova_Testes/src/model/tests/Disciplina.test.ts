import { Disciplina } from "../Disciplina";
import { Aluno } from "../Aluno";

let disciplina: Disciplina;

beforeEach(()=>{
    disciplina = new Disciplina();
});

// Nome da disciplina
describe('Nome da disciplinca', ()=>{
    // deve ser atribuído
    it('deve ser atribuído', ()=>{
        disciplina.setNome('Engenharia de Software');
        expect(disciplina.getNome()).toBe('Engenharia de Software');
    });

    // deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido
    it('deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido', ()=>{
        expect( ()=>disciplina.getNome() ).toThrow(/^O nome não pode estar indefinido!$/);
    });

    // deve lançar uma exceção quando for vazio
    it('deve lançar uma exceção quando for vazio', ()=>{
        expect( ()=>disciplina.setNome('') ).toThrow(/^O nome não pode estar vazio!$/);
    });
});


// Código da disciplina
describe('Código da disciplinca', ()=>{
    // deve ser atribuído
    it('deve ser atribuído', ()=>{
        disciplina.setCodigo('INF03068');
        expect(disciplina.getCodigo()).toBe('INF03068');
    });

    // deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido
    it('deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido', ()=>{
        expect( ()=>disciplina.getCodigo() ).toThrow(/^O código não pode estar indefinido!$/);
    });

    // deve lançar uma exceção quando for vazio ou inválido
    it('deve lançar uma exceção quando for vazio ou inválido', ()=>{
        expect( ()=>disciplina.setCodigo('') ).toThrow(/^O código deve ser válido!$/);

        expect( ()=>disciplina.setCodigo('AB12345') ).toThrow(/^O código deve ser válido!$/);
        expect( ()=>disciplina.setCodigo('abcd1234') ).toThrow(/^O código deve ser válido!$/);
        expect( ()=>disciplina.setCodigo('ABC12A45') ).toThrow(/^O código deve ser válido!$/);
    });
});


// Lista de alunos
describe('Lista de alunos', ()=>{
    let al1 = new Aluno();
    let al2 = new Aluno();
    let al3 = new Aluno();

    // deve ser atribuído
    it('deve ser atribuído', ()=>{
        disciplina.adicionarAluno(al1);
        disciplina.adicionarAluno(al2);
        disciplina.adicionarAluno(al3);

        expect(disciplina.getAlunos()).toContain(al1);
        expect(disciplina.getAlunos()).toContain(al2);
        expect(disciplina.getAlunos()).toContain(al3);
    });

    // deve lançar uma exceção quando não adicionar um aluno
    it('deve lançar uma exceção quando não adicionar um aluno', ()=>{
        let outroobjeto: any;
        expect(()=>disciplina.adicionarAluno(outroobjeto)).toThrow(/^Deve ser adicionado um aluno!$/);
    });
});


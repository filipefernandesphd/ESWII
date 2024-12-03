import { Disciplina } from "../Disciplina";
import { Aluno } from "../Aluno";

let disciplina: Disciplina;
beforeEach(()=>{
    disciplina = new Disciplina();
});

describe("Nome da disciplina", ()=>{
    it("deve ser atribuído", ()=>{
        disciplina.setNome("Engenharia de Software II");
        expect(disciplina.getNome()).toEqual("Engenharia de Software II");
    });

    it("deve lançar um erro quando não for informado", ()=>{
        expect( ()=>disciplina.setNome('') ).toThrow(/^O nome não pode estar vazio!$/);
    });

    it("não pode ser indefinido", ()=>{ 
        expect( ()=>disciplina.getNome()).toThrow(/^O nome não pode estar indefinido!$/);
    });
});

describe("O código da disciplina", ()=>{
    it("deve ser atribuído", ()=>{
        disciplina.setCodigo("abc56895");
        expect(disciplina.getCodigo()).toEqual("abc56895");
    });
    it("deve lançar um erro quando não for válido", ()=>{
        expect( ()=>disciplina.setCodigo('') ).toThrow(/^O código deve ser válido!$/);
        expect( ()=>disciplina.setCodigo('abc') ).toThrow(/^O código deve ser válido!$/);
        expect( ()=>disciplina.setCodigo('15698000') ).toThrow(/^O código deve ser válido!$/);
        expect( ()=>disciplina.setCodigo('a1000000') ).toThrow(/^O código deve ser válido!$/);
    });
    it("não pode ser indefinido", ()=>{ 
        expect( ()=>disciplina.getCodigo()).toThrow(/^O código não pode estar indefinido!$/);
    });
});

describe("Ao adicionar aluno na disciplina", ()=>{
    let aluno: Aluno;
    aluno = new Aluno();
    aluno.setNome("Gustavo");

    it("deve ser atribuído o aluno", ()=>{
        disciplina.adicionarAluno(aluno);
        expect(disciplina.getAlunos()).toContain(aluno);
    });

    it("deve lançar um erro quando não for um objeto do tipo aluno", ()=>{
        let obj: any
        expect( ()=>disciplina.adicionarAluno(obj)).toThrow(/^Deve ser adicionado um aluno!$/);
    });
});
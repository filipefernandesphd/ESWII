import { Disciplina } from "../Disciplina";
import { Aluno } from "../Aluno";

let disc : Disciplina;
let aluno1 : Aluno;
let aluno2 : Aluno;

beforeAll(()=>{
    aluno1 = new Aluno();
    aluno2 = new Aluno();
})

describe("Nome da disciplina", ()=>{
    beforeEach(()=>{
        disc = new Disciplina();
    })
    it("deve atribuir",()=>{
        disc.setNome("Teste");
        expect(disc.getNome()).toEqual("Teste");
    })
    it("deve lançar exceção caso esteja errado", ()=>{
        expect(()=>disc.getNome()).toThrow(/^O nome não pode estar indefinido!$/);
        expect(()=>disc.setNome('')).toThrow(/^O nome não pode estar vazio!$/);
    })
})

describe("Codigo da Disciplina", ()=>{
    beforeEach(()=>{
        disc = new Disciplina();
    })
    it("deve atribuir", ()=>{
        // ABC12345 codigo da disc 
        disc.setCodigo("ABC12345");
        expect(disc.getCodigo()).toEqual("ABC12345");
        disc.setCodigo("abc12345");
        expect(disc.getCodigo()).toEqual("abc12345");
    })
    it("deve lançar exceção", ()=>{
        expect(()=>disc.getCodigo()).toThrow(/^O código não pode estar indefinido!$/);
        expect(()=>disc.setCodigo("AB123456")).toThrow(/^O código deve ser válido!$/);
        expect(()=>disc.setCodigo("ABCD3456")).toThrow(/^O código deve ser válido!$/);
        expect(()=>disc.setCodigo("ABC1234")).toThrow(/^O código deve ser válido!$/);
        expect(()=>disc.setCodigo("ABC123456")).toThrow(/^O código deve ser válido!$/);
        expect(()=>disc.setCodigo("asd12sd1232")).toThrow(/^O código deve ser válido!$/);
    })
})

describe("Lista de Alunos", ()=>{
    beforeEach(()=>{
        disc = new Disciplina();
    })
    let obj : any;

    it("deve adicionar certo", ()=>{
        disc.adicionarAluno(aluno1);
        disc.adicionarAluno(aluno2);
        expect(disc.getAlunos()).toContain(aluno1);
        expect(disc.getAlunos()).toContain(aluno2);
    })

    it("deve lançar exceção caso seja adicionar algo alem de objeto de Aluno", ()=>{
        expect(()=>disc.adicionarAluno(obj)).toThrow(/^Deve ser adicionado um aluno!$/);
    })

})
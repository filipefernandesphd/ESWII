import { Disciplina } from "../Disciplina";
import { Aluno } from "../Aluno";

let disciplina: Disciplina;
let test:Aluno;

beforeEach(()=>{
    disciplina = new Disciplina();
    test = new Aluno();
});

describe("Nome da disciplina", ()=>{
    it("deve ser atribuido", ()=>{
        disciplina.setNome("Matematica");
        expect(disciplina.getNome()).toEqual("Matematica");
    });

    it("deve lançar um erro se retornar sem nada", ()=>{
        try {
            disciplina.getNome();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })

    it("deve lançar um erro quando não for informado", ()=>{
        try {
            disciplina.setNome("");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});


describe("Codigo", ()=>{
    it("deve ser atribuido min", ()=>{
        disciplina.setCodigo("AAA11111");
        expect(disciplina.getCodigo()).toEqual("AAA11111");
    });

    it("deve ser atribuido max", ()=>{
        disciplina.setCodigo("zzz99999");
        expect(disciplina.getCodigo()).toEqual("zzz99999");
    });

    it("deve lançar um erro se retornar sem nada", ()=>{
        try {
            disciplina.getCodigo();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })

    it("deve lançar um erro quando não for informado", ()=>{
        try {
            disciplina.setCodigo("");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando nao for informado menos 3  letras", ()=>{
        try {
            disciplina.setCodigo("AA555555");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando nao for informado mais 3 letras", ()=>{
        try {
            disciplina.setCodigo("AAAA5555");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando nao for informado menos 8 caracteries", ()=>{
        try {
            disciplina.setCodigo("AA55555");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando nao for informado mais 8 caracateries", ()=>{
        try {
            disciplina.setCodigo("AAAA55555");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});



describe("Aluno", ()=>{
    it("deve ser atribuido", ()=>{
        disciplina.adicionarAluno(test);
        expect(disciplina.getCodigo()).toEqual(test);
    });

    it("deve lançar um erro se retornar sem nada", ()=>{
        try {
            disciplina.getAlunos();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
    
})
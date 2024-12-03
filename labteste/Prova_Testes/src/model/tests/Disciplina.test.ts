import {Disciplina} from "../Disciplina";
import {Aluno} from "../Aluno";

let disciplina: Disciplina;
let a1: Aluno;
let a2: Aluno;
let a3: Aluno;

beforeAll(()=>{
    disciplina = new Disciplina();
    a1 = new Aluno();
    a2 = new Aluno();
    a3 = new Aluno();
});

describe("Nome da Disciplina", ()=>{
    it("deve lançar um erro quando não for informada", ()=>{
        try{
            disciplina.setNome("");
        } catch(error){
            expect(error).toBeInstanceOf(Error);
        }
    })

    it("deve ser atribuído", ()=>{
        disciplina.setNome("Engenharia de Software II");
        expect(disciplina.getNome()).toEqual("Engenharia de Software II");
    })

    describe("Código da Disciplina", ()=>{
        it("deve lançar um erro quando for inválido", ()=>{
            try{
                disciplina.setCodigo("");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                disciplina.setCodigo("4343k");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                disciplina.setCodigo("122");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                disciplina.setCodigo("lllls");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                disciplina.setCodigo("llls00000");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                disciplina.setCodigo("lll000002");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }
        })

        it("Deve ser atribuída quando", ()=>{
            disciplina.setCodigo("lll12345")
            expect(disciplina.getCodigo()).toEqual("lll12345");
        })
    })

    describe("Disciplina", ()=>{

        let any: any;
        
        it("deve adicionar um aluno quando existir um objeto", ()=>{
            disciplina.adicionarAluno(a1);
            expect(disciplina.getAlunos()).toContain(a1);
            disciplina.adicionarAluno(a2);
            expect(disciplina.getAlunos()).toContain(a2);
            disciplina.adicionarAluno(a3);
            expect(disciplina.getAlunos()).toContain(a3);
        })

        it("Deve lançar um erro quando o objeto não for do tipo Aluno", ()=>{
            try{
                disciplina.adicionarAluno(any)
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }
    });


    })
})
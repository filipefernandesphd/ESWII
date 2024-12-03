import { Aluno } from "../Aluno";
import { Disciplina } from "../Disciplina";

let disc:Disciplina;

beforeAll(()=>{
    disc = new Disciplina;
});

describe("Definir disciplina",()=>{
    describe("Definir nome",()=>{
        it("Deve gerar um erro se o nome for inválida",()=>{
            try {
                disc.setNome("");
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
        it("Deve receber um nome válido",()=>{
            disc.setNome("Teste");
            expect(disc.getNome()).toEqual("Teste");
        });
    });

    describe("Definir código",()=>{
        it("Deve gerar um erro se o código for válido",()=>{
            expect(()=>disc.setCodigo("abcqwer")).toThrow(/^O código deve ser válido!$/);
            expect(()=>disc.setCodigo("12345678")).toThrow(/^O código deve ser válido!$/);
            expect(()=>disc.setCodigo("as45678")).toThrow(/^O código deve ser válido!$/);
            expect(()=>disc.setCodigo("vcas45678")).toThrow(/^O código deve ser válido!$/);
            expect(()=>disc.setCodigo("v@s45678")).toThrow(/^O código deve ser válido!$/);
            expect(()=>disc.setCodigo("!@s45678")).toThrow(/^O código deve ser válido!$/);
        });
        it("Deve receber um código válido",()=>{
            disc.setCodigo("abc12345");
            expect(disc.getCodigo()).toEqual("abc12345");
        });
    });

    describe("Definir alunos",()=>{
        it("Deve gerar um erro se o aluno for inválido",()=>{
            let aluno = new Aluno;
            try {
                disc.adicionarAluno(aluno);
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
        
        it("Deve receber um aluno válido",()=>{
            let aluno = new Aluno;
            aluno.setNome("Teste");
            aluno.setEmail("teste@teste.com")
            aluno.setCpf("12345678909");
            aluno.setMatricula("19864444");
            aluno.setSenha("Teste@12389");
                
            disc.adicionarAluno(aluno);
            
            expect(disc.getAlunos()).toBeInstanceOf(Array<Aluno>);
        });
    });
});
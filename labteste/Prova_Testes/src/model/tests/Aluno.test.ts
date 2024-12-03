import { Aluno } from "../Aluno";

let aluno:Aluno;

beforeAll(()=>{
    aluno = new Aluno();
});

describe("Definir aluno",()=>{
    describe("Definir nome",()=>{
        it("Deve gerar um erro se o nome for inválido",()=>{
            try {
                aluno.setNome("");
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
        it("Deve receber um nome válido",()=>{
            aluno.setNome("Teste");
            expect(aluno.getNome()).toEqual("Teste");
        });
    });

    describe("Definir matricula",()=>{
        it("Deve gerar um erro se o matricula for inválida",()=>{
            expect(()=>aluno.setMatricula("")).toThrow(/^A matrícula deve ser válida!$/);
            expect( ()=>aluno.setMatricula('gshhjagdhagj') ).toThrow(/^A matrícula deve ser válida!$/);
            expect( ()=>aluno.setMatricula('1234567') ).toThrow(/^A matrícula deve ser válida!$/);
            expect( ()=>aluno.setMatricula('123456789') ).toThrow(/^A matrícula deve ser válida!$/);
            expect( ()=>aluno.setMatricula('123ds678') ).toThrow(/^A matrícula deve ser válida!$/);
        });
        it("Deve receber um matricula válida",()=>{
            aluno.setMatricula("19864444");
            expect(aluno.getMatricula()).toEqual("19864444");
        });
    });

    describe("Definir CPF",()=>{
        it("Deve gerar um erro se o CPF for inválido",()=>{
            expect(()=>aluno.setCpf("")).toThrow(/^O CPF deve ser válido!$/);
            expect( ()=>aluno.setCpf('gshhjagdhagj') ).toThrow(/^O CPF deve ser válido!$/);
            expect( ()=>aluno.setCpf('1234567891') ).toThrow(/^O CPF deve ser válido!$/);
            expect( ()=>aluno.setCpf('123456789122') ).toThrow(/^O CPF deve ser válido!$/);
            expect( ()=>aluno.setCpf('asd456789122') ).toThrow(/^O CPF deve ser válido!$/);
        });
        it("Deve receber um CPF válido",()=>{
            aluno.setCpf("12345678909");
            expect(aluno.getCpf()).toEqual("12345678909");
        });
    });

    describe("Definir Email",()=>{
        it("Deve gerar um erro se o Email for inválido",()=>{
            expect(()=>aluno.setEmail("")).toThrow(/^O email deve ser válido!$/);
            expect( ()=>aluno.setEmail('gshhjagdhagj') ).toThrow(/^O email deve ser válido!$/);
            expect( ()=>aluno.setEmail('1234567891') ).toThrow(/^O email deve ser válido!$/);
            expect( ()=>aluno.setEmail('sdadadads.com') ).toThrow(/^O email deve ser válido!$/);
            expect( ()=>aluno.setEmail('asdas@sadas/sdad') ).toThrow(/^O email deve ser válido!$/);
            expect( ()=>aluno.setEmail('asdas@sadassdad') ).toThrow(/^O email deve ser válido!$/);
        });
        it("Deve receber um Email válido",()=>{
            aluno.setEmail("teste@teste.com");
            expect(aluno.getEmail()).toEqual("teste@teste.com");
        });
    });

    describe("Definir senha",()=>{
        it("Deve gerar um erro se o senha for inválida",()=>{
            expect(()=>aluno.setSenha("")).toThrow(/^A senha deve ser válida!$/);
            expect(()=>aluno.setSenha("1234567")).toThrow(/^A senha deve ser válida!$/);
            expect(()=>aluno.setSenha("12345678")).toThrow(/^A senha deve ser válida!$/);expect(()=>aluno.setSenha("asdfghjk")).toThrow(/^A senha deve ser válida!$/);
            expect(()=>aluno.setSenha("asdf1234")).toThrow(/^A senha deve ser válida!$/);expect(()=>aluno.setSenha("!@#$%¨&*")).toThrow(/^A senha deve ser válida!$/);
        });
        it("Deve receber um senha válida",()=>{
            aluno.setSenha("Teste@12389");
            expect(aluno.getSenha()).toEqual("Teste@12389");
        });
    });
});
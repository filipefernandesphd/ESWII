import { Aluno } from "../Aluno";

let aluno: Aluno;


beforeAll(()=>{
    aluno = new Aluno;
});

describe("Nome do aluno", ()=>{
    it("deve ser correspondido", ()=>{
        aluno.setNome("Roms");
        expect(aluno.getNome()).toEqual("Roms");
    });
    

    it("deve lançar um erro quando inválido", ()=>{
        try {
            aluno.setNome("");
        } catch (error) {
            expect(()=>aluno.setNome("")).toThrow('O nome não pode estar vazio!');
        }
    });
});

describe("Matricula do aluno", ()=>{
    it("deve lançar um erro quando incongruente", ()=>{
       try {
            aluno.setMatricula("00000000");

       } catch (error) {
            expect(()=>aluno.setMatricula("00000000")).toThrow('A matrícula deve ser válida!');  
       }
    });
    it("deve lançar um erro quando não informada", ()=>{
        try {
            aluno.setMatricula("");
        } catch (error) {
            expect(()=>aluno.getMatricula()).toThrow('A matrícula não pode estar indefinida!');  
        }
    })
});

describe("CPF do aluno", ()=>{
    it("deve lançar um erro quando incongruente", ()=>{
       try {
            aluno.setCpf("123456789091");
       } catch (error) {
            expect(()=>aluno.setCpf("123456789091")).toThrow('O CPF deve ser válido!');  
       }
    });
    it("deve lançar um erro quando não informado", ()=>{
        try {
            aluno.setCpf("");
        } catch (error) {
            expect(()=>aluno.getCpf()).toThrow('O CPF não pode estar indefinido!');  
        }
    });
});

describe("email do aluno", ()=>{
    it("deve lançar um erro quando não informado", ()=>{
        try {
            aluno.setEmail("");
        } catch (error) {
            expect(()=>aluno.getEmail()).toThrow('O email não pode estar indefinido!');  
        }
    });
    it("deve lançar um erro quando incongruente", ()=>{
        try {
            aluno.setEmail("romsgmail");
        } catch (error) {
            expect(()=>aluno.setEmail("romsgmail")).toThrow('O email deve ser válido!');
        }
    })
});

describe("senha do aluno", ()=>{
    it("deve lançar um erro quando não informado", ()=>{
        try {
            aluno.setSenha("");
        } catch (error) {
            expect(()=>aluno.getSenha()).toThrow('A senha não pode estar indefinida!');  
        }
    });
    it("deve lançar um erro quando não informado", ()=>{
        try {
            aluno.setSenha("1234567");
        } catch (error) {
            expect(()=>aluno.setSenha("1234567")).toThrow('A senha deve ser válida!');  
        }
    });
});


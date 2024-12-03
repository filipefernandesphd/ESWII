import { Aluno } from "../Aluno";

let aluno : Aluno;

describe("Nome do aluno", ()=>{
    beforeEach(()=>{
        aluno = new Aluno();
    })

    it("deve atribuir certo", ()=>{
        aluno.setNome("teste");
        expect(aluno.getNome()).toEqual("teste");
    })

    it("deve lançar exceção caso não seja informado", ()=>{
        try {
            aluno.setNome("");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
})

describe("Matricula do aluno", ()=>{
    beforeEach(()=>{
        aluno = new Aluno();
    })
    
    it("deve atribuir certo", ()=>{
        // 1985 minimo
        aluno.setMatricula("20220154");
        expect(aluno.getMatricula()).toEqual("20220154");
    })
    it("deve lançar exceção caso não seja informado", ()=>{
        try {
            aluno.setMatricula("");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
    it("deve lançar excecao caso seja informada com o numero de digitos diferentes de 8", ()=>{
        try {
            aluno.setMatricula("202201541");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
        try {
            aluno.setMatricula("2022015");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
    it("deve lançar exceção caso a data seja menor que 1985", ()=>{
        try {
            aluno.setMatricula("198401541");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
})

describe("Cpf do Aluno", ()=>{
    beforeEach(()=>{
        aluno = new Aluno();
    })
    it("deve atribuir certo", ()=>{
        aluno.setCpf("12345678909");
        expect(aluno.getCpf()).toEqual("12345678909");
    })
    it("deve lançar exceção caso não seja informado", ()=>{
        try {
            aluno.setCpf("");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
    it("deve lançar exceção caso esteja com algum caracter especial", ()=>{
        try {
            aluno.setCpf("123.456.78909");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
        try {
            aluno.setCpf("123456798-09");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
        try {
            aluno.setCpf("123.456.789-09");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
    it("deve lançar exceção caso os números sejam todos iguais", ()=>{
        try {
            aluno.setCpf("22222222222");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
    it("deve lançar exceção caso o cpf seja maior ou menor que 11 dígitos", ()=>{
        try {
            aluno.setCpf("1234567980");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
        try {
            aluno.setCpf("123456798091");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
    it("deve lançar exceção caso seja informado letras", ()=>{
        try {
            aluno.setCpf("abdcefghijkl");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
        try {
            aluno.setCpf("12ab5679809");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
})

describe("Email do aluno", ()=>{
    beforeEach(()=>{
        aluno = new Aluno();
    })
    it("deve atribuir certo", ()=>{
        aluno.setEmail("teste@gmail.com");
        expect(aluno.getEmail()).toEqual("teste@gmail.com")
    })
    it("deve lançar exceção caso seja informado inválido ou não seja informado", ()=>{
        expect(()=>aluno.getEmail()).toThrow(/^O email não pode estar indefinido!$/);
        expect(()=>aluno.setEmail("testegmail.com")).toThrow(/^O email deve ser válido!$/);
        expect(()=>aluno.setEmail("teste@gmail")).toThrow(/^O email deve ser válido!$/);
        expect(()=>aluno.setEmail("testeslacom")).toThrow(/^O email deve ser válido!$/);
    })

})  

describe("Senha do aluno", ()=>{
    beforeEach(()=>{
        aluno = new Aluno();
    })
    it("deve atribuir certo", ()=>{
        aluno.setSenha("senh4Forte!");
        expect(aluno.getSenha()).toEqual("senh4Forte!")
    })
    it("deve lançar exceção caso seja informado inválido ou não seja informado", ()=>{
        expect(()=>aluno.getSenha()).toThrow(/^A senha não pode estar indefinida!$/);
        expect(()=>aluno.setSenha("senh4forte!")).toThrow(/^A senha deve ser válida!$/);
        expect(()=>aluno.setSenha("senhaForte!")).toThrow(/^A senha deve ser válida!$/);
        expect(()=>aluno.setSenha("senh4Forte")).toThrow(/^A senha deve ser válida!$/);
        expect(()=>aluno.setSenha("senh4Fo")).toThrow(/^A senha deve ser válida!$/);
    })
})
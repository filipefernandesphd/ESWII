import { Aluno } from "../Aluno";

let aluno: Aluno;

beforeEach(()=>{
    aluno = new Aluno();
});

describe("Nome do Aluno", ()=>{
    it("deve ser atribuido", ()=>{
        aluno.setNome("Filipe");
        expect(aluno.getNome()).toEqual("Filipe");
    });

    it("deve lançar um erro quando não for informado", ()=>{
        try {
            aluno.setNome("");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro se retornar sem nada", ()=>{
        try {
            aluno.getNome();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })
})

// ano apartir de 1985 --> primeiros 4 digitos
// proximos numeros aleatorios
describe("Matricula", ()=>{
    it("deve ser atribuido", ()=>{
        aluno.setMatricula("20200190");
        expect(aluno.getMatricula()).toEqual("20200190");
    });

    it("deve lançar um erro se retornar sem nada", ()=>{
        try {
            aluno.getMatricula();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })

    it("deve lançar um erro quando não for informado", ()=>{
        try {
            aluno.setMatricula("");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando for informado uma matricula nao valida menor que 1985 os primeiros digitos", ()=>{
        try {
            aluno.setMatricula("19840190");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando for informado uma matricula nao valida menor que 8 digitos", ()=>{
        try {
            aluno.setMatricula("2020019");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando for informado uma matricula nao valida maior que 8 digitos", ()=>{
        try {
            aluno.setMatricula("202001900");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
})

describe("Cpf", ()=>{
    it("deve ser atribuido", ()=>{
        aluno.setCpf("12345678909");
        expect(aluno.getCpf()).toEqual("12345678909");
    });

    it("deve lançar um erro se retornar sem nada", ()=>{
        try {
            aluno.getCpf();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })

    it("deve lançar um erro quando não for informado", ()=>{
        try {
            aluno.setCpf("");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando for informado uma cpf nao valida menor que 11 digitos", ()=>{
        try {
            aluno.setCpf("1234567890");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando for informado uma cpf nao valida maior que 11 digitos", ()=>{
        try {
            aluno.setCpf("123456789091");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando for informado uma cpf com os todos os numeros iguais", ()=>{
        try {
            aluno.setCpf("11111111111");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

});

describe("Email", ()=>{
    it("deve ser atribuido", ()=>{
        aluno.setEmail("pedroamc720@gmail.com");
        expect(aluno.getEmail()).toEqual("pedroamc720@gmail.com");
    });

    it("deve lançar um erro se retornar sem nada", ()=>{
        try {
            aluno.getEmail();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })

    it("deve lançar um erro quando não for informado", ()=>{
        try {
            aluno.setEmail("");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando não for informado o @(local)", ()=>{
        try {
            aluno.setEmail("pedroamc720@.com");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando não for informado o .(com)", ()=>{
        try {
            aluno.setEmail("pedroamc720@gmailcom");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});

describe("Senha", ()=>{
    it("deve ser atribuido", ()=>{
        aluno.setSenha("Coisas@123");
        expect(aluno.getSenha()).toEqual("Coisas@123");
    });

    it("deve lançar um erro se retornar sem nada", ()=>{
        try {
            aluno.getSenha();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })

    it("deve lançar um erro quando não for informado", ()=>{
        try {
            aluno.setSenha("");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
    
    it("deve lançar um erro quando for informado uma senha nao valida menor que 8 digitos", ()=>{
        try {
            aluno.setSenha("Coi@123");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando for informado uma senha nao valida quando nao informar numero", ()=>{
        try {
            aluno.setSenha("Coisass@");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando for informado uma senha nao valida quando nao informar letra maiuscula", ()=>{
        try {
            aluno.setSenha("coisas@123");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando for informado uma senha nao valida quando nao informar caracterie especial", ()=>{
        try {
            aluno.setSenha("Coisas12");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    
});
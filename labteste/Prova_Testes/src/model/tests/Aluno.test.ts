import { Aluno } from "../Aluno";

let aluno1: Aluno;
beforeEach(()=>{
    aluno1 = new Aluno();
});

describe("Nome do aluno", ()=>{
    it("deve ser atribuído", ()=>{
        aluno1.setNome("Gustavo");
        expect(aluno1.getNome()).toEqual("Gustavo");
    });

    it("deve lançar um erro quando não for informado", ()=>{
        expect( ()=>aluno1.setNome('') ).toThrow(/^O nome não pode estar vazio!$/);
    });

    it("não pode ser indefinido", ()=>{ 
        expect( ()=>aluno1.getNome()).toThrow(/^O nome não pode estar indefinido!$/);
    });

});

describe("A matricula", ()=>{
    it("deve ser atribuído", ()=>{
        aluno1.setMatricula("20001501");
        expect(aluno1.getMatricula()).toEqual("20001501");
    });

    it("deve lançar um erro quando não for valida", ()=>{
        expect( ()=>aluno1.setMatricula('') ).toThrow(/^A matrícula deve ser válida!$/);
        expect( ()=>aluno1.setMatricula('AB100') ).toThrow(/^A matrícula deve ser válida!$/);
        expect( ()=>aluno1.setMatricula("154012502") ).toThrow(/^A matrícula deve ser válida!$/);
    })

    it("não pode ser indefinido", ()=>{ 
        expect( ()=>aluno1.getMatricula()).toThrow(/^A matrícula não pode estar indefinida!$/);
    });
});

describe("O CPF", ()=>{
    it("deve ser atribuído", ()=>{
        aluno1.setCpf("15404138610");
        expect(aluno1.getCpf()).toEqual("15404138610");
    });

    it("deve lançar um erro quando não for valido", ()=>{
        expect( ()=>aluno1.setCpf('') ).toThrow(/^O CPF deve ser válido!$/);
        expect( ()=>aluno1.setCpf('20457889A') ).toThrow(/^O CPF deve ser válido!$/);
        expect( ()=>aluno1.setCpf('ABF@125893') ).toThrow(/^O CPF deve ser válido!$/);

    });

    it("não pode ser indefinido", ()=>{ 
        expect( ()=>aluno1.getCpf()).toThrow(/^O CPF não pode estar indefinido!$/);
    });
});

describe("O e-mail", ()=>{
    it("deve ser atribuído", ()=>{
        aluno1.setEmail("gustavo-julio@live.com");
        expect(aluno1.getEmail()).toEqual("gustavo-julio@live.com");
    });

    it("deve lançar um erro quando não for válido", ()=>{
        expect( ()=>aluno1.setEmail('') ).toThrow(/^O email deve ser válido!$/);
        expect( ()=>aluno1.setEmail('gustavo-julio') ).toThrow(/^O email deve ser válido!$/);
        expect( ()=>aluno1.setEmail('@julio') ).toThrow(/^O email deve ser válido!$/);
    });

    it("não pode ser indefinido", ()=>{ 
        expect( ()=>aluno1.getEmail()).toThrow(/^O email não pode estar indefinido!$/);
    });
});

describe("A senha", ()=>{
    it("deve ser atribuído", ()=>{
        aluno1.setSenha("AB@12345");
        expect(aluno1.getSenha()).toEqual("AB@12345");
    });

    it("deve lançar um erro quando não for informado", ()=>{
        expect( ()=>aluno1.setSenha('') ).toThrow(/^A senha deve ser válida!$/);
        expect( ()=>aluno1.setSenha('ABC') ).toThrow(/^A senha deve ser válida!$/);
        expect( ()=>aluno1.setSenha('1234') ).toThrow(/^A senha deve ser válida!$/);
        expect( ()=>aluno1.setSenha('@@@@@@') ).toThrow(/^A senha deve ser válida!$/);
    });

    it("não pode ser indefinido", ()=>{ 
        expect( ()=>aluno1.getSenha()).toThrow(/^A senha não pode estar indefinida!$/);
    });

});




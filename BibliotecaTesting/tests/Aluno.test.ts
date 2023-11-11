import { Aluno } from "../src/Aluno";

describe('Aluno', ()=>{
    //deve criar um aluno corretamente
    it('deve ser criado corretamente', ()=>{
        const aluno = new Aluno("João das Couves", 123456);
        expect(aluno.getNome()).toBe("João das Couves");
        expect(aluno.getMatricula()).toBe(123456);
    })

    //deve alterar o nome corretamente
    it('deve alterar a matrícula corretamente', ()=>{
        const aluno = new Aluno("João das Couves", 123456);
        aluno.setNome("Maria das Flores");
        expect(aluno.getNome()).toBe("Maria das Flores");
    });

    //deve alterar a matrícula corretamente
    it('deve alterar o nome corretamente', ()=>{
        const aluno = new Aluno("João das Couves", 123456);
        aluno.setMatricula(654321);
        expect(aluno.getMatricula()).toBe(654321);
    });

});
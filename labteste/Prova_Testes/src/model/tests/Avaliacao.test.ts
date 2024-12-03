import { Avaliacao } from "../Avaliacao";

let avaliacao: Avaliacao;
let nota:any

beforeEach(()=>{
    avaliacao = new Avaliacao();
})

describe("Nome da avaliacao", ()=>{
    it("deve ser atribuido", ()=>{
        avaliacao.setNome("av1");
        expect(avaliacao.getNome()).toEqual("av1");
    });

    it("deve lançar um erro se retornar sem nada", ()=>{
        try {
            avaliacao.getNome();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })

    it("deve lançar um erro quando não for informado", ()=>{
        try {
            avaliacao.setNome("");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });
});

describe("Notas", ()=>{
    it("deve ser atribuido", ()=>{
        avaliacao.setNota(1.1);
        expect(avaliacao.getNota()).toEqual(1.1);
    });

    it("deve lançar um erro se retornar sem nada", ()=>{
        try {
            avaliacao.getNota();
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    })

    it("deve lançar um erro quando não for informado", ()=>{
        try {
            avaliacao.setNota(nota);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando a nota for menor ou igual a 0", ()=>{
        try {
            avaliacao.setNota(0);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve lançar um erro quando a nota possuir mais de uma casa decimal", ()=>{
        try {
            avaliacao.setNota(1.01);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });


})
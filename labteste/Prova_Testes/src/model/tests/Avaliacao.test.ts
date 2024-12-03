import { Avaliacao } from "../Avaliacao";

let avaliacao1: Avaliacao;
beforeEach(()=>{
    avaliacao1 = new Avaliacao();
});

describe("O nome da avaliação", ()=>{
    it("deve ser atribuído", ()=>{
        avaliacao1.setNome("AV2 Engenharia de Software II");
        expect(avaliacao1.getNome()).toEqual("AV2 Engenharia de Software II");
    });

    it("deve lançar um erro quando não for informado", ()=>{
        expect( ()=>avaliacao1.setNome('') ).toThrow(/^O nome não pode estar vazio!$/);
    });

    it("não pode ser indefinido", ()=>{ 
        expect( ()=>avaliacao1.getNome()).toThrow(/^O nome não pode estar indefinido!$/);
    });
});

describe("A nota", ()=>{
    it("deve ser atribuído", ()=>{
        avaliacao1.setNota(12.1);
        expect(avaliacao1.getNota()).toEqual(12.1);
    });

    it("deve lançar um erro quando não for válida", ()=>{
        let obj: any
        expect( ()=>avaliacao1.setNota(obj)).toThrow(/^O valor da avaliação deve ser um número válido!$/);
        expect( ()=>avaliacao1.setNota(14.2256)).toThrow(/^O valor da avaliação deve ser um número válido!$/);
        expect( ()=>avaliacao1.setNota(0)).toThrow(/^O valor da avaliação deve ser um número válido!$/);
    });

    it("não pode ser indefinido", ()=>{ 
        expect( ()=>avaliacao1.getNota()).toThrow(/^A nota não pode estar indefinida!$/);
    });
});



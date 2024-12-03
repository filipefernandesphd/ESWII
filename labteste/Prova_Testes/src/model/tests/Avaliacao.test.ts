import { Avaliacao } from "../Avaliacao";

let av1 : Avaliacao;

describe("Nome da Avaliacao", ()=>{
    beforeEach(()=>{
        av1 = new Avaliacao();
    })
    it("deve atribuir certo", ()=>{
        av1.setNome("Teste");
        expect(av1.getNome()).toEqual("Teste");
    })
    it("deve lançar exceção caso esteja errado", ()=>{
        expect(()=>av1.getNome()).toThrow(/^O nome não pode estar indefinido!$/);
        expect(()=>av1.setNome('')).toThrow(/^O nome não pode estar vazio!$/);
    })

})

describe("Nota  da Avaliacao", ()=>{
    beforeEach(()=>{
        av1 = new Avaliacao();
    })
    it("deve atribuir certo", ()=>{
        av1.setNota(10.1);
        expect(av1.getNota()).toEqual(10.1);
        av1.setNota(1.1);
        expect(av1.getNota()).toEqual(1.1);
    })
    it("deve lançar exceção caso seja informada errada", ()=>{
        let obj : any;
        expect(()=>av1.getNota()).toThrow(/^A nota não pode estar indefinida!$/);
        expect(()=>av1.setNota(obj)).toThrow(/^O valor da avaliação deve ser um número válido!$/);
        expect(()=>av1.setNota(0)).toThrow(/^O valor da avaliação deve ser um número válido!$/);
        expect(()=>av1.setNota(10)).toThrow(/^O valor da avaliação deve ser um número válido!$/);
        expect(()=>av1.setNota(-10)).toThrow(/^O valor da avaliação deve ser um número válido!$/);
        expect(()=>av1.setNota(10.11)).toThrow(/^O valor da avaliação deve ser um número válido!$/);
        
    })
})
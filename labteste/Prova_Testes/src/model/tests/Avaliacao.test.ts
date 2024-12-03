import { Avaliacao } from "../Avaliacao";

let avali: Avaliacao;

beforeAll(()=>{
    avali = new Avaliacao;
});

describe("Definir Avaliação",()=>{
    describe("Definir nome",()=>{
        it("Deve gerar um erro se o nome for inválido",()=>{
            try {
                avali.setNome("");
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
            }
        });
        it("Deve receber um nome válido",()=>{
            avali.setNome("Teste");
            expect(avali.getNome()).toEqual("Teste");
        });
    });

    describe("Definir nota",()=>{
        it("Deve gerar um erro se o nota for inválida",()=>{
            expect(()=>avali.setNota(-10)).toThrow(/^O valor da avaliação deve ser um número válido!$/);
            expect(()=>avali.setNota(0)).toThrow(/^O valor da avaliação deve ser um número válido!$/);
            expect(()=>avali.setNota(12.43)).toThrow(/^O valor da avaliação deve ser um número válido!$/);
        });
        it("Deve receber um nota válida",()=>{
            avali.setNota(8.8);
            expect(avali.getNota()).toEqual(8.8);
        });5
    });
});
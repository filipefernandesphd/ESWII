import { Avaliacao } from "../Avaliacao";

let av1: Avaliacao;
let av2: Avaliacao;
let av3: Avaliacao;

beforeEach(()=>{
    av1 = new Avaliacao();
    av2 = new Avaliacao();
    av3 = new Avaliacao();
});

// Nome da avaliação
describe('Nome da avaliação', ()=>{
    // deve ser atribuído
    it('deve ser atribuído', ()=>{
        av1.setNome('AV1');
        expect(av1.getNome()).toBe('AV1');
    });

    // deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido
    it('deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido', ()=>{
        expect( ()=>av1.getNome() ).toThrow(/^O nome não pode estar indefinido!$/);
    });

    // deve lançar uma exceção quando for vazio
    it('deve lançar uma exceção quando for vazio', ()=>{
        expect( ()=>av1.setNome('') ).toThrow(/^O nome não pode estar vazio!$/);
    });
});


// Nota da avaliação
describe('Nota da avaliação', ()=>{
    // deve ser atribuído
    it('deve ser atribuído', ()=>{
        av1.setNota(2.5);
        expect(av1.getNota()).toEqual(2.5);
    });

    // deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido
    it('deve lançar uma exceção quando chamar o método get e o atributo estiver indefinido', ()=>{
        expect( ()=>av1.getNota() ).toThrow(/^A nota não pode estar indefinida!$/);
    });

    // deve lançar uma exceção quando for inválido
    it('deve lançar uma exceção quando for inválido', ()=>{
        
        expect( ()=>av1.setNota(0) ).toThrow(/^O valor da avaliação deve ser um número válido!$/);
        expect( ()=>av1.setNota(0.12) ).toThrow(/^O valor da avaliação deve ser um número válido!$/);

        let outroobjeto:any;
        expect( ()=>av1.setNota(outroobjeto) ).toThrow(/^O valor da avaliação deve ser um número válido!$/);
    });
});



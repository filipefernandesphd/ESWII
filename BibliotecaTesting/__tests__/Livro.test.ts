import { Livro } from "../src/Livro";

describe('Livro', ()=>{
    // deve ser criado corretamente
    it('deve ser criado corretamente', ()=>{
        const livro = new Livro("A volta dos que não foram");
        expect(livro.getTitulo()).toBe("A volta dos que não foram");
    });
});
import { Questao } from "../src/Questao";

describe('Questao', () => {
    it('deve ser criado corretamente', () => {
        const questao = new Questao('Questão A');
        expect(questao.getName()).toBe('Questão A');
    });
});

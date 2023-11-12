import { BlocoQuestao } from "../src/BlocoQuestao";

describe('BlocoQuestao', () => {
    it('deve difinir o método getName', () => {
        const blocoQuestao: BlocoQuestao = {
            getName: jest.fn(), // Mockando
        };

        expect(blocoQuestao.getName).toBeDefined();
        expect(typeof blocoQuestao.getName).toBe('function');
    });
});

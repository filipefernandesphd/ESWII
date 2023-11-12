import { Bloco } from "../src/Bloco";
import { Questao } from "../src/Questao";

describe('Bloco', () => {
    it('deve ser criado corretamente', () => {
        const bloco = new Bloco('Bloco A');
        expect(bloco.getName()).toBe('Bloco A');
    });

    it('deve adicionar uma questão ao bloco', () => {
        const bloco = new Bloco('Bloco A');
        const questao = new Questao('Questão A');

        bloco.add(questao);

        expect(bloco.getChild(0)).toBe(questao);
    });

    it('deve mostrar as questões de um bloco', () => {
        const bloco = new Bloco('Bloco A');
        const questao = new Questao('Questão A');

        bloco.add(questao);

        // Simular a saída do console.log
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

        bloco.showChildren();

        expect(consoleLogSpy).toHaveBeenCalledWith('Bloco A');
        expect(consoleLogSpy).toHaveBeenCalledWith('Questão A');

        consoleLogSpy.mockRestore(); // Limpa o console.log
    });

    it('deve mostrar uma estrutura aninhada (com blocos e subblocos)', () => {
        const bloco = new Bloco('Bloco A');
        const subbloco = new Bloco('Bloco A.1');
        const questao = new Questao('Questão A');

        subbloco.add(questao);
        bloco.add(subbloco);

        // Simular a saída do console.log
        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

        bloco.showChildren();

        expect(consoleLogSpy).toHaveBeenCalledWith('Bloco A');
        expect(consoleLogSpy).toHaveBeenCalledWith('Bloco A.1');
        expect(consoleLogSpy).toHaveBeenCalledWith('Questão A');

        consoleLogSpy.mockRestore(); // Limpa o console.log
    });
});

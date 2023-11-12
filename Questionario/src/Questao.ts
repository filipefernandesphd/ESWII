import { BlocoQuestao } from "./BlocoQuestao";

export class Questao implements BlocoQuestao {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }
}

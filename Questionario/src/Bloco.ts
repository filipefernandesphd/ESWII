import { BlocoQuestao } from "./BlocoQuestao";
import { Questao } from "./Questao";

export class Bloco implements BlocoQuestao {
    private todoparte: BlocoQuestao[] = [];
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    add(todoparte: BlocoQuestao): void {
        this.todoparte.push(todoparte);
    }

    getChild(i: number): BlocoQuestao {
        return this.todoparte[i];
    }

    showChildren(): void {
        console.log(this.getName());

        for (let i = 0; i < this.todoparte.length; i++) {
            if (this.todoparte[i] instanceof Questao) {
                console.log(this.todoparte[i].getName());
            } else {
                (this.todoparte[i] as Bloco).showChildren();
            }
        }
    }
}

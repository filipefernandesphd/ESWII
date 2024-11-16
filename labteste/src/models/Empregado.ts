export class Empregado {
    private id!: number;
    private nome!: string;
    private diaria!: number;                // preço de um dia de trabalho
    private horasTrabalhadas!: number;

    // Getter e Setter para id
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        if (id <= 0) {
            throw new Error("O ID deve ser um número positivo.");
        }
        this.id = id;
    }

    // Getter e Setter para name
    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        if (!nome || nome.trim() === "") {
            throw new Error("O nome não pode estar vazio.");
        }
        this.nome = nome;
    }

    // Getter e Setter para diaria
    public getDiaria(): number | undefined {
        return this.diaria;
    }

    public setDiaria(diaria: number): void {
        if (diaria <= 0) {
            throw new Error("O valor da diária deve ser maior que zero.");
        }
        this.diaria = diaria;
    }

    // Getter e Setter para horasTrabalhadas
    public getHorasTrabalhadas(): number | undefined {
        return this.horasTrabalhadas;
    }

    public setHorasTrabalhadas(horasTrabalhadas: number): void {
        if (horasTrabalhadas < 0) {
            throw new Error("O número de horas trabalhadas não pode ser negativo.");
        }
        this.horasTrabalhadas = horasTrabalhadas;
    }

    public calcularSalarioMes(): number {
        return this.diaria * this.horasTrabalhadas;
    }
}
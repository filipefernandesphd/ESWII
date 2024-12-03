export class Avaliacao {
    private nome!: string;
    private nota!: number;

    // Getters e Setters
    getNome(): string {
        if (this.nome === undefined) { throw new Error('O nome não pode estar indefinido!'); }
        return this.nome;
    }

    setNome(valor: string) {
        if (valor == '') { throw new Error('O nome não pode estar vazio!'); }
        this.nome = valor;
    }

    // Getters e Setters
    getNota(): number {
        if (this.nota === undefined) { throw new Error('A nota não pode estar indefinida!'); }
        return this.nota;
    }

    setNota(valor: number) {
        if( !(typeof valor === 'number') || !this.verificarCasasDecimais(valor) || valor == 0 ){ throw new Error('O valor da avaliação deve ser um número válido!');}
        this.nota = valor;
    }

    // Verificar casas decimais
    /* istanbul ignore next */
    private verificarCasasDecimais(numero: number): boolean {
        // Converte o número para string
        const partes = numero.toString().split('.');
      
        // Verifica se há parte decimal e se tem exatamente um dígito
        return partes.length === 2 && partes[1].length === 1;
      }

}
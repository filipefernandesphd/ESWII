import { Empregado } from "./Empregado";

export class FolhaPagamento {
    private empregados: Empregado[] = [];

    // Adiciona um empregado
    adicionarEmpregado(empregado: Empregado): void {
        this.empregados.push(empregado);
    }

    // Retorna todos os empregados
    retornarEmpregados(): Empregado[] {
        return this.empregados;
    }

    // Calcula o total a pagar da folha de pagamento
    totalFolhaPagamento(): number {
        // .reduce realiza operações em uma lista e retorna um valor. O valor 0 abaixo é o parâmetro de inicialização
        return this.empregados.reduce( (total, empregado) => total + empregado.calcularSalarioMes() , 0 );
    }
}
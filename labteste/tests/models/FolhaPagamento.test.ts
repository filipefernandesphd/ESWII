import { FolhaPagamento } from "../../src/models/FolhaPagamento";
import { Empregado } from "../../src/models/Empregado";

let folhaPagamento: FolhaPagamento;
let emp1: Empregado;
let emp2: Empregado;
let emp3: Empregado;

beforeEach(()=>{
    folhaPagamento = new FolhaPagamento();
    emp1 = new Empregado();
    emp2 = new Empregado();
    emp3 = new Empregado();
});

describe("Folha de pagamento", ()=>{
    it("deve adicionar empregados",()=>{
        folhaPagamento.adicionarEmpregado(emp1);

        expect(folhaPagamento.retornarEmpregados()).toContain(emp1);
    });
    
    it("deve calcular total de pagamentos dos empregados",()=>{        
        emp1.setDiaria(10);
        emp1.setHorasTrabalhadas(1);

        emp2.setDiaria(5);
        emp2.setHorasTrabalhadas(2);

        emp3.setDiaria(10);
        emp3.setHorasTrabalhadas(0.123456789);

        folhaPagamento.adicionarEmpregado(emp1);
        folhaPagamento.adicionarEmpregado(emp2);
        folhaPagamento.adicionarEmpregado(emp3);

        // toBeCloseTo é usado para números de ponto flutuante. Em .toBeCloseTo(23.3,1) o segundo parâmetro é a quantidade de cadas decimais que serão consideradas
        expect(folhaPagamento.totalFolhaPagamento()).toBeCloseTo(21.2,1);
    });
});
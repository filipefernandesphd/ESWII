import { Empregado } from "../../src/models/Empregado";

describe("Id do empregado" , ()=> {
	test('deve ser atribuído quando for positivo', ()=>{
		const empregado = new Empregado();
		const id = 1;
		empregado.setId(id);

		expect(empregado.getId()).toEqual(id);
	})

	it("deve lançar um erro quando for negativo", ()=>{
		const empregado = new Empregado();
		const id = -1;
	
		try {
			empregado.setId(id);
		}catch(error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it("deve lançar um erro quando for 0", ()=>{
		const empregado = new Empregado();
		const id = 0;
	
		try {
			empregado.setId(id);
		}catch(error) {
			expect(error).toBeInstanceOf(Error);
		}
	});
});

describe("Nome do empregado", ()=> {
	let empregado: Empregado;

	// Inicializa um novo Empregado antes de cada teste
	beforeEach(()=>{
		empregado = new Empregado();
	});

	it("deve ser atribuído", ()=>{
		const nome = "João das Couves";
		empregado.setNome(nome);

		expect(empregado.getNome()).toBe(nome);
	});

	it("deve lançar um erro quando não for informado", ()=>{
		const nome = "";
		
		try {
			empregado.setNome(nome);
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});
});

describe("Diária do empregado", ()=>{
	let empregado: Empregado;

	beforeEach(()=>{
		empregado = new Empregado();
	});

	it("deve ser positivo", ()=>{
		const diaria = 1.1;
		empregado.setDiaria(diaria);

		expect(empregado.getDiaria()).toEqual(diaria);
	});

	it("deve lançar um erro quando for negativo", ()=>{
		const diaria = -1.1;

		try {
			empregado.setDiaria(diaria);
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});

	it("deve lançar um erro quando for 0", ()=>{
		const diaria = 0;

		try {
			empregado.setDiaria(diaria);
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});
});

describe("Hora trabalhada do empregado", ()=>{
	let empregado: Empregado;

	beforeEach(()=>{
		empregado = new Empregado();
	});

	it("deve ser positiva", ()=>{
		const horas = 1.1;
		empregado.setHorasTrabalhadas(horas);

		expect(empregado.getHorasTrabalhadas()).toEqual(horas);
	});

	it("deve ser 0", ()=>{
		const horas = 0;
		empregado.setHorasTrabalhadas(horas);

		expect(empregado.getHorasTrabalhadas()).toEqual(horas);
	});

	it("deve lançar um erro quando for negativa", ()=>{
		const horas = -1.1;

		try {
			empregado.setHorasTrabalhadas(horas);
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
		}
	});
});

describe("Salário do mês do empregado", ()=>{
	let empregado: Empregado;

	beforeEach(()=>{
		empregado = new Empregado();
	});

	it("deve ser calculado",()=>{
		empregado.setDiaria(10);
		empregado.setHorasTrabalhadas(1);

		expect(empregado.calcularSalarioMes()).toEqual(10);
	});
});
import { Aluno } from "./Aluno";
import { ControleEmprestimo } from "./ControleEmprestimo";
import { Livro } from "./Livro";

let aluno1 = new Aluno("João das Couves", 123456);
let aluno2 = new Aluno("Maria das Flores", 654321);
let livro1 = new Livro("A volta dos que não foram");
let livro2 = new Livro("As tranças do careca");
let livro3 = new Livro("Poeira em alto mar");

let controleemprestimos = new ControleEmprestimo();
controleemprestimos.realizarEmprestimo(aluno1, livro1);
controleemprestimos.realizarEmprestimo(aluno2, livro1);

// console.log(aluno1.getNome());
// console.log(aluno2.getNome());
// console.log(livro1.getTitulo());
// console.log(livro2.getTitulo());
// console.log(livro3.getTitulo());

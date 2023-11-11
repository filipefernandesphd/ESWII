import { Aluno } from "./Aluno"; 
import { Emprestimo } from "./Emprestimo";
import { Livro } from "./Livro"; 

export class ControleEmprestimo {
    private emprestimos: Emprestimo[] =[];

    getEmprestimos(){
        return this.emprestimos;
    }
    
    realizarEmprestimo(aluno: Aluno, livro: Livro){
        let livroemprestado = false;

        // verificar se há emprestimos
        if( this.emprestimos.length == 0 ){
            this.emprestarLivro(aluno, livro, this.gerarDataDevolucao());
        }else{
            // verificar em toda a lista se o livro já está emprestado
            for(const emprestimo of this.emprestimos){
                // se o livro já está emprestado...
                if( livro === emprestimo.getLivro() ){
                    livroemprestado = true;
                }
            }

            // caso o livro não esteja emprestado...
            if(!livroemprestado){
                this.emprestarLivro(aluno, livro, this.gerarDataDevolucao());
            }
        }
    }

    private emprestarLivro(aluno: Aluno, livro: Livro, devolucao: Date){
        this.emprestimos.push( new Emprestimo(aluno, livro, devolucao));
    }

    private gerarDataDevolucao(): Date {
        const dataAtual = new Date();
        const dataDevolucao = new Date(dataAtual.getTime() + 7 * 24 * 60 * 60 * 1000);
        return dataDevolucao;
    }
}
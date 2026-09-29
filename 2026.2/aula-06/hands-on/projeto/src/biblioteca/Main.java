package biblioteca;

public class Main {
    public static void main(String[] args) {
        Biblioteca biblioteca = new Biblioteca();
        biblioteca.cadastrar("Ian Sommerville", "Engenharia de Software", 2);
        biblioteca.cadastrar("Código Limpo", "Robert C. Martin", 1);

        Usuario ana = new Usuario("Ana", "ALUNO");
        Usuario bruno = new Usuario("Bruno", "SERVIDOR");

        Livro livro = biblioteca.buscarPorPosicao("1");
        biblioteca.emprestar(livro, ana, 1);
        biblioteca.emprestar(livro, bruno, 1);

        Emprestimo emprestimo = new Emprestimo(livro, ana, 1);
        System.out.println("Multa: " + emprestimo.calcularMulta(12));

        biblioteca.listar();
    }
}

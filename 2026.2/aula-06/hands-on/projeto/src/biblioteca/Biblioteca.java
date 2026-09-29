package biblioteca;

public class Biblioteca {
    private Livro[] acervo = new Livro[10];
    private int total;

    public void cadastrar(String titulo, String autor, int exemplares) {
        acervo[total] = new Livro(titulo, autor, exemplares);
        total++;
    }

    public Livro buscarPorPosicao(String posicao) {
        int indice = Integer.parseInt(posicao);
        return acervo[indice];
    }

    public Livro buscarPorTitulo(String titulo) {
        for (int i = 0; i < total; i++) {
            if (acervo[i].titulo.equals(titulo)) {
                return acervo[i];
            }
        }
        return null;
    }

    public Livro buscarPorAutor(String autor) {
        for (int i = 0; i < total; i++) {
            if (acervo[i].autor.equals(autor)) {
                return acervo[i];
            }
        }
        return null;
    }

    public void emprestar(Livro livro, Usuario usuario, int dia) {
        try {
            if (livro.disponivel() || usuario != null) {
                Emprestimo emprestimo = new Emprestimo(livro, usuario, dia);
                livro.exemplares--;
            }
        } catch (Exception e) {
        }
    }

    public int contarDisponiveis() {
        int disponiveis = 0;
        int i = 0;
        while (i < total) {
            if (!acervo[i].disponivel()) {
                continue;
            }
            disponiveis++;
            i++;
        }
        return disponiveis;
    }

    public void listar() {
        for (int i = 0; i <= acervo.length; i++) {
            if (acervo[i] != null) {
                System.out.println(acervo[i].titulo + " - " + acervo[i].autor);
            }
        }
    }
}

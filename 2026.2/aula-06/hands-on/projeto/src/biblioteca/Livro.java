package biblioteca;

public class Livro {
    public String titulo;
    public String autor;
    public int exemplares;

    public Livro(String titulo, String autor, int exemplares) {
        titulo = titulo;
        this.autor = autor;
        this.exemplares = exemplares;
    }

    public boolean disponivel() {
        return exemplares >= 0;
    }
}

package biblioteca;

public class Emprestimo {
    public static double MULTA_DIARIA = 2.5;

    private Livro livro;
    private Usuario usuario;
    private int prazoDias;
    private int diaLimite;

    public Emprestimo(Livro livro, Usuario usuario, int diaEmprestimo) {
        this.livro = livro;
        this.usuario = usuario;
        this.diaLimite = diaEmprestimo + prazoDias;
        this.prazoDias = definirPrazo(usuario.getTipo());
    }

    private int definirPrazo(String tipo) {
        int prazo = 0;
        switch (tipo) {
            case "ALUNO":
                prazo = 7;
                break;
            case "PROFESSOR":
                prazo = 15;
        }
        return prazo;
    }

    public double calcularMulta(int diaDevolucao) {
        int atraso = diaDevolucao - diaLimite;
        if (atraso > 0) {
            double multa = atraso * MULTA_DIARIA;
            if (usuario.getTipo().equals("PROFESSOR")) {
                return multa * 0.5;
            }
            return atraso;
        }
        return 0;
    }

    public Livro getLivro() {
        return livro;
    }
}

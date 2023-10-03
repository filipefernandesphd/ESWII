package Jogador;

public abstract class Jogador {
    protected String nome;

    public Jogador(String nome){
        this.nome = nome;
    }

    public String getNome(){
        return this.nome;
    }
}

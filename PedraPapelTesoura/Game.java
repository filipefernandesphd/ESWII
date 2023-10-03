import Jogador.*;

public class Game implements IGame {
    private Jogador jogadorhumano;
    private Jogador jogadormaquina;

    public Game (Jogador jogadorhumano){
        this.jogadorhumano = jogadorhumano;

        this.criaJogadorMaquina();
    }

    private void criaJogadorMaquina(){
        this.jogadormaquina = new Maquina("Máquina");
    }
}

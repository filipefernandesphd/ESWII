public class Questao implements BlocoQuestao {
    private String name;

    Questao(String name){
        this.name = name;
    }

    @Override
    public String getName() {
        return this.name;
    }
}

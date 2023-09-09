import java.util.ArrayList;

public class Bloco implements BlocoQuestao {
    private ArrayList<BlocoQuestao> todoparte = new ArrayList<>();
    private String name;

    Bloco(String name){
        this.name = name;
    }

    @Override
    public String getName() {
        return this.name;
    }

    public void add(BlocoQuestao todoparte){
        this.todoparte.add(todoparte);
    }

    public BlocoQuestao getChild(int i){
        return this.todoparte.get(i);
    }

    public void showChildren(){
        System.out.println(this.getName());

        for(int i=0; i<todoparte.size(); i++){
            if(todoparte.get(i) instanceof Questao){
                System.out.println(todoparte.get(i).getName());
            }else{
                ((Bloco) todoparte.get(i)).showChildren();
            } 
        }
    }
    
}

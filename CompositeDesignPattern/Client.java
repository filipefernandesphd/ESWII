public class Client {
    public static void main(String[] args) {
        // Criação de blocos
        Bloco bloco1 = new Bloco("Bloco 1");
        Bloco bloco11 = new Bloco("Bloco 1.1");
        Bloco bloco2 = new Bloco("Bloco 2");

        // Criação das questões
        Questao qa = new Questao("Questão A");
        Questao qb = new Questao("Questão B");
        Questao qc = new Questao("Questão C");
        Questao qd = new Questao("Questão D");
        Questao qe = new Questao("Questão E");
        Questao qf = new Questao("Questão F");
        Questao qg = new Questao("Questão G");
        
        // Adicionar questões aos blocos
        // Bloco 1
        bloco1.add(qa);
        bloco1.add(qb);
        bloco1.add(qc);  
        bloco1.add(bloco11);
        
         // Bloco 1.1
        bloco11.add(qd);
        bloco11.add(qe);

        // Bloco 2
        bloco2.add(qf);
        bloco2.add(qg);

        // Mostrar conteúdos dos Blocos 1 e 2 
        bloco1.showChildren();
        bloco2.showChildren();
    }
}

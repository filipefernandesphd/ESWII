public class Client{
  public static void main(String[] args) {
    // Instancia a fábrica Vintage
    FurnitureAbstractFactory vintagefactory = new VintageFactory();
    
    //Cria o objeto a partir de um método da fábrica Vintage
    AbstractChair chair1 = vintagefactory.CreateChair();
    AbstractSofa sofa1 = vintagefactory.CreateSofa();

    //Chama métodos dos objetos
    chair1.setDescription("This is a Vintage Chair");
    sofa1.setDescription("This is a Vintage Sofa");

    System.out.println(chair1.getDescription());
    System.out.println(sofa1.getDescription());

    // Instancia a fábrica Modern
    FurnitureAbstractFactory modernfactory = new ModernFactory();

    //Cria o objeto a partir de um método da fábrica Modern
    AbstractChair chair2 = modernfactory.CreateChair();
    AbstractSofa sofa2 = modernfactory.CreateSofa();

    //Chama métodos dos objetos
    chair2.setDescription("This is a Modern Chair");
    sofa2.setDescription("This is a Modern Sofa");

    System.out.println(chair2.getDescription());
    System.out.println(sofa2.getDescription());
  }
}
public class VintageFactory implements FurnitureAbstractFactory {

  @Override
  public AbstractChair CreateChair() {
    return new VintageChair();
  }

  @Override
  public AbstractSofa CreateSofa() {
    return new VintageSofa();
  }
  
}

public class ModernFactory implements FurnitureAbstractFactory {

  @Override
  public AbstractChair CreateChair() {
    return new ModernChair();
  }

  @Override
  public AbstractSofa CreateSofa() {
    return new ModernSofa();
  }
  
}

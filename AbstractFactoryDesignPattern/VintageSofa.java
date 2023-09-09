public class VintageSofa implements AbstractSofa{
  
  private String description;

  @Override
  public void setDescription(String d) {
    this.description = d;
    
  }

  @Override
  public String getDescription() {
    return this.description;
  }
  
}

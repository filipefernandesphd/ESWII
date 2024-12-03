import {Avaliacao} from "../Avaliacao";

describe("Nome da avaliação", ()=>{
    let avaliacao: Avaliacao

    beforeEach(() =>{
        avaliacao = new Avaliacao();
    });

    it("deve lançar um erro quando não for informado", ()=>{
        try{
            avaliacao.setNome("")
        } catch(error){
            expect(error).toBeInstanceOf(Error);
        }
    })

    it("deve ser atribuído", ()=>{
        avaliacao.setNome("Prova 1")
        expect(avaliacao.getNome()).toEqual("Prova 1");
    })
})

describe("nota da Avaliação", ()=>{
    let avaliacao: Avaliacao;
    let a1: any;
    
    beforeEach(()=>{
        avaliacao = new Avaliacao();
    })

    it("deve lançar um erro quando for inválida", ()=>{
        try{
            avaliacao.setNota(a1);
        } catch(error){
            expect(error).toBeInstanceOf(Error);
        }

         try{
             avaliacao.setNota(0);
         } catch(error){
             expect(error).toBeInstanceOf(Error);
         }

         try{
            avaliacao.setNota(3.55);
        } catch(error){
            expect(error).toBeInstanceOf(Error);
        }

        try{
            avaliacao.setNota(5);
        } catch(error){
            expect(error).toBeInstanceOf(Error);
        }
    })

      it("deve ser atribuída quando tiver apenas uma casa decimal",()=>{
          avaliacao.setNota(5.5);
          expect(avaliacao.getNota()).toEqual(5.5);
      })
});
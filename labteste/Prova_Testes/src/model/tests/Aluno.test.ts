import {Aluno} from '../Aluno';

describe("Nome do aluno", ()=>{
    let aluno: Aluno;

    beforeEach(()=>{
        aluno = new Aluno();
    });

    it("deve lançar um erro quando não for informado", ()=>{
        try{
            aluno.setNome("");
        } catch(error){
            expect(error).toBeInstanceOf(Error);
        }
    });

    it("deve ser atribuído", ()=>{
        aluno.setNome("André");
        expect(aluno.getNome()).toEqual("André");
    });
});

    describe("Matrícula do aluno", ()=>{
        let aluno: Aluno;

        beforeEach(()=>{
            aluno = new Aluno();
        });

        it("deve lançar um erro quando for inválido", ()=>{
            try{
                aluno.setMatricula("");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setMatricula("1234")
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setMatricula("1-234")
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setMatricula("1234as")
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setMatricula("9485644")
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setMatricula("123488")
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setMatricula("aaaaa")
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

        });

        it("deve ser atribuído", ()=>{
            aluno.setMatricula("20240001")
            expect(aluno.getMatricula()).toEqual("20240001");
        })
    })

    describe("CPF do aluno", ()=>{
        let aluno: Aluno;

        beforeEach(()=>{
            aluno = new Aluno();
        });

        it("deve lançar um erro quando for inválido", ()=>{
            try{
                aluno.setCpf("");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setCpf("wew");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setCpf("1345w");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setCpf("13401533");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setCpf("13401533222");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setCpf("134.015.332-22");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }
        });

        it("deve ser atribuído", ()=>{
            aluno.setCpf("01797902695");
            expect(aluno.getCpf()).toEqual("01797902695");
        })
    })

    describe("E-mail do aluno", ()=>{
        let aluno: Aluno;

        beforeEach(()=>{
            aluno = new Aluno();
        });

        it("deve lançar um erro quando não for informado", ()=>{
            try{
                aluno.setEmail("");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }
        });

        it("deve ser atribuído", ()=>{
            aluno.setEmail("andreklacerda@proton.me");
            expect(aluno.getEmail()).toEqual("andreklacerda@proton.me");
        })
    })

    describe("Senha do aluno", ()=>{
            let aluno: Aluno;

        beforeEach(()=>{
            aluno = new Aluno();
        })

        it("deve lançar um erro quando for inválido", ()=>{
            try{
                aluno.setSenha("");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setSenha("a");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setSenha("assssssssss");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setSenha("1111111111");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setSenha("aa232s");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setSenha("a.a232s");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setSenha(".....");
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setSenha("q23!aata")
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setSenha("QQQ")
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }

            try{
                aluno.setSenha("123.3984.09.22")
            } catch(error){
                expect(error).toBeInstanceOf(Error);
            }
        })

        it("deve ser atribuído", ()=>{
            aluno.setSenha("Q23!aaTa")
            expect(aluno.getSenha()).toEqual("Q23!aaTa");
        })

    })
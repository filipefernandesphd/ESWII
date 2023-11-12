import { Questao } from "./Questao";
import { Bloco } from "./Bloco";

// Criação de blocos
const bloco1 = new Bloco("Bloco 1");
const bloco11 = new Bloco("Bloco 1.1");
const bloco2 = new Bloco("Bloco 2");

// Criação das questões
const qa = new Questao("Questão A");
const qb = new Questao("Questão B");
const qc = new Questao("Questão C");
const qd = new Questao("Questão D");
const qe = new Questao("Questão E");
const qf = new Questao("Questão F");
const qg = new Questao("Questão G");

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

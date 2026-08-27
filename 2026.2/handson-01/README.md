# Hands-on 01

## Refactoring, Code Smells e SOLID

### Objetivo

Revisar e aplicar conceitos de **refactoring**, **code smells** e **princípios SOLID**, relacionando teoria, análise de código e melhoria incremental de projetos orientados a objetos.

> **Regra fundamental:** sempre que uma questão envolver refactoring, preserve o comportamento observável do programa. Quando houver testes automatizados, execute-os antes e depois das alterações.

---

# 1. Refactoring

## 1.1 Revisão conceitual

1. Defina **refactoring** e explique por que uma alteração que muda o comportamento externo do sistema não deve ser classificada como refactoring.
2. Explique como refactorings podem melhorar a manutenibilidade de um software sem necessariamente adicionar novas funcionalidades.
3. Diferencie **refactoring oportunista** de **refactoring planejado**. Em quais situações cada abordagem tende a ser adequada?
4. Explique por que uma suíte de testes automatizados reduz o risco durante um processo de refactoring.

## 1.2 Exercícios adaptados de *Engenharia de Software Moderna*

As questões abaixo foram adaptadas dos exercícios do Capítulo 9.

5. Considere as afirmações abaixo. Identifique a alternativa que **não representa necessariamente um objetivo de refactoring** e justifique:
   - melhorar a estrutura interna do software;
   - facilitar a compreensão do código;
   - reduzir o esforço de futuras modificações;
   - melhorar modularidade e testabilidade;
   - aumentar o desempenho de execução do sistema.

6. Imagine dois sistemas equivalentes, desenvolvidos por equipes com experiência semelhante. Depois de vários meses, a equipe do Sistema A mantém aproximadamente o mesmo ritmo de implementação de funcionalidades, enquanto a equipe do Sistema B passa a gastar progressivamente mais tempo para realizar mudanças. Explique qual deles provavelmente recebeu refactorings de forma mais sistemática e justifique.

7. Cite **dois refactorings que possam ser considerados operações inversas**. Explique o efeito produzido quando um é executado logo após o outro.

8. Considere o método abaixo:

```java
public void finalizarPedido(Pedido pedido) {
    validarPedido(pedido);

    double subtotal = pedido.calcularSubtotal();
    double desconto = calcularDesconto(pedido);
    double total = subtotal - desconto;

    System.out.println("Subtotal: " + subtotal);
    System.out.println("Desconto: " + desconto);
    System.out.println("Total: " + total);

    salvarPedido(pedido);
}
```

Aplique **Extract Method** de modo que a responsabilidade de exibir o resumo financeiro seja movida para um novo método. Indique:

- o nome do método extraído;
- os parâmetros necessários;
- como ficará o método `finalizarPedido` após o refactoring.

9. Crie um pequeno exemplo em Java contendo um método com pelo menos três responsabilidades distintas. Em seguida:

   1. execute **Extract Method**;
   2. execute **Rename Method** onde houver nomes pouco expressivos;
   3. compare a versão inicial e a versão refatorada.

10. Utilize uma IDE com suporte a refactoring, como IntelliJ IDEA ou Eclipse, e realize uma operação automática de **Rename Method**, **Extract Method** ou **Move Method**. Explique quais verificações realizadas pela IDE tornam essa operação mais segura do que uma alteração puramente textual.

## 1.3 Prática em repositório público — Gilded Rose Refactoring Kata

Repositório:

https://github.com/emilybache/GildedRose-Refactoring-Kata

O **Gilded Rose Refactoring Kata** é um exercício clássico para praticar melhoria incremental de código legado sem alterar seu comportamento.

### Atividade

1. Clone o repositório.
2. Utilize preferencialmente a implementação Java.
3. Execute os testes existentes e registre o resultado inicial.
4. Analise a implementação antes de realizar qualquer modificação.
5. Realize pelo menos **três refactorings distintos**, tais como:
   - Extract Method;
   - Rename Method/Variable;
   - Extract Class;
   - Move Method;
   - Replace Conditional with Polymorphism, quando justificável.
6. Faça alterações pequenas e execute os testes após cada etapa.
7. Para cada refactoring, registre:
   - problema observado;
   - refactoring aplicado;
   - justificativa;
   - evidência de que o comportamento foi preservado.

---

# 2. Code Smells

## 2.1 Revisão conceitual

1. Defina **code smell** e explique por que sua existência não significa automaticamente que há um defeito funcional no software.
2. Explique a relação entre **code smells** e **refactoring**.
3. Diferencie os seguintes smells:
   - código duplicado;
   - método longo;
   - classe grande;
   - classe de dados;
   - feature envy;
   - primitive obsession.
4. Por que o contexto é importante antes de decidir eliminar um code smell?

## 2.2 Exercícios adaptados de *Engenharia de Software Moderna*

As questões abaixo foram adaptadas da seção de Code Smells e dos exercícios do Capítulo 9.

5. Considere uma função que calcula Fibonacci. Descreva como seriam exemplos conceituais de clones:
   - Tipo 1;
   - Tipo 2;
   - Tipo 3;
   - Tipo 4.

Não é necessário implementar os quatro clones; descreva precisamente as diferenças em relação ao código original.

6. Considere uma classe `Dinheiro` que armazena internamente um valor e possui um método que altera esse valor ao receber outro objeto `Dinheiro`.

   1. Explique por que os objetos dessa classe são mutáveis.
   2. Reprojete a classe para que seus objetos sejam **imutáveis**.
   3. Explique qual impacto a mudança causa no método que realiza a soma.

7. Analise o código abaixo:

```java
// classe responsável por representar um produto
class Produto {
    // nome do produto
    String nome;

    // preço do produto
    double preco;

    // construtor da classe Produto
    Produto(String nome, double preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
```

Explique quais comentários são redundantes e como nomes adequados podem tornar parte dessa documentação desnecessária.

8. Para cada situação abaixo, identifique o code smell predominante e sugira pelo menos um possível refactoring:

   1. o mesmo bloco de validação aparece em quatro métodos;
   2. um método possui dezenas de linhas e executa validação, cálculo, persistência e envio de e-mail;
   3. uma classe possui muitos atributos e métodos pertencentes a grupos de responsabilidades diferentes;
   4. uma classe consulta repetidamente dados de outra classe para realizar cálculos que parecem pertencer ao segundo objeto;
   5. vários métodos recebem repetidamente `String cidade`, `String estado` e `String cep` como parâmetros separados;
   6. diversas regras de domínio são representadas apenas por `String` e `int`, com validações espalhadas pelo sistema.

## 2.3 Prática em repositório público — TaskList Refactoring

Repositório:

https://github.com/SarthakMakhija/task-list-refactoring

O projeto foi preparado para ensino de refactoring e contém exemplos de smells como **broken encapsulation, data class, divergent change, feature envy, long method, duplicate code, switch statements e primitive obsession**.

### Atividade

1. Clone o repositório e execute a aplicação/testes disponíveis.
2. Analise a versão de código indicada pelo projeto como ponto de partida para refactoring.
3. Identifique pelo menos **cinco code smells distintos**.
4. Para cada smell encontrado, registre:

| Evidência no código | Code smell | Consequência para manutenção | Refactoring sugerido |
|---|---|---|---|
|  |  |  |  |

5. Escolha pelo menos **três smells** e realize os refactorings correspondentes.
6. Preserve o comportamento da aplicação.
7. Compare a estrutura do código antes e depois das mudanças.

---

# 3. SOLID

## 3.1 Revisão conceitual

Para cada princípio, escreva:

- sua definição;
- o problema de projeto que procura reduzir;
- um pequeno exemplo de violação;
- uma estratégia possível para corrigir a violação.

Princípios:

1. **S — Single Responsibility Principle (SRP)**;
2. **O — Open/Closed Principle (OCP)**;
3. **L — Liskov Substitution Principle (LSP)**;
4. **I — Interface Segregation Principle (ISP)**;
5. **D — Dependency Inversion Principle (DIP)**.

## 3.2 Exercícios adaptados de *Engenharia de Software Moderna*

As questões abaixo foram adaptadas dos exercícios e exemplos do Capítulo 5.

6. Um manipulador de clique de uma interface gráfica realiza, no mesmo método:

- leitura dos campos da tela;
- consulta de contas bancárias;
- início de transação;
- transferência entre contas;
- tratamento de rollback;
- atualização da interface.

Qual princípio SOLID está principalmente comprometido? Proponha uma reorganização das responsabilidades.

7. Considere uma classe base cujo método aceita qualquer valor `x > 0`. Uma subclasse sobrescreve o método, mas passa a aceitar apenas `x > 10`. Além disso, a classe base garante um resultado positivo, enquanto a subclasse pode retornar valores negativos.

   1. Qual princípio SOLID está sendo violado?
   2. Explique a violação considerando pré-condições e pós-condições.

8. Um sistema calcula descontos da seguinte forma:

```java
if (tipoCliente.equals("ALUNO")) {
    // regra A
} else if (tipoCliente.equals("SERVIDOR")) {
    // regra B
} else if (tipoCliente.equals("CONVENIADO")) {
    // regra C
}
```

Sempre que surge um novo tipo de cliente, o método precisa ser modificado.

   1. Qual princípio SOLID deve orientar a melhoria desse projeto?
   2. Proponha uma solução orientada a objetos que permita adicionar novas políticas de desconto com menor impacto no código existente.

9. Uma interface `Funcionario` declara os métodos:

```java
trabalhar();
registrarPonto();
dirigirVeiculo();
aprovarPagamento();
```

Algumas implementações precisam lançar exceções ou deixar métodos vazios porque não realizam todas essas operações.

   1. Qual princípio SOLID está sendo violado?
   2. Como as interfaces poderiam ser reorganizadas?

10. Uma classe de serviço cria diretamente sua infraestrutura:

```java
class PedidoService {
    private MySqlPedidoRepository repository = new MySqlPedidoRepository();
    private EmailSender emailSender = new SmtpEmailSender();
}
```

   1. Qual princípio SOLID está comprometido?
   2. Quais são os efeitos dessa decisão sobre testes e substituição de tecnologias?
   3. Reprojete conceitualmente a classe utilizando abstrações e injeção de dependências.

## 3.3 Prática em repositório público — SOLID em Java

Repositório:

https://github.com/mikeknep/SOLID

O projeto apresenta exemplos em Java para os cinco princípios SOLID, incluindo versões que demonstram projetos adequados e inadequados.

### Atividade

1. Clone ou navegue pelo repositório.
2. Para cada princípio SOLID:
   1. analise a versão considerada inadequada;
   2. identifique a violação;
   3. analise a versão melhorada;
   4. explique quais dependências ou responsabilidades foram alteradas;
   5. descreva uma situação real em que o mesmo princípio poderia ser aplicado.
3. Escolha um dos exemplos e implemente uma terceira versão própria, mantendo o princípio estudado, mas utilizando outro domínio.

## 3.4 Desafio aplicado — Loja IF

Repositório:

https://github.com/filipefernandesphd/lojaif

A **Loja IF** é uma aplicação Java de comércio eletrônico criada para uma atividade prática envolvendo evolução de software e princípios SOLID.

### Atividade

1. Clone o repositório.
2. Compile o projeto e execute os testes antes de realizar alterações.
3. Explore as classes e compreenda como produtos, pedidos, descontos, pagamentos, estoque, entregas, notificações e relatórios colaboram.
4. Identifique situações que dificultam manutenção, extensão ou substituição de componentes.
5. Para cada situação encontrada, registre:

| Classe/trecho | Problema observado | Princípio SOLID relacionado | Consequência | Solução proposta |
|---|---|---|---|---|
|  |  |  |  |  |

6. Analise explicitamente os **cinco princípios SOLID**. Para cada princípio:
   - encontre uma evidência de aplicação inadequada ou uma oportunidade real de melhoria;
   - explique por que o princípio se aplica à situação;
   - realize o refactoring necessário;
   - preserve o comportamento existente.
7. Execute novamente os testes após cada conjunto de alterações.
8. Faça commits pequenos e semanticamente claros, preferencialmente um por princípio ou por refactoring relevante.
9. Ao final, produza um resumo contendo:
   - principais problemas encontrados;
   - princípios utilizados;
   - refactorings realizados;
   - impacto esperado sobre coesão, acoplamento, extensibilidade e testabilidade.

---

# 4. Síntese

Responda de forma sucinta:

1. Todo code smell representa uma violação de SOLID? Justifique.
2. Toda violação de SOLID deve ser imediatamente refatorada? Justifique considerando contexto e custo de manutenção.
3. Qual é a relação entre **code smell → decisão de refactoring → melhoria de projeto → princípios SOLID**?
4. Por que testes automatizados são especialmente importantes quando um sistema apresenta muitos code smells e precisa passar por refactorings estruturais?

---

# Referências

- Marco Tulio Valente. **Engenharia de Software Moderna — Capítulo 9: Refactoring**.  
  https://engsoftmoderna.info/cap9.html

- Marco Tulio Valente. **Engenharia de Software Moderna — Capítulo 5: Princípios de Projeto**.  
  https://engsoftmoderna.info/cap5.html#solid-e-outros-princ%C3%ADpios-de-projeto

- Emily Bache. **Gilded Rose Refactoring Kata**.  
  https://github.com/emilybache/GildedRose-Refactoring-Kata

- Sarthak Makhija. **TaskList Refactoring**.  
  https://github.com/SarthakMakhija/task-list-refactoring

- Mike Knepper. **SOLID Design Principles in Java**.  
  https://github.com/mikeknep/SOLID

- Filipe Fernandes. **Loja IF**.  
  https://github.com/filipefernandesphd/lojaif

> Os exercícios identificados como adaptados foram reformulados para uso didático nesta atividade, preservando os conceitos abordados nas referências, sem constituir reprodução literal do material original.

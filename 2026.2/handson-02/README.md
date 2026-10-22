# Hands-on 02

## Sistema de biblioteca com TDD

### Objetivo

Desenvolver um sistema de biblioteca orientado a objetos em **JavaScript com Node.js**, construindo **testes unitários com Jest antes do código de produção** e evoluindo a solução por meio de ciclos curtos de **Red → Green → Refactor**.

> **Regra fundamental:** escolha um comportamento, escreva um teste e observe sua falha antes de implementar o código necessário para fazê-lo passar. Depois, avalie melhorias na estrutura e execute novamente a suíte. Repita o ciclo para o próximo comportamento.

---

# 1. Revisão conceitual

Responda antes de iniciar a implementação:

1. O que caracteriza um teste unitário? Qual será a unidade de comportamento observada nos testes deste sistema?
2. Qual é a diferença entre desenvolver com TDD e escrever testes somente depois de concluir uma funcionalidade?
3. Explique o propósito de cada etapa: **Red**, **Green** e **Refactor**.
4. Por que observar um teste falhar é importante? Uma falha de instalação de dependências comprova que o comportamento desejado está sendo testado? Justifique.
5. O que significa escrever a implementação mínima? Por que isso não elimina a necessidade de refactoring?
6. Como testes **rápidos, independentes, repetíveis, autoverificáveis e escritos no momento adequado** se relacionam aos princípios **FIRST**?
7. Explique por que testes que compartilham estado, dependem da ordem de execução ou verificam apenas mensagens no console podem dificultar a evolução da solução.

---

# 2. Cenário e modelagem

## 2.1 A biblioteca

Uma biblioteca precisa organizar seu acervo e controlar quais exemplares estão emprestados. Atualmente, o atendimento depende de anotações: é difícil saber se um livro está disponível, quem o retirou e se uma devolução já foi registrada.

Sua tarefa é construir o **núcleo de domínio** desse sistema. A equipe da biblioteca precisa cadastrar livros e usuários, realizar empréstimos, registrar devoluções e consultar a situação atual do acervo.

O trabalho consiste em criar classes e testar seus comportamentos diretamente. Os dados ficam **somente em memória** durante a execução. A interação necessária ocorre pelo terminal, principalmente para executar os testes. Não é necessário desenvolver páginas, rotas HTTP, banco de dados ou menu interativo.

## 2.2 Regras obrigatórias

1. **Exemplares:** cada livro representa um exemplar físico, com **código**, **título** e **autor**. Dois exemplares do mesmo título podem existir, desde que tenham códigos diferentes.
2. **Usuários:** cada usuário possui **matrícula** e **nome**.
3. **Campos obrigatórios:** código, título, autor, matrícula e nome devem ser textos não vazios. Valores ausentes, `null`, números e textos contendo apenas espaços são inválidos. Espaços externos devem ser desconsiderados; códigos e matrículas diferenciam maiúsculas de minúsculas.
4. **Unicidade:** a biblioteca não aceita dois livros com o mesmo código nem dois usuários com a mesma matrícula. Esses identificadores pertencem a cadastros separados: um código de livro pode ter o mesmo texto de uma matrícula.
5. **Participantes cadastrados:** somente um usuário cadastrado pode retirar um exemplar também cadastrado na biblioteca. A identificação deve considerar código e matrícula, não apenas a identidade de um objeto na memória.
6. **Disponibilidade:** um exemplar possui, no máximo, um empréstimo ativo. Enquanto estiver emprestado, não pode ser retirado novamente, nem pelo mesmo usuário.
7. **Vários exemplares:** um usuário pode manter empréstimos de diferentes exemplares. O núcleo obrigatório não estabelece limite de quantidade.
8. **Devolução:** devolver um exemplar encerra seu empréstimo ativo, preserva o registro no histórico e torna o exemplar disponível para outro empréstimo, inclusive para outro usuário.
9. **Devolução inválida:** não é permitido devolver um exemplar não cadastrado, nunca emprestado ou cujo empréstimo já foi encerrado.
10. **Falhas sem alteração de estado:** toda operação inválida deve lançar uma exceção com mensagem compreensível. Uma tentativa rejeitada não pode substituir cadastros, criar empréstimos, encerrar empréstimos ou alterar a disponibilidade.
11. **Consultas:** deve ser possível consultar a disponibilidade de um exemplar e os empréstimos ativos de um usuário cadastrado. Um usuário sem empréstimos ativos deve produzir uma coleção vazia. Consultas por código ou matrícula não cadastrados devem lançar exceção, sem modificar o estado.

As regras de prazo, multa e reserva aparecem apenas nos desafios opcionais. Primeiro, conclua o núcleo obrigatório.

## 2.3 Classes sugeridas

| Classe | Responsabilidade sugerida |
|---|---|
| `Livro` | Representar um exemplar e seus dados válidos. |
| `Usuario` | Representar um usuário e seus dados válidos. |
| `Emprestimo` | Relacionar usuário e exemplar e representar a situação do empréstimo. |
| `Biblioteca` | Coordenar cadastros, empréstimos, devoluções e consultas, garantindo as regras do conjunto. |

### Atividade

1. Descreva como essas classes podem colaborar para atender ao cenário.
2. Escolha nomes para os métodos e defina como os testes observarão seus resultados e mudanças de estado.
3. Explique onde devem ficar as validações dos dados de um objeto e as verificações que dependem dos cadastros da biblioteca.
4. Inicie uma lista de comportamentos a testar em linguagem natural. Amplie essa lista conforme descobrir novos casos.

As classes são uma sugestão de modelagem. Você pode justificar outra distribuição de responsabilidades. **Não implemente todas as classes antecipadamente:** deixe que os próximos testes orientem a criação dos métodos e a evolução do projeto.

---

# 3. Desenvolvimento incremental

## 3.1 Preparação do ambiente

Crie o projeto em um diretório de trabalho próprio, separado deste repositório de materiais. O comando conhecido da turma será utilizado para gerar a estrutura inicial:

```bash
npm install -g express-generator
express biblioteca-tdd
cd biblioteca-tdd
npm install
npm install --save-dev jest
mkdir models test
```

Se o comando `express` já estiver disponível, a instalação global pode ser dispensada. O Express fornece apenas a estrutura inicial: os testes trabalharão diretamente com os objetos, sem iniciar o servidor.

No `package.json` do projeto criado, acrescente o script abaixo à seção `scripts`, preservando as demais configurações:

```json
"test": "jest"
```

Use **CommonJS**: `module.exports` nos módulos e `require` nos testes, como nas aulas anteriores. Não é necessário Babel, TypeScript ou configuração de módulos ES.

A organização sugerida, construída gradualmente, é:

```text
biblioteca-tdd/
├── models/
│   ├── Livro.js
│   ├── Usuario.js
│   ├── Emprestimo.js
│   └── Biblioteca.js
├── test/
│   ├── Livro.test.js
│   ├── Usuario.test.js
│   ├── Emprestimo.test.js
│   └── Biblioteca.test.js
└── package.json
```

A pasta de testes chama-se **`test/`, no singular**. A árvore destaca os arquivos desta atividade; outros arquivos gerados pelo Express podem permanecer no projeto, mas não precisam ser alterados.

Execute os testes pelo terminal:

```bash
npm test
```

Antes de existir o primeiro teste, o Jest pode informar que nenhum teste foi encontrado. Essa mensagem não substitui a etapa Red de um comportamento. Para repetir a suíte durante o desenvolvimento ou examinar a cobertura, use:

```bash
npm test -- --watchAll
npm test -- --coverage
```

Cobertura ajuda a localizar código não exercitado, mas não demonstra, por si só, que as regras foram verificadas corretamente.

## 3.2 Método de trabalho

Para **cada comportamento** das etapas seguintes:

1. Escolha um caso pequeno da sua lista e escreva um teste que descreva o resultado esperado.
2. **Red:** execute o teste e confirme que ele falha pela ausência do comportamento. No primeiro ciclo, a classe ou o módulo ainda pode não existir; resolvida essa estrutura inicial, diferencie falhas de ambiente de falhas da regra testada.
3. **Green:** escreva somente o código necessário para atender ao teste e execute toda a suíte.
4. **Refactor:** com a suíte verde, examine nomes, duplicações e distribuição de responsabilidades. Quando houver uma melhoria justificada, faça uma alteração pequena e execute novamente os testes, preservando o comportamento.
5. Registre novos casos descobertos e escolha o próximo comportamento.

Não é necessário executar um refactoring artificial em todos os ciclos. É necessário avaliar essa possibilidade e realizar ao menos um refactoring justificado ao longo da atividade. Não escreva toda a suíte executável de uma vez nem conclua a aplicação antes dos testes.

Prepare cenários independentes, por exemplo com `beforeEach`, e verifique resultados, exceções e mudanças de estado. Use `test.each` quando vários dados representarem a mesma regra de validação. Objetos simples em memória podem colaborar nos testes; mocks não são obrigatórios. Evite verificar detalhes internos que possam mudar durante um refactoring.

## 3.3 Etapa 1 — Cadastro de livros

Considere os seguintes cenários de aceitação:

- Dado um código ainda não utilizado e dados válidos, cadastrar o exemplar deve permitir identificá-lo no acervo como disponível.
- Dados obrigatórios ausentes, de tipo inadequado, vazios ou contendo apenas espaços devem ser rejeitados.
- Dado um exemplar já cadastrado, tentar cadastrar outro com o mesmo código deve lançar uma exceção e preservar o cadastro original.
- Dois exemplares com o mesmo título e códigos diferentes devem ser aceitos.

### Atividade

1. Escolha um primeiro cenário simples e realize o ciclo TDD completo.
2. Acrescente os cenários de validação e unicidade, um comportamento por vez.
3. Amplie a lista com casos de espaços externos e diferenças de maiúsculas/minúsculas nos códigos.

## 3.4 Etapa 2 — Cadastro de usuários

Considere os seguintes cenários de aceitação:

- Uma matrícula ainda não utilizada e um nome válido permitem cadastrar um usuário.
- Matrícula ou nome inválidos devem ser rejeitados.
- Uma matrícula repetida deve ser rejeitada, preservando o usuário original.
- Usuários com o mesmo nome e matrículas diferentes devem ser aceitos.
- Uma matrícula pode coincidir com o código de um livro, pois os cadastros são independentes.

### Atividade

1. Evolua o cadastro por ciclos TDD, incluindo os casos de erro.
2. Use parametrização quando ela tornar as validações mais claras.
3. Acrescente ao menos um caso relevante à sua lista e justifique sua escolha.

## 3.5 Etapa 3 — Empréstimos

Considere os seguintes cenários de aceitação:

- Um usuário cadastrado pode retirar um exemplar cadastrado e disponível. A operação deve criar um empréstimo ativo e tornar o exemplar indisponível.
- Usuário não cadastrado ou exemplar não cadastrado devem impedir o empréstimo.
- Um exemplar já emprestado não pode receber outro empréstimo ativo, mesmo que o solicitante seja outro usuário.
- Um usuário pode retirar dois exemplares diferentes e manter ambos os empréstimos ativos.
- Uma tentativa rejeitada deve preservar os empréstimos existentes e a disponibilidade dos exemplares envolvidos.

### Atividade

1. Comece pelo empréstimo válido mais simples.
2. Acrescente as restrições uma por vez, sempre observando a falha antes da implementação.
3. Teste a indisponibilidade tanto para o mesmo usuário quanto para outro usuário.
4. Amplie a lista com um cenário que evidencie a identificação por código e matrícula.

## 3.6 Etapa 4 — Devoluções

Considere os seguintes cenários de aceitação:

- Devolver um exemplar emprestado deve encerrar seu empréstimo ativo e disponibilizar o exemplar.
- O empréstimo encerrado deve permanecer no histórico, mas não entre os empréstimos ativos do usuário.
- Após a devolução, outro usuário pode retirar o mesmo exemplar, criando um novo empréstimo sem reativar nem sobrescrever o anterior.
- Devolver um exemplar nunca emprestado, não cadastrado ou já devolvido deve lançar exceção.
- Uma devolução inválida não pode alterar os demais empréstimos nem a disponibilidade dos outros exemplares.

### Atividade

1. Desenvolva a devolução por TDD.
2. Acrescente os casos de repetição e novo empréstimo após devolução.
3. Amplie a lista com uma sequência que possa revelar perda de histórico ou encerramento do empréstimo errado.

## 3.7 Etapa 5 — Consultas e revisão do núcleo

Considere os seguintes cenários de aceitação:

- Um exemplar recém-cadastrado está disponível; durante seu empréstimo fica indisponível; após a devolução volta a ficar disponível.
- Um usuário cadastrado sem empréstimos ativos possui uma coleção vazia de empréstimos ativos.
- A consulta de um usuário com diferentes empréstimos deve trazer somente os seus empréstimos ativos, excluindo os encerrados e os de outros usuários.
- Consultar código de livro ou matrícula inexistente deve lançar exceção sem cadastrar novos objetos nem alterar empréstimos.
- Repetir uma consulta sem operações intermediárias deve produzir um resultado equivalente e não modificar o estado.

### Atividade

1. Desenvolva por TDD as consultas que ainda não existirem; preserve os testes já escritos nas etapas anteriores.
2. Amplie a lista com um caso de isolamento entre usuários e confirme que cada teste pode executar sozinho.
3. Revise a suíte: existem expectativas ausentes, nomes vagos, repetição desnecessária ou testes dependentes da ordem de execução?
4. Execute um refactoring justificado no código de produção ou de testes e confirme que toda a suíte continua verde.

---

# 4. Desafios opcionais

Inicie estes desafios somente depois de concluir o núcleo obrigatório. Cada extensão também deve nascer de testes e preservar os comportamentos anteriores que continuarem válidos. Atualize explicitamente os testes de regras que a extensão modificar, como o limite de empréstimos.

## 4.1 Limite de empréstimos

1. Estabeleça o limite de **três empréstimos ativos por usuário**.
2. Aceite o terceiro empréstimo e rejeite o quarto, sem alterar o estado.
3. Após uma devolução, permita um novo empréstimo.
4. Confirme que o limite de um usuário não interfere no de outro.

## 4.2 Prazos e multas

1. Defina o vencimento como a data do empréstimo acrescida de **sete dias corridos**. Por exemplo: retirada em 01/11/2026 e vencimento em 08/11/2026.
2. Considere datas de calendário, sem horário, e receba explicitamente as datas usadas nas operações e consultas. Os testes não devem depender da data atual do computador.
3. Calcule multa de **R$ 2 por dia corrido de atraso**. Antes do vencimento e no próprio vencimento, a multa é zero. Devolução em 09/11/2026, no exemplo anterior, gera R$ 2; em 11/11/2026, R$ 6.
4. Para empréstimo ativo, use a data de referência informada; para empréstimo encerrado, use a data de devolução. Rejeite uma referência ou devolução anterior à retirada.
5. Teste os limites do vencimento e a passagem entre meses. Prefira representar valores monetários em centavos inteiros.

## 4.3 Reservas

1. Permita que usuários cadastrados reservem exemplares cadastrados e indisponíveis, formando uma fila por exemplar em **ordem de chegada**.
2. Rejeite uma segunda reserva pendente do mesmo usuário para o mesmo exemplar. O usuário que já mantém o empréstimo ativo desse exemplar também não pode reservá-lo.
3. Após a devolução, o exemplar permanece sem empréstimo ativo, mas somente o primeiro usuário da fila pode retirá-lo. A consulta de disponibilidade deve indicar que está reservado, sem tratá-lo como livre para qualquer usuário.
4. Quando esse usuário efetivar o empréstimo, consuma sua reserva. Os demais usuários permanecem na fila para as próximas devoluções.
5. Teste a prioridade, a rejeição de tentativas fora da ordem e a independência entre filas de exemplares diferentes. Uma tentativa rejeitada deve preservar a fila.

---

# 5. Evidências e síntese

## 5.1 Entrega

Organize no seu projeto:

1. As classes de domínio em `models/`.
2. Os testes unitários em `test/`, com nomes descritivos e arquivos `*.test.js`.
3. Um README com decisões de modelagem, instruções de instalação e execução, regras atendidas e desafios opcionais realizados.
4. Um registro breve de **pelo menos três ciclos TDD**, identificando os testes e descrevendo a falha observada e a implementação mínima. Inclua ao menos um refactoring efetivamente realizado com a suíte verde antes e depois.
5. O resultado final da execução de toda a suíte.

Use o quadro abaixo como apoio. Saídas do terminal ou commits pequenos podem complementar as evidências; o registro deve explicar o que aconteceu, não apenas apresentar imagens de testes passando.

| Comportamento e teste | Red: falha observada | Green: mudança mínima | Refactor: melhoria e verificação |
|---|---|---|---|
|  |  |  |  |

Não inclua `node_modules` na entrega. Os arquivos JavaScript e as pastas do projeto pertencem à sua solução, não à pasta deste hands-on no repositório da disciplina.

## 5.2 Checklist de conclusão

- [ ] Cada regra obrigatória possui testes de comportamento relevantes.
- [ ] Dados inválidos, duplicidades e participantes não cadastrados são verificados.
- [ ] Empréstimos e devoluções refletem corretamente disponibilidade e histórico.
- [ ] Operações rejeitadas preservam o estado anterior.
- [ ] Os testes são independentes e não exigem servidor, banco de dados ou entrada manual.
- [ ] Há evidências de três ciclos TDD e de pelo menos um refactoring com a suíte verde.
- [ ] Toda a suíte passa com `npm test`.
- [ ] As instruções permitem instalar e testar o projeto em outro ambiente.

## 5.3 Síntese

Responda de forma sucinta:

1. Qual teste mais influenciou uma decisão de modelagem? Descreva a decisão.
2. Que caso de borda você descobriu durante o desenvolvimento e acrescentou à lista inicial?
3. Qual refactoring foi realizado? Que evidência indica que o comportamento foi preservado?
4. Como sua suíte atende aos princípios FIRST? Que test smell você identificou ou evitou?
5. Por que testes passando e cobertura elevada não garantem que o sistema esteja correto em todas as situações?
6. Que mudanças seriam necessárias para acrescentar persistência ou interface de usuário sem concentrar essas responsabilidades nas classes de domínio?

---

# Referências

- Express. [**Express application generator**](https://expressjs.com/en/starter/generator/).
- Jest. [**Getting Started**](https://jestjs.io/docs/getting-started), [**Setup and Teardown**](https://jestjs.io/docs/setup-teardown) e [**Using Matchers**](https://jestjs.io/docs/using-matchers).
- Martin Fowler. [**Test Driven Development**](https://martinfowler.com/bliki/TestDrivenDevelopment.html).

> O cenário e os exercícios deste hands-on foram elaborados para esta disciplina. As referências apoiam os conceitos e o uso das ferramentas; o enunciado não fornece uma solução pronta.

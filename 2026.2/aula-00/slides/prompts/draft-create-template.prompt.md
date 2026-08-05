# Instruções

objetivo: criar template baseado no slidev para ser reutilizado e baixado no github

o template base será inspirado em [tahta.cagdas.io](https://tahta.cagdas.io/)

a documentacao com detalhes esta em [github.com/zcag/tahta](https://github.com/zcag/tahta)

a variante principal que vou adotar é a "Minimal", porém com algumas modificacoes:

- Cores
  - onde é laranja, substitua para #5bc0be
  - use essas cores para compor a paleta: #0B132B, #1C2541, #3A506B, além do branco e do preto se precisar
- Informacoes básicas
  - as informacoes da disciplina devem ser informadas num arquivo de configurações (escolha qual formato é melhor)
  - os campos são: nome do curso, nome da disciplina, sigla da disciplina, código da disciplina, nome do professor, contato do professor, titulo da apresentação
- Rodapé
  - em todos os slides, com exceção do slide 1, deve mostrar no rodapé a esquerda o titulo da apresentacao, sigla da disciplina, nome do professor; já à direta, os numeros dos slides, como já está na variant
- Slide 1
  - sempre o primeiro slide de ter: titulo da apresentacao em destaque, nome e sigla da disciplina, bem como o nome do professor com tamanho normal, e o nome do curso pequeno

# Tarefas

- execute as tarefas abaixo sequencialmente
- criar AGENTS.md para intrucao aos agentes de IA e recomendar que antes de cada comando o agents deve ser lido e tb usar as skills em ./skills de acordo com o contexto do comando
- criar prompt estruturado com base na skill de engenharia de prompt com as instruções dadas acima, criando um arquivo `prompts/create-template.prompt.md`
- logo após criar o prompt anterior, execute-o
- depois, crie README.md com informacoes basicas do projeto, bem como instruções para instalacao, uso e manutençao

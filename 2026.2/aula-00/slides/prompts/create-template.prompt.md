# Prompt de implementação — template acadêmico Slidev

## Papel

Atue como uma pessoa desenvolvedora sênior especializada em Slidev, Vue,
TypeScript, CSS e design de apresentações acadêmicas. Trabalhe diretamente neste
repositório e entregue uma implementação executável, não apenas recomendações.

## Contexto

O objetivo é criar um template de apresentação acadêmica reutilizável e pronto
para ser disponibilizado no GitHub. A base visual deve ser a variante `minimal`
do [Tahta](https://github.com/zcag/tahta), um tema MIT para Slidev. Preserve sua
linguagem suíça: tipografia Archivo forte, bastante espaço em branco, cantos
retos, regras finas e hierarquia editorial.

O template precisa adaptar essa base com a seguinte paleta:

- acento principal: `#5BC0BE`;
- azul-marinho profundo: `#0B132B`;
- azul-marinho: `#1C2541`;
- azul ardósia: `#3A506B`;
- branco e preto somente quando úteis para fundo, texto ou contraste.

Os dados da apresentação devem ter uma única fonte de verdade, em um arquivo
TypeScript de configuração claramente nomeado e fácil de editar.

## Fonte de verdade dos dados

Crie `academic.config.ts` com um tipo explícito e os seguintes campos:

- nome do curso;
- nome da disciplina;
- sigla da disciplina;
- código da disciplina;
- nome do professor;
- contato do professor;
- título da apresentação.

Use nomes de propriedades consistentes em inglês ou português, documentados no
README. Componentes e layouts devem importar esse arquivo; não duplique esses
valores em `slides.md`, CSS ou outros componentes.

## Tarefas

Execute na ordem:

1. Leia `AGENTS.md`, as skills aplicáveis em `./skills` e o estado atual do
   repositório.
2. Crie um projeto Slidev mínimo e reproduzível com `package.json`,
   `package-lock.json`, scripts de desenvolvimento, build e exportação, e
   dependências compatíveis.
3. Configure `slidev-theme-tahta` com `themeConfig.variant: minimal`.
4. Crie um layout de capa acadêmica reutilizável. O slide 1 deve sempre renderizar,
   a partir de `academic.config.ts`:
   - título da apresentação em maior destaque;
   - nome e sigla da disciplina;
   - nome do professor em tamanho normal;
   - nome do curso em tamanho pequeno;
   - código da disciplina e contato podem aparecer de forma discreta.
5. Crie um rodapé global para todos os slides exceto o slide 1:
   - à esquerda: título da apresentação, sigla da disciplina e nome do professor;
   - à direita: número atual e total de slides;
   - evite duplicação com o rodapé nativo do Tahta.
6. Crie CSS global com tokens semânticos que aplique a paleta solicitada ao
   Minimal. Onde o Minimal usa seu acento quente original, use `#5BC0BE`.
   Distribua os três azuis entre texto, superfícies, linhas e séries de dados.
7. Crie `slides.md` como apresentação demonstrativa em português. Inclua capa e
   exemplos suficientes para confirmar tipografia, listas, duas colunas, números
   e encerramento, sem repetir os dados acadêmicos mantidos na configuração.
8. Atualize `.gitignore` apenas se faltarem artefatos gerados pelo Slidev.
9. Verifique a implementação com instalação limpa, build e inspeção visual dos
   slides gerados.

## Restrições

- Preserve arquivos e mudanças existentes que não façam parte desta tarefa.
- Não recrie o Tahta nem copie grandes trechos do projeto de referência; use o
  pacote publicado e extensões locais pequenas.
- Não introduza React, MUI, TanStack ou frameworks não usados pelo Slidev.
- Não espalhe valores de cor: mantenha-os em tokens CSS, salvo quando uma API
  exigir o valor literal.
- Não coloque metadados acadêmicos diretamente em `slides.md`.
- Não mostre o rodapé no primeiro slide.
- Não deixe o rodapé cobrir o conteúdo; reserve espaço inferior coerente.
- Não use imagens decorativas sem função para a apresentação.
- Evite `any`, estilos inline extensos e componentes monolíticos.
- Mantenha contraste legível; use o turquesa como acento visual e um tom escuro
  da paleta para textos pequenos quando o turquesa não atingir contraste adequado.

## Arquivos esperados

No mínimo:

```text
.
├── academic.config.ts
├── components/
│   └── AcademicFooter.vue
├── layouts/
│   └── academic-cover.vue
├── global-top.vue
├── package.json
├── package-lock.json
├── slides.md
└── style.css
```

É permitido ajustar essa estrutura quando a convenção do Slidev exigir, desde
que a fonte única de dados, a capa e o rodapé permaneçam evidentes.

## Critérios de aceitação

- `npm install` e `npm run build` terminam sem erro.
- O tema Tahta está ativo na variante `minimal`.
- Alterar um valor em `academic.config.ts` atualiza capa e/ou rodapé sem editar
  outros arquivos.
- O primeiro slide não contém rodapé.
- Todos os demais slides contêm o rodapé acadêmico e numeração correta.
- O rodapé nativo do tema não aparece duplicado.
- A capa contém todos os níveis de informação obrigatórios e mantém legibilidade.
- `#5BC0BE`, `#0B132B`, `#1C2541` e `#3A506B` compõem o tema por meio de tokens.
- O conteúdo demonstrativo não invade o rodapé nem apresenta overflow visível.
- O repositório fica pronto para clonagem e manutenção, sem artefatos de build
  rastreados.

## Verificação e entrega

Após implementar:

1. execute os comandos de instalação e build;
2. inicie o Slidev localmente e inspecione visualmente a capa, um slide de
   conteúdo e o último slide;
3. corrija erros, sobreposições, overflow e contrastes identificados;
4. apresente um resumo curto dos arquivos criados, dos testes executados e de
   qualquer limitação real restante.

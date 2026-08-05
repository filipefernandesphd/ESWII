# Prompt de implementação — citações BibTeX no template Slidev

## Papel

Atue como uma pessoa desenvolvedora sênior especializada em Slidev, Vue,
TypeScript e fluxos de referências acadêmicas com BibTeX. Trabalhe diretamente
neste repositório e entregue a integração funcional do
`slidev-addon-citations`, incluindo documentação e uma demonstração verificável;
não se limite a recomendações.

## Contexto

Este repositório contém um template acadêmico Slidev baseado na variante
`minimal` do tema Tahta. A integração deve permitir que autores mantenham suas
referências em um arquivo BibTeX e insiram citações e bibliografias nos slides
sem prejudicar a identidade visual, o rodapé acadêmico ou os fluxos existentes
de desenvolvimento, build e exportação.

O arquivo padrão de referências deve se chamar `references.bib`. Como o addon
carrega arquivos bibliográficos a partir de `public/biblio`, mantenha-o em
`public/biblio/references.bib` e configure o headmatter de `slides.md` com
`biblio.filename: references.bib`.

Antes de alterar dependências ou configuração, confirme a API e a versão estável
compatível nas fontes oficiais:

- [repositório do slidev-addon-citations](https://github.com/aeudes/slidev-addon-citations);
- [documentação de addons do Slidev](https://sli.dev/guide/theme-addon#use-addon);
- [documentação de transformers do Slidev](https://sli.dev/custom/config-transformers);
- metadados publicados do pacote npm `slidev-addon-citations`.

## Baseline de compatibilidade já validada

Para as versões atuais deste repositório, considere como baseline conhecida:

- `@slidev/cli@52.16.0`;
- `slidev-addon-citations@0.0.13`, versão estável publicada no canal `latest`;
- `@citation-js/core@0.7.21`;
- `@citation-js/plugin-bibtex@0.7.21`;
- `@citation-js/plugin-csl@0.7.21`;
- `@citation-js/plugin-doi@0.7.21`.

O addon declara dependências `@citation-js/*` com intervalos abertos. Deixá-las
resolver para a série `0.8` causou falha em runtime no navegador envolvendo
`node-fetch` e `node-domexception`, embora o build estático terminasse com
sucesso. Portanto, mantenha as quatro versões `0.7.21` em `overrides` enquanto
essa combinação continuar necessária. Só remova ou altere esses overrides depois
de validar uma versão estável mais nova do addon tanto no build quanto no
navegador.

O preparser distribuído pelo addon também não converteu `[@chave]` com a versão
atual do Slidev. Preserve essa sintaxe por meio de um transformer local em
`setup/transformers.ts`, que converta apenas chaves seguras para o componente
`<Cite>`. Essa camada adapta a sintaxe Markdown ao addon; ela não deve analisar
BibTeX nem reimplementar o mecanismo de citações.

## Resultado esperado

Ao clonar o template e executar `npm install`, uma pessoa deve conseguir:

1. adicionar ou editar entradas em `public/biblio/references.bib`;
2. citar uma chave BibTeX em `slides.md` com `[@chave]` ou
   `<Cite bref="chave" />`;
3. exibir a lista de referências com `<BiblioList />` ou com o layout
   `biblio`;
4. encontrar essas instruções, com exemplos copiáveis, no `README.md`.

## Tarefas

Execute na ordem:

1. Leia `AGENTS.md`, as skills aplicáveis em `./skills` e o estado atual do
   repositório. Preserve mudanças do usuário e entenda o headmatter, os layouts,
   os estilos e a estrutura já existentes antes de editar.
2. Consulte as fontes oficiais do addon e confirme:
   - a versão estável publicada e sua compatibilidade com a versão atual do
     Slidev;
   - a sintaxe vigente de `addons`, `biblio.filename`, citações e lista de
     referências;
   - a localização esperada dos arquivos bibliográficos.
3. Instale `slidev-addon-citations@0.0.13` como dependência de runtime, seguindo
   a política de versões exatas já usada em `package.json`. Caso o canal
   `latest` já aponte para uma versão estável mais nova, só a use depois de
   confirmar que ela elimina as incompatibilidades descritas nesta baseline.
4. Adicione estes overrides de compatibilidade a `package.json`, sem remover os
   overrides existentes:

   ```json
   {
     "overrides": {
       "@citation-js/core": "0.7.21",
       "@citation-js/plugin-bibtex": "0.7.21",
       "@citation-js/plugin-csl": "0.7.21",
       "@citation-js/plugin-doi": "0.7.21"
     }
   }
   ```

   Atualize `package-lock.json` exclusivamente por meio de `npm install`. Não
   edite o lockfile manualmente.
5. Ative o addon no headmatter principal de `slides.md`, preservando todas as
   configurações existentes. Use como padrão:

   ```yaml
   addons:
     - slidev-addon-citations
   biblio:
     filename: references.bib
     show_full_bib: true
     show_id: false
   ```

   `show_full_bib: true` deve tornar a bibliografia determinística mesmo quando
   seu slide for aberto diretamente, sem visitar antes o slide que contém a
   citação. `show_id: false` deve ocultar a chave interna da lista final.
6. Crie ou integre `setup/transformers.ts` sem sobrescrever transformers
   existentes. A implementação deve ser semanticamente equivalente a:

   ```ts
   import {
     defineMarkdownTransformer,
     defineTransformersSetup,
   } from '@slidev/types'

   const citationPattern = /\[@([A-Za-z0-9][A-Za-z0-9_:./+-]*)\]/g

   const transformCitationSyntax = defineMarkdownTransformer(({ s }) => {
     s.replace(
       citationPattern,
       (_match, citationKey: string) => `<Cite bref="${citationKey}" />`,
     )
   })

   export default defineTransformersSetup(() => ({
     pre: [transformCitationSyntax],
   }))
   ```

   Se o arquivo já existir, componha esse transformer com os demais. Não aceite
   como suficiente o preparser legado incluído no pacote do addon.
7. Crie `public/biblio/references.bib` com pelo menos uma entrada BibTeX válida,
   pequena e verificável. Use uma chave clara e única, mantenha a sintaxe
   consistente e não invente metadados acadêmicos. Prefira metadados obtidos por
   DOI ou outra fonte primária e valide o arquivo com Citation.js ou ferramenta
   equivalente.
8. Atualize a apresentação demonstrativa para provar a integração:
   - inclua pelo menos uma citação cuja chave exista em `references.bib`;
   - use `[@chave]` no exemplo principal para validar o transformer;
   - inclua `<BiblioList />` em um layout `default` do Tahta para manter a
     identidade visual do template;
   - mantenha o layout `biblio` como alternativa documentada, não como padrão
     visual da apresentação demonstrativa;
   - mantenha o conteúdo curto o suficiente para não causar overflow.
9. Ajuste CSS local somente se a renderização do addon realmente exigir. Nesse
   caso, use seletores específicos, reutilize os tokens existentes de
   `style.css` e preserve contraste, legibilidade, navegação e responsividade.
10. Adicione ao `README.md` uma seção claramente identificada sobre referências
   e citações. Ela deve explicar:
   - que o arquivo padrão é `public/biblio/references.bib`;
   - como criar ou colar uma entrada BibTeX e escolher uma chave de citação
     única;
   - como citar com `[@chave]`;
   - como citar com `<Cite bref="chave" />`;
   - como mostrar a bibliografia com `<BiblioList />` e, se estiver validado no
     projeto, com o layout `biblio`;
   - que a chave usada no slide deve corresponder exatamente à chave existente
     no `.bib`;
   - para que servem `show_full_bib: true` e `show_id: false`;
   - como trocar o nome ou usar múltiplos arquivos, caso isso seja suportado
     pela versão instalada, sem deixar dúvida de que `references.bib` continua
     sendo o padrão do template.
11. Atualize a árvore de arquivos do `README.md` para incluir
    `public/biblio/references.bib` e `setup/transformers.ts`. Na seção de
    manutenção, registre por que os overrides `@citation-js/*@0.7.21` existem e
    que eles só podem ser removidos após nova validação em navegador.
12. Execute as verificações de instalação, dependências, build e runtime e
    corrija qualquer falha encontrada.

## Restrições

- Não substitua o tema Tahta nem altere a variante `minimal`.
- Não remova nem duplique configurações existentes do headmatter.
- Não introduza React, MUI, TanStack ou outro framework alheio ao projeto.
- Não crie um parser de BibTeX próprio e não adicione outra biblioteca de
  citações que duplique o addon solicitado.
- Não dependa apenas do preparser legado distribuído pelo addon para suportar
  `[@chave]` no Slidev atual.
- Não deixe os intervalos abertos do addon resolverem `@citation-js/*@0.8` nesta
  baseline sem uma validação explícita que prove a compatibilidade.
- Não use o canal npm `next` apenas para contornar a incompatibilidade; prefira
  a versão estável e os overrides validados.
- Não dependa de busca por DOI ou de acesso à rede em tempo de apresentação; o
  fluxo padrão deve funcionar apenas com `references.bib`.
- Não espalhe cores literais em componentes ou seletores novos; use os tokens
  CSS existentes.
- Não altere os dados centralizados em `academic.config.ts` nem repita esses
  valores em outros arquivos.
- Não quebre a capa, o rodapé, a numeração, os layouts demonstrativos ou os
  comandos já documentados.
- Não copie exemplos de terceiros sem verificar licença e atribuição.
- Não documente sintaxe que não tenha sido confirmada na versão efetivamente
  instalada.
- Não considere o build estático como prova suficiente: a falha de
  `node-domexception` só apareceu quando o slide foi carregado no navegador.
- Não altere a faixa `engines.node` apenas para ocultar um aviso do ambiente;
  reporte a divergência de versão e continue somente se as verificações forem
  executáveis.

## Arquivos esperados

No mínimo, a implementação deve resultar em alterações coerentes nestes
arquivos:

```text
.
├── package.json
├── package-lock.json
├── public/
│   └── biblio/
│       └── references.bib
├── setup/
│   └── transformers.ts
├── slides.md
└── README.md
```

`style.css` só deve ser alterado se a inspeção visual demonstrar essa
necessidade.

## Critérios de aceitação

- `slidev-addon-citations` está declarado em `package.json` e resolvido no
  `package-lock.json`.
- `npm ls` mostra `slidev-addon-citations@0.0.13` e os quatro pacotes
  `@citation-js/*` em `0.7.21`, salvo se uma combinação estável mais nova tiver
  sido comprovadamente validada.
- O addon está ativado uma única vez no headmatter de `slides.md`.
- A configuração padrão aponta para `references.bib`.
- A configuração contém `show_full_bib: true` e `show_id: false`.
- `setup/transformers.ts` converte `[@chave]` em `<Cite>` sem analisar o
  conteúdo BibTeX.
- `public/biblio/references.bib` existe e contém BibTeX válido.
- Toda chave citada na apresentação demonstrativa existe no arquivo `.bib`.
- As citações são renderizadas; a sintaxe `[@chave]` não aparece como texto cru.
- A bibliografia renderiza a referência demonstrativa sem erro ou overflow,
  inclusive quando sua rota é aberta diretamente em uma sessão nova.
- O console do navegador não contém erro de módulo relacionado a `node-fetch`,
  `node-domexception` ou aos plugins do Citation.js.
- Capa, layouts Tahta, rodapé global e numeração continuam funcionando.
- `README.md` contém instruções completas e copiáveis para editar o `.bib`,
  citar e mostrar a bibliografia.
- `npm install` e `npm run build` terminam sem erro.
- A inspeção visual não revela sobreposição, contraste insuficiente ou conteúdo
  invadindo o rodapé.

## Verificação e entrega

Após implementar:

1. releia `AGENTS.md`;
2. execute `npm install`;
3. execute `npm ls slidev-addon-citations @citation-js/core
   @citation-js/plugin-bibtex @citation-js/plugin-csl
   @citation-js/plugin-doi --depth=2` e confirme as versões resolvidas;
4. valide que `references.bib` é analisável e contém a chave usada em
   `slides.md`;
5. execute `npm run build`;
6. reinicie o servidor Slidev com reotimização das dependências quando
   necessário, por exemplo com `slidev slides.md --force`;
7. em uma sessão nova do navegador, abra diretamente e inspecione:
   - a capa;
   - o slide com `[@chave]`, que deve mostrar uma citação formatada;
   - a rota do slide com `<BiblioList />`, sem visitar antes o slide de citação;
   - o slide final;
8. examine o console do navegador e corrija erros de módulo ou runtime, mesmo
   que o build tenha passado;
9. confirme que uma chave inexistente não foi deixada nos exemplos ou na
   documentação;
10. execute `git diff --check` e revise o diff para garantir que apenas arquivos
    necessários foram alterados;
11. apresente um resumo curto dos arquivos modificados, das verificações
    executadas, dos avisos de ambiente e de qualquer limitação real restante.

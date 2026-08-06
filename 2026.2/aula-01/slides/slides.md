---
theme: slidev-theme-tahta
title: Introdução à Qualidade de Software
aspectRatio: 16/9
info: |
  Aula introdutória sobre conceitos de qualidade de software.
themeConfig:
  variant: minimal
  lang: pt-BR
mdc: true
routerMode: hash
layout: academic-cover
---
---
layout: statement
kicker: Pergunta de partida
title: O que é qualidade?
---
---
layout: statement
kicker: Conceito central
title: O que é qualidade de software?
---
---
layout: bigtype
kicker: Pense por 30 segundos
title: O que mais irrita você em um aplicativo?
---
---
layout: define
kicker: Definição de trabalho
term: Qualidade de software
definition: Software que <span class="accent2">atende às necessidades do cliente</span>.
points:
  - Executa com eficiência e confiabilidade
  - Chega no prazo previsto
  - Respeita o orçamento definido
---
---
layout: agenda
kicker: Objetivos da aula
title: Hoje você vai conectar qualidade a decisões concretas
items:
  - { topic: Definir, desc: "reconhecer qualidade de software" }
  - { topic: Gerenciar, desc: "distinguir organização e projeto" }
  - { topic: Planejar, desc: "identificar elementos do plano" }
  - { topic: Avaliar, desc: "formular perguntas de controle" }
  - { topic: Relacionar, desc: "conectar processo e produto" }
---
---
layout: section
index: "01"
kicker: Gestão da qualidade
title: Qualidade precisa ser administrada
subtitle: Organização e projeto têm responsabilidades complementares.
---
---
layout: feature
kicker: "[Visual sugerido: triângulo de compromissos]"
title: Qualidade reúne três compromissos
columns: 3
features:
  - { icon: "lucide:users", title: Necessidades, desc: "Atender ao cliente" }
  - { icon: "lucide:gauge", title: Execução, desc: "Ser eficiente e confiável" }
  - { icon: "lucide:calendar-check", title: Entrega, desc: "Cumprir prazo e orçamento" }
---
---
layout: bigtype
kicker: Resposta prática
title: Gerencie a qualidade na <em>organização</em> e no projeto.
---
---
layout: vs
kicker: "[Comparação] Dois níveis"
title: A organização define; o projeto verifica
left:
  title: Organização
  items:
    - Define processos
    - Estabelece padrões
right:
  title: Projeto
  items:
    - Verifica processos e padrões
    - Planeja metas e artefatos
label: complementa
---
---
layout: default
kicker: Referência rápida
title: Padrões organizacionais podem cobrir
---

<Tags :items="['Processos', 'Formulários', 'Estilos e formatos', 'Procedimentos', 'Documentação']" />

<!-- Relacione cada item aos artefatos já usados pelos estudantes. -->
---
layout: vs
kicker: "[Comparação] Referência da manufatura"
title: Garantia e controle cumprem papéis diferentes
left:
  title: Garantia da qualidade
  items:
    - Define processos e padrões
    - Introduz práticas na fabricação
right:
  title: Controle da qualidade
  items:
    - Aplica processos de qualidade
    - Elimina produtos abaixo do nível
label: e
---
---
layout: steps
kicker: "[Fluxograma sugerido: práticas da indústria]"
title: No software, a gestão combina quatro frentes
steps:
  - { title: Definir, desc: "procedimentos, processos e padrões", icon: "lucide:list-checks" }
  - { title: Configurar, desc: "gerenciar configurações", icon: "lucide:settings" }
  - { title: Verificar, desc: "realizar atividades de verificação", icon: "lucide:search-check" }
  - { title: Validar, desc: "realizar atividades de validação", icon: "lucide:badge-check" }
---
---
layout: default
kicker: "[Linha do tempo sugerida: ciclo do software]"
title: A gestão continua depois da entrega
---

<Callout icon="lucide:repeat-2">Qualidade é gerenciada durante e após a entrega.</Callout>

<!-- Destaque que a responsabilidade não termina com o lançamento. -->
---
layout: statement
kicker: Objetividade
title: A equipe de qualidade deve ser independente do desenvolvimento.
---
---
layout: panels
kicker: Responsabilidades da equipe
title: A garantia da qualidade observa projeto e processo
panels:
  - { icon: "lucide:target", title: Resultados, items: ["Comparar padrões e objetivos"] }
  - { icon: "lucide:files", title: Processo, items: ["Examinar documentos e tarefas"] }
  - { icon: "lucide:circle-alert", title: Premissas, items: ["Detectar esquecimentos e suposições"] }
  - { icon: "lucide:test-tube-diagonal", title: Liberação, items: ["Gerenciar testes de entrega"] }
---
---
layout: section
index: "02"
kicker: Planejamento
title: Qualidade desejada precisa virar plano
subtitle: O plano liga expectativas, avaliação e responsabilidades.
---
---
layout: define
kicker: Documento orientador
term: Plano de qualidade
definition: Define as <span class="accent2">qualidades desejadas</span> do software.
points:
  - Explicita como cada qualidade será avaliada
  - Orienta o trabalho do projeto
---
---
layout: reference
kicker: Estrutura do plano
title: Cinco conteúdos organizam o planejamento
items:
  - { term: Introdução, desc: "Descrição, mercado e expectativas de qualidade" }
  - { term: Produto, desc: "Datas, responsabilidades, distribuição e manutenção" }
  - { term: Processos, desc: "Desenvolvimento, serviço e padrões aplicáveis" }
  - { term: Objetivos, desc: "Atributos críticos, metas e justificativas" }
  - { term: Riscos, desc: "Principais ameaças e ações de resposta" }
---
---
layout: section
index: "03"
kicker: Julgamento
title: Avaliar software envolve subjetividade
subtitle: Nem toda qualidade cabe em uma medida direta.
---
---
layout: statement
kicker: "[Imagem sugerida: régua]"
title: Quais atributos verificam a qualidade de uma régua?
---
---
layout: statement
kicker: "[Imagem sugerida: pintura]"
title: Quais atributos verificam uma obra de arte?
---
---
layout: vs
kicker: "[Comparação] Natureza do produto"
title: O objeto muda; a avaliação também
left:
  title: Produto concreto
  items:
    - Qualidade mais objetiva
    - Atributos diretamente observáveis
right:
  title: Produto autoral ou abstrato
  items:
    - Qualidade mais subjetiva
    - Julgamento depende dos atributos
label: enquanto
---
---
layout: panels
kicker: Por que isso acontece?
title: Software não se compara diretamente a objetos concretos
panels:
  - { icon: "lucide:file-question", title: Requisitos, items: ["Podem ser incompletos ou ambíguos"] }
  - { icon: "lucide:users-round", title: Interesses, items: ["Especificações cobrem parte dos envolvidos"] }
  - { icon: "lucide:ruler", title: Medição, items: ["Certas propriedades resistem à medida"] }
---
---
layout: statement
kicker: Discussão rápida
title: Se manutenibilidade é difícil de medir, como avaliá-la?
---
---
layout: section
index: "04"
kicker: Controle da qualidade
title: Perguntas tornam o julgamento mais explícito
subtitle: A equipe transforma expectativas em critérios de análise.
---
---
layout: feature
kicker: "[Infográfico sugerido: atributos]"
title: Funcionalidade não encerra a avaliação
columns: 4
features:
  - { icon: "lucide:shield-check", title: Confiabilidade, desc: "Pronto para uso" }
  - { icon: "lucide:gauge", title: Desempenho, desc: "Aceitável no uso normal" }
  - { icon: "lucide:mouse-pointer-click", title: Usabilidade, desc: "Possível de usar" }
  - { icon: "lucide:wrench", title: Manutenibilidade, desc: "Difícil de medir" }
---
---
layout: reference
kicker: Perguntas de controle
title: Primeiro, examine o uso esperado
items:
  - { term: Testes, desc: "O software foi devidamente testado?" }
  - { term: Requisitos, desc: "Todos foram implementados?" }
  - { term: Confiabilidade, desc: "Está pronto para uso?" }
  - { term: Desempenho, desc: "É aceitável no uso normal?" }
  - { term: Usabilidade, desc: "O sistema é utilizável?" }
---
---
layout: vs
kicker: Perguntas de controle
title: Depois, examine estrutura e conformidade
left:
  title: Estrutura
  items:
    - Está bem estruturado?
    - É compreensível?
right:
  title: Padrões
  items:
    - Segue padrões de programação?
    - Segue padrões de documentação?
label: e
---
---
layout: steps
kicker: "[Fluxograma sugerido: processo → produto]"
title: Bons processos favorecem bons produtos
steps:
  - { title: Definir, desc: "processos adequados", icon: "lucide:route" }
  - { title: Aplicar, desc: "práticas e padrões", icon: "lucide:play" }
  - { title: Verificar, desc: "trabalho e resultados", icon: "lucide:scan-search" }
  - { title: Favorecer, desc: "software de qualidade", icon: "lucide:badge-check" }
---
---
layout: default
kicker: Exercício 1 · Conceitos
title: Responda em uma frase
---

<v-clicks>

1. O que define qualidade de software?
2. Como organização e projeto se diferenciam?
3. Como garantia e controle se distinguem?
4. Por que avaliar software é subjetivo?
5. Como processos influenciam o produto?

</v-clicks>

<!-- Revele uma pergunta por vez e peça respostas curtas. -->
---
layout: panels
kicker: Exercício 2 · Casos curtos
title: Analise cada situação
panels:
  - { icon: "lucide:smartphone", title: Aplicativo, items: ["Funcional, mas lento: qualidade suficiente?"] }
  - { icon: "lucide:mouse-pointer-click", title: Sistema, items: ["Confiável, mas difícil de usar: aprove?"] }
  - { icon: "lucide:file-warning", title: Projeto, items: ["Sem padrões: qual risco permanece?"] }
---
---
layout: steps
kicker: Exercício 3 · Desafio em grupo
title: Criem uma ficha de controle para um aplicativo
steps:
  - { title: Escolham, desc: "um aplicativo conhecido", icon: "lucide:smartphone" }
  - { title: Perguntem, desc: "testes, requisitos e confiabilidade", icon: "lucide:circle-help" }
  - { title: Avaliem, desc: "desempenho, usabilidade e estrutura", icon: "lucide:clipboard-check" }
  - { title: Concluam, desc: "qualidade e justificativa", icon: "lucide:message-square-text" }
---
---
layout: default
kicker: Síntese
title: O que você deve lembrar desta aula
---

- Qualidade atende necessidades do cliente
- Execução deve ser eficiente e confiável
- Prazo e orçamento também importam
- Organizações definem processos e padrões
- Projetos verificam aplicação e planejam metas
- Avaliar software envolve julgamento
- Bons processos favorecem bons produtos
---
layout: end
title: Qualidade nasce de processos conscientes e perguntas bem feitas.
subtitle: Continue perguntando o que significa “bom” neste contexto.
contact: filipe.fernandes@ifsudestemg.edu.br
---

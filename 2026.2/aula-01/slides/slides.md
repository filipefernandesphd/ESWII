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
kicker: "[Infográfico] Software no cotidiano"
title: Quando o software falha, o problema não fica só na tela.
---
---
layout: statement
kicker: Interação
title: Pense por 30 segundos — o que mais irrita você em um aplicativo?
---
---
layout: agenda
kicker: Objetivos da aula
title: Hoje você vai conectar qualidade a decisões reais
items:
  - { topic: Conceituar, desc: reconhecer diferentes visões de qualidade }
  - { topic: Diferenciar, desc: separar processo e produto }
  - { topic: Avaliar, desc: observar atributos e métricas }
  - { topic: Decidir, desc: "equilibrar qualidade, prazo e custo" }
  - { topic: Aplicar, desc: analisar situações do cotidiano }
---
---
layout: section
index: "01"
kicker: Fundamentos
title: Afinal, o que é qualidade?
subtitle: Uma palavra comum, várias lentes possíveis.
---
---
layout: reference
kicker: "[Comparação] Cinco lentes"
title: Qualidade muda conforme o ponto de vista
items:
  - { term: Transcendental, desc: "Reconhecemos, mesmo sem definir claramente" }
  - { term: Usuário, desc: O produto ajuda a atingir objetivos }
  - { term: Fabricante, desc: A implementação segue as especificações }
  - { term: Produto, desc: Funções e recursos indicam qualidade }
  - { term: Valor, desc: Benefício percebido justifica o preço }
---
---
layout: vs
kicker: "[Comparação] Duas dimensões"
title: Projetar bem não garante entregar bem
left:
  title: Qualidade de projeto
  items:
    - Funções atendem aos requisitos
    - Desempenho desejado foi especificado
right:
  title: Qualidade de conformidade
  items:
    - Implementação segue o projeto
    - Sistema atinge necessidades e metas
label: e
---
---
layout: feature
kicker: Definição operacional
title: Qualidade de software combina três pilares
columns: 3
features:
  - { icon: "lucide:workflow", title: Gestão efetiva, desc: Cria estrutura e reduz o caos }
  - { icon: "lucide:package-check", title: Produto útil, desc: Entrega funções e confiabilidade }
  - { icon: "lucide:badge-dollar-sign", title: Valor mensurável, desc: Beneficia produtores e usuários }
---
---
layout: vs
kicker: "[Comparação] Causa e resultado"
title: Processo prepara; produto comprova
left:
  title: Qualidade do processo
  items:
    - Práticas e revisões orientam a construção
    - Gestão evita decisões caóticas
right:
  title: Qualidade do produto
  items:
    - Atende requisitos explícitos
    - Cumpre expectativas implícitas
    - Funciona com confiança e precisão
label: gera
---
---
layout: columns
kicker: "[Comparação] Valor compartilhado"
title: Qualidade cria espaço para evoluir
columns:
  - title: Para quem produz
    items:
      - Menos manutenção, correções e suporte
      - Mais tempo para novas aplicações
  - title: Para quem usa
    items:
      - Processos ficam mais ágeis
      - Informações tornam-se mais disponíveis
      - O produto entrega benefício real
---
---
layout: section
index: "02"
kicker: Modelos de qualidade
title: Qualidade tem vários fatores
subtitle: Uma única nota não explica toda a experiência.
---
---
layout: columns
kicker: "[Diagrama] Modelo de McCall"
title: Três ângulos organizam os fatores
columns:
  - title: Operar
    items:
      - Experiência geral durante a operação
  - title: Alterar
    items:
      - Mudanças sem destruir a qualidade
  - title: Adaptar
    items:
      - Adaptação a novos ambientes
---
---
layout: vs
kicker: "[Comparação] ISO 25010"
title: A norma observa uso e produto
left:
  title: Qualidade em uso
  items:
    - Observa usuários, contexto e objetivos
    - Destaca satisfação e riscos
right:
  title: Qualidade do produto
  items:
    - Examina sistema estático e dinâmico
    - Inclui requisitos funcionais
    - Inclui requisitos não funcionais
label: +
---
---
layout: reference
kicker: "[Checklist] Qualidade em uso"
title: O contexto revela cinco características
items:
  - { term: Eficácia, desc: Metas atingidas com precisão e completude }
  - { term: Eficiência, desc: Recursos usados para atingir as metas }
  - { term: Satisfação, desc: "Utilidade, confiança, prazer e conforto" }
  - { term: Ausência de riscos, desc: "Danos econômicos, humanos e ambientais mitigados" }
  - { term: Cobertura, desc: Completude e flexibilidade no contexto }
---
---
layout: panels
kicker: "[Infográfico] Qualidade do produto · 1/2"
title: Valor funcional também depende da interação
panels:
  - { icon: "lucide:list-checks", title: Adequação funcional, items: ["Completo, correto e apropriado"] }
  - { icon: "lucide:timer", title: Desempenho, items: ["Tempo, recursos e capacidade"] }
  - { icon: "lucide:plug-zap", title: Compatibilidade, items: [Coexistência e interoperabilidade] }
  - { icon: "lucide:mouse-pointer-click", title: Usabilidade, items: ["Aprender, operar e acessar"] }
---
---
layout: panels
kicker: "[Infográfico] Qualidade do produto · 2/2"
title: Confiança hoje; evolução amanhã
panels:
  - { icon: "lucide:heart-pulse", title: Confiabilidade, items: ["Disponível, tolerante e recuperável"] }
  - { icon: "lucide:lock-keyhole", title: Segurança, items: ["Confidencialidade, integridade e autenticidade"] }
  - { icon: "lucide:wrench", title: Manutenibilidade, items: ["Modular, reutilizável e testável"] }
  - { icon: "lucide:package-open", title: Portabilidade, items: ["Adaptável, instalável e substituível"] }
---
---
layout: columns
kicker: Discussão rápida · cenários hipotéticos
title: Qual fator está em jogo?
columns:
  - { title: WhatsApp, items: [A ação confunde o usuário] }
  - { title: Pix, items: [A confirmação aparece duas vezes] }
  - { title: Jogo, items: [A instalação falha em outra plataforma] }
---
---
layout: section
index: "03"
kicker: Avaliação
title: Qualidade precisa deixar sinais
subtitle: Observar primeiro; medir quando fizer sentido.
---
---
layout: columns
kicker: "[Checklist] Avaliação de usabilidade"
title: Transforme atributos em perguntas observáveis
columns:
  - title: Começar
    items:
      - A função parece adequada e fácil de aprender?
  - title: Interagir
    items:
      - A tarefa flui e previne erros?
  - title: Incluir
    items:
      - A aparência inclui diferentes usuários?
---

<!-- Use usuários representativos, tarefas estruturadas, observação e questionários. -->
---
layout: steps
kicker: "[Fluxograma] Avaliação quantitativa"
title: Métricas sinalizam; a equipe investiga
steps:
  - { title: Escolher, desc: selecione o fator de qualidade }
  - { title: Observar, desc: defina manifestações reconhecíveis }
  - { title: Medir, desc: colete atributos internos ou externos }
  - { title: Comparar, desc: use uma faixa aceitável }
  - { title: Investigar, desc: examine valores fora da faixa }
---
---
layout: section
index: "04"
kicker: Decisões difíceis
title: O dilema da qualidade
subtitle: Nem rejeição imediata, nem perfeição infinita.
---
---
layout: vs
kicker: "[Balança] Prazo, custo e qualidade"
title: Os extremos enterram o produto
left:
  title: Qualidade insuficiente
  items:
    - Usuários rejeitam; retrabalho cresce
    - Riscos e custos aumentam
right:
  title: Perfeição absoluta
  items:
    - Entrega demora demais
    - Recursos podem acabar
    - O mercado segue adiante
label: equilíbrio
---
---
layout: vs
kicker: "[Comparação] Bom o suficiente"
title: Contexto decide; conveniência não
left:
  title: Pode ser aceitável
  items:
    - Funções centrais têm alta qualidade
    - Erros periféricos serão melhorados
right:
  title: Pode ser negligência
  items:
    - O domínio envolve vidas
    - A reputação pode não sobreviver
    - Litígios podem inviabilizar a empresa
label: risco
---
---
layout: panels
kicker: "[Infográfico] Custo da qualidade"
title: Pagar antes costuma custar menos
panels:
  - icon: "lucide:shield"
    title: Prevenção
    items: ["Planejamento, modelos, testes e treinamento"]
  - icon: "lucide:search-check"
    title: Avaliação
    items: ["Revisões, métricas, testes e depuração"]
  - icon: "lucide:triangle-alert"
    title: Falhas internas
    items: ["Reparo, efeitos colaterais e análise"]
  - icon: "lucide:siren"
    title: Falhas externas
    items: ["Suporte, garantia, reputação e negócios"]
---
---
layout: stats
kicker: "[Comparação] Mesmo defeito, fases diferentes"
title: Corrigir tarde multiplica o custo
columns: 3
stats:
  - { value: 977, unit: "US$", label: correção na codificação, tone: good }
  - { value: 7136, unit: "US$", label: correção nos testes, tone: warn }
  - { value: 14102, unit: "US$", label: correção na manutenção, tone: bad }
---
---
layout: stats
kicker: "[Caso real] Software médico"
title: Baixa qualidade também machuca
columns: 3
stats:
  - { value: 28, label: pacientes receberam doses excessivas, tone: warn }
  - { value: 5, label: mortes por contaminação radioativa, tone: bad }
  - { value: 15, label: complicações graves, tone: bad }
---
---
layout: columns
kicker: "[Mapa de consequências] Além do bug"
title: Decisões técnicas e administrativas dividem a responsabilidade
columns:
  - title: Responsabilidade civil
    items:
      - Negligência e parcerias rompidas podem gerar litígios
  - title: Segurança
    items:
      - Bugs surgem na implementação; falhas, na arquitetura
  - title: Administração
    items:
      - Estimativas evitam prazos absurdos
      - Cronogramas e riscos exigem realismo
---
---
layout: section
index: "05"
kicker: Construção consciente
title: Qualidade não aparece por acaso
subtitle: Ela é produzida durante todo o ciclo.
---
---
layout: panels
kicker: "[Diagrama] Quatro frentes"
title: A qualidade nasce de trabalho coordenado
panels:
  - { icon: "lucide:blocks", title: Métodos, items: [Entender e projetar bem] }
  - { icon: "lucide:calendar-check", title: Gerenciamento, items: ["Planejar prazo, mudanças e riscos"] }
  - { icon: "lucide:scan-search", title: Controle, items: ["Revisar, testar e corrigir"] }
  - { icon: "lucide:clipboard-check", title: Garantia, items: ["Auditar, relatar e dar confiança"] }
---
---
layout: steps
kicker: "[Fluxograma] Previsão de defeitos"
title: Dados ajudam a encontrar componentes suspeitos
steps:
  - { title: Reunir, desc: métricas e defeitos conhecidos }
  - { title: Aprender, desc: identificar relações preditivas }
  - { title: Classificar, desc: estimar componentes mais propensos }
  - { title: Priorizar, desc: concentrar revisão e testes }
---
---
layout: vs
kicker: "[Comparação] Controle e garantia"
title: Um verifica produtos; outro verifica o sistema de qualidade
left:
  title: Controle da qualidade
  items:
    - Revisa modelos, código, lógica, dados e interfaces
    - Ajusta com métricas e feedback
right:
  title: Garantia da qualidade
  items:
    - Sustenta métodos e gestão
    - Audita ações de controle
    - Informa decisões administrativas
label: juntos
---
---
layout: default
kicker: Exercício · 5 perguntas conceituais
title: Verifique seu entendimento
---

<v-clicks>

1. Como usuário e fabricante enxergam qualidade?
2. Processo bom garante produto bom? Justifique.
3. Por que métricas medem qualidade indiretamente?
4. Quando “bom o suficiente” vira negligência?
5. Controle e garantia exercem quais papéis?

</v-clicks>

<!-- Peça respostas curtas e exemplos fundamentados nos conceitos da aula. -->
---
layout: panels
kicker: Exercício · 3 estudos de caso
title: Aplique os fatores ao contexto
panels:
  - { icon: "lucide:landmark", title: Pix hipotético, items: [Confirma duas vezes; qual fator avaliar?] }
  - { icon: "lucide:graduation-cap", title: Sistema acadêmico, items: ["Funciona, mas ninguém entende; falta o quê?"] }
  - { icon: "lucide:stethoscope", title: Equipamento médico, items: [Bug raro conhecido; lançar ou adiar?] }
---
---
layout: default
kicker: Exercício · desafio em grupo
title: Monte um plano mínimo de qualidade
---

<v-clicks>

- Escolham um sistema usado pela turma
- Priorizem três fatores de qualidade
- Criem uma pergunta observável por fator
- Classifiquem um custo de qualidade
- Defendam o equilíbrio escolhido

</v-clicks>

<!-- Cada grupo apresenta a decisão e o risco que aceitou. -->
---
layout: default
title: O que você deve lembrar desta aula
---

- Qualidade conecta processo, produto, utilidade e valor
- Uso e produto exigem perspectivas complementares
- Fatores tornam qualidade discutível e observável
- Métricas sinalizam; pessoas interpretam o contexto
- Prevenir custa menos que corrigir tarde
- Prazo nunca elimina riscos e responsabilidades
- Qualidade nasce das escolhas feitas desde o início

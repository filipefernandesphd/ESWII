---
theme: slidev-theme-tahta
title: Modelos de Maturidade
aspectRatio: 16/10
info: |
  Modelos de Maturidade: MPS.BR e CMMI
themeConfig:
  variant: minimal
addons:
  - slidev-addon-citations
mdc: true
routerMode: hash
preloadImages: false
biblio:
  filename: references.bib
  show_full_bib: true
  show_id: false
layout: academic-cover
---

---
layout: default
kicker: Situação-problema
title: A SoftSolutions cresceu, mas seus processos não acompanharam
---

- Empresa de médio porte, há 10 anos no mercado
- Projetos sob demanda para órgãos públicos e pequenas empresas
- Contratos recentes foram perdidos por **atrasos e falhas de qualidade**

<div class="mt-10 border-l-6 border-[var(--accent)] pl-6 text-3xl font-semibold">
O problema não está apenas no código: está na forma de trabalhar.
</div>

---
layout: two-cols
kicker: Diagnóstico
title: Sintomas recorrentes produzem impactos previsíveis
---

### No processo

- Prazos não cumpridos
- Requisitos pouco documentados
- Desenvolvimento e testes sem padrão
- Retrabalho e erros em produção
- Decisões sem métricas

::right::

### No negócio

- Clientes insatisfeitos
- Equipe desmotivada
- Margem consumida por correções
- Perda de contratos
- Menor competitividade

---
layout: default
kicker: Questão norteadora
title: Como sair do improviso sem tentar mudar tudo de uma vez?
---

<div class="h-[72%] flex items-center justify-center text-center">
  <p class="max-w-[25ch] text-5xl leading-tight font-bold text-[var(--academic-navy-950)]">
    Como estruturar processos para reduzir atrasos, evitar retrabalho e sustentar a melhoria?
  </p>
</div>

---
layout: default
kicker: Ideia central
title: Maturidade torna a melhoria progressiva e verificável
---

Um modelo de maturidade oferece uma **referência evolutiva** para organizar práticas, avaliar a situação atual e definir o próximo patamar.

<div class="mt-12 grid grid-cols-3 gap-8 text-center">
  <div><div class="text-5xl font-bold text-[var(--accent-deep)]">1</div><div class="mt-3 text-2xl">Diagnosticar</div></div>
  <div><div class="text-5xl font-bold text-[var(--accent-deep)]">2</div><div class="mt-3 text-2xl">Priorizar</div></div>
  <div><div class="text-5xl font-bold text-[var(--accent-deep)]">3</div><div class="mt-3 text-2xl">Institucionalizar</div></div>
</div>

---
layout: default
kicker: Limite importante
title: O modelo define o que alcançar — não uma receita única
---

- Especifica **objetivos, práticas ou resultados esperados**
- Permite avaliar se o processo é executado de modo consistente
- Não prescreve todas as atividades, ferramentas ou papéis
- A organização escolhe **como** atender ao modelo em seu contexto

<div class="mt-10 border-l-6 border-[var(--accent)] pl-6 text-3xl font-semibold">
Conformidade sem adequação ao contexto gera burocracia, não maturidade.
</div>

---
layout: two-cols
kicker: Duas referências
title: MPS.BR e CMMI orientam a evolução dos processos
---

<div class="h-[65%] flex flex-col items-center justify-center">
  <img src="../../assets/maturidade/logo-mpsbr.png" alt="Logotipo do programa MPS.BR" class="max-h-[38%] max-w-[76%] object-contain" />
  <p class="mt-8 text-center text-2xl">Modelo brasileiro com atenção especial às micro, pequenas e médias empresas.</p>
</div>

::right::

<div class="h-[65%] flex flex-col items-center justify-center">
  <img src="../../assets/maturidade/cmmi.jpg" alt="Logotipo do CMMI" class="max-h-[42%] max-w-[78%] object-contain" />
  <p class="mt-8 text-center text-2xl">Referência internacional de práticas para melhorar desempenho e capacidade.</p>
</div>

---
layout: section
index: "01"
kicker: Referência brasileira
title: MPS.BR
---

---
layout: default
kicker: Programa MPS.BR
title: Melhorar processos é o meio; aumentar competitividade é o objetivo
---

- Criado em 2003 e coordenado pela **Softex**
- Adequado a organizações de diferentes portes e características
- Atenção especial às **micro, pequenas e médias empresas**
- Compatível com referências de qualidade aceitas internacionalmente

O programa articula evolução técnica, formação de profissionais, avaliação e disseminação dos modelos [@softex2024].

---
layout: two-cols
kicker: Arquitetura do programa
title: Cinco componentes cobrem referência, avaliação e adoção
---

### Modelos de referência

- **MR-MPS-SW** — processos de software
- **MR-MPS-SV** — processos de serviços
- **MR-MPS-RH** — gestão de pessoas

::right::

### Viabilização

- **MA-MPS** — método de avaliação e evidências
- **MN-MPS** — regras de negócio para adoção

---
layout: default
kicker: Base técnica
title: O MPS combina normas e modelos reconhecidos
---

<div class="h-[72%] flex items-center justify-center">
  <img src="../../assets/maturidade/base-tecnica-mpsbr.png" alt="Bases técnicas e componentes do modelo MPS" class="max-h-full max-w-[94%] object-contain" />
</div>

[@softex2024]

---
layout: default
kicker: MR-MPS-SW
title: O nível resulta da combinação entre processos e capacidade
---

<div class="mt-12 flex items-center justify-center gap-10 text-center">
  <div class="w-[30%] border-b-6 border-[var(--accent)] pb-5">
    <div class="text-5xl font-bold">Processos</div>
    <div class="mt-3 text-2xl">propósitos e resultados esperados</div>
  </div>
  <div class="text-6xl font-bold text-[var(--accent-deep)]">+</div>
  <div class="w-[30%] border-b-6 border-[var(--accent)] pb-5">
    <div class="text-5xl font-bold">Capacidade</div>
    <div class="mt-3 text-2xl">grau de execução e institucionalização</div>
  </div>
</div>

<p class="mt-14 text-center text-3xl font-semibold">A combinação caracteriza o nível de maturidade alcançado.</p>

---
layout: vs
kicker: Tipos de processo
title: Projetos entregam valor; processos organizacionais sustentam a entrega
left:
  title: Processos de projeto
  items: [Planejar e acompanhar projetos, Definir e gerenciar requisitos, Projetar e construir o produto, Integrar componentes, Verificar e validar]
right:
  title: Processos organizacionais
  items: [Gerir configuração e aquisições, Medir desempenho, Apoiar decisões, Desenvolver competências, Gerir e melhorar processos]
label: +
---

---
layout: default
kicker: Evolução acumulativa
title: Cada nível preserva resultados anteriores e acrescenta capacidade
---

<div class="h-[74%] flex items-center justify-center">
  <img src="../../assets/maturidade/niveis-mpsbr.png" alt="Pirâmide dos sete níveis de maturidade do MPS.BR para software" class="max-h-full max-w-[88%] object-contain" />
</div>

---
layout: default
kicker: Sete níveis
title: Os níveis G a D estabilizam e padronizam o trabalho
---

- **G — Parcialmente gerenciado:** projetos e requisitos começam a ser gerenciados
- **F — Gerenciado:** apoios organizacionais passam a sustentar os projetos
- **E — Parcialmente definido:** processos organizacionais e competências ganham forma
- **D — Largamente definido:** a engenharia do produto é ampliada e padronizada

---
layout: default
kicker: Sete níveis
title: Os níveis C a A ampliam controle, previsão e melhoria
---

- **C — Definido:** o conjunto de processos está institucionalizado
- **B — Gerenciado quantitativamente:** métricas apoiam previsibilidade e controle
- **A — Em otimização:** a melhoria contínua orienta a evolução

<div class="mt-12 border-l-6 border-[var(--accent)] pl-6 text-3xl font-semibold">
Cada nível preserva os resultados dos níveis anteriores.
</div>

---
layout: default
kicker: Exemplo de entrada
title: No nível G, gerenciar já significa produzir evidências
---

### A execução do processo é gerenciada

- O processo produz os resultados definidos
- A execução é **planejada e monitorada**
- As pessoas estão preparadas para suas responsabilidades

<div class="mt-10 grid grid-cols-3 gap-8 text-center">
  <div><strong>GPR</strong><br><span class="text-2xl">Gerência de Projetos</span></div>
  <div><strong>REQ</strong><br><span class="text-2xl">Engenharia de Requisitos</span></div>
  <div><strong>CAP</strong><br><span class="text-2xl">Capacitação</span></div>
</div>

---
layout: default
kicker: Evidências
title: Maturidade aparece no trabalho cotidiano, não no discurso
---

Para a SoftSolutions, sinais concretos de avanço incluiriam:

- Planos atualizados e acompanhados
- Requisitos rastreáveis e mudanças controladas
- Responsabilidades explícitas e pessoas capacitadas
- Produtos de trabalho versionados
- Medidas usadas para decidir e corrigir desvios

---
layout: section
index: "02"
kicker: Referência internacional
title: CMMI
---

---
layout: default
kicker: Visão geral
title: O CMMI conecta melhoria de processos a desempenho do negócio
---

- **Capability Maturity Model Integration**
- Conjunto integrado de melhores práticas para melhoria de processos
- Aplicável a desenvolvimento, serviços e aquisição
- Busca reduzir riscos de custo, prazo e qualidade
- Organiza práticas que ajudam a alcançar objetivos de negócio [@CMMI07]

---
layout: two-cols
kicker: Organização das práticas
title: Quatro perspectivas ajudam a enxergar o sistema de trabalho
---

### Gestão de Projetos

- Planejamento
- Acompanhamento

### Engenharia

- Requisitos
- Solução e validação

::right::

### Suporte

- Qualidade
- Configuração e decisões

### Gestão de Processos

- Padronização
- Medição e melhoria

---
layout: default
kicker: Representação por estágios
title: Cinco níveis descrevem uma trajetória de previsibilidade
---

<div class="h-[73%] flex items-center justify-center">
  <img src="../../assets/maturidade/niveis-cmmi.jpg" alt="Escada com os cinco níveis de maturidade do CMMI" class="max-h-full max-w-[86%] object-contain" />
</div>

---
layout: two-cols
kicker: Leitura dos níveis
title: A evolução vai do trabalho reativo à melhoria contínua
---

### Estabilizar

1. **Inicial** — processos imprevisíveis e reativos
2. **Gerenciado** — projetos planejam e acompanham o trabalho
3. **Definido** — processos são padronizados na organização

::right::

### Prever e otimizar

4. **Gerenciado quantitativamente** — desempenho medido e controlado
5. **Em otimização** — melhoria contínua baseada em evidências

<div class="mt-10 border-l-6 border-[var(--accent)] pl-6 text-2xl font-semibold">
Subir de nível exige institucionalizar práticas, não apenas documentá-las.
</div>

---
layout: vs
kicker: Comparação
title: Os modelos compartilham a direção, mas oferecem percursos diferentes
left:
  title: MPS.BR
  items: [Sete níveis de maturidade, Passos iniciais mais graduais, Contexto brasileiro e atenção às mPMEs, Compatibilidade com referências internacionais]
right:
  title: CMMI
  items: [Cinco níveis na representação por estágios, Referência internacional, Práticas integradas para diferentes domínios, Forte orientação a desempenho]
label: ↔
---

---
layout: steps
kicker: Aplicação
title: A SoftSolutions pode começar pelo próximo problema observável
steps:
  - { title: Diagnosticar, desc: Identificar lacunas e evidências disponíveis, icon: "lucide:scan-search" }
  - { title: Priorizar, desc: Relacionar dores do negócio a processos críticos, icon: "lucide:list-checks" }
  - { title: Implementar, desc: Definir práticas adequadas ao contexto, icon: "lucide:wrench" }
  - { title: Medir, desc: Verificar resultados e ajustar o processo, icon: "lucide:chart-no-axes-column" }
---

---
layout: default
kicker: Discussão
title: Qual seria o primeiro passo da SoftSolutions?
---

<div class="h-[65%] grid grid-cols-2 gap-14 items-center">
  <div class="text-4xl font-semibold leading-tight">
    Escolha um problema prioritário e associe-o a um processo que possa gerar evidências de melhoria.
  </div>
  <div class="space-y-6 text-3xl">
    <div>① Qual dor atacar?</div>
    <div>② Qual resultado esperar?</div>
    <div>③ Qual evidência observar?</div>
  </div>
</div>

---
layout: default
title: Referências
---
<BiblioList />

---
layout: feature
kicker: Encerramento
title: Obrigado!
columns: 2
features:

- { icon: "lucide:globe", desc: filipefernandesphd.com }
- { icon: "lucide:instagram", desc: "@filipfernandesphd" }

---

---
layout: two-cols
title: Avaliação da Experiência de Aprendizagem
---

- **[Seu feedback é muito importante!](https://forms.gle/CMfL5oTm235FfuH59)**
- Obtenha o código da avaliação

::right::

<img
  src="../../assets/qrcode-avaliacao.png"
  alt="QR code da avaliação da experiência de aprendizagem"
/>

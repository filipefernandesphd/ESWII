---
theme: slidev-theme-tahta
title: 'Princípios FIRST'
aspectRatio: 16/10
info: |
  Princípios FIRST
themeConfig:
  variant: minimal
  lang: pt-BR
addons:
  - slidev-addon-citations
mdc: true
routerMode: hash
browserExporter: build
preloadImages: false
biblio:
  filename: references.bib
  show_full_bib: true
  show_id: false
layout: academic-cover
---

---
layout: section
title: Teoria
index: "T"
---

---
layout: default
title: "Princípios FIRST"
---

**FIRST** é um conjunto de cinco princípios que orientam a criação de **testes unitários**.

---
layout: default
title: "O significado de FIRST"
---

- **F — Fast:** rápidos.
- **I — Independent:** independentes.
- **R — Repeatable:** repetíveis.
- **S — Self-checking:** verificam automaticamente seus resultados.
- **T — Timely:** escritos no momento adequado.

---
layout: default
title: "Fast"
---

- Testes rápidos oferecem **feedback sobre bugs e regressões**.
- **Regressão:** um código que funcionava deixa de funcionar após alterações.

---
layout: default
title: "Independent"
---

- O resultado dos testes deve ser **independente da ordem de execução**.
- **Exemplo:** executar **T1 seguido de T2** ou **T2 seguido de T1** deve produzir os mesmos resultados.

---
layout: default
title: "Repeatable"
---

- Nas mesmas condições, executar **T** por **N vezes** deve produzir o mesmo resultado nas **N execuções**.
- Testes não determinísticos são chamados de testes **flaky (ou testes erráticos)**.
- A **concorrência** pode causar esse comportamento.

---
layout: default
title: "Self-checking"
---

- Os resultados devem ser **fáceis de verificar**.
- **Exemplo:** IDEs e frameworks de teste indicam automaticamente **aprovação ou falha**.

---
layout: default
title: "Timely"
---

- Escrever testes **o quanto antes**.
- **Exemplo:** no **TDD**, escrever o teste antes do código de implementação.

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

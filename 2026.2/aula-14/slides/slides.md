---
theme: slidev-theme-tahta
title: 'Teste Smells'
aspectRatio: 16/10
info: |
  Teste Smells
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
index: "T"
title: "Teoria"
---

---
layout: default
title: "Teste Smells"
---

- Estruturas e características preocupantes no código de **testes unitários**.
- A princípio, devem ser evitadas.

---
layout: default
title: "Tipos de Teste Smells"
---

- Teste obscuro.
- Teste com lógica condicional.
- Duplicação de código em testes.
- Número de asserts por teste.

---
layout: default
title: "Teste obscuro"
---

- Teste **longo, complexo e difícil de entender**.
- Cada teste deve expressar claramente **um único requisito** do sistema sob teste.

---
layout: default
title: "Teste com lógica condicional"
---

- Comandos `if` e laços criam trechos que **podem ou não executar**.
- Testes unitários devem seguir um fluxo **linear e previsível**.

---
layout: default
title: "Duplicação de código em testes"
---

- Código repetido em diferentes métodos de teste aumenta o **esforço de manutenção**.
- Compartilhar a preparação comum pode reduzir a duplicação, preservando a **clareza de cada teste**.

---
layout: default
title: "Número de asserts por teste"
---

- Um **assert** é uma asserção sobre o resultado esperado.
- Alguns autores recomendam **no máximo um assert por teste**.
- Há exceções: vários asserts podem verificar aspectos do **mesmo comportamento**.

---
layout: default
title: "Catálogo de Test Smells"
---

- O **[The Open Catalog of Test Smells](https://test-smell-catalog.readthedocs.io/en/latest/#)** reúne diversos tipos de test smells.
- Uma referência ampla para consultar **definições e referências**.

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

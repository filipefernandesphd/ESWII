---
theme: slidev-theme-tahta
title: Verificação, Validação e Teste
aspectRatio: 16/10
info: |
  Verificação, Validação e Teste
themeConfig:
  variant: minimal
mdc: true
routerMode: hash
browserExporter: build
preloadImages: false
layout: academic-cover
---

---
layout: section
index: "T"
title: Teoria
---

---
layout: section
index: "01"
title: Introdução
---

---
layout: default
title: Teste de Software
---

Pretende mostrar o que um programa foi destinado a fazer e mostrar erros.

---
layout: default
title: Objetivos
---

- Mostrar que o software atende aos requisitos;
- Encontrar situações nas quais o software se comporta inadequadamente.

---
layout: statement
title: Testes fazem parte de um processo mais amplo — <span class="accent2">Verificação e Validação</span>
---

---
layout: vs
title: V&V — Duas perguntas diferentes
left: { title: "Validação — Estamos construindo o produto certo?", items: ["Assegurar que as necessidades dos stakeholders estão sendo atendidas"] }
right: { title: "Verificação — Estamos construindo certo o produto?", items: ["Assegurar que o software está sendo desenvolvido conforme os requisitos elicitados"] }
label: V&V
---

---
layout: section
index: "02"
title: Técnicas de V&V
---

---
layout: vs
title: Estática vs Dinâmica
left: { title: Estática, items: ["Sem execução do código", "Revisão e inspeção"] }
right: { title: Dinâmica, items: ["Execução do código", "Testes automatizados (veremos posteriormente)"] }
label: vs
---

---
layout: default
title: Revisão
---

- Procura inconsistências nos artefatos;
- Exemplo: revisão por pares de um documento de requisitos antes do início da implementação.

---
layout: default
title: Inspeção
---

- Revisa sistematicamente artefatos, principalmente código;
- Formas: ad-hoc, baseadas em perspectivas e checklists.

---
layout: define
kicker: Técnicas estáticas
term: Checklist
definition: Uma <span class="accent2">lista de verificação</span> com itens objetivos, usada para checar sistematicamente aspectos de um artefato durante a inspeção.
points:
  - Reduz a subjetividade da revisão
  - Padroniza o que deve ser observado
  - Pode ser aplicada a código, documentos ou requisitos
---

---
layout: default
kicker: Baseado em Sommerville + Java Code Inspection Checklist
title: Exemplo de checklist de código
---

Checklist de Inspeção de Código Java

- \[ X \] Variáveis são inicializadas antes do uso?

- \[ X \] Constantes estão declaradas adequadamente?

- \[ X \] Atributos possuem modificadores de acesso apropriados?

---
layout: default
kicker: Exemplo — item 1 de 3
title: Código a avaliar
---
<Callout tone="warn" icon="lucide:list-checks">Variáveis são inicializadas antes do uso?</Callout>

```java[font=extralarge]
public class Pedido {
    public double calcularTotal() {
        double total;
        return total + 10.0;
    }
}
```

---
layout: default
kicker: Exemplo — item 2 de 3
title: Código a avaliar
---

<Callout tone="warn" icon="lucide:list-checks">Constantes estão declaradas adequadamente?</Callout>

```java[font=extralarge]
public class Pedido {
    public double aplicarDesconto(
      double valor
    ) {
        return valor - (valor * 0.1);
    }
}
```

---
layout: default
kicker: Exemplo — item 3 de 3
title: Código a avaliar
---

<Callout tone="warn" icon="lucide:list-checks">Atributos possuem modificadores de acesso apropriados?</Callout>

```java[font=extralarge]
public class Pedido {
    public double valor;
    public String status;
}
```

---
layout: section
index: "H"
title: Hands-On
---

---
layout: steps
kicker: Hands-On
title: Acesse o link <span class="accent2">Hands-on</span> na página da aula
steps:
  - { title: Site da disciplina, desc: Abra o site do curso, icon: "lucide:globe" }
  - { title: Aula 06, desc: Entre na página desta aula, icon: "lucide:book-open" }
  - { title: Hands-on, desc: Clique no link e faça a atividade, icon: "lucide:list-checks" }
---

---
theme: slidev-theme-tahta
title: Refatoração
aspectRatio: 16/9
info: |
  Aula sobre refatoração e os principais refactorings do catálogo de Fowler.
themeConfig:
  variant: minimal
mdc: true
routerMode: hash
preloadImages: false
layout: academic-cover
---

---
layout: image
image: "../../assets/livro-engsoftmoderna.png"
kicker: Livro Texto
title: Engenharia de Software Moderna
---
[Marco Tulio Valente. Engenharia de Software Moderna: Princípios e Práticas para Desenvolvimento de Software com Produtividade, Editora: Independente, 2020.](https://engsoftmoderna.info/)


---
layout: section
index: "01"
kicker: (T)eoria
title: Refatoração
---

---
layout: default
title: Refatoração (1)
---
- **Manutenções** sucessivas tendem a aumentar a complexidade interna do software
- **Refactoring** transforma o código para **melhorar sua manutenibilidade**
- O comportamento e a semântica do sistema devem **permanecer inalterados**

---
layout: default
title: Refatoração (2)
---
- Aplique-o quando for difícil de:
  - entender, testar ou modificar o código
- Faça mudanças frequentes, pequenas e amparadas por testes

---
layout: two-cols
title: Catálogo de Refactorings
---

**Métodos**

- Extract Method
- Inline Method
- Move Method

::right::

**Classes e nomes**

- Extract Class
- Rename

---
layout: section
index: "02"
title: Extract Method
kicker: Extrair um trecho para um novo método com propósito explícito
---

---
layout: default
title: Extract Method
kicker: Antes
---

```java[font=large]
void imprimirRelatorio(Pedido pedido) {
  double total = pedido.itens().stream()
    .mapToDouble(Item::preco)
    .sum();

  System.out.println("Total: " + total);
}
```

---
layout: default
title: Extract Method
kicker: Depois
---

```java[font=large]
double calcularTotal(Pedido pedido) {
  return pedido.itens().stream()
    .mapToDouble(Item::preco)
    .sum();
}

void imprimirRelatorio(Pedido pedido) {
  System.out.println("Total: " + calcularTotal(pedido));
}
```

---
layout: section
index: "03"
title: Inline Method
kicker: Incorporar o corpo de um método pequeno em seu ponto de chamada
---

---
layout: default
title: Inline Method
kicker: Antes (métodos muito pequenos)
---

```java[font=extralarge]
double descontoPadrao(double total) {
  return total * 0.05;
}

double precoFinal(double total) {
  return total - descontoPadrao(total);
}
```

---
layout: default
title: Inline Method
kicker: Depois
---

```java[font=extralarge]
double precoFinal(double total) {
  return total - total * 0.05;
}
```

---
layout: section
index: "04"
title: Move Method
kicker: Mover um método para a classe cujos dados e serviços ele mais utiliza
---

---
layout: default
title: Move Method
kicker: Antes
---

```java[font=large]
class Pedido {
  Cliente cliente;
  double total;

  double calcularDesconto() {
    return cliente.isVip() ? total * 0.1 : 0;
  }
}
```

---
layout: default
title: Move Method
kicker: Depois
---

```java[font=large]
class Cliente {
  double descontoPara(double total) {
    return isVip() ? total * 0.1 : 0;
  }
}

class Pedido {
  double calcularDesconto() {
    return cliente.descontoPara(total);
  }
}
```

---
layout: section
index: "05"
title: Extract Class
kicker: Separar responsabilidades coesas de uma classe em uma nova classe
---

---
layout: default
title: Extract Class
kicker: Antes
---

```java[font=large]
class Pessoa {
  String codigoAreaFixo;
  String telefoneFixo;
  String codigoAreaCelular;
  String telefoneCelular;
}
```

---
layout: default
title: Extract Class
kicker: Depois
---

```java[font=large]
class Fone {
  String codigoArea;
  String numero;
}

class Pessoa {
  Fone foneFixo;
  Fone foneCelular;
}
```

---
layout: section
index: "06"
title: Rename
kicker: Dar a um elemento de código um nome mais claro e significativo
---

---
layout: default
title: Rename
kicker: Antes
---

```java[font=extralarge]
double calc(double v) {
  return v * 0.1;
}

double total(double v) {
  return v - calc(v);
}
```

---
layout: default
title: Rename
kicker: Depois
---

```java[font=large]
double calcularDesconto(double valor) {
  return valor * 0.1;
}

double totalComDesconto(double valor) {
  return valor - calcularDesconto(valor);
}
```

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
<img src="../../assets/qrcode-avaliacao.png" width="300px"/>

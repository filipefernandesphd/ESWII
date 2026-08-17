---
theme: slidev-theme-tahta
title: Code Smells
aspectRatio: 16/9
info: |
  Aula sobre sinais de problemas de manutenibilidade e oportunidades de refatoração.
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
title: Code Smells
kicker: (T)eoria
---

---
layout: default
title: Code Smells (1)
---

- Um **smell** é um **sinal de atenção**, não um defeito que exige correção automática
- **Code smells** indicam código difícil de manter, entender, modificar ou testar

---
layout: default
title: Code Smells (2)
---

- Considere refatorar conforme a **importância** do trecho para o sistema
- Priorize código que precisará de **manutenção frequente**
- Preserve o comportamento do sistema durante a refatoração

<!-- Fonte: https://engsoftmoderna.info/cap9.html#code-smell -->

---
layout: two-cols
title: Catálogo de Code Smells
---

- Código Duplicado
- Métodos Longos
- Classes Grandes
- Feature Envy
- Métodos com Muitos Parâmetros

::right::

- Variáveis Globais
- Obsessão por Tipos Primitivos
- Objetos Mutáveis
- Classes de Dados
- Comentários

<!-- Fonte: https://engsoftmoderna.info/cap9.html#code-smell -->

---
layout: section
index: "02"
title: Duplicated Code
kicker: Código Duplicado — Detectar lógica repetida que exige manutenção em vários pontos
---

<!-- Fonte: https://engsoftmoderna.info/cap9.html#codigo-duplicado -->

---
layout: two-cols
title: Duplicated Code
kicker: Antes e depois
---

**Antes**

```java[font=normal]
class Pedido {
  double totalLoja(double valor) {
    return valor - valor * 0.10;
  }

  double totalSite(double valor) {
    return valor - valor * 0.10;
  }
}
```

::right::

**Depois**

```java[font=normal]
class Pedido {
  double aplicarDesconto(double valor) {
    return valor - valor * 0.10;
  }

  double totalLoja(double valor) {
    return aplicarDesconto(valor);
  }

  double totalSite(double valor) {
    return aplicarDesconto(valor);
  }
}
```

---
layout: section
index: "03"
title: Long Method
kicker: Método Longo — Identificar métodos que concentram etapas demais e dificultam a compreensão
---

<!-- Fonte: https://engsoftmoderna.info/cap9.html#metodos-longos -->

---
layout: two-cols
title: Long Method
kicker: Antes e depois
---

**Antes**

```java[font=normal]
void finalizar(Pedido pedido) {
  if (pedido.itens().isEmpty())
    throw new IllegalStateException();

  double total = pedido.calcularTotal();
  repositorio.salvar(pedido);
  email.enviarConfirmacao(pedido, total);
}
```

::right::

**Depois**

```java[font=normal]
void finalizar(Pedido pedido) {
  validar(pedido);
  double total = pedido.calcularTotal();
  salvar(pedido);
  confirmarPorEmail(pedido, total);
}
```

---
layout: section
index: "04"
title: Large Class
kicker: Classe Grande — Reconhecer classes com responsabilidades numerosas e pouco coesas
---

<!-- Fonte: https://engsoftmoderna.info/cap9.html#classes-grandes -->

---
layout: two-cols
title: Large Class
kicker: Antes e depois
---

**Antes**

```java[font=normal]
class Pedido {
  List<Item> itens;
  String rua;
  String cidade;

  double calcularTotal() { /* ... */ }
  String gerarEtiqueta() { /* ... */ }
}
```

::right::

**Depois**

```java[font=normal]
class Pedido {
  List<Item> itens;
  double calcularTotal() { /* ... */ }
}

class EtiquetaEntrega {
  String rua;
  String cidade;
  String gerar() { /* ... */ }
}
```

---
layout: section
index: "05"
title: Feature Envy
kicker: Inveja de Funcionalidade — Localizar métodos que usam mais dados de outra classe do que da própria
---

<!-- Fonte: https://engsoftmoderna.info/cap9.html#feature-envy -->

---
layout: two-cols
title: Feature Envy
kicker: Antes e depois
---

**Antes**

```java[font=normal]
class RelatorioPedido {
  String resumo(Pedido pedido) {
    return pedido.cliente().nome()
      + ": " + pedido.total()
      + " - " + pedido.status();
  }
}
```

::right::

**Depois**

```java[font=normal]
class Pedido {
  String resumo() {
    return cliente.nome()
      + ": " + total
      + " - " + status;
  }
}
```

---
layout: section
index: "06"
title: Long Parameter List
kicker: Muitos Parâmetros — Detectar assinaturas difíceis de ler, usar e evoluir
---

<!-- Fonte: https://engsoftmoderna.info/cap9.html#metodos-com-muitos-parametros -->

---
layout: two-cols
title: Long Parameter List
kicker: Antes e depois
---

**Antes**

```java[font=normal]
void cadastrar(
  String nome,
  String rua,
  String cidade,
  String cep
) { /* ... */ }
```

::right::

**Depois**

```java[font=normal]
record Endereco(
  String rua,
  String cidade,
  String cep
) {}

void cadastrar(
  String nome,
  Endereco endereco
) { /* ... */ }
```

---
layout: section
index: "07"
title: Global Variables
kicker: Variáveis Globais — Expor dependências ocultas que qualquer parte do programa pode alterar
---

<!-- Fonte: https://engsoftmoderna.info/cap9.html#variaveis-globais -->

---
layout: two-cols
title: Global Variables
kicker: Antes e depois
---

**Antes**

```java[font=normal]
class Precos {
  static double desconto = 0.10;

  double precoFinal(double preco) {
    return preco * (1 - desconto);
  }
}
```

::right::

**Depois**

```java[font=normal]
class Precos {
  double precoFinal(
    double preco,
    double desconto
  ) {
    return preco * (1 - desconto);
  }
}
```

---
layout: section
index: "08"
title: Primitive Obsession
kicker: Obsessão por Tipos Primitivos — Identificar valores de domínio sem validação ou comportamento próprio
---

<!-- Fonte: https://engsoftmoderna.info/cap9.html#obsessao-por-tipos-primitivos -->

---
layout: two-cols
title: Primitive Obsession
kicker: Antes e depois
---

**Antes**

```java[font=normal]
class Endereco {
  String cep;

  boolean cepValido() {
    return cep.matches("\\d{8}");
  }
}
```

::right::

**Depois**

```java[font=normal]
record Cep(String valor) {
  Cep {
    if (!valor.matches("\\d{8}"))
      throw new
        IllegalArgumentException();
  }
}

class Endereco {
  Cep cep;
}
```

---
layout: section
index: "09"
title: Mutable Data
kicker: Objetos Mutáveis — Perceber estados que podem mudar de forma inesperada durante a execução
---

<!-- Fonte: https://engsoftmoderna.info/cap9.html#objetos-mutaveis -->

---
layout: two-cols
title: Mutable Data
kicker: Antes e depois
---

**Antes**

```java[font=normal]
class Saldo {
  private double valor;

  void adicionar(double quantia) {
    valor += quantia;
  }
}
```

::right::

**Depois**

```java[font=normal]
final class Saldo {
  private final double valor;

  Saldo(double valor) {
    this.valor = valor;
  }

  Saldo adicionar(double quantia) {
    return new Saldo(valor + quantia);
  }
}
```

---
layout: section
index: "10"
title: Data Class
kicker: Classe de Dados — Encontrar estruturas sem comportamento que espalham regras pelo sistema
---

<!-- Fonte: https://engsoftmoderna.info/cap9.html#classes-de-dados -->

---
layout: two-cols
title: Data Class
kicker: Antes e depois
---

**Antes**

```java[font=normal]
class Pedido {
  List<Item> itens;
}

class Calculadora {
  double total(Pedido pedido) {
    return pedido.itens.stream()
      .mapToDouble(Item::preco).sum();
  }
}
```

::right::

**Depois**

```java[font=normal]
class Pedido {
  List<Item> itens;

  double total() {
    return itens.stream()
      .mapToDouble(Item::preco).sum();
  }
}
```

---
layout: section
index: "11"
title: Comments
kicker: Comentários — Detectar explicações que tentam compensar nomes ruins ou código confuso
---

<!-- Fonte: https://engsoftmoderna.info/cap9.html#comentarios -->

---
layout: two-cols
title: Comments
kicker: Antes e depois
---

**Antes**

```java[font=normal]
// aplica 10% de desconto
double calc(double v) {
  return v - v * 0.10;
}
```

::right::

**Depois**

```java[font=normal]
double aplicarDescontoPadrao(
  double valor
) {
  return valor - valor * 0.10;
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

---
theme: slidev-theme-tahta
title: 'Jest: tratamento de exceções'
aspectRatio: 16/10
info: |
  Jest: tratamento de exceções
themeConfig:
  variant: minimal
  lang: pt-BR
mdc: true
routerMode: hash
browserExporter: build
preloadImages: false
layout: academic-cover
---

---
layout: section
index: "T"
title: "Teoria"
---

---
layout: section
index: "01"
title: "Tratamento de Exceções"
---

---
layout: define
kicker: Falhas esperadas
term: Exceção
definition: Um objeto que sinaliza uma condição excepcional durante a execução do programa.
points:
  - "Interrompe o fluxo normal quando não é tratada"
  - "Permite comunicar o tipo e a causa do problema"
  - "No teste, verificamos se o código reage como esperado"
---

---
layout: steps
kicker: Objetivo do teste
title: Verificar a reação ao erro
steps:
  - { title: Preparar uma entrada inválida, desc: "Escolha a condição que deve falhar", icon: "lucide:circle-x" }
  - { title: Executar a operação, desc: "Chame o código dentro da expectativa", icon: "lucide:play" }
  - { title: Conferir a exceção, desc: "Valide tipo ou mensagem", icon: "lucide:check" }
---

---
layout: code
kicker: Jest
title: Sintaxe com toThrow
---

```js[font=large]
expect(() => operacaoInvalida())
  .toThrow('mensagem esperada');
```

Passe uma função para `expect`: assim, o Jest consegue executar a operação e observar a exceção.

---
layout: code
kicker: Exemplo 1
title: Uma função lança erro
---

```js[font=large]
function dividir(a, b) {
  if (b === 0) throw new Error('Divisor zero');
  return a / b;
}

test('não divide por zero', () => {
  expect(() => dividir(10, 0))
    .toThrow('Divisor zero');
});
```

---
layout: default
kicker: Exemplo 2
title: Conferir o tipo da exceção
---

```js[font=large]
function exigirNome(nome) {
  if (!nome) throw new TypeError('Nome obrigatório');
}

test('exige um nome', () => {
  expect(() => exigirNome(''))
    .toThrow(TypeError);
});
```

<Callout icon="lucide:shield-check">Use o tipo quando a categoria do erro faz parte do contrato.</Callout>

---
layout: code
kicker: Exemplo 3 · assíncrono
title: Promise rejeitada com rejects
---

```js[font=normal]
function buscarPedido(id, repositorio) {
  return repositorio.buscar(id);
}

test('propaga falha do repositório', async () => {
  const repositorio = {
    buscar: () => Promise.reject(new Error('Indisponível')),
  };

  await expect(buscarPedido('p1', repositorio))
    .rejects.toThrow('Indisponível');
});
```

<Callout icon="lucide:clock-3">O `await` garante que o Jest aguarde a rejeição antes de encerrar o teste.</Callout>

---
layout: section
index: "D"
title: "Desenvolvimento"
---

---
layout: default
kicker: Implementação simples
title: Validar a quantidade antes de processar
---

```js[font=large]
function calcularTotal(preco, quantidade) {
  if (quantidade <= 0) {
    throw new RangeError('Quantidade inválida');
  }
  return preco * quantidade;
}
```

<Callout icon="lucide:triangle-alert">A regra falha cedo e informa qual entrada não pode ser aceita.</Callout>

---
layout: code
kicker: Teste da regra
title: Caso válido e caso inválido
---

```js[font=large]
test('calcula o total', () => {
  expect(calcularTotal(12, 3)).toBe(36);
});

test('rejeita quantidade zero', () => {
  expect(() => calcularTotal(12, 0))
    .toThrow(RangeError);
});
```

---
layout: section
index: "H"
title: "Hands-On"
---

---
layout: default
kicker: Toy example · e-commerce
title: Teste as exceções de Produto
---

A classe `Produto` já rejeita dados inválidos e impede retirada acima do estoque.

- Crie `Produto.test.js` e importe `Produto`.
- Teste ID, nome e preço obrigatórios com `toThrow`.
- Teste preço e estoque negativos; confira o tipo ou a mensagem.
- Crie um produto com estoque 2 e espere `diminuirEstoque(3)` lançar `Sem estoque`.
- Inclua casos válidos para confirmar que as operações continuam funcionando.

<Callout icon="lucide:package">Cada teste deve criar uma instância nova para não compartilhar estado.</Callout>

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

<img src="../../assets/qrcode-avaliacao.png" width="300px" />

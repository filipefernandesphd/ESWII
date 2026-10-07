---
theme: slidev-theme-tahta
title: 'Jest: primeiros passos'
aspectRatio: 16/10
info: |
  Jest: primeiros passos
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
title: Jest
---

---
layout: center
---

<Figure src="../../assets/jest.png" alt="Logo do Jest" class="mx-auto w-75 [&_figcaption]:justify-center" caption='<a href="https://jestjs.io/">https://jestjs.io/</a>' />

---
layout: section
index: "02"
title: Instalação
---

---
layout: code
title: Instalação
---

```sh[font=extralarge]
npm install -g express-generator
express nome-do-projeto
cd nome-do-projeto
npm install -D jest
```

---
layout: section
index: "03"
title: Primeiros passos
---

---
layout: code
title: soma.js
---

```js[font=extralarge]
function soma(a, b) {
  return a + b;
}
module.exports = soma;
```

---
layout: code
title: soma.test.js
---

```js[font=extralarge]
const soma = require('./soma');

test('adds 1 + 2 to equal 3', () => {
  expect(soma(1, 2)).toBe(3);
});
```

---
layout: code
title: package.json
---

```js[font=extralarge]
{
  ...
  "scripts": {
    ...
    "test": "jest"
  }
}
```

---
layout: code
title: Executar os testes no terminal
---

```sh[font=extralarge]
npm test
```

---
layout: default
title: Outros comandos do Jest
---

- Executar todos os testes: `npx jest`
- Executar os testes de um arquivo específico: `npx jest nomeDoArquivo.test.js`
- Executar um teste específico dentro de um arquivo: `npx jest -t "nome do teste"`
- Executar novamente os testes que falharam na última execução: `npx jest --onlyFailures`
- Gerar relatório de cobertura de testes: `npx jest --coverage`

---
layout: section
index: "04"
title: Matchers
---

---
layout: default
title: Matchers
---

- [Matchers comuns](https://jestjs.io/docs/using-matchers#common-matchers)
- [Veracidade](https://jestjs.io/docs/using-matchers#truthiness)
- [Números](https://jestjs.io/docs/using-matchers#numbers)
- [Strings](https://jestjs.io/docs/using-matchers#strings)
- [Arrays e iteráveis](https://jestjs.io/docs/using-matchers#arrays-and-iterables)

---
layout: section
title: Desenvolvimento
index: "D"
---

---
layout: default
title: Atividade — testes de um e-commerce
---

- Implemente funções simples para produto, carrinho e cliente.
- Use `module.exports` e `require`, como no exemplo de `soma.js`.
- Crie um arquivo `.test.js` para cada módulo, com `test` e `expect`.
- Implemente e teste uma etapa por vez; use nomes de testes descritivos.
- Configure o script `"test": "jest"` e execute `npm test` a cada etapa.

---
layout: default
title: 1. Produto — calcular o subtotal
---

- Implemente `subtotal(preco, quantidade)` em `produto.js`: preço × quantidade.

- Em `produto.test.js`, verifique com `toBe`:

  - Um produto de R$ 50,00, quantidade 1 → subtotal **50**.
  - Um produto de R$ 50,00, quantidade 3 → subtotal **150**.
  - Quantidade 0 → subtotal **0**.

- Considere preços e quantidades não negativos nesta atividade.

---
layout: default
title: 2. Carrinho — calcular o total
---

- Implemente `totalCarrinho(itens)` em `carrinho.js`: some os subtotais.
- Cada item é um objeto com `preco` e `quantidade`; reutilize `subtotal`.

- Em `carrinho.test.js`, verifique com `toBe`:

  - Carrinho vazio (`[]`) → total **0**.
  - Um item de R$ 50,00, quantidade 2 → total **100**.
  - Esse item e outro de R$ 30,00, quantidade 1 → total **130**.

---
layout: default
title: 3. Cliente — permitir a compra
---

- Implemente `podeComprar(cliente)` em `cliente.js`: retorne `true` somente
quando o cliente estiver ativo (`ativo: true`).

- Em `cliente.test.js`, verifique:

  - `{ nome: 'Ana', ativo: true }` → `toBe(true)` e `toBeTruthy()`.
  - `{ nome: 'Bruno', ativo: false }` → `toBe(false)` e `toBeFalsy()`.

- Ao concluir, execute `npx jest --coverage` e identifique trechos sem teste.

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

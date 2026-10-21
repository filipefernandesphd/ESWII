---
theme: slidev-theme-tahta
title: 'Jest: parametrização e mocks'
aspectRatio: 16/10
info: |
  Jest: parametrização e mocks
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
layout: lead
index: "01"
kicker: Testes mais expressivos
title: Repetir casos. Isolar dependências.
subtitle: Parametrização e mocks no Jest
---

---
layout: section
index: "01"
title: "Parametrização"
---

---
layout: define
kicker: Menos repetição
term: Parametrização
definition: Executar o mesmo teste com diferentes <span class="accent2">entradas e resultados esperados</span>.
points:
  - "Uma regra, vários casos"
  - "Falhas identificadas por conjunto de dados"
---

---
layout: steps
kicker: Como funciona
title: Um teste, muitos cenários
steps:
  - { title: Preparar dados, desc: "Cada linha fornece um caso", icon: "lucide:table" }
  - { title: Executar a regra, desc: "O mesmo corpo roda para cada linha", icon: "lucide:play" }
  - { title: Comparar resultados, desc: "Cada caso informa seu próprio resultado", icon: "lucide:check" }
---

---
layout: code
title: Sintaxe de test.each
---

```js[font=extralarge]
test.each(table)(name, fn, timeout);
```

*timeout* é opcional.

<!-- <Callout icon="lucide:lightbulb">Use <code>%s</code> no título para mostrar um valor do caso.</Callout> -->

---
layout: code
title: Exemplo 1 — forma simples
---

```js[font=large]
test.each([
  [entrada1, esperado1],
  [entrada2, esperado2],
])('descrição do caso', (entrada, esperado) => {
  expect(funcao(entrada)).toBe(esperado);
});
```

---
layout: code
title: Exemplo 2 — desconto em vários valores
---

```js[font=normal]
test.each([
  { preco: 100, percentual: 10, esperado: 90 },
  { preco: 80, percentual: 25, esperado: 60 },
  { preco: 50, percentual: 0, esperado: 50 },
])('desconto de $percentual por cento em $preco', ({ preco, percentual, esperado }) => {
  const Produto = require('./Produto');
  const produto = new Produto('p1', 'Item', preco, 1);
  produto.aplicarDesconto(percentual);
  expect(produto.preco).toBe(esperado);
});
```

---
layout: default
title: Exemplo 3 — entradas inválidas
---

```js[font=large]
test.each([
  { id: '', nome: 'Item', preco: 10, mensagem: 'O ID é obrigatório!' },
  { id: 'p1', nome: '', preco: 10, mensagem: 'O NOME é obrigatório!' },
  { id: 'p1', nome: 'Item', preco: 0, mensagem: 'O PREÇO é obrigatório!' },
])('rejeita entrada inválida: $mensagem', ({ id, nome, preco, mensagem }) => {
  const Produto = require('./Produto');
  expect(() => new Produto(id, nome, preco))
    .toThrow(mensagem);
});
```

---
layout: code
title: Exemplo 4 — estoque e casos nomeados
---

```js[font=large]
test.each([
  { inicial: 5, retirar: 2, final: 3 },
  { inicial: 1, retirar: 1, final: 0 },
])('estoque $inicial após retirar $retirar',
  ({ inicial, retirar, final }) => {
    const Produto = require('./Produto');
    const produto = new Produto('p1', 'Item', 20, inicial);
    produto.diminuirEstoque(retirar);
    expect(produto.estoque).toBe(final);
  });
```

---
layout: section
index: "02"
title: "Mocks"
---

---
layout: define
kicker: Controle do teste
term: Mock
definition: Substituto controlado de uma dependência, usado para <span class="accent2">isolar o código</span> e observar interações.
points:
  - "Evita chamar serviços reais"
  - "Permite definir retornos e falhas"
---

---
layout: columns
kicker: Mock Functions
title: O que uma função mock registra?
columns:
  - title: Chamadas
    items:
      - "Quantas vezes foi chamada"
      - "Quais argumentos recebeu"
  - title: Comportamento
    items:
      - "Valor que deve retornar"
      - "Erro ou Promise resolvida"
---

---
layout: code
title: Sintaxe com jest.fn
---

```js[font=large]
const enviar = jest.fn();
enviar('pedido-1');

expect(enviar).toHaveBeenCalledTimes(1);
expect(enviar).toHaveBeenCalledWith('pedido-1');
```

<Callout icon="lucide:eye">O mock guarda o histórico das chamadas para asserções.</Callout>

---
layout: code
kicker: Exemplo
title: Frete.js
---
```js[font=large]
const freteCorreiosAPI = require('./CorreiosAPI');

class Frete {
    calcular(regiao){
        return freteCorreiosAPI(regiao);
    }
}

module.exports = Frete;
```

---
layout: code
kicker: Exemplo
title: CorreiosAPI.js
---
```js[font=extralarge]
function freteCorreiosAPI() {
    return null;
}

module.exports = freteCorreiosAPI;
```

---
layout: code
kicker: Exemplo
title: Frete.test.js (versão 1)
---
```js[font=large]
const Frete = require('./Frete');

it('deve calcular frete para o sudeste', ()=>{
    const frete = new Frete();
    const valorfrete = frete.calcular('sudeste');
    expect(valorfrete).toBeCloseTo(90.9);
});
```

```bash
FAIL  ./Frete.test.js
✕ deve calcular frete para o sudeste (3 ms)
...
Received has value: null
```

---
layout: code
kicker: Exemplo
title: Frete.test.js (versão 2)
---
```js[font=normal]
const Frete = require('./Frete');
const freteCorreiosAPI = require('./CorreiosAPI');  // incluir API

jest.mock('./CorreiosAPI');  // mockar CorreiosAPI por completo

it('deve calcular frete para o sudeste', async ()=>{  // inserir async
    const frete = new Frete();
    freteCorreiosAPI.mockResolvedValue(90.9); // atribuir valor mockado
    const valorfrete = await frete.calcular('sudeste'); // inserir await
    expect(valorfrete).toBeCloseTo(90.9);
});
```

```bash
PASS  ./Frete.test.js
✓ deve calcular frete para o sudeste (1 ms)
```

<!-- ---
layout: code
title: Exemplo 1 — retorno configurado
---

```js[font=large]
test('usa o preço retornado pelo catálogo', () => {
  const buscarPreco = jest.fn().mockReturnValue(30);
  const calcularTotal = (id, buscar) => buscar(id) * 2;

  expect(calcularTotal('p1', buscarPreco)).toBe(60);
  expect(buscarPreco).toHaveBeenCalledWith('p1');
});
```

---
layout: default
title: Exemplo 2 — verificar envio
---

```js[font=large]
test('envia a confirmação do pedido', () => {
  const enviar = jest.fn();
  const confirmarPedido = (id, notificar) => notificar(id);

  confirmarPedido('pedido-7', enviar);

  expect(enviar).toHaveBeenCalledTimes(1);
  expect(enviar).toHaveBeenCalledWith('pedido-7');
});
```

---
layout: code
title: Exemplo 3 — dependência assíncrona
---

```js[font=large]
async function calcularTotal(id, buscarPreco) {
  return (await buscarPreco(id)) * 2;
}

test('calcula total com preço remoto', async () => {
  const buscarPreco = jest.fn().mockResolvedValue(25);
  const total = await calcularTotal('p1', buscarPreco);

  expect(total).toBe(50);
  expect(buscarPreco).toHaveBeenCalledWith('p1');
});
```

<Callout icon="lucide:clock-3">Para rejeição, use <code>mockRejectedValue(erro)</code> e aguarde a Promise.</Callout> -->

<!-- ---
layout: section
index: "D"
title: "Desenvolvimento"
---

---
layout: default
kicker: Exemplo integrado
title: Regra pura + dependência simulada
---

```js[font=large]
async function calcularTotal(id, buscarPreco) {
  const preco = await buscarPreco(id);
  return preco * 2;
}

test.each([
  ['p1', 10, 20],
  ['p2', 25, 50],
])('total para %s', async (id, preco, esperado) => {
  const buscar = jest.fn().mockResolvedValue(preco);
  await expect(calcularTotal(id, buscar)).resolves.toBe(esperado);
  expect(buscar).toHaveBeenCalledWith(id);
});
```

---
layout: two-cols
kicker: Estratégia
title: O que manter real e o que simular?
---

- **Real:** cálculo do total
- **Mock:** consulta ao catálogo
- **Parametrizado:** produtos e preços

::right::

<Callout icon="lucide:target">Teste a regra em vários cenários sem depender de rede, banco ou catálogo real.</Callout> -->

---
layout: section
index: "H"
title: "Hands-On"
---

---
layout: default
kicker: Toy example · e-commerce
title: Parametrize a classe Produto
---

A classe `Produto` já valida campos, aplica desconto e diminui estoque.

- Crie `Produto.test.js` e importe `Produto`.
- Use `test.each` para testar descontos de 10%, 25% e 0%.
- Parametrize estoque inicial e quantidade retirada.
- Inclua uma retirada maior que o estoque e espere `Sem estoque`.

<Callout icon="lucide:package">Use instâncias novas em cada linha para evitar estado compartilhado.</Callout>

---
layout: default
kicker: Hands-On · mocks
title: Isole o aviso de estoque baixo
---

- Implemente `avisarEstoqueBaixo(produto, notificar)`.
- Se o estoque for menor que 3, chame `notificar(produto.id)`;
- caso contrário, não faça chamada;
- Use `jest.fn()` e verifique argumentos e quantidade de chamadas.

```js[font=normal]
test.each([
  [2, 1],
  [3, 0],
])('estoque %i', (estoque, chamadas) => {
  const notificar = jest.fn();
  const produto = { id: 'p1', estoque };
  avisarEstoqueBaixo(produto, notificar);
  expect(notificar).toHaveBeenCalledTimes(chamadas);
});
```

---
layout: default
kicker: Desafio extra
title: Simule uma consulta assíncrona
---

- Crie `buscarPreco(id)` como dependência de `calcularTotal(id, buscarPreco)`.
- Configure `jest.fn().mockResolvedValue(...)` em cada caso.
- Parametrize ID, preço e total esperado.
- Confirme que o mock recebeu o ID correto.
- Adicione um caso com rejeição usando `mockRejectedValue`.

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

# Hands-on — Inspeção de Código com Checklist

## Objetivo

Aplicar uma **inspeção de código** baseada em checklist para identificar defeitos em um projeto Java, sem depender da execução do programa.

## Projeto

O código a ser inspecionado está em [`projeto/`](projeto/). Ele implementa um pequeno sistema de biblioteca com as classes:

- `Livro`
- `Usuario`
- `Emprestimo`
- `Biblioteca`
- `Main`

## Instruções

1. Leia todas as classes em `projeto/src/biblioteca/`.
2. Percorra o checklist abaixo, item por item.
3. Para cada item, procure no código situações que o violem.
4. Registre cada defeito encontrado na tabela de entrega.
5. Proponha uma correção para cada defeito.

## Checklist de Inspeção de Código Java

- [ ] Variáveis são inicializadas antes do uso?
- [ ] Constantes estão declaradas adequadamente?
- [ ] Atributos possuem modificadores de acesso apropriados?
- [ ] Os construtores deixam os objetos em um estado válido?
- [ ] Os parâmetros dos métodos estão corretos?
- [ ] Os métodos retornam valores adequados em todos os fluxos?
- [ ] Strings e objetos são comparados corretamente?
- [ ] Condições booleanas estão corretas?
- [ ] Todos os loops terminam?
- [ ] Índices de arrays permanecem dentro dos limites?
- [ ] Todas as alternativas relevantes de um `switch` são tratadas?
- [ ] Exceções previsíveis são tratadas adequadamente?
- [ ] Há código duplicado ou desnecessário?

## Entrega

Preencha uma linha para cada defeito encontrado:

| Item do checklist | Arquivo | Linha | Defeito encontrado | Correção sugerida |
|---|---|---|---|---|
| | | | | |

## Executando o projeto (opcional)

A inspeção é uma técnica estática: não é necessário executar o código. Caso queira observar o comportamento do programa, a partir de `projeto/`:

```bash
javac -d out src/biblioteca/*.java
java -cp out biblioteca.Main
```

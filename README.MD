# ESWII (PLANNING)

Repositório para **PLANEJAR** a disciplina de **INF03021 - Engenharia de Software II** do *Campus* Manhuaçu.

## Alguns Comandos

### Indicar qual pasta realizará a cobertura de testes

`npx jest --coverage --collectCoverageFrom="src/**/*.ts"`

### Excluir .DS_Store

- Executar: `find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch`
- Incluir no `.gitignore`: `.DS_Store`
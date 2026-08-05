# AGENTS.md

Este arquivo orienta agentes de IA que trabalham neste repositório. Suas regras
valem para todo o projeto.

## Antes de trabalhar

1. Leia este `AGENTS.md` por completo antes de executar cada comando ou alterar
   arquivos. Se houver outro `AGENTS.md` mais próximo do arquivo em edição, leia
   também e siga as regras mais específicas.
2. Examine o estado atual do repositório antes de editar. Preserve mudanças do
   usuário e não sobrescreva trabalho não relacionado.
3. Consulte `./skills` e use as skills aplicáveis ao contexto do comando. Leia o
   `SKILL.md` escolhido por completo e carregue somente as referências necessárias.
4. Para criação ou revisão de prompts, use `./skills/prompt-engineer/SKILL.md`.
5. Para trabalho de interface, Vue, CSS ou Slidev, use os princípios pertinentes
   de `./skills/frontend-dev-guidelines/SKILL.md`, adaptando-os ao ecossistema Vue
   em vez de introduzir React ou dependências que o projeto não usa.

## Objetivo do projeto

Manter um template de apresentações acadêmicas reutilizável, construído com
Slidev e inspirado visualmente na variante Minimal do Tahta. O projeto deve ser
simples de configurar, executar, manter e publicar no GitHub.

## Regras de implementação

- Use TypeScript, Vue e CSS idiomáticos quando esses recursos forem necessários.
- Centralize os dados acadêmicos em um único arquivo de configuração tipado.
- Centralize cores e decisões visuais em tokens CSS; não espalhe valores mágicos.
- Preserve contraste, legibilidade, navegação por teclado e comportamento
  responsivo.
- Mantenha componentes e layouts pequenos, coesos e reutilizáveis.
- Evite dependências sem necessidade e não copie código ou ativos de terceiros
  sem verificar licença e atribuição.
- Não altere arquivos fora do escopo da tarefa.
- Use `apply_patch` para edições manuais e prefira `rg` para buscas.

## Verificação

Antes de concluir uma alteração:

1. Releia este arquivo.
2. Instale dependências apenas quando necessário.
3. Execute as verificações relevantes disponíveis no projeto, incluindo build.
4. Revise o resultado renderizado quando a mudança afetar o visual.
5. Informe de forma objetiva o que mudou, quais verificações passaram e qualquer
   limitação restante.

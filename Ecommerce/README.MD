# E-COMMERCE
Este projeto tem como objetivo escrever testes para cobrir as histórias dos usuários. 

# Instalação e Execução
- Instalação: `npm install`
- Execução em ambiente de desenvolvimento: `npm run dev`
- Testes de unidade: `test-unit`
- Testes de integração: `test-integration`
- Testes de aceitação: `test-acceptance`
- Build: `npm build`
- Execução em ambiente de produção: `npm start`

# Histórias do Usuário

## História de Usuário 1
Como um *usuário registrado*, quero *atualizar minhas informações pessoais* para *manter meus dados sempre precisos.*

- Critérios de Aceitação:
    - Cada campo de informação deve permitir a edição individual, proporcionando flexibilidade ao usuário.
    - Ao realizar uma edição, o sistema deve validar e aceitar mudanças válidas, exibindo feedback instantâneo.
    - As alterações feitas nos dados pessoais devem ser refletidas imediatamente na visualização correspondente.

## História de Usuário 2
Como um *cliente*, quero *adicionar itens ao meu carrinho de compras,* para *facilitar a compra de múltiplos produtos de uma vez.*

- Critérios de Aceitação:
    - Deve haver um botão "Adicionar ao Carrinho" visível na página do produto.
    - A quantidade de itens no carrinho deve ser exibida no site para que o cliente possa acompanhar facilmente.
    - O cliente deve ter a opção de revisar o conteúdo do carrinho antes de finalizar a compra.

## História de Usuário 3
Como um *cliente*, quero *poder remover itens do meu carrinho,* para *ajustar minha seleção antes de comprar.*

- Critérios de Aceitação:
    - Cada item no carrinho deve ter uma opção de remoção clara.
    - Ao remover um item, a quantidade total e o preço devem ser atualizados automaticamente.

## História de Usuário 4
Como um *cliente*, quero *poder aplicar cupons de desconto ao meu carrinho,* para *economizar dinheiro na minha compra.*

- Critérios de Aceitação:
    - Deve haver um campo de entrada para códigos de cupom visível no carrinho.
    - Ao aplicar um cupom válido, o desconto deve ser refletido imediatamente no total da compra.
    - Caso o cupom seja inválido, o sistema deve fornecer feedback claro sobre o motivo da recusa.

## História de Usuário 5
Como um *cliente*, quero *poder escolher entre diferentes métodos de pagamento,* para *garantir uma transação conveniente.*

- Critérios de Aceitação:
    - O sistema deve aceitar cartões de crédito, débito e PIX.
    - O cliente deve ser capaz de salvar informações de pagamento para compras futuras.

## História de Usuário 6
Como um *cliente*, quero *receber confirmações por e-mail da minha compra,* para *ter um registro da transação.*

- Critérios de Aceitação:
    - O cliente deve receber um e-mail de confirmação imediatamente após a conclusão da compra.
    - O e-mail de confirmação deve incluir detalhes como itens comprados, preço total, método de pagamento e endereço de entrega.
    - Se houver algum problema com a transação, o e-mail deve fornecer informações de contato para suporte ao cliente.
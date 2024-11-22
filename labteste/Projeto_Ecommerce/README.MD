# Projeto E-Commerce

## Regras do Negócio

1. Todo item deve possuir um nome, valor e quantidade em estoque
1. O valor e quantidade de cada item não pode ser nulo
1. O preço a pagar de um item deve considerar seu valor e quantidade já informados
1. Todo carrinho deve permitir a inserção e lista de itens
1. O carrinho deve mostrar o subtotal da compra, ou seja, o valor total sem o frete
1. O carrinho deve mostrar o total da compra, ou seja o valor total com o frete
1. O cálculo total do carrinho só deve ser realizado após o cálculo do subtotal e frete informado
1. Antes de finalizar o carrinho, deve-se verificar se a quantidade de cada item possui disponibilidade em estoque. Além disso, deve ser informado qual a forma de pagamento (deve ser uma por carrinho)
1. Os critérios para pagamento são:
    1. De R$ 10,00 até R$ 100,00 o pagamento deve ser obrigatoriamente à vista
    1. Maior que R$ 100,00 até R$ 300,00 pode ser parcelado até 3x no cartão de crédito
    1. Maior que R$ 300,00 até R$ 100.000,00 pode ser parcelado até 5x no cartão de crédito
    1. Compras acima de R$ 100.000,00 não serão efetuadas
    1. Os tipos de pagamentos aceitos são Pix, Boleto Bancário e Cartão de Crédito
1. A quantidade de parcelas deve ser número inteiro e maior ou igual a 1
1. Ao finalizar o carrinho, o saldo em estoque do item deve ser atualizado

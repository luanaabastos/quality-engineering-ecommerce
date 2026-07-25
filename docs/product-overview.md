# Product Overview

## 1. Visão geral

O projeto representa uma aplicação de e-commerce desenvolvida para permitir que usuários pesquisem produtos, realizem compras e acompanhem seus pedidos.

O case será utilizado para demonstrar práticas de Quality Engineering, incluindo planejamento da qualidade, análise de riscos, testes Web e API, automação, integração contínua e documentação.

## 2. Objetivos do produto

- Permitir o cadastro e a autenticação de usuários.
- Disponibilizar busca e visualização de produtos.
- Permitir a inclusão e remoção de itens no carrinho.
- Possibilitar a finalização de compras.
- Processar pagamentos.
- Permitir o acompanhamento do histórico de pedidos.

## 3. Perfis de usuário

### Cliente não autenticado

Pode:

- consultar produtos;
- utilizar a busca;
- visualizar detalhes dos produtos;
- criar uma conta;
- acessar a tela de login.

### Cliente autenticado

Pode:

- executar todas as ações do cliente não autenticado;
- adicionar produtos ao carrinho;
- finalizar compras;
- informar dados de entrega;
- realizar pagamentos;
- consultar seus pedidos.

### Administrador

Pode:

- cadastrar produtos;
- alterar produtos;
- controlar estoque;
- consultar pedidos;
- atualizar o status dos pedidos.

## 4. Fluxos críticos

Os fluxos mais importantes do sistema são:

1. Cadastro de usuário.
2. Login.
3. Busca de produtos.
4. Adição de produto ao carrinho.
5. Atualização da quantidade de produtos.
6. Checkout.
7. Pagamento.
8. Confirmação do pedido.
9. Consulta do histórico de pedidos.

## 5. Regras de negócio iniciais

- O e-mail utilizado no cadastro deve ser único.
- A senha deve atender aos critérios mínimos de segurança.
- Produtos sem estoque não podem ser adicionados ao carrinho.
- O valor total deve considerar preço, quantidade, descontos e frete.
- O pedido só pode ser confirmado após a aprovação do pagamento.
- O cliente só pode visualizar seus próprios pedidos.
- O estoque deve ser atualizado após a confirmação da compra.
- O carrinho deve preservar os itens durante a sessão do usuário.
- Uma mesma transação de pagamento não pode gerar mais de um pedido.

## 6. Integrações previstas

- API de catálogo de produtos.
- API de autenticação.
- Serviço de cálculo de frete.
- Gateway de pagamento.
- Serviço de pedidos.
- Serviço de notificações por e-mail.

## 7. Riscos gerais do produto

- Cobrança com valor incorreto.
- Pagamento duplicado.
- Compra de produto sem estoque.
- Exposição de dados de outro cliente.
- Perda de itens do carrinho.
- Pedido confirmado sem pagamento aprovado.
- Estoque incorreto após a compra.
- Falha na comunicação entre serviços.

## 8. Escopo inicial do case

Nesta primeira etapa, o foco será:

- cadastro;
- login;
- catálogo;
- busca;
- carrinho;
- checkout;
- pedidos;
- testes Web e API.

Testes de carga, segurança avançada e aplicações mobile serão considerados em etapas futuras.

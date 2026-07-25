
# Test Scenarios

## 1. Objetivo

Este documento reúne os principais cenários de teste do e-commerce, priorizados de acordo com os riscos identificados na matriz.

Cada cenário contém:

- prioridade;
- risco relacionado;
- pré-condições;
- passos em Gherkin;
- resultado esperado;
- camada recomendada de automação.

---

## 2. Cenários P0

### TS-001 — Calcular corretamente o valor total do pedido

**Prioridade:** P0  

**Risco relacionado:** R01 — Cobrança com valor incorreto  

**Camada recomendada:** API e E2E

**Pré-condições:**

- usuário autenticado;
- produto disponível em estoque;
- frete calculável;
- cupom válido disponível.

```gherkin
Cenário: Calcular o valor total com produto, quantidade, desconto e frete
  Dado que o usuário adicionou um produto de R$ 100,00 ao carrinho
  E alterou a quantidade para 2 unidades
  E aplicou um cupom de 10% de desconto
  E o frete calculado é de R$ 20,00
  Quando visualizar o resumo do pedido
  Então o subtotal deve ser de R$ 200,00
  E o desconto deve ser de R$ 20,00
  E o valor total deve ser de R$ 200,00 
  ```

  ### TS-002 — Impedir cobrança duplicada

**Prioridade:** P0

**Risco relacionado:** R02 e R13

**Camada recomendada:** API e integração

**Pré-condições:**

- usuário autenticado;
- pedido pronto para pagamento;
- meio de pagamento válido.

```gherkin
Cenário: Reenviar a mesma transação de pagamento
  Dado que existe um pedido aguardando pagamento
  E uma transação foi enviada com uma chave de idempotência válida
  Quando a mesma transação for enviada novamente
  Então apenas uma cobrança deve ser registrada
  E apenas um pedido deve ser confirmado
  E a segunda requisição deve retornar o mesmo resultado da primeira
  ```
  ### TS-003 — Impedir compra de produto sem estoque

**Prioridade:** P0

**Risco relacionado:** R04

**Camada recomendada:** API e E2E

**Pré-condições:**

- produto com estoque igual a zero;
- usuário autenticado.

```gherkin
Cenário: Tentar adicionar produto sem estoque ao carrinho
  Dado que um produto está sem estoque
  Quando o usuário tentar adicioná-lo ao carrinho
  Então a inclusão deve ser bloqueada
  E uma mensagem informativa deve ser exibida
  E o carrinho não deve ser alterado
 ```

Resultado esperado:
Produtos indisponíveis não podem ser adicionados nem comprados.

### TS-004 — Atualizar o estoque após compra confirmada

**Prioridade:** P0

**Risco relacionado:** R05

**Camada recomendada:** API e integração

Pré-condições:

- produto com estoque disponível;
- pagamento aprovado;
- pedido confirmado.

```gherkin
Cenário: Atualizar estoque após confirmação da compra
  Dado que um produto possui 10 unidades em estoque
  E o usuário comprou 2 unidades
  Quando o pedido for confirmado
  Então o estoque do produto deve ser atualizado para 8 unidades
  E a alteração deve estar disponível no catálogo
```

Resultado esperado:
O estoque deve refletir corretamente a quantidade adquirida.

### TS-005 — Não confirmar pedido com pagamento recusado

**Prioridade:** P0

**Risco relacionado:** R03

**Camada recomendada:** API, integração e E2E

**Pré-condições:**

- usuário autenticado;
- carrinho válido;
- pagamento configurado para recusa.

```gherkin
Cenário: Recusar confirmação do pedido quando o pagamento falhar
  Dado que o usuário concluiu o checkout
  Quando o gateway recusar o pagamento
  Então o pedido não deve ser confirmado
  E o status deve permanecer como pagamento recusado
  E o estoque não deve ser reduzido
  E o usuário deve receber uma mensagem de falha
```

Resultado esperado:
Nenhum pedido pode ser confirmado sem pagamento aprovado.

### TS-006 — Impedir acesso ao pedido de outro cliente

**Prioridade:** P0

**Risco relacionado:** R06

**Camada recomendada:** API e segurança funcional

Pré-condições:

- dois usuários autenticados;
- pedido pertencente ao usuário A.

```gherkin
Cenário: Usuário tenta acessar pedido de outro cliente
  Dado que o usuário B está autenticado
  E existe um pedido pertencente ao usuário A
  Quando o usuário B tentar acessar o pedido pelo identificador
  Então o acesso deve ser negado
  E os dados do pedido não devem ser exibidos
  E a API deve retornar o status apropriado de autorização
```

Resultado esperado:
Cada cliente deve acessar somente seus próprios pedidos.

---

## 3. Cenários P1

### TS-007 — Cadastrar usuário com e-mail único

**Prioridade:** P1

**Risco relacionado:** R09

**Camada recomendada:** API e E2E

```gherkin
Cenário: Cadastrar usuário com dados válidos
  Dado que o e-mail ainda não está cadastrado
  Quando o usuário preencher os dados obrigatórios corretamente
  Então a conta deve ser criada com sucesso
  E o usuário deve poder realizar login
```

### TS-008 — Impedir cadastro com e-mail duplicado

**Prioridade:** P1

**Risco relacionado:** R09

**Camada recomendada:** API e E2E

```gherkin
Cenário: Tentar cadastrar um e-mail já utilizado
  Dado que já existe uma conta com o e-mail informado
  Quando o usuário tentar realizar um novo cadastro
  Então o cadastro deve ser bloqueado
  E uma mensagem clara deve ser exibida
```

### TS-009 — Realizar login com credenciais válidas

**Prioridade:** P1

**Risco relacionado:** R10

**Camada recomendada:** API e E2E

```gherkin
Cenário: Autenticar usuário com credenciais válidas
  Dado que o usuário possui uma conta ativa
  Quando informar e-mail e senha corretos
  Então deve ser autenticado com sucesso
  E deve receber uma sessão válida
```

### TS-010 — Impedir login com credenciais inválidas

**Prioridade:** P1

**Risco relacionado:** R10

**Camada recomendada:** API e E2E

```gherkin
Cenário: Tentar autenticação com senha incorreta
  Dado que o usuário possui uma conta ativa
  Quando informar uma senha inválida
  Então a autenticação deve ser recusada
  E nenhuma sessão deve ser criada
  E uma mensagem segura deve ser exibida
```

### TS-011 — Preservar o carrinho durante a sessão

**Prioridade:** P1

**Risco relacionado:** R07

**Camada recomendada:** E2E

```gherkin
Cenário: Manter os itens ao navegar pela aplicação
  Dado que o usuário adicionou produtos ao carrinho
  Quando navegar para outras páginas e retornar ao carrinho
  Então os mesmos produtos e quantidades devem permanecer salvos
```

### TS-012 — Aplicar cupom válido

**Prioridade:** P1

**Risco relacionado:** R12

**Camada recomendada:** API e E2E

```gherkin
Cenário: Aplicar desconto com cupom válido
  Dado que existe um cupom válido para o pedido
  Quando o usuário aplicar o cupom
  Então o desconto deve ser calculado corretamente
  E o valor total deve ser atualizado
```

### TS-013 — Rejeitar cupom expirado

**Prioridade**: P1

**Risco relacionado:** R12

**Camada recomendada:** API e E2E

```gherkin
Cenário: Tentar aplicar cupom expirado
  Dado que o cupom informado está expirado
  Quando o usuário tentar aplicá-lo
  Então o desconto não deve ser concedido
  E uma mensagem explicativa deve ser exibida
```

### TS-014 — Invalidar a sessão após logout

**Prioridade:** P1

**Risco relacionado:** R16

**Camada recomendada:** API e E2E

```gherkin
Cenário: Tentar acessar área autenticada após logout
  Dado que o usuário estava autenticado
  E realizou logout
  Quando tentar acessar uma página protegida
  Então deve ser redirecionado para o login
  E o token anterior não deve mais ser aceito
```

## 4. Critérios para automação

Os cenários deverão ser automatizados quando:

- representarem riscos P0 ou P1;
- forem repetitivos;
- possuírem resultado determinístico;
- dependerem de regras de negócio estáveis;
- forem adequados para execução em CI/CD;
- não dependerem de validações exclusivamente visuais ou subjetivas.

## 5. Cobertura inicial planejada

### API

- autenticação;
- cadastro;
- cálculo de valores;
- cupons;
- estoque;
- pagamentos;
- pedidos;
- autorização;
- idempotência.
  

# Risk Matrix

## 1. Objetivo

Esta matriz identifica os principais riscos do e-commerce e define sua prioridade de tratamento com base em impacto e probabilidade.

A classificação orientará a priorização dos testes manuais, de API, integração e interface.

## 2. Critérios de avaliação

### Impacto

- **Baixo:** impacto visual ou operacional limitado, sem prejuízo financeiro relevante.
- **Médio:** afeta parte da experiência ou exige retrabalho operacional.
- **Alto:** pode causar prejuízo financeiro, exposição de dados, falha de negócio ou indisponibilidade de fluxo crítico.

### Probabilidade

- **Baixa:** pouco provável de ocorrer em condições normais.
- **Média:** pode ocorrer em situações específicas ou integrações instáveis.
- **Alta:** possui maior chance de acontecer devido à complexidade ou frequência do fluxo.

### Classificação

- **Crítico:** impacto alto e probabilidade alta.
- **Alto:** impacto alto com probabilidade média, ou impacto médio com probabilidade alta.
- **Médio:** impacto e probabilidade médios.
- **Baixo:** impacto baixo e baixa probabilidade.

## 3. Matriz de riscos

| ID | Risco | Impacto | Probabilidade | Nível | Estratégia de teste |
|---|---|---|---|---|---|
| R01 | Cobrança com valor incorreto | Alto | Alta | Crítico | Validar preços, descontos, frete, quantidade e valor final em API e E2E |
| R02 | Pagamento duplicado | Alto | Média | Alto | Validar idempotência, reenvio de requisição e duplo clique |
| R03 | Pedido confirmado sem pagamento aprovado | Alto | Média | Alto | Testar status de pagamento, callbacks e transições de pedido |
| R04 | Compra de produto sem estoque | Alto | Alta | Crítico | Validar estoque antes e depois da compra, concorrência e bloqueio no carrinho |
| R05 | Estoque incorreto após a compra | Alto | Média | Alto | Validar atualização, rollback e consistência entre serviços |
| R06 | Exposição de pedidos de outro cliente | Alto | Média | Alto | Testar autorização, acesso direto por ID e isolamento de dados |
| R07 | Perda de itens do carrinho | Médio | Alta | Alto | Validar persistência por sessão, login, atualização e retorno à aplicação |
| R08 | Falha na comunicação entre pagamento e pedidos | Alto | Média | Alto | Testar timeout, retry, mensagens e recuperação de falhas |
| R09 | Cadastro com e-mail duplicado | Médio | Média | Médio | Validar regra de unicidade na API e interface |
| R10 | Login com credenciais inválidas aceito | Alto | Baixa | Alto | Validar autenticação, mensagens e bloqueios |
| R11 | Busca retorna produtos incorretos | Médio | Média | Médio | Validar termos, filtros, ordenação e ausência de resultados |
| R12 | Cupom inválido ou expirado aplicado | Médio | Média | Médio | Validar datas, regras de elegibilidade e cálculo do desconto |
| R13 | Pedido duplicado para a mesma transação | Alto | Média | Alto | Validar chave de idempotência e unicidade da transação |
| R14 | Dados reais utilizados nos testes | Alto | Baixa | Alto | Validar anonimização, massa sintética e configuração dos ambientes |
| R15 | Testes automatizados instáveis bloqueiam a pipeline | Médio | Média | Médio | Monitorar flakiness, reexecuções e isolamento dos cenários |

## 4. Priorização dos testes

### Prioridade P0

Devem bloquear a entrega em caso de falha:

- pagamento;
- valor total;
- confirmação do pedido;
- atualização de estoque;
- autorização de acesso;
- prevenção de duplicidade.

### Prioridade P1

Devem ser executados na regressão principal:

- cadastro;
- login;
- carrinho;
- checkout;
- consulta de pedidos;
- cupons e descontos.

### Prioridade P2

Podem ser executados em ciclos menos frequentes:

- ordenação;
- preferências visuais;
- validações não críticas;
- cenários de baixa ocorrência.

## 5. Estratégia por nível de risco

### Riscos críticos

- automação prioritária;
- cobertura por API e E2E;
- execução em pull request;
- evidências obrigatórias;
- bloqueio da pipeline em caso de falha.

### Riscos altos

- cobertura automatizada sempre que o cenário for estável;
- regressão frequente;
- testes exploratórios complementares;
- acompanhamento de defeitos e riscos residuais.

### Riscos médios

- combinação de testes manuais e automatizados;
- execução conforme alteração da funcionalidade;
- revisão periódica da prioridade.

### Riscos baixos

- validação sob demanda;
- menor prioridade de automação;
- monitoramento por impacto acumulado.

## 6. Riscos residuais

Mesmo após os testes, podem permanecer riscos relacionados a:

- indisponibilidade de serviços externos;
- comportamento de gateways de pagamento;
- problemas de rede;
- concorrência em alta escala;
- falhas específicas de produção;
- diferenças entre homologação e produção.

Esses riscos devem ser documentados, comunicados e aceitos pelos responsáveis de produto e tecnologia antes da entrega.

# Quality Engineering E-commerce

Case completo de Quality Engineering aplicado a uma plataforma de e-commerce, com foco em estratégia de qualidade, análise de riscos, cenários de teste, automação Web e API e integração contínua.

## Objetivo

Este projeto demonstra a aplicação de práticas de Quality Engineering desde o entendimento do produto até o planejamento, implementação e execução da automação.

A abordagem adotada é baseada em riscos, priorizando fluxos com maior impacto financeiro, operacional e de segurança.

## Escopo

O case contempla:

- cadastro e autenticação de usuários;
- catálogo de produtos;
- carrinho de compras;
- checkout;
- validações de sessão;
- testes Web;
- testes de API;
- estratégia de automação;
- integração contínua;
- rastreabilidade entre riscos e cenários.

## Documentação

- [Visão geral do produto](docs/product-overview.md)
- [Estratégia de testes](docs/test-strategy.md)
- [Matriz de riscos](docs/risk-matrix.md)
- [Cenários de teste](docs/test-scenarios.md)

## Abordagem de qualidade

A estratégia de qualidade inclui:

- análise de requisitos;
- definição de regras de negócio;
- testes baseados em risco;
- testes funcionais;
- testes End-to-End;
- testes de API;
- testes de integração;
- testes exploratórios;
- rastreabilidade entre riscos e cenários;
- critérios de entrada e saída;
- execução em CI/CD.

## Priorização

Os cenários foram classificados em:

- **P0:** falhas que podem bloquear a entrega;
- **P1:** fluxos relevantes para a regressão principal;
- **P2:** cenários de menor risco ou execução menos frequente.

## Tecnologias

- Playwright
- TypeScript
- Node.js
- GitHub Actions
- Page Object Model
- REST API
- Docker

## Estrutura do projeto

```text
quality-engineering-ecommerce/
├── docs/
│   ├── product-overview.md
│   ├── risk-matrix.md
│   ├── test-scenarios.md
│   └── test-strategy.md
├── tests/
│   ├── pages/
│   │   ├── cart.page.ts
│   │   ├── checkout.page.ts
│   │   ├── login.page.ts
│   │   ├── products.page.ts
│   │   └── register.page.ts
│   └── web/
│       ├── cart.spec.ts
│       ├── checkout.spec.ts
│       ├── logout.spec.ts
│       └── register.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js;
- npm;
- Git.
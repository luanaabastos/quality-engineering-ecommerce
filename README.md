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
- APIRequestContext
- REST API
- Docker

## Cenários de API automatizados

| ID | Cenário | Método | Status |
|---|---|---|---|
| API-001 | Consultar um post existente | GET | Automatizado |
| API-002 | Consultar recurso inexistente | GET | Automatizado |
| API-003 | Criar um novo post | POST | Automatizado |
| API-004 | Atualizar um post existente | PUT | Automatizado |
| API-005 | Excluir um post existente | DELETE | Automatizado |
| API-006 | Listar todos os posts | GET | Automatizado |
| API-007 | Filtrar posts por usuário | GET | Automatizado |
| API-008 | Retornar lista vazia para usuário inexistente | GET | Automatizado |
| API-009 | Documentar criação sem título | POST | Automatizado |
| API-010 | Consultar posts com filtros parametrizados | GET | Automatizado |

### Executar somente os testes de API

```bash
npx playwright test tests/api --project=chromium
```

### Executar somente os testes Web

npx playwright test tests/web --project=chromium

### Executar a verificação de tipos

npx tsc -p tsconfig.json --noEmit


## Estrutura do projeto

```text
tests/
├── api/
│   ├── posts.spec.ts
│   └── posts-coverage.spec.ts
├── fixtures/
│   ├── api.fixture.ts
│   └── posts.data.ts
├── pages/
│   ├── cart.page.ts
│   ├── checkout.page.ts
│   ├── login.page.ts
│   ├── products.page.ts
│   └── register.page.ts
├── types/
│   └── post.types.ts
└── web/
    ├── auth.spec.ts
    ├── cart.spec.ts
    ├── checkout.spec.ts
    ├── logout.spec.ts
    ├── register.spec.ts
    └── smoke.spec.ts
```

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js;
- npm;
- Git.


## Resultado das Sprints

### Sprint 1 — Automação Web

- 9 testes Web automatizados;
- Page Object Model implementado;
- cenários positivos e negativos;
- execução paralela;
- integração contínua com GitHub Actions;
- suíte Web aprovada.

### Sprint 2 — Automação de API

- 10 testes de API automatizados;
- cobertura dos métodos GET, POST, PUT e DELETE;
- validação de status codes;
- validação de headers;
- validação de estruturas JSON;
- uso de filtros por query string;
- payloads reutilizáveis;
- contratos tipados com TypeScript;
- fixture com `APIRequestContext`;
- checagem estática com `tsc --noEmit`;
- jobs separados no GitHub Actions.

### Resultado atual

- 9 testes Web;
- 10 testes de API;
- 19 testes automatizados no total;
- 19 testes aprovados na regressão completa;
- 3 jobs independentes no pipeline:
  - TypeScript type check;
  - API tests;
  - Web tests.
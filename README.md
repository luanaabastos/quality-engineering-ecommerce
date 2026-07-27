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
- Zod
- @axe-core/playwright
- Chromium
- Firefox
- WebKit


## Estrutura do projeto

```text
tests/
├── api/
│   ├── posts.spec.ts
│   ├── posts-contract.spec.ts
│   ├── posts-coverage.spec.ts
│   └── posts-performance.spec.ts
├── fixtures/
│   ├── api.fixture.ts
│   └── posts.data.ts
├── pages/
│   ├── cart.page.ts
│   ├── checkout.page.ts
│   ├── login.page.ts
│   ├── products.page.ts
│   └── register.page.ts
├── schemas/
│   └── post.schema.ts
├── types/
│   └── post.types.ts
└── web/
    ├── accessibility.spec.ts
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


## Instalação

Clone o repositório:

```bash
git clone https://github.com/luanaabastos/quality-engineering-ecommerce.git
```

Acesse a pasta do projeto:

```bash
cd quality-engineering-ecommerce
```

Instale as dependências:

```bash
npm install
```

Instale os navegadores:

```bash
npx playwright install
```


## Execução dos testes

### Executar a suíte completa

```bash
npx playwright test
```

### Executar somente os testes de API

```bash
npx playwright test --project=api
```

### Executar somente os testes Web

```bash
npx playwright test tests/web
```

### Executar somente no Chromium

```bash
npx playwright test tests/web --project=chromium
```

### Executar somente no Firefox

```bash
npx playwright test tests/web --project=firefox
```

### Executar somente no WebKit

```bash
npx playwright test tests/web --project=webkit
```

### Executar a verificação de tipos

```bash
npx tsc -p tsconfig.json --noEmit
```

### Visualizar o relatório HTML

```bash
npx playwright show-report
```


## Cenários Web automatizados

| ID | Cenário | Categoria | Status |
|---|---|---|---|
| TS-001 | Validar disponibilidade da aplicação | Smoke | Automatizado |
| TS-007 | Cadastrar usuário com dados únicos | Cadastro | Automatizado |
| TS-008 | Impedir cadastro duplicado | Cadastro | Automatizado |
| TS-011 | Preservar o carrinho durante a sessão | Carrinho | Automatizado |
| TS-014 | Invalidar a sessão após logout | Sessão | Automatizado |
| TS-015 | Finalizar uma compra com sucesso | Checkout | Automatizado |
| TS-016 | Impedir checkout sem dados obrigatórios | Checkout | Automatizado |
| A11Y-001 | Validar acessibilidade da página de login | Acessibilidade | Automatizado |
| A11Y-002 | Validar acessibilidade da página de produtos | Acessibilidade | Automatizado |



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
| API-011 | Validar contrato de um post | GET | Automatizado |
| API-012 | Validar contrato da lista de posts | GET | Automatizado |
| API-013 | Validar contrato do post criado | POST | Automatizado |
| API-014 | Rejeitar contrato inválido | Contrato | Automatizado |
| PERF-001 | Validar tempo de resposta de uma consulta | GET | Automatizado |
| PERF-002 | Validar tempo médio de consultas sucessivas | GET | Automatizado |


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


### Sprint 3 — Qualidade não funcional e estabilidade

- validação de contratos em tempo de execução com Zod;
- testes automatizados de acessibilidade com Axe Core;
- execução Web em Chromium, Firefox e WebKit;
- projeto exclusivo para execução dos testes de API;
- testes básicos de performance da API;
- relatórios separados de API e Web no GitHub Actions;
- estabilização da suíte cross-browser;
- documentação de limitações conhecidas da aplicação externa.


## Acessibilidade

O projeto utiliza `@axe-core/playwright` para verificar automaticamente critérios WCAG 2.0 e WCAG 2.1 nos níveis A e AA.

As verificações cobrem:

- página de login;
- página de produtos;
- identificação de violações conhecidas;
- bloqueio de novas violações inesperadas.

Os testes automatizados complementam, mas não substituem, avaliações manuais com teclado e leitores de tela.



## Limitações conhecidas

O cenário de logout é ignorado no WebKit porque o menu lateral da aplicação pública SauceDemo apresenta comportamento instável nesse navegador.

O mesmo cenário permanece ativo e validado no Chromium e no Firefox.

Os testes de performance são verificações smoke com limites tolerantes. Eles não representam testes de carga, estresse ou capacidade.


## Integração contínua

O projeto utiliza GitHub Actions em pushes e Pull Requests.

O pipeline possui três jobs independentes:

- `TypeScript type check`: executa a análise estática;
- `API tests`: executa o projeto `api`;
- `Web tests`: executa a suíte em Chromium, Firefox e WebKit.

Os relatórios são publicados como artifacts separados:

- `playwright-api-report`;
- `playwright-web-report`.



### Resultado atual

- 16 cenários de API executados uma única vez;
- 11 cenários Web distribuídos na matriz cross-browser;
- 29 execuções Web considerando Chromium, Firefox e WebKit;
- 45 execuções no total;
- 44 execuções aprovadas;
- 1 execução ignorada de forma documentada;
- nenhuma falha de tipagem;
- 3 jobs independentes no pipeline:
  - TypeScript type check;
  - API tests;
  - Web tests.


## Próximas etapas

- - avaliar a conteinerização do projeto com Docker;


### Preparação para portfólio

- adicionar badges ao README;
- incluir um diagrama da arquitetura de testes;
- adicionar evidências visuais das execuções;
- revisar a apresentação dos resultados;
- criar uma release inicial;
- documentar decisões técnicas;
- preparar uma apresentação resumida do projeto.
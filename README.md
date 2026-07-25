# Quality Engineering E-commerce

Case completo de Quality Engineering aplicado a uma plataforma de e-commerce, com foco em estratégia de qualidade, análise de riscos, cenários de teste, automação Web e API e integração contínua.

## Objetivo

Este projeto demonstra a aplicação de práticas de Quality Engineering desde o entendimento do produto até o planejamento da automação.

A abordagem adotada é baseada em riscos, priorizando fluxos com maior impacto financeiro, operacional e de segurança.

## Escopo

O case contempla:

- cadastro e autenticação de usuários;
- catálogo e busca de produtos;
- carrinho de compras;
- cálculo de valores, descontos e frete;
- checkout e pagamentos;
- atualização de estoque;
- consulta de pedidos;
- testes Web e API;
- estratégia de automação;
- integração contínua.

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
- testes de API;
- testes End-to-End;
- testes de integração;
- testes exploratórios;
- rastreabilidade entre riscos e cenários;
- critérios de entrada e saída;
- planejamento de CI/CD.

## Priorização

Os cenários foram classificados em:

- **P0:** falhas que podem bloquear a entrega;
- **P1:** fluxos relevantes para a regressão principal;
- **P2:** cenários de menor risco ou execução menos frequente.

## Próximas etapas

- implementar testes de API;
- implementar testes Web com Playwright;
- estruturar dados e ambientes de teste;
- configurar relatórios;
- adicionar pipeline no GitHub Actions;
- executar a suíte em CI/CD.

## Tecnologias planejadas

- Playwright
- TypeScript
- Node.js
- REST API
- GitHub Actions
- Docker

## Autora

Luana do Amaral Bastos  
Quality Assurance | Quality Engineering

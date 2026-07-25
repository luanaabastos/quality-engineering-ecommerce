# Test Strategy

## 1. Objetivo

Esta estratégia define como a qualidade da aplicação de e-commerce será avaliada ao longo do desenvolvimento.

O objetivo é reduzir riscos de negócio, identificar falhas antecipadamente e garantir que os principais fluxos funcionem de forma confiável nos canais Web e API.

## 2. Escopo dos testes

### Dentro do escopo

- Cadastro de usuários.
- Autenticação.
- Catálogo de produtos.
- Busca e filtros.
- Carrinho.
- Cálculo de valores.
- Checkout.
- Pagamento.
- Pedidos.
- Atualização de estoque.
- APIs dos fluxos principais.

### Fora do escopo inicial

- Aplicativo mobile.
- Testes extensivos de carga.
- Testes avançados de segurança.
- Integração com ambientes reais de pagamento.
- Compatibilidade com navegadores antigos.

## 3. Abordagem de qualidade

A estratégia será baseada em risco.

Os fluxos com maior impacto financeiro, operacional ou de segurança receberão maior prioridade de teste.

A qualidade será trabalhada desde o entendimento dos requisitos até a execução em integração contínua, envolvendo:

- análise de requisitos;
- definição de critérios de aceitação;
- revisão de regras de negócio;
- testes manuais exploratórios;
- testes de API;
- testes automatizados de interface;
- testes de regressão;
- monitoramento dos resultados.

## 4. Tipos de teste

### Testes funcionais

Validarão se o sistema executa corretamente as funcionalidades previstas.

### Testes de API

Validarão contratos, status HTTP, payloads, autenticação, regras de negócio e tratamento de erros.

### Testes End-to-End

Validarão os fluxos críticos completos pela interface.

### Testes de integração

Validarão a comunicação entre catálogo, estoque, pagamento, pedidos e notificações.

### Testes de regressão

Garantirão que alterações não prejudiquem funcionalidades existentes.

### Testes exploratórios

Serão utilizados para investigar comportamentos inesperados, inconsistências e riscos não cobertos pelos cenários previamente definidos.

### Testes de usabilidade e acessibilidade

Avaliarão clareza das mensagens, navegação, formulários, uso por teclado e elementos básicos de acessibilidade.

## 5. Priorização

### Prioridade alta

- Pagamento.
- Confirmação do pedido.
- Atualização de estoque.
- Cálculo do valor total.
- Proteção dos dados dos usuários.
- Prevenção de cobranças e pedidos duplicados.

### Prioridade média

- Cadastro.
- Login.
- Carrinho.
- Busca.
- Consulta de pedidos.

### Prioridade baixa

- Ordenação de produtos.
- Elementos visuais não críticos.
- Preferências de apresentação.

## 6. Estratégia de automação

A automação será aplicada principalmente em cenários:

- críticos para o negócio;
- executados com frequência;
- estáveis;
- repetitivos;
- relevantes para regressão;
- adequados para validação em CI/CD.

A estratégia inicial prevê:

- API para regras de negócio e validações rápidas;
- interface Web para os principais fluxos do usuário;
- execução automática a cada pull request;
- suíte de regressão na branch principal.

Testes exploratórios, usabilidade e cenários instáveis não serão automatizados apenas para aumentar a quantidade de testes.

## 7. Ambientes

### Ambiente local

Utilizado para desenvolvimento e depuração dos testes.

### Ambiente de homologação

Utilizado para validação funcional, integração e regressão.

### Ambiente de integração contínua

Utilizado para execução automática dos testes em pipeline.

Nenhum teste automatizado deverá utilizar dados reais de clientes.

## 8. Dados de teste

Os dados serão controlados e independentes.

Serão utilizados:

- usuários específicos para automação;
- produtos com diferentes condições de estoque;
- cupons válidos, inválidos e expirados;
- formas de pagamento simuladas;
- pedidos preparados para diferentes status.

Cada teste deverá criar ou preparar seus próprios dados sempre que possível, evitando dependência entre cenários.

## 9. Critérios de entrada

Os testes poderão começar quando:

- os requisitos estiverem claros;
- os critérios de aceitação estiverem definidos;
- o ambiente estiver disponível;
- as dependências estiverem integradas ou simuladas;
- os dados de teste estiverem preparados;
- a versão estiver implantada corretamente.

## 10. Critérios de saída

A versão poderá ser considerada apta quando:

- todos os testes críticos forem aprovados;
- não houver defeitos críticos ou bloqueadores abertos;
- os riscos residuais forem conhecidos e aceitos;
- a regressão automatizada estiver aprovada;
- as evidências estiverem registradas;
- os stakeholders tiverem conhecimento das limitações restantes.

## 11. Evidências e relatórios

As execuções poderão gerar:

- logs;
- screenshots;
- vídeos;
- relatórios automatizados;
- resultados de pipeline;
- registros de defeitos;
- resumo dos riscos encontrados.

## 12. Responsabilidades

### Quality Engineer

- analisar riscos;
- revisar requisitos;
- definir cenários;
- implementar e manter automações;
- acompanhar métricas;
- comunicar riscos de qualidade.

### Desenvolvimento

- implementar testes unitários;
- corrigir defeitos;
- apoiar a análise técnica;
- manter o código testável.

### Produto

- esclarecer regras de negócio;
- definir prioridades;
- validar critérios de aceitação;
- decidir sobre riscos residuais.

## 13. Métricas

Serão acompanhadas métricas como:

- taxa de aprovação dos testes;
- quantidade de defeitos por severidade;
- defeitos encontrados antes e após a entrega;
- tempo de execução da regressão;
- estabilidade dos testes automatizados;
- cobertura dos fluxos críticos;
- tempo médio para correção de defeitos.

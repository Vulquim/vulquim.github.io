# Site Vurno Dev — Design da Fundação Segura

> Documento de desenho aprovado para a fundação técnica. Este documento antecede a implementação visual e deve ser revisado antes da criação do plano de execução.

**Data:** 2026-08-09  
**Repositório:** `vurnodev/site-vurno-dev`  
**Branch de desenho:** `chore/secure-foundation-design`  
**Branch de integração atual:** `Raiz`  

## Objetivo

Construir a base do site institucional do Vurno Dev com baixo acoplamento, superfície de ataque reduzida, comportamento previsível, observabilidade controlada, qualidade automatizada e um fluxo obrigatório de Issues, Pull Requests e deploys. O visual será implementado depois que essa fundação for aprovada e validada.

“À prova de invasões” e “à prova de crashes” não são garantias tecnicamente honestas. O objetivo operacional é aplicar defesa em profundidade, falhar com segurança, limitar impacto, detectar incidentes rapidamente e impedir que alterações sem validação cheguem ao deploy.

## Decisão arquitetural

### Stack aprovada

- Next.js com App Router e TypeScript em modo estrito.
- `pnpm` com lockfile versionado e Node.js LTS documentado.
- Renderização estática por padrão; server-side code só entra quando houver requisito real e Issue aprovada.
- Biome como formatter e lint principal.
- Vitest para testes unitários e de integração.
- Playwright para testes end-to-end.
- Codecov para cobertura e tendência de cobertura.
- OpenTelemetry como padrão de instrumentação.
- Sentry como destino inicial de erros do frontend, com redaction de dados sensíveis.
- Datadog e New Relic tratados como exporters ou backends alternativos por ambiente; os mesmos eventos não devem ser duplicados sem decisão explícita de custo, retenção e privacidade.

### Limites de escopo da primeira base

- Não haverá banco de dados, autenticação, painel administrativo, CMS ou formulário de contato na primeira fundação.
- Não haverá segredo, token ou credencial no bundle do navegador.
- Não serão adicionadas dependências de monitoramento apenas para marcar presença de fornecedor.
- Não serão aceitos componentes visuais grandes antes de existir a infraestrutura de estados, erro, carregamento, acessibilidade e testes correspondente.

## Estrutura proposta

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   ├── dependabot.yml
│   └── pull_request_template.md
├── docs/
│   ├── architecture/
│   ├── runbooks/
│   └── superpowers/
│       ├── plans/
│       └── specs/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── config/
│   ├── lib/
│   │   ├── observability/
│   │   └── security/
│   ├── styles/
│   └── test/
├── AGENTS.md
├── CONTRIBUTING.md
├── SECURITY.md
├── package.json
├── pnpm-lock.yaml
└── README.md
```

### Regras de dependência

- `src/app` orquestra rotas e composição; não deve concentrar lógica de domínio ou integração.
- `src/components` contém componentes reutilizáveis e estados visuais explícitos.
- `src/lib/security` concentra validações, redaction, headers e contratos de entrada; não deve depender de UI.
- `src/lib/observability` concentra criação de eventos, spans, métricas e tratamento de PII.
- Configuração deve ser lida por módulos tipados, nunca por chamadas espalhadas a `process.env`.
- Imports devem respeitar a direção definida pelos contratos arquiteturais. Um componente não pode acessar diretamente segredo, storage sensível ou cliente de observabilidade sem passar pelo módulo apropriado.

## Segurança por camadas

### Código e runtime

- TypeScript strict, sem `any` novo sem justificativa documentada.
- Validação de entrada com schemas explícitos quando houver dados externos.
- Escape e encoding na saída; `dangerouslySetInnerHTML` proibido por padrão.
- Links externos com política explícita de `rel` e validação de destino.
- Erros exibidos ao usuário não devem conter stack trace, tokens, caminhos locais ou dados de requisição.
- `error.tsx`, `global-error.tsx` e `not-found.tsx` devem existir antes das primeiras rotas de produção.
- Lazy loading deve ser usado em módulos pesados e partes não críticas, com fallback testado.

### Headers e navegador

- CSP restritiva, construída a partir dos recursos realmente usados.
- HSTS somente quando o domínio estiver servido integralmente por HTTPS e a decisão for validada no deploy.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy` restritiva.
- `Permissions-Policy` mínima.
- Proteção contra clickjacking por `frame-ancestors` na CSP ou `X-Frame-Options` quando necessário.
- Cookies, se futuramente existirem, com `Secure`, `HttpOnly`, `SameSite` e escopo mínimo.

### Supply chain e repositório

- Lockfile obrigatório; CI deve falhar se a instalação alterar o lockfile.
- Dependências diretas mínimas e revisadas por Issue.
- Dependabot, secret scanning, CodeQL e auditoria de dependências habilitados quando disponíveis no plano do GitHub.
- Gitleaks ou equivalente no CI para detectar segredos antes do merge.
- Artefatos de build não entram no Git.
- Actions devem usar versões fixadas por SHA ou política equivalente quando suportada.
- Tokens de CI devem ter permissões mínimas e `contents: read` por padrão.

### LGPD e ECA

- Telemetria deve coletar o mínimo necessário para segurança, operação e produto.
- PII, tokens, conteúdo de formulários, headers de autorização e identificadores diretos devem ser redacted antes do envio.
- Logs terão retenção definida por ambiente e não serão usados como banco de dados de usuários.
- Caso um formulário ou recurso possa ser usado por menores, não coletar dados de crianças por padrão; qualquer coleta deverá ter finalidade, base legal, transparência, retenção e proteção compatíveis com LGPD e ECA.
- Dados fictícios serão usados em testes, screenshots, fixtures e exemplos.

## Observabilidade

### Modelo

- OpenTelemetry será a camada de instrumentação e contexto.
- Cada evento terá ambiente, versão/release, rota e correlação sem incluir PII desnecessária.
- Sentry receberá erros de frontend e contexto técnico redigido.
- Datadog e New Relic serão configurados como destinos alternativos ou complementares somente quando houver requisito de operação e política de custo/retenção aprovada.
- Nenhuma chave de ingestão com privilégio excessivo será enviada ao navegador.

### Sinais mínimos

- Erros não tratados e falhas de boundary.
- Falhas de carregamento de recursos críticos.
- Web Vitals e métricas de performance sem fingerprinting desnecessário.
- Tempo de build, sucesso/falha de deploy e versão publicada.
- Eventos de segurança agregados, sem conteúdo sensível.

### Critério de falha

Se o fornecedor de observabilidade estiver indisponível, a aplicação continua funcionando e não bloqueia a navegação. Telemetria nunca pode derrubar a página, vazar dados ou aumentar indiscriminadamente o tempo de carregamento.

## Qualidade, lint e contratos

- Biome será o gate de formatter e lint.
- Commitlint será usado para mensagens de commit; “Comilint” será tratado como correção do nome.
- Knip será usado para detectar arquivos, exports e dependências não utilizados, com entradas configuradas para rotas, testes, scripts e arquivos gerados.
- Stryker será avaliado para mutation testing em módulos com lógica relevante.
- “Arch-contract” será implementado como contratos arquiteturais automatizados. O pacote exato só será adicionado depois de verificar sua manutenção e compatibilidade; não será instalado um pacote de nome ambíguo apenas para cumprir uma lista.
- A CI deve separar erros de lint, tipos, testes, cobertura, dependências e arquitetura para diagnóstico rápido.

## Estratégia de testes

### Unitários

Testar funções puras, normalizadores, validadores, redaction, configuração e estados de componentes.

### Integração

Testar composição de rotas, boundaries de erro, carregamento lazy, observabilidade sem PII e headers de segurança.

### End-to-end

Playwright deve cobrir a navegação principal em viewport desktop e mobile, estados de carregamento, falhas de recurso, rota inexistente, acessibilidade básica e comportamento com `prefers-reduced-motion`.

### Cobertura e mutação

- Codecov publica cobertura por PR.
- O threshold inicial deve ser realista e evolutivo; não será usado para mascarar testes fracos.
- Stryker será aplicado primeiro em módulos de segurança, configuração e regras de navegação, onde mutações têm alto valor diagnóstico.

## Padrão de interface e motion

Toda interface futura deve declarar os estados aplicáveis:

- `idle`/conteúdo pronto;
- `loading` com skeleton ou fallback de mesma geometria;
- `progress` quando a operação tiver duração perceptível;
- `empty` quando não houver conteúdo;
- `error` com recuperação acionável;
- `success` quando houver confirmação relevante.

Lazy loading e skeleton não serão adicionados mecanicamente onde o conteúdo for síncrono e imediato. A decisão seguirá a necessidade real do componente.

As transições devem:

- explicar mudança de estado, hierarquia ou continuidade;
- usar duração curta e easing consistente;
- evitar `scale(0)`, blur excessivo, pulse permanente, stagger em massa e bounce em ações utilitárias;
- respeitar `prefers-reduced-motion` e oferecer mudança instantânea ou reduzida;
- não animar interações disparadas centenas de vezes por dia quando isso prejudicar produtividade;
- ser testáveis por estado, não apenas por screenshot.

Referência: [kylezantos/design-motion-principles](https://github.com/kylezantos/design-motion-principles).

## Fluxo de Issues, PRs e deploy

### Tipos iniciais de Issue

1. Governança de GitHub, branch protection, templates e deploy.
2. Bootstrap Next.js + TypeScript + `pnpm`.
3. Segurança de runtime, headers, CSP, secrets e supply chain.
4. Qualidade, lint, contratos arquiteturais e mutation testing.
5. Testes unitários, integração, Playwright e Codecov.
6. Observabilidade OpenTelemetry + Sentry e destinos opcionais.
7. Primitivos de UI para estados, skeleton, lazy loading e motion acessível.

Cada Issue deve conter contexto, escopo, fora de escopo, critérios de aceite, riscos, testes e impacto LGPD/ECA quando aplicável.

### Branches

- `feat/issue-<numero>-<slug>` para novas funções.
- `fix/issue-<numero>-<slug>` para correções.
- `chore/issue-<numero>-<slug>` para infraestrutura e qualidade.
- `docs/issue-<numero>-<slug>` para documentação.

### Pull Requests

- Todo PR deve citar a Issue no corpo e usar `Closes #<numero>` quando a alteração a concluir.
- PR deve apresentar resumo, arquivos sensíveis, riscos, testes executados, evidência de CI, impacto de segurança, observabilidade e acessibilidade.
- Não haverá merge direto na branch protegida.
- PRs devem possuir CI verde, revisão e critérios de aceite cumpridos.
- Deploy de preview é permitido para PR; produção só ocorre após merge aprovado na branch de integração.

### Deploy

- Build reprodutível a partir do lockfile.
- Artefato de produção identificado por commit SHA.
- Variáveis de ambiente configuradas no provedor, nunca commitadas.
- Rollback baseado no artefato anterior conhecido.
- Smoke test pós-deploy e verificação de logs/erros antes de considerar a publicação concluída.

## Critérios de aceite da fundação

- O projeto instala e compila em ambiente limpo com `pnpm install --frozen-lockfile`.
- Nenhum segredo é necessário no repositório para executar o modo local básico.
- Lint, formatter, typecheck e testes possuem comandos reproduzíveis.
- CI bloqueia merge quando qualquer gate obrigatório falha.
- Headers, CSP, boundaries de erro e redaction têm testes.
- Há pelo menos um teste unitário, um teste de integração e um fluxo Playwright de fumaça.
- `AGENTS.md`, `SECURITY.md`, `CONTRIBUTING.md` e templates GitHub documentam o fluxo aprovado.
- A criação de UI futura exige estados de carregamento/erro e política de motion acessível.
- O site continua navegável se o serviço de observabilidade falhar.
- Nenhum dado pessoal de produção aparece em fixtures, logs, telemetria ou documentação.

## Riscos e decisões pendentes

- O provedor de deploy ainda não foi escolhido; a configuração deve permanecer neutra até essa decisão.
- Sentry, Datadog e New Relic não devem ser ativados simultaneamente sem justificar custo, retenção e duplicação de eventos.
- O pacote exato para contratos arquiteturais precisa de verificação antes da instalação.
- A branch `Raiz` permanece como branch de integração até uma decisão explícita de renomeação.
- A política de domínio, analytics e consentimento será definida antes de qualquer script de terceiros.

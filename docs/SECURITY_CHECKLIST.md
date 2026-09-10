# Checklist diário de segurança — Site Vulquim

**Escopo:** checkout interno `E:\Vulquim\Site - Vulquim`, repositório remoto `Vulquim/vulquim.github.io` e publicação web do domínio canônico.

**Frequência:** todos os dias, por volta de 12:00, no fuso `America/Sao_Paulo`.

**Regra de conclusão:** a rotina só pode ser marcada como concluída quando todos os itens aplicáveis tiverem evidência atual; itens não verificáveis devem ficar explicitamente como `BLOQUEADO` ou `NÃO VERIFICADO`, nunca como concluídos. Correções seguras e necessárias devem ser aplicadas, validadas e, quando autorizadas, publicadas.

## Estados permitidos

- `OK`: verificado e sem problema conhecido.
- `CORRIGIDO`: problema encontrado, correção aplicada e validada.
- `ATENÇÃO`: risco ou melhoria necessária, sem prova suficiente para chamar de vulnerabilidade.
- `NÃO APLICÁVEL`: não existe a superfície no estado atual.
- `NÃO VERIFICADO`: depende de acesso, ferramenta ou configuração externa.
- `BLOQUEADO`: existe problema ou divergência que impede a conclusão segura.

## 1. Alinhamento interno, remoto e publicado

| Item | Evidência diária | Estado atual (10/09/2026) |
|---|---|---|
| Diretório interno correto | `git rev-parse --show-toplevel` e `git status --short --branch` | `OK` para o checkout; existem arquivos locais não rastreados preexistentes. |
| Commit local versus remoto | `git rev-parse HEAD` e `git ls-remote origin HEAD` | `OK` pós-publicação: ambos em `4ae48a2...`. Revalidar após cada publicação. |
| Alterações locais | `git status --short`; separar arquivos do ciclo dos arquivos do usuário | `ATENÇÃO`: nunca apagar, resetar ou incluir arquivos fora do escopo. |
| Repositório remoto | API/console do GitHub: nome, visibilidade, branch padrão, Pages e último push | `ATENÇÃO`: remoto público e Pages habilitado; revisar exposição de cada arquivo. |
| Conteúdo publicado versus remoto | comparar hash/ETag/`Last-Modified` da página publicada com o commit remoto | `OK` nesta rodada: HTML publicado contém o banner e o gate de consentimento do commit `4ae48a2`. Revalidar após cada deploy. |
| Domínio canônico | conferir `CNAME`, homepage do GitHub, DNS e redirects | `ATENÇÃO`: `CNAME` usa `www.vulquim.com.br`; o README ainda menciona `vulquim.com.br`. |

## 2. Auditoria online do domínio

Executar para o domínio canônico, o domínio alternativo e o endereço GitHub Pages, seguindo redirects e registrando horário, status e headers.

| Verificação | Critério de aprovação | Estado atual |
|---|---|---|
| HTTPS | todos os domínios e caminhos relevantes usam HTTPS; HTTP redireciona sem loop | `OK` observado: apex redireciona `301` para `https://www.vulquim.com.br/`; destino responde `200`. |
| HSTS | `Strict-Transport-Security` presente no `200` do domínio canônico, com escopo compatível | `ATENÇÃO`: ausente na resposta observada. Não habilitar `includeSubDomains`/preload sem validar todos os subdomínios. |
| Anti-clickjacking | `Content-Security-Policy: frame-ancestors ...` ou `X-Frame-Options` presente | `ATENÇÃO`: ausente na resposta observada. |
| MIME sniffing | `X-Content-Type-Options: nosniff` | `ATENÇÃO`: ausente na resposta observada. |
| Referer | `Referrer-Policy` restritiva | `ATENÇÃO`: ausente na resposta observada. |
| Recursos do navegador | `Permissions-Policy` mínima | `ATENÇÃO`: ausente na resposta observada. |
| CSP | CSP compatível com o HTML, script local e Analytics somente após consentimento | `ATENÇÃO`: ausente na resposta observada; definir depois de validar o carregamento de terceiros. |
| CORS | `Access-Control-Allow-Origin` não deve ser aberto sem necessidade | `ATENÇÃO`: `*` foi observado; reavaliar se a hospedagem realmente precisa desse header. |
| Exposição de servidor | evitar versão, debug, stack trace e headers desnecessários | `ATENÇÃO`: `Server: GitHub.com` aparece; não revelou versão, mas deve ser acompanhado. |
| Arquivos de segurança | `/.well-known/security.txt` existe e aponta canal controlado; `robots.txt` é intencional | `ATENÇÃO`: ambos retornaram `404` no domínio publicado. |
| Conteúdo publicado | não há secrets, source maps inesperados, painéis, APIs ou URLs internas | `OK` na página observada; repetir em cada rota nova. |
| Dependências externas | cada terceiro tem finalidade aprovada, origem esperada e controle de integridade/política | `ATENÇÃO`: `gtag.js` é terceiro; agora deve ser carregado somente após decisão de privacidade. |

## 3. Auditoria offline do checkout

| Verificação | Comando/inspeção | Estado atual |
|---|---|---|
| Segredos | `rg` para chaves, tokens, senhas, `.env`, certificados e credenciais | `OK`: nenhum segredo encontrado no conteúdo textual revisado. |
| APIs e autenticação | localizar `fetch`, XHR, WebSocket, forms, login, cookies e sessões | `NÃO APLICÁVEL`: não há backend, API, formulário, login ou sessão. |
| Rate limit | identificar operações que aceitam entrada ou processam ações | `NÃO APLICÁVEL` ao site estático atual. Reabrir quando existir formulário, API ou login. |
| XSS/injeção | localizar entradas controladas, `innerHTML`, `eval`, `new Function`, URLs `javascript:` e handlers inline | `OK`: nenhum caminho controlado pelo visitante foi encontrado. |
| SVG ativo | verificar scripts, eventos, `foreignObject`, `href` externo e URLs de script | `OK`: os quatro SVGs contêm somente `svg` e `path`. |
| Source maps/debug | procurar `.map`, banners, stack trace, logs e flags de debug | `OK` no checkout revisado. |
| Dependências/supply chain | procurar `package.json`, lockfiles, workflows e scripts de build | `NÃO APLICÁVEL`: site sem build e sem dependências versionadas. |
| Headers no código | procurar CSP, HSTS, X-Frame-Options, nosniff, Referrer-Policy e Permissions-Policy | `ATENÇÃO`: não há configuração no repositório; confirmar na publicação. |
| Analytics | verificar carregamento, consentimento, opt-out, finalidade, retenção e PII | `CORRIGIDO`: teste local e online confirmaram zero request antes da escolha, zero após recusa e carregamento somente após aceite. Finalidade, retenção e base legal continuam dependentes da governança operacional. |
| LGPD | finalidade, base legal, transparência, minimização, retenção, opt-out e operador | `NÃO VERIFICADO`: a parte operacional/jurídica não está no checkout. |
| ECA | verificar se há coleta ou recurso destinado/acessível a crianças/adolescentes | `NÃO APLICÁVEL` ao conteúdo atual sem formulário; reavaliar se houver coleta ou perfilamento. |

## 4. Auditoria do repositório na nuvem

Verificar no GitHub, sem expor credenciais:

- visibilidade pública e arquivos efetivamente publicados;
- branch padrão e proteção de `main`;
- revisão obrigatória e aprovação para publicação;
- secret scanning, push protection, Dependabot e alertas disponíveis;
- GitHub Pages, origem, domínio customizado e histórico de deploy;
- Actions/workflows, permissões de `GITHUB_TOKEN` e actions fixadas por SHA;
- colaboradores, equipes, apps instalados, webhooks, deploy keys e tokens antigos;
- histórico recente em busca de secrets removidos apenas do arquivo atual;
- issues, discussions, wiki e releases que possam expor informações internas.

Estado desta rodada: repositório confirmado como **público**, com **Pages habilitado** e branch padrão `main`. Proteção de branch, secret scanning, push protection, colaboradores, webhooks e histórico completo não foram confirmados pela auditoria sem autenticação administrativa.

## 5. Rotina de correção e publicação

1. Registrar o estado inicial e separar alterações preexistentes.
2. Comparar `HEAD` local, `origin/main` e conteúdo publicado.
3. Classificar cada item como `OK`, `CORRIGIDO`, `ATENÇÃO`, `NÃO APLICÁVEL`, `NÃO VERIFICADO` ou `BLOQUEADO`.
4. Corrigir somente problemas dentro do escopo, usando o menor patch seguro.
5. Rodar validação de sintaxe, busca de segredos, diff e testes aplicáveis.
6. Revisar o diff e garantir que nenhum arquivo do usuário foi incluído por engano.
7. Fazer commit somente dos arquivos corretivos e do checklist, quando a publicação estiver autorizada.
8. Publicar no branch correto e confirmar o novo commit remoto.
9. Repetir a auditoria HTTP após a propagação do deploy.
10. Só declarar conclusão se todos os pontos aplicáveis tiverem evidência atual e nenhum item estiver `BLOQUEADO`.

Não usar segundo domínio como forma de “esconder” serviço. Painéis e serviços internos devem usar autenticação forte, VPN/Zero Trust, firewall e restrição direta na origem.

## 6. Adaptação obrigatória do checklist

Reclassificar e ampliar o checklist quando aparecer qualquer uma destas mudanças:

- formulário, login, recuperação de senha, cookies ou área autenticada;
- API, webhook, banco de dados, upload, busca ou integração externa;
- framework, bundler, dependência, CDN, service worker ou pipeline de build;
- Cloudflare, Vercel, Netlify, outro host, proxy ou WAF;
- painel administrativo, n8n, Metabase, Evolution ou outro serviço interno;
- analytics adicional, publicidade, pixels, gravação de sessão ou perfilamento;
- coleta de dados de clientes, menores, documentos, pagamentos ou informações financeiras;
- novo subdomínio, domínio, redirect, regra DNS ou origem pública.

Para cada mudança, adicionar a superfície, o ativo protegido, o controle esperado, a evidência necessária, o responsável e o critério de conclusão antes de marcar a rotina como concluída.

## Registro diário

Cada execução deve registrar:

- data/hora de início e fim, fuso e executor;
- commit local, commit remoto e status do working tree;
- domínio testado, status, redirect e headers;
- checklist completo com evidências e links;
- achados, correções, arquivos alterados e testes;
- itens não verificáveis, bloqueios e ação necessária;
- confirmação de que o resumo foi enviado nos canais de notificação configurados.

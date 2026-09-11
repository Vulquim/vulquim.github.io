# Decisões e histórico — Site Vulquim

Documento operacional do site institucional da Vulquim. Registra as decisões que continuam válidas, as alterações efetivamente realizadas e as intercorrências que precisam de acompanhamento.

## 1. Regra de manutenção deste documento

- A seção **Resumo diário da rotina de verificação** deve ser substituída diariamente por uma visão geral muito resumida do estado atual.
- O resumo diário não deve virar um diário acumulativo. Substituir a data, o estado, as verificações e a pendência principal.
- A seção **Histórico de alterações e intercorrências** só deve receber uma nova entrada quando houver alteração no site, mudança de configuração ou intercorrência relevante.
- Uma verificação normal, sem alteração nem intercorrência, atualiza apenas o resumo diário.
- Não apagar entradas históricas. Se uma decisão for substituída, manter a entrada anterior e registrar a nova decisão com a data.

## 2. Decisões vigentes

### Estrutura e publicação

- O site é estático, sem framework, sem dependências e sem etapa de build obrigatória.
- A página institucional principal é [index.html](../index.html).
- A publicação é mantida no GitHub Pages pelo repositório `vulquim.github.io`.
- Qualquer publicação exige revisão do diff, commit e push autorizados. Alterações locais não são consideradas publicadas.
- Arquivos não relacionados ou já existentes no working tree devem permanecer fora de commits do site.

### Domínio

- O domínio de marca utilizado na documentação é `vulquim.com.br`.
- Existe uma divergência que permanece aberta: o README descreve o domínio principal como `vulquim.com.br`, enquanto o arquivo [CNAME](../CNAME) atualmente contém `www.vulquim.com.br`.
- Nenhuma alteração de DNS deve ser feita até decidir qual será o domínio canônico e confirmar os redirecionamentos entre apex e `www`.

### Identidade visual

- A base visual do site usa fundo escuro, contraste alto, vermelho/crimson da Vulquim e os arquivos oficiais de marca presentes no repositório.
- O manual da marca permanece como referência para futuras mudanças de logo, cores e tipografia.
- A fonte atualmente aplicada no site é genérica do sistema. A adoção de League Spartan, Sora ou Inter continua sendo uma melhoria pendente, não uma decisão já aplicada.

### Projetos em desenvolvimento

- O menu do topo contém o item **Projetos em desenvolvimento**.
- O submenu aponta para duas páginas independentes:
  - [Kerva](../kerva.html): identidade própria rica em laranja, com foco visual em clareza financeira.
  - [HandOS](../handos.html): identidade própria em navy, com foco visual em operação, continuidade e base local-first.
- Os estilos compartilhados das páginas ficam em [projetos.css](../projetos.css).
- As páginas estão criadas no checkout local, mas ainda não devem ser tratadas como publicadas até passarem pelo fluxo autorizado de commit, push e verificação online.

### Subdomínios

- A intenção registrada é avaliar `kerva.vulquim.com.br` e `handos.vulquim.com.br`.
- Subdomínio real depende de DNS e de hospedagem configurada para cada origem; criar apenas links no HTML não cria subdomínios.
- A opção preferida é manter cada projeto como uma origem Pages própria, com o domínio personalizado configurado no GitHub e um registro CNAME correspondente no provedor DNS.
- Redirecionar os subdomínios para `vulquim.com.br/kerva.html` e `vulquim.com.br/handos.html` é uma alternativa, mas não mantém o subdomínio na barra de endereço.
- Esta decisão ainda está aberta e não houve alteração externa de DNS nesta etapa.

### Privacidade e segurança

- O site não possui backend, login, formulário, banco de dados ou área autenticada.
- O Google Analytics deve carregar somente após consentimento explícito de análise; recusa não deve carregar o script.
- Não incluir CPF, dados financeiros, credenciais, tokens ou outros dados pessoais em conteúdo, eventos ou arquivos públicos.
- Qualquer nova página com formulário, integração, autenticação, upload, subdomínio ou serviço externo exige atualização do checklist de segurança em [SECURITY_CHECKLIST.md](SECURITY_CHECKLIST.md).
- O conteúdo atual não cria fluxo específico para crianças ou adolescentes; se isso mudar, reavaliar ECA e LGPD antes da implementação.

## 3. Resumo diário da rotina de verificação — substituir diariamente

> **Data:** 11/09/2026 — **Estado geral:** ATENÇÃO
>
> **Resumo:** estrutura local íntegra; páginas Kerva/HandOS e interações fluidas implementadas; ainda não publicadas.
>
> **Verificado:** JavaScript válido, tags balanceadas, links internos e `git diff --check` sem erro.
>
> **Pendência:** resolver a divergência `vulquim.com.br`/`www.vulquim.com.br` antes de configurar subdomínios.

## 4. Rotina diária de verificação

Executar somente as verificações aplicáveis ao estado atual do site e atualizar o resumo acima:

1. Conferir branch, `HEAD`, remoto e alterações locais com `git status --short --branch`.
2. Separar alterações desta rodada de arquivos preexistentes ou não relacionados.
3. Validar o diff com `git diff --check` e revisar os arquivos que serão incluídos.
4. Confirmar que as páginas e assets referenciados existem no checkout.
5. Procurar segredos, credenciais, URLs internas e dados pessoais em arquivos públicos.
6. Quando houver publicação autorizada, comparar o commit local com `origin/main` e conferir a resposta do domínio publicado.
7. Quando houver domínio ou subdomínio configurado, validar DNS, HTTPS, redirects, headers e conteúdo de cada origem.
8. Registrar no histórico somente alterações, falhas, bloqueios, correções ou decisões novas.

Estados permitidos: `OK`, `CORRIGIDO`, `ATENÇÃO`, `NÃO APLICÁVEL`, `NÃO VERIFICADO` e `BLOQUEADO`. Evidência ausente nunca deve ser descrita como verificação concluída.

O checklist detalhado permanece em [SECURITY_CHECKLIST.md](SECURITY_CHECKLIST.md). Este arquivo resume decisões e histórico; não deve duplicar toda a auditoria técnica.

## 5. Histórico de alterações e intercorrências

### 10/09/2026 — páginas de projetos e navegação local

- Adicionado o item **Projetos em desenvolvimento** ao menu do topo.
- Criadas as páginas `kerva.html` e `handos.html`.
- Criado `projetos.css` com navegação compartilhada, layout responsivo e identidades distintas para os dois projetos.
- Kerva recebeu direção em laranja; HandOS recebeu direção em navy.
- Estado: alteração criada no checkout; publicação ainda pendente.

### 10/09/2026 — divergência de domínio identificada

- O README descreve `vulquim.com.br` como endereço publicado.
- O arquivo `CNAME` contém `www.vulquim.com.br`.
- Estado: `ATENÇÃO`; decisão de domínio canônico e redirects ainda pendente.

### 10/09/2026 — consentimento de analytics e checklist

- Registrados no histórico do Git os commits `4ae48a2` e `3cd5156`, relacionados ao consentimento de analytics e ao status da auditoria pós-publicação.
- O carregamento do analytics ficou condicionado ao aceite do visitante.

### 09/09/2026 — analytics

- Registrado o commit `344dafd`, com a integração inicial do Google Analytics.
- A integração passou a ser acompanhada por consentimento e por verificações de privacidade.

### 09/09/2026 — identidade e navegação institucional

- Registrado o commit `1ba251c`, com ajustes de identidade visual e navegação do site.

### 09/09/2026 — base da publicação

- Registrado o commit `cad7367`, com correção do logo no header/footer, favicons e README.

## 6. Pendências abertas

- Definir oficialmente o domínio canônico: `vulquim.com.br` ou `www.vulquim.com.br`.
- Configurar e validar os subdomínios somente depois da decisão acima.
- Publicar as páginas de Kerva e HandOS mediante commit e push autorizados.
- Reavaliar a adoção das fontes previstas no manual da marca.
- Avaliar a necessidade de `og:image` para compartilhamento social.
- Após cada nova origem pública, repetir a auditoria de HTTPS, headers, conteúdo e exposição de arquivos.

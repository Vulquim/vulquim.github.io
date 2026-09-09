# Vulquim — site institucional

Site institucional da Vulquim (antiga Vurno Dev): apresentação da marca, do que a empresa desenvolve e canal de contato.

Publicado em: **https://vulquim.com.br** (via GitHub Pages, repositório `vulquim.github.io`)

## O que tem aqui

Site estático simples — sem build, sem framework, sem dependências. Um único `index.html` com todo o CSS e o JavaScript embutidos, mais os arquivos de mídia usados por ele.

| Arquivo | O que é |
|---|---|
| `index.html` | A página inteira: HTML, CSS (dentro de `<style>`) e JS (dentro de `<script>`) |
| `vulquim-logo-white.png` | Logo (símbolo + "VULQUIM" + tagline) em branco, fundo transparente — usada no cabeçalho e no rodapé, sobre o fundo escuro do site |
| `vulquim-asset-3.png` | Ilustração da chama, usada em destaque na home |
| `vulquim-asset-4.mp4` | Vídeo "a marca em movimento", exibido no player que abre a partir da home |
| `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png` | Conjunto de ícones do site (aba do navegador, atalho no celular, etc.) |
| `site.webmanifest` | Metadados do ícone/tema para quando o site é adicionado à tela inicial de um celular |
| `CNAME` | Arquivo que o GitHub Pages usa pra saber que o domínio próprio é `vulquim.com.br` — não apague |

## Como ver o site rodando no seu computador

Não precisa instalar nada além do Python (já vem no Windows/Mac/Linux na maioria dos casos). Dentro dessa pasta, no terminal:

```
python -m http.server 8000
```

Depois abra `http://localhost:8000` no navegador. `Ctrl+C` no terminal pra parar.

## Como publicar uma alteração

O site é servido pelo GitHub Pages a partir do repositório `vulquim.github.io`. Qualquer mudança só aparece no ar depois de duas coisas:

1. Editar os arquivos aqui (nessa pasta).
2. Enviar (`commit` + `push`) essas mudanças pro repositório `vulquim.github.io` no GitHub.

Sem o passo 2, a mudança fica só na sua máquina — o site publicado continua com a versão antiga.

## Identidade visual

Os arquivos de marca (vetores do símbolo em cada cor, manual da marca em PDF) ficam na pasta junto com este README. Antes de trocar cores, logo ou tipografia no `index.html`, confira o `Manual_da_Marca_Vulquim.pdf`.

## Pendências conhecidas

- O site usa fonte genérica do sistema (`Segoe UI`/`Arial`) no CSS — o manual de marca define League Spartan/Sora + Inter, ainda não aplicadas.
- Falta uma tag `og:image` no `<head>` — sem ela, links do site compartilhados no WhatsApp/redes não mostram uma imagem de prévia.

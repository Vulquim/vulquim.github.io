param(
    [ValidatePattern('^[a-z0-9]+(-[a-z0-9]+)*$')]
    [string] $ProjectName = 'site-vulquim',
    [switch] $SomentePreparar
)

$ErrorActionPreference = 'Stop'
$publicFiles = @(
    '_headers'
    'index.html'
    'site-institucional.css'
    'boas-praticas/index.html'
    'mapa-do-site/index.html'
    'reporte/index.html'
    'lgpd/index.html'
    'termos-de-uso/index.html'
    'privacidade/index.html'
    'sitemap.xml'
    'robots.txt'
    'brand.css'
    'brand.js'
    'projetos.css'
    'site-contact.css'
    'site-contact.js'
    'site-interactions.js'
    'site-language.js'
    'site.webmanifest'
    'android-chrome-192x192.png'
    'android-chrome-512x512.png'
    'apple-touch-icon.png'
    'favicon.ico'
    'favicon.svg'
    'favicon-16x16.png'
    'favicon-32x32.png'
    'favicon-48x48.png'
    'favicon-180x180.png'
    'favicon-192x192.png'
    'favicon-512x512.png'
    'vulquim-assinatura.webp'
    'vulquim-asset-3-cutout-final.png'
    'vulquim-asset-4.mp4'
    'HandOS/index.html'
    'HandOS/handos-badge.png'
    'Kerva/index.html'
    'Kerva/kerva-grafismo.svg'
    'Kerva/kerva-talha-inline.svg'
    'Kerva/kerva-talha.svg'
    'Kerva/kerva-wordmark.svg'
    'vulquim-wordmark.png'
    'Sonetom/index.html'
    'Sonetom/sonetom.css'
    'Sonetom/sonetom.svg'
    'Sonetom/demo/index.html'
    'Sonetom/demo/favicon.svg'
    'Sonetom/demo/LICENSE.txt'
)

$demoAssetsRoot = Join-Path $PSScriptRoot 'Sonetom/demo/assets'
foreach ($asset in Get-ChildItem -LiteralPath $demoAssetsRoot -File) {
    if ($asset.Name -notmatch '^[A-Za-z0-9_-]+\.(css|js|png|wav)$') {
        throw "Arquivo inesperado na degustacao: $($asset.Name)"
    }
    $publicFiles += "Sonetom/demo/assets/$($asset.Name)"
}

foreach ($file in $publicFiles) {
    $source = Get-Item -LiteralPath (Join-Path $PSScriptRoot $file)
    if ($source.Length -gt 25MB) {
        throw "Arquivo acima do limite do Cloudflare Pages: $file"
    }
}

$dist = Join-Path $PSScriptRoot 'dist'
if (Test-Path -LiteralPath $dist) {
    $existing = Get-Item -LiteralPath $dist -Force
    if ($existing.FullName -ne $dist -or
        ($existing.Attributes -band [IO.FileAttributes]::ReparsePoint)) {
        throw "O caminho de dist precisa ser uma pasta local do projeto."
    }
    Remove-Item -LiteralPath $dist -Recurse -Force
}

foreach ($file in $publicFiles) {
    $destination = Join-Path $dist $file
    $null = New-Item -ItemType Directory -Force -Path (Split-Path -Parent $destination)
    Copy-Item -LiteralPath (Join-Path $PSScriptRoot $file) -Destination $destination
}

Write-Host "$($publicFiles.Count) arquivos publicos preparados em $dist"
if ($SomentePreparar) {
    return
}

Push-Location -LiteralPath $PSScriptRoot
try {
    npx.cmd --yes wrangler@4 pages deploy $dist --project-name $ProjectName --branch main
    if ($LASTEXITCODE -ne 0) {
        throw "Falha no deploy do Cloudflare Pages (codigo $LASTEXITCODE)."
    }
}
finally {
    Pop-Location
}

# 🚀 Otimização do Deploy - TCCs BCC 2025

## 📊 Situação Atual
- **Total de arquivos PDF:** 125
- **Tamanho total:** 365 MB
- **Problema:** Deploy lento com `gh-pages`

## ✅ Melhorias Aplicadas

### 1. Configuração do Git
```bash
git config http.postBuffer 524288000  # Buffer de 500MB
```

### 2. Otimizações no `vite.config.js`
- Plugin automático para criar `.nojekyll`
- Chunking otimizado para vendor
- Warning limit aumentado

### 3. Script de Deploy Melhorado
```json
"deploy": "gh-pages -d dist --dotfiles"
```

## 🔄 Alternativas para Deploy Mais Rápido

### Opção 1: GitHub Releases + GitHub Pages (RECOMENDADO)

**Vantagens:**
- PDFs hospedados no GitHub Releases (sem limite de tamanho)
- GitHub Pages só com HTML/CSS/JS (deploy rápido)
- URLs permanentes e estáveis
- Sem custo adicional

**Como implementar:**

1. **Mover PDFs para Releases:**
```bash
# Criar release com PDFs
gh release create v1.0.0 public/files/**/*.pdf --title "TCCs 2022-2025" --notes "Monografias e apresentações"
```

2. **Atualizar URLs no código:**
```javascript
// Em src/utils/urls.js
export function getTccFileURL(tipo, arquivo) {
  const baseURL = 'https://github.com/dco-unesp-bauru/tcc-bcc-2025/releases/download/v1.0.0';
  return `${baseURL}/${arquivo}`;
}
```

3. **Deploy fica muito mais rápido:**
   - Sem PDFs: ~1-2 MB
   - Tempo: 30-60 segundos

### Opção 2: Git LFS (Large File Storage)

**Vantagens:**
- PDFs versionados com Git
- Deploy mais rápido
- 1 GB grátis no GitHub

**Como implementar:**
```bash
# Instalar Git LFS
git lfs install

# Configurar para rastrear PDFs
git lfs track "public/files/**/*.pdf"
git add .gitattributes
git commit -m "Adiciona Git LFS para PDFs"

# Migrar PDFs existentes
git lfs migrate import --include="public/files/**/*.pdf"
```

### Opção 3: CDN Externo (Firebase Storage, AWS S3, etc)

**Vantagens:**
- Extremamente rápido
- Escalável
- Recursos gratuitos disponíveis

**Desvantagens:**
- Requer configuração externa
- Possível necessidade de autenticação

## ⚡ Dicas para Deploy Atual

Enquanto o deploy roda (pode demorar 10-20 minutos):

1. **Não interrompa o processo**
2. **Monitore com:** 
   ```bash
   Get-Process node | Where-Object {$_.CPU -gt 0}
   ```
3. **Se travar por mais de 30 minutos, cancele e tente:**
   ```bash
   npm run deploy -- --no-push
   git push origin gh-pages --force
   ```

## 📝 Próximos Passos Recomendados

1. ✅ Deixar o deploy atual terminar
2. 🔄 Migrar para GitHub Releases (Opção 1)
3. 📦 Atualizar script de build para não incluir PDFs no dist
4. 🚀 Deploy futuro será 10x mais rápido!

## 🛠️ Script Helper para Migração

```bash
# migrate-to-releases.sh
#!/bin/bash

# 1. Criar pasta temporária com PDFs
mkdir -p temp-pdfs
cp -r public/files temp-pdfs/

# 2. Criar release
gh release create v1.0.0 temp-pdfs/files/**/*.pdf \
  --title "TCCs BCC 2022-2025" \
  --notes "Monografias e apresentações dos trabalhos de conclusão de curso"

# 3. Remover PDFs do repositório principal
git rm -r public/files/**/*.pdf
git commit -m "Move PDFs para GitHub Releases"

# 4. Limpar
rm -rf temp-pdfs

echo "✅ PDFs migrados com sucesso!"
echo "🔗 Atualize src/utils/urls.js com as novas URLs"
```

## 🎯 Resultado Esperado

**Antes:**
- Deploy: 15-30 minutos
- Tamanho: 365 MB
- Lentidão no git clone

**Depois (com Releases):**
- Deploy: 30-60 segundos
- Tamanho: ~2 MB
- Git clone instantâneo
- PDFs acessíveis e versionados

---

**Nota:** Este documento foi criado para documentar as otimizações e fornecer um caminho claro para melhorias futuras.

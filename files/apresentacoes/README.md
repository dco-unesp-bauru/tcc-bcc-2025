# Pasta de Apresentações

Esta pasta contém os arquivos de apresentação dos TCCs dos cursos de BCC e BSI 2024.

## Estrutura de Arquivos

Os arquivos devem seguir o padrão de nomenclatura:
- `{nome_autor}_apresentacao_{ano}.pdf`
- Exemplo: `alex_cassinelli_apresentacao_2025.pdf`

## Como Adicionar uma Nova Apresentação

1. Faça o upload do arquivo PDF para esta pasta
2. Atualize o arquivo `src/data/tccs.js` com o caminho correto:
   ```javascript
   {
     label: 'Apresentação',
     url: '/files/apresentacoes/nome_do_arquivo.pdf',
     tipo: 'apresentacao'
   }
   ```

## Formatos Aceitos

- PDF (recomendado)
- PowerPoint (PPTX)
- Slides do Google (exportado como PDF)

## Tamanho Máximo

- Recomendado: até 10MB por arquivo
- Para arquivos maiores, considere compressão ou hospedagem externa
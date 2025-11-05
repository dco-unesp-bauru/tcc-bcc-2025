# Pasta de Monografias

Esta pasta contém os arquivos das monografias dos TCCs dos cursos de BCC e BSI 2024.

## Estrutura de Arquivos

Os arquivos devem seguir o padrão de nomenclatura:
- `{nome_autor}_{ano}.pdf`
- Exemplo: `alex_cassinelli_2025.pdf`

## Como Adicionar uma Nova Monografia

1. Faça o upload do arquivo PDF para esta pasta
2. Atualize o arquivo `src/data/tccs.js` com o caminho correto:
   ```javascript
   {
     label: 'Monografia',
     url: '/files/monografias/nome_do_arquivo.pdf',
     tipo: 'monografia'
   }
   ```

## Formatos Aceitos

- PDF (obrigatório)
- Todos os arquivos devem estar em formato PDF para garantir compatibilidade

## Diretrizes

- Certifique-se de que o PDF está otimizado para web
- Verifique se o arquivo não contém informações confidenciais
- O texto deve ser pesquisável (não apenas imagem)

## Tamanho Máximo

- Recomendado: até 15MB por arquivo
- Para arquivos maiores, considere compressão sem perda de qualidade
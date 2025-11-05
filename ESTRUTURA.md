# Estrutura do Projeto - TCCs BCC e BSI

## 📁 Estrutura de Pastas

```
src/
├── components/           # Componentes Vue reutilizáveis
│   ├── Header.vue       # Cabeçalho com logos UNESP e BCC
│   ├── TccsList.vue     # Lista de TCCs com busca
│   ├── TccItem.vue      # Item individual de TCC
│   └── TccLink.vue      # Link para arquivos do TCC
├── data/
│   └── tccs.js          # Dados dos TCCs de BCC e BSI (centralizados)
├── assets/              # CSS e recursos estáticos
└── App.vue              # Componente principal

public/
└── files/               # Arquivos públicos dos TCCs
    ├── apresentacoes/   # Slides de apresentação
    └── monografias/     # Arquivos PDF das monografias
```

## 🧩 Componentes

### Header.vue
- Exibe logos da UNESP e BCC
- Título e subtítulo do projeto
- Responsivo para mobile e desktop

### TccsList.vue
- Lista todos os TCCs
- Barra de busca funcional
- Contador de resultados
- Controle de expansão/colapso

### TccItem.vue
- Exibe informações de um TCC individual
- Expansível (accordion)
- Mostra autor, orientador, descrição, palavras-chave
- Data de defesa formatada

### TccLink.vue
- Links para arquivos relacionados ao TCC
- Diferentes estilos por tipo (monografia, apresentação, código, etc.)
- Ícones e cores específicas
- Indicador para links externos

## 📊 Dados (tccs.js)

### Estrutura de um TCC
```javascript
{
  id: number,                    // ID único
  titulo: string,               // Título do trabalho
  autor: string,                // Nome do autor
  orientador: string,           // Nome do orientador
  curso: string,                // 'BCC' ou 'BSI'
  descricao: string,            // Descrição detalhada
  palavrasChave: string[],      // Array de palavras-chave
  dataDefesa: string,           // Data no formato 'YYYY-MM-DD'
  links: [                      // Array de links (máximo 2)
    {
      label: string,            // 'Monografia' ou 'Apresentação'
      url: string               // URL do arquivo PDF
    }
  ]
}
```

### Links Disponíveis
- **Monografia**: Arquivo PDF da monografia
- **Apresentação**: Slides da apresentação em PDF

## 🔍 Funcionalidades de Busca

A busca funciona nos seguintes campos:
- Título do trabalho
- Nome do autor
- Nome do orientador
- Descrição
- Palavras-chave

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Desktop**: >768px - Layout completo
- **Tablet**: 768px-992px - Layout adaptado
- **Mobile**: <768px - Layout vertical
- **Mobile pequeno**: <480px - Layout compacto

### 🎨 Cores dos Links

- **Monografia**: Verde (#2e7d32) com ícone 📄
- **Apresentação**: Laranja (#f57c00) com ícone 📊

## 📝 Como Adicionar um Novo TCC

1. **Adicione os dados em `src/data/tccs.js`**:
   ```javascript
   {
     id: 7, // Próximo ID disponível
     titulo: 'Título do Trabalho',
     autor: 'Nome do Autor',
     orientador: 'Prof. Dr. Nome do Orientador',
     descricao: 'Descrição completa...',
     palavrasChave: ['palavra1', 'palavra2'],
     dataDefesa: '2024-12-20',
     links: [
       {
         label: 'Monografia',
         url: '/files/monografias/arquivo.pdf'
       },
       {
         label: 'Apresentação',
         url: '/files/apresentacoes/arquivo_apresentacao.pdf'
       }
     ]
   }
   ```

2. **Faça upload dos arquivos**:
   - Monografias: `public/files/monografias/`
   - Apresentações: `public/files/apresentacoes/`

3. **Nomenclatura de arquivos**:
   - `nome_autor_ano.pdf` para monografias
   - `nome_autor_apresentacao_ano.pdf` para apresentações

## 🚀 Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🔧 Tecnologias Utilizadas

- **Vue 3**: Framework JavaScript
- **Vite**: Build tool
- **CSS3**: Estilização responsiva
- **ES6+**: JavaScript moderno
<template>
  <div class="tccs-container">
    <div class="tccs-header">
      <h2>Trabalhos Disponíveis ({{ tccsFiltrados.length }})</h2>
      <div class="search-container">
        <input 
          v-model="searchTerm" 
          type="text" 
          placeholder="Buscar por título, autor, curso (BCC/BSI) ou palavra-chave..."
          class="search-input"
        >
        <button v-if="searchTerm" @click="clearSearch" class="clear-search">✕</button>
      </div>
      <p v-if="!searchTerm" class="year-info">Exibindo trabalhos de {{ anoExibicao }}. Use a busca para ver trabalhos de outros anos.</p>
    </div>
    
    <div class="tccs-list">
      <div v-if="tccsFiltrados.length === 0" class="no-results">
        <p>Nenhum trabalho encontrado com os critérios de busca.</p>
      </div>
      
      <TccItem 
        v-for="tcc in tccsFiltrados" 
        :key="tcc.id"
        :tcc="tcc"
        :is-open="openItems.includes(tcc.id)"
        @toggle="toggleItem(tcc.id)"
      />
    </div>
    
    <div v-if="tccsFiltrados.length > 0" class="tccs-footer">
      <p class="results-count">
        Exibindo {{ tccsFiltrados.length }} de {{ totalTccs }} trabalhos
      </p>
    </div>
  </div>
</template>

<script>
import TccItem from './TccItem.vue';
import { getAnoDefesa, getAnoMaisRecente } from '../data/tccs.js';

export default {
  name: 'TccsList',
  components: {
    TccItem
  },
  props: {
    tccs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      openItems: [],
      searchTerm: '',
      anoAtual: 2025 // Ano fixo para exibição inicial - apenas 2025
    };
  },
  computed: {
    anoExibicao() {
      // Sempre usar 2025 como ano de exibição
      return 2025;
    },
    tccsFiltrados() {
      // Se não há busca, mostrar apenas TCCs de 2025
      if (!this.searchTerm) {
        return this.tccs.filter(tcc => getAnoDefesa(tcc.dataDefesa) === 2025);
      }
      
      // Se há busca, buscar em todos os TCCs
      const term = this.searchTerm.toLowerCase().trim();
      
      return this.tccs.filter(tcc => {
        // Normalizar nome do curso para busca
        const cursoNormalizado = tcc.curso.toLowerCase() === 'bcc' ? 
          'bcc bacharelado ciência computação' : 
          'bsi bacharelado sistemas informação';
        
        return (
          tcc.titulo.toLowerCase().includes(term) ||
          tcc.autor.toLowerCase().includes(term) ||
          tcc.curso.toLowerCase().includes(term) ||
          cursoNormalizado.includes(term) ||
          tcc.descricao.toLowerCase().includes(term) ||
          (tcc.palavrasChave && tcc.palavrasChave.some(palavra => 
            palavra.toLowerCase().includes(term)
          ))
        );
      });
    },
    totalTccs() {
      return this.tccs.length;
    }
  },
  methods: {
    toggleItem(id) {
      const index = this.openItems.indexOf(id);
      if (index > -1) {
        this.openItems.splice(index, 1);
      } else {
        this.openItems.push(id);
      }
    },
    clearSearch() {
      this.searchTerm = '';
    },
    expandAll() {
      this.openItems = this.tccsFiltrados.map(tcc => tcc.id);
    },
    collapseAll() {
      this.openItems = [];
    }
  }
};
</script>

<style scoped>
.tccs-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.tccs-header {
  margin-bottom: 2rem;
  text-align: center;
}

.tccs-header h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.year-info {
  margin-top: 1rem;
  color: #1565c0;
  font-size: 0.9rem;
  font-style: italic;
}

.search-container {
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.search-input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #d0dae3;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f8fafb;
}

.search-input:focus {
  border-color: #1565c0;
  box-shadow: 0 0 0 3px rgba(21, 101, 192, 0.1);
  background: white;
}

.clear-search {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: #d0dae3;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #666;
  transition: all 0.3s ease;
}

.clear-search:hover {
  background: #1565c0;
  color: white;
}

.tccs-list {
  margin-bottom: 2rem;
}

.no-results {
  text-align: center;
  padding: 3rem 1rem;
  background: #f8fafb;
  border-radius: 8px;
  border: 1px solid #d0dae3;
}

.no-results p {
  color: #6c757d;
  font-size: 1.1rem;
  margin: 0;
}

.tccs-footer {
  text-align: center;
  padding: 1rem;
  background: #f0f4f7;
  border-radius: 8px;
  border: 1px solid #d0dae3;
}

.results-count {
  color: #6c757d;
  font-size: 0.9rem;
  margin: 0;
  font-style: italic;
}

/* Responsividade */
@media (max-width: 768px) {
  .tccs-container {
    margin: 1.5rem auto;
    padding: 0 0.8rem;
  }
  
  .tccs-header h2 {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }
  
  .search-input {
    padding: 0.7rem 0.9rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .tccs-container {
    margin: 1rem auto;
    padding: 0 0.5rem;
  }
  
  .tccs-header h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  
  .search-input {
    padding: 0.6rem 0.8rem;
    font-size: 0.85rem;
    border-radius: 20px;
  }
  
  .clear-search {
    right: 8px;
    width: 20px;
    height: 20px;
    font-size: 0.7rem;
  }
}
</style>
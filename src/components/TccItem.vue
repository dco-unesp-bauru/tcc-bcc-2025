<template>
  <div class="tcc-item">
    <div class="tcc-header" @click="toggle">
      <h2>{{ tcc.titulo }}</h2>
      <span class="toggle-icon" :class="{ 'rotated': isOpen }">▼</span>
    </div>
    
    <transition name="slide-fade">
      <div v-show="isOpen" class="tcc-content">
        <div class="tcc-info">
          <div class="info-row">
            <strong>Curso:</strong> {{ getCursoCompleto(tcc.curso) }}
          </div>
          <div class="info-row">
            <strong>Autor:</strong> {{ tcc.autor }}
          </div>
          <div class="info-row">
            <strong>Orientador:</strong> {{ tcc.orientador }}
          </div>
          <div class="info-row" v-if="tcc.dataDefesa">
            <strong>Data de Defesa:</strong> {{ formatarData(tcc.dataDefesa) }}
          </div>
        </div>
        
        <div class="tcc-description">
          <p>{{ tcc.descricao }}</p>
        </div>
        
        <div class="keywords" v-if="tcc.palavrasChave && tcc.palavrasChave.length">
          <strong>Palavras-chave:</strong>
          <div class="keywords-list">
            <span v-for="palavra in tcc.palavrasChave" :key="palavra" class="keyword-tag">
              {{ palavra }}
            </span>
          </div>
        </div>
        
        <div class="tcc-links" v-if="tcc.links && tcc.links.length">
          <strong>Recursos disponíveis:</strong>
          <div class="links-grid">
            <TccLink 
              v-for="link in tcc.links" 
              :key="link.label" 
              :link="link" 
            />
          </div>
          <div v-if="hasIndisponivel" class="info-message">
            <span>Os arquivos serão disponibilizados após a apresentação do TCC</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import TccLink from './TccLink.vue';

export default {
  name: 'TccItem',
  components: {
    TccLink
  },
  props: {
    tcc: {
      type: Object,
      required: true
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasIndisponivel() {
      return this.tcc.links && this.tcc.links.some(link => !link.url);
    }
  },
  methods: {
    toggle() {
      this.$emit('toggle');
    },
    formatarData(data) {
      const date = new Date(data);
      return date.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
    getCursoCompleto(sigla) {
      const cursos = {
        'BCC': 'Bacharelado em Ciência da Computação',
        'BSI': 'Bacharelado em Sistemas de Informação'
      };
      return cursos[sigla] || sigla;
    }
  }
};
</script>

<style scoped>
.tcc-item {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.2rem;
  overflow: hidden;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border: 1px solid #e1e8ed;
  transition: box-shadow 0.3s ease;
}

.tcc-item:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}

.tcc-header {
  cursor: pointer;
  padding: 1.2rem 1.5rem;
  background: linear-gradient(135deg, #f5f8fa 0%, #e8eff5 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d0dae3;
  transition: background-color 0.3s ease;
}

.tcc-header:hover {
  background: linear-gradient(135deg, #edf2f7 0%, #dde7f0 100%);
}

.tcc-header h2 {
  font-size: 1.1rem;
  margin: 0;
  flex: 1;
  color: #2c3e50;
  font-weight: 600;
  line-height: 1.4;
  padding-right: 1rem;
}

.toggle-icon {
  color: #1565c0;
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}

.toggle-icon.rotated {
  transform: rotate(180deg);
}

.tcc-content {
  padding: 1.5rem;
  background: #f8fafb;
  color: #2c3e50;
  line-height: 1.6;
  overflow: hidden;
}

.tcc-info {
  margin-bottom: 1.2rem;
}

.info-row {
  margin-bottom: 0.6rem;
}

.info-row strong {
  color: #34495e;
  font-weight: 600;
  min-width: 120px;
  display: inline-block;
}

.tcc-description {
  margin-bottom: 1.5rem;
}

.tcc-description p {
  margin: 0;
  text-align: justify;
  line-height: 1.7;
}

.keywords {
  margin-bottom: 1.5rem;
}

.keywords strong {
  color: #34495e;
  font-weight: 600;
  display: block;
  margin-bottom: 0.8rem;
}

.keywords-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.keyword-tag {
  background: #e3f2fd;
  color: #1565c0;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #bbdefb;
  transition: all 0.3s ease;
}

.keyword-tag:hover {
  background: #bbdefb;
  transform: translateY(-1px);
}



.tcc-links strong {
  color: #34495e;
  font-weight: 600;
  display: block;
  margin-bottom: 1rem;
}

.links-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.info-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.8rem 1rem;
  background: #fff3cd;
  border: 1px solid #e9bf42;
  border-radius: 8px;
  color: #856404;
  font-size: 0.9rem;
  line-height: 1.4;
}

.info-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

/* Responsividade */
@media (max-width: 768px) {
  .tcc-header {
    padding: 1rem;
  }
  
  .tcc-header h2 {
    font-size: 1rem;
    padding-right: 0.5rem;
  }
  
  .tcc-content {
    padding: 1.2rem;
  }
  
  .info-row strong {
    min-width: 100px;
  }
}

@media (max-width: 480px) {
  .tcc-header {
    padding: 0.8rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .tcc-header h2 {
    font-size: 0.9rem;
    padding-right: 0;
  }
  
  .toggle-icon {
    align-self: flex-end;
  }
  
  .tcc-content {
    padding: 1rem;
  }
  
  .info-row {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  
  .info-row strong {
    min-width: auto;
  }
  
  .links-grid {
    flex-direction: column;
  }
}

/* Animações de transição */
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
  max-height: 0;
}

.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
  max-height: 0;
}

.slide-fade-enter-to, .slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
  max-height: 1000px;
}
</style>
<template>
  <div class="tcc-link-wrapper">
    <a 
      v-if="link.url"
      :href="link.url" 
      target="_blank"
      class="tcc-link"
      :aria-label="`${link.label} do trabalho`"
    >
      <span class="link-text">{{ link.label }}</span>
    </a>
    <button 
      v-else
      class="tcc-link tcc-link-disabled"
      disabled
      :title="mensagemIndisponivel"
    >
      <span class="link-text">{{ link.label }}</span>
      <span class="lock-icon">🔒</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TccLink',
  props: {
    link: {
      type: Object,
      required: true,
      validator(value) {
        return value.label !== undefined;
      }
    }
  },
  computed: {
    mensagemIndisponivel() {
      return 'Arquivo será disponibilizado após a apresentação do TCC';
    }
  }
};
</script>

<style scoped>
.tcc-link-wrapper {
  display: inline-block;
}

.tcc-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 15px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 1px solid #bbdefb;
  min-width: 120px;
  background: #e3f2fd;
  color: #1565c0;
  cursor: pointer;
}

.link-text {
  text-align: center;
}

.tcc-link:not(.tcc-link-disabled):hover {
  background: #1565c0;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(21, 101, 192, 0.3);
  border-color: #1565c0;
}

.tcc-link-disabled {
  background: #f5f5f5;
  color: #9e9e9e;
  border-color: #e0e0e0;
  cursor: not-allowed;
  opacity: 0.7;
}

.lock-icon {
  font-size: 0.85rem;
}

/* Responsividade */
@media (max-width: 480px) {
  .tcc-link {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
    min-width: 100px;
  }
  
  .lock-icon {
    font-size: 0.75rem;
  }
}
</style>
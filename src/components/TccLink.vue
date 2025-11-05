<template>
  <a 
    :href="link.url" 
    target="_blank"
    class="tcc-link"
    :aria-label="`${link.label} do trabalho`"
  >
    <span class="link-text">{{ link.label }}</span>
  </a>
</template>

<script>
export default {
  name: 'TccLink',
  props: {
    link: {
      type: Object,
      required: true,
      validator(value) {
        return value.label && value.url;
      }
    }
  }
};
</script>

<style scoped>
.tcc-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
}

.link-text {
  text-align: center;
}

.tcc-link:hover {
  background: #1565c0;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(21, 101, 192, 0.3);
  border-color: #1565c0;
}

/* Responsividade */
@media (max-width: 480px) {
  .tcc-link {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
    min-width: 100px;
  }
}
</style>
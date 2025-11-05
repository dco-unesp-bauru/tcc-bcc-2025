<template>
  <div>
    <Header
      titulo="TCCs do DCo"
      subtitulo="Trabalhos de Conclusão de Curso do Departamento de Computação - Unesp de Bauru (FC)"
    />
    <main>
      <TccsList :tccs="allTccs" />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import TccsList from './components/TccsList.vue';
import { allTccs } from './data/tccs.js';

export default {
  name: 'App',
  components: { 
    Header, 
    TccsList 
  },
  data() {
    return {
      allTccs
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

main {
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #f8fafb 0%, #e8f0f5 100%);
  min-height: calc(100vh - 200px);
}

/* Responsividade para o main */
@media (max-width: 768px) {
  main {
    padding: 1.5rem 0.8rem;
  }
}

@media (max-width: 480px) {
  main {
    padding: 1rem 0.5rem;
  }
}
</style>
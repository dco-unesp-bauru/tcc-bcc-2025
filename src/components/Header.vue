<template>
  <header class="header-bg">
    <div class="header-content">
      <!-- Título e subtítulo no topo -->
      <div class="text-center">
        <h1>{{ titulo }}</h1>
        <p>{{ subtitulo }}</p>
      </div>
      
      <!-- Todos os logos embaixo do título -->
      <div class="logos-bottom">
        <img 
          src="/logo-unesp.svg" 
          alt="UNESP - Universidade Estadual Paulista"
          class="logo-unesp"
        >
        <img 
          src="/logo-fc.jpg" 
          alt="Faculdade de Ciências"
          class="logo-faculdade"
        >
        <img 
          src="/logo-dco.gif" 
          alt="DCO - Departamento de Computação"
          class="logo-dco"
        >
        <img 
          src="/logo-bcc.png" 
          alt="BCC - Bacharelado em Ciência da Computação"
          class="logo-curso"
        >
        <img 
          src="/logo-bsi.png" 
          alt="BSI - Bacharelado em Sistemas de Informação"
          class="logo-curso"
        >
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['titulo', 'subtitulo']
}
</script>

<style scoped>
.header-bg {
  background: linear-gradient(135deg, #0c455f 0%, #0e5374 100%);
  color: white;
  padding: 2rem 1rem;
  box-sizing: border-box;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.header-content {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.text-center {
  text-align: center;
  width: 100%;
}

.logos-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  flex-wrap: wrap;
}

.logo-unesp,
.logo-faculdade,
.logo-dco,
.logo-curso {
  height: 80px;
  width: 160px;
  object-fit: contain;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  line-height: 1.2;
}

p {
  font-size: 1.1rem;
  opacity: 0.95;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
}

/* Responsividade */
@media (max-width: 992px) {
  .header-content {
    gap: 1.5rem;
  }
  
  .logo-unesp,
  .logo-faculdade,
  .logo-dco,
  .logo-curso {
    height: 60px;
    width: 120px;
  }
  
  .logos-bottom {
    gap: 1.5rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  p {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .header-bg {
    padding: 1.5rem 1rem;
  }
  
  .header-content {
    gap: 1.2rem;
  }
  
  .logo-unesp,
  .logo-faculdade,
  .logo-dco,
  .logo-curso {
    height: 50px;
    width: 100px;
  }
  
  .logos-bottom {
    gap: 1rem;
  }
  
  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  
  p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .header-bg {
    padding: 1rem 0.5rem;
  }
  
  .header-content {
    gap: 1rem;
  }
  
  .logo-unesp,
  .logo-faculdade,
  .logo-dco,
  .logo-curso {
    height: 40px;
    width: 80px;
    padding: 6px;
  }
  
  .logos-bottom {
    gap: 0.8rem;
    flex-direction: column;
  }
  
  h1 {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }
  
  p {
    font-size: 0.85rem;
    line-height: 1.3;
  }
}
</style>

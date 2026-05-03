<script setup lang="ts">
const audiences = [
  'Lojas de Bairro',
  'Restaurantes',
  'Delivery Local',
  'Autônomos',
  'Prestadores',
  'Artesãos',
  'Revendedores',
  'Pequeno Comércio'
];
</script>

<template>
  <div class="audience-wrapper">
    <h2 class="section-title">Feito para quem vende de verdade</h2>
    <p class="section-subtitle">Se você já vende pelo WhatsApp, a Linkize organiza e profissionaliza seu negócio.</p>
    
    <div class="pills-container">
      <div v-for="item in audiences" :key="item" class="pill">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.audience-wrapper {
  width: 100%;
  padding: 5rem 0;
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-main);
}

.section-subtitle {
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  font-size: 0.95rem;
}

.pills-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.pill {
  background-color: #f1f5f9;
  color: var(--text-main);
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.pill:hover {
  background-color: #e2e8f0;
  transform: translateY(-2px);
  border-color: #cbd5e1;
}
</style>

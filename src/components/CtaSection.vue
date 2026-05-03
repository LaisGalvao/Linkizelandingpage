<script setup lang="ts">
defineEmits(['click-cta'])
</script>

<template>
  <div class="cta-section">
    <div class="cta-content">
      <h2>Comece a vender melhor hoje</h2>
      <p>Cadastre seu primeiro produto em menos de 2 minutos. Sem burocracia, sem mensalidade inicial.</p>
      <button class="btn btn-cta" @click="$emit('click-cta')">Criar minha conta grátis</button>
    </div>
  </div>
</template>

<style scoped>
.cta-section {
  width: 100%;
  background-color: var(--primary);
  padding: 5rem 1.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
}

.cta-content {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-content h2 {
  color: white;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.btn-cta {
  background-color: white;
  color: var(--primary);
  padding: 1rem 2rem;
  font-size: 1.05rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  background-color: #f8fafc;
}

@media (max-width: 600px) {
  .cta-content h2 {
    font-size: 1.5rem;
  }
  .btn-cta {
    width: 100%;
  }
}
</style>

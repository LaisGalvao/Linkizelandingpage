<script setup lang="ts">
import { UserPlus, PlusCircle, Send } from 'lucide-vue-next'
</script>

<template>
  <div class="how-wrapper">
    <h2 class="section-title">Simples como mandar mensagem</h2>
    <p class="section-subtitle">Venda mais com menos esforço em 3 passos fáceis.</p>
    
    <div class="steps-grid">
      <div class="step-card">
        <div class="step-number">1</div>
        <div class="icon-wrapper"><UserPlus class="icon" /></div>
        <h3>Crie sua conta</h3>
        <p>Cadastre-se rapidamente e configure as informações da sua loja.</p>
      </div>

      <div class="step-card">
        <div class="step-number">2</div>
        <div class="icon-wrapper"><PlusCircle class="icon" /></div>
        <h3>Adicione produtos</h3>
        <p>Inclua fotos, descrições e preços dos produtos que deseja vender.</p>
      </div>

      <div class="step-card">
        <div class="step-number">3</div>
        <div class="icon-wrapper"><Send class="icon" /></div>
        <h3>Compartilhe e venda</h3>
        <p>Envie o link do seu catálogo para seus clientes e receba pedidos no WhatsApp.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.how-wrapper {
  width: 100%;
  padding: 5rem 0;
  text-align: center;
  background-color: var(--bg-color);
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-main);
}

.section-subtitle {
  color: var(--text-muted);
  margin-bottom: 4rem;
  font-size: 1.1rem;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
}

.step-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2.5rem 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.step-number {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary);
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 4px 10px rgba(34, 197, 94, 0.3);
}

.icon-wrapper {
  margin-bottom: 1.5rem;
  color: var(--primary);
}

.icon {
  width: 32px;
  height: 32px;
}

.step-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-main);
}

.step-card p {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>

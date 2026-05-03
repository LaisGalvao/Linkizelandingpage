<script setup lang="ts">
import { Store, MessageCircle, QrCode, TrendingUp, Zap, Check } from 'lucide-vue-next'
</script>

<template>
  <div class="features-wrapper">
    <h2 class="section-title">Tudo que você precisa para vender</h2>
    
    <div class="features-grid">
      <div class="feature-card">
        <div class="icon-wrapper"><Store class="icon" /></div>
        <h3>Catálogo Inteligente</h3>
        <p>Cadastre produtos pelo WhatsApp ou painel web. Organize, atualize preços e compartilhe por link.</p>
      </div>

      <div class="feature-card">
        <div class="icon-wrapper"><MessageCircle class="icon" /></div>
        <h3>Pedidos Rápidos</h3>
        <p>Cliente clica, escolhe e vai direto pro WhatsApp. Você recebe o pedido pronto.</p>
      </div>

      <div class="feature-card">
        <div class="icon-wrapper"><QrCode class="icon" /></div>
        <h3>QR Codes</h3>
        <p>Imprima e cole na loja, cardápio ou delivery. Cliente escaneia e acessa seu catálogo.</p>
      </div>

      <div class="feature-card">
        <div class="icon-wrapper"><TrendingUp class="icon" /></div>
        <h3>Métricas Claras</h3>
        <p>Veja cliques, pedidos e produtos mais vistos. Dados simples pra decidir melhor.</p>
      </div>

      <div class="feature-card">
        <div class="icon-wrapper"><Zap class="icon" /></div>
        <h3>Automação</h3>
        <p>Respostas automáticas, fluxos de venda e IA que ajuda você a vender mais.</p>
      </div>

      <div class="feature-card">
        <div class="icon-wrapper"><Check class="icon" /></div>
        <h3>Gestão Simples</h3>
        <p>Controle tudo num painel web ou pelo próprio WhatsApp. Do jeito que você preferir.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.features-wrapper {
  width: 100%;
  padding: 4rem 0;
  background-color: var(--bg-color);
}

.section-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  color: var(--text-main);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
}

.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  border-color: #cbd5e1;
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(34, 197, 94, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.icon {
  width: 24px;
  height: 24px;
}

.feature-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-main);
}

.feature-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 992px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>

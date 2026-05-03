<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { ref } from 'vue'

const emit = defineEmits(['open-modal'])

const isAnnual = ref(true)

const plans = [
  {
    name: 'Básico',
    priceMonthly: 'Grátis',
    priceAnnual: 'Grátis',
    description: 'Para quem está começando a vender agora.',
    features: ['Até 50 produtos', 'Catálogo online simples', 'Recebimento de pedidos no WhatsApp'],
    buttonText: 'Começar grátis',
    isPopular: false
  },
  {
    name: 'Profissional',
    priceMonthly: 'R$ 49/mês',
    priceAnnual: 'R$ 39/mês',
    description: 'O ideal para negócios em crescimento.',
    features: ['Produtos ilimitados', 'Catálogo personalizável', 'Métricas básicas de acesso', 'QR Codes para impressão'],
    buttonText: 'Assinar Profissional',
    isPopular: true
  },
  {
    name: 'Empresarial',
    priceMonthly: 'R$ 99/mês',
    priceAnnual: 'R$ 79/mês',
    description: 'Para grandes volumes de vendas e automação.',
    features: ['Tudo do plano Profissional', 'Automação de mensagens', 'Integração com IA (Beta)', 'Suporte prioritário'],
    buttonText: 'Falar com vendas',
    isPopular: false
  }
]
</script>

<template>
  <div class="pricing-wrapper">
    <h2 class="section-title">Planos que cabem no seu bolso</h2>
    
    <div class="toggle-container">
      <span :class="{'active': !isAnnual}">Mensal</span>
      <button class="toggle-btn" :class="{'toggled': isAnnual}" @click="isAnnual = !isAnnual">
        <div class="toggle-knob"></div>
      </button>
      <span :class="{'active': isAnnual}">Anual <span class="badge">20% Off</span></span>
    </div>
    
    <div class="pricing-grid">
      <div v-for="plan in plans" :key="plan.name" class="pricing-card" :class="{'popular': plan.isPopular}">
        <div v-if="plan.isPopular" class="popular-badge">Mais escolhido</div>
        
        <h3>{{ plan.name }}</h3>
        <p class="plan-desc">{{ plan.description }}</p>
        
        <div class="price">
          <h2>{{ isAnnual ? plan.priceAnnual : plan.priceMonthly }}</h2>
        </div>
        
        <ul class="features-list">
          <li v-for="feature in plan.features" :key="feature">
            <Check class="check-icon" /> {{ feature }}
          </li>
        </ul>
        
        <button class="btn" :class="plan.isPopular ? 'btn-primary' : 'btn-outline'" @click="emit('open-modal')">
          {{ plan.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing-wrapper {
  width: 100%;
  padding: 5rem 0;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--text-main);
}

.toggle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  font-weight: 500;
  color: var(--text-muted);
}

.toggle-container .active {
  color: var(--text-main);
}

.badge {
  background-color: rgba(34, 197, 94, 0.15);
  color: var(--primary);
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  margin-left: 0.5rem;
}

.toggle-btn {
  width: 50px;
  height: 26px;
  background-color: #cbd5e1;
  border-radius: 13px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.toggle-btn.toggled {
  background-color: var(--primary);
}

.toggle-knob {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.toggle-btn.toggled .toggle-knob {
  transform: translateX(24px);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.pricing-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
}

.pricing-card.popular {
  border: 2px solid var(--primary);
  transform: translateY(-8px);
  box-shadow: 0 12px 24px -8px rgba(34, 197, 94, 0.2);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.pricing-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.plan-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  min-height: 40px;
}

.price {
  margin-bottom: 2rem;
}

.price h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-main);
}

.features-list {
  list-style: none;
  margin-bottom: 2.5rem;
  flex-grow: 1;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--text-main);
  font-size: 0.95rem;
}

.check-icon {
  color: var(--primary);
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.pricing-card .btn {
  width: 100%;
}

@media (max-width: 992px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    gap: 3rem;
  }
  .pricing-card.popular {
    transform: translateY(0);
  }
  .pricing-card:hover {
    transform: translateY(-2px);
  }
}
</style>

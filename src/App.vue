<script setup lang="ts">
import { ref } from 'vue'
import FeatureList from './components/FeatureList.vue'
import TargetAudience from './components/TargetAudience.vue'
import HowItWorks from './components/HowItWorks.vue'
import PricingSection from './components/PricingSection.vue'
import FaqSection from './components/FaqSection.vue'
import CtaSection from './components/CtaSection.vue'
import LeadModal from './components/LeadModal.vue'
import { MessageSquare } from 'lucide-vue-next'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <main class="app-main">
    <div class="container">
      <header class="app-header animate-fade-in">
        <div class="logo">
          <div class="logo-icon-bg">
            <MessageSquare class="logo-icon" />
          </div>
          <span class="logo-text">Linkize</span>
        </div>
        <button class="btn btn-primary" @click="openModal">Começar grátis</button>
      </header>

      <div class="hero animate-fade-in delay-1">
        <h1 class="title">Venda pelo WhatsApp. Profissionalmente.</h1>
        <p class="subtitle">Transforme seu WhatsApp no principal canal de vendas. Catálogo organizado, pedidos fáceis, métricas reais. Sem complicação.</p>
        <div class="hero-actions">
          <button class="btn btn-primary hero-btn" @click="openModal">
            <MessageSquare class="btn-icon" :size="18" /> Começar agora
          </button>
          <button class="btn btn-outline hero-btn" @click="scrollToSection('how-it-works')">Ver como funciona</button>
        </div>
      </div>

      <FeatureList class="animate-fade-in delay-2" />
      <HowItWorks id="how-it-works" class="animate-fade-in delay-3" />
      <TargetAudience class="animate-fade-in delay-3" />
      <PricingSection id="pricing" class="animate-fade-in delay-3" @open-modal="openModal" />
      <FaqSection id="faq" class="animate-fade-in delay-3" />
    </div>

    <!-- CtaSection could also trigger scroll to pricing if its button is clicked. Let's pass an event or just do it inside. For simplicity, since it's a separate component, I can emit an event or just let it handle it. I'll emit an event. -->
    <CtaSection class="animate-fade-in delay-3" @click-cta="openModal" />

    <footer class="footer animate-fade-in delay-3">
      <a href="#faq" class="footer-link" @click.prevent="scrollToSection('faq')">Perguntas Frequentes</a>
      <p>&copy; 2026 Linkize. O Shopify do WhatsApp raiz brasileiro.</p>
    </footer>

    <LeadModal :isOpen="isModalOpen" @close="isModalOpen = false" />
  </main>
</template>

<style scoped>
.app-main {
  width: 100%;
}

.app-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  margin-bottom: 4rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon-bg {
  background-color: var(--primary);
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-icon {
  color: white;
  width: 18px;
  height: 18px;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.hero {
  text-align: center;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
}

.title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-main);
  letter-spacing: -0.03em;
  line-height: 1.1;
}

.subtitle {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.hero-btn {
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
}

.btn-icon {
  margin-right: 0.5rem;
}

.footer {
  text-align: center;
  padding: 3rem 1.5rem;
  background-color: #fafafa;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.footer-link {
  display: inline-block;
  margin-bottom: 1rem;
  text-decoration: underline;
  color: var(--text-muted);
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--text-main);
}

@media (max-width: 600px) {
  .title {
    font-size: 2.2rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  .hero-btn {
    width: 100%;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const faqs = [
  {
    question: 'Como funciona a Linkize?',
    answer: 'A Linkize permite que você crie um catálogo digital de forma rápida. Você cadastra seus produtos, gera um link exclusivo da sua loja e compartilha com seus clientes. Quando o cliente escolhe os produtos, o pedido chega pronto e formatado direto no seu WhatsApp.'
  },
  {
    question: 'A plataforma cobra taxa por venda?',
    answer: 'Não! Nós não cobramos comissão pelas suas vendas. Você escolhe o plano que melhor se adapta ao seu negócio e o valor das vendas é 100% seu, negociado diretamente com o cliente via WhatsApp.'
  },
  {
    question: 'Preciso ter CNPJ para usar?',
    answer: 'Não. Você pode começar a vender usando apenas seu CPF. A Linkize foi feita para autônomos, pequenos comerciantes e negócios em crescimento.'
  },
  {
    question: 'Posso usar meu próprio domínio?',
    answer: 'Sim! Nos planos Profissional e Empresarial, você pode configurar o seu domínio próprio (ex: sua-loja.com.br) para passar ainda mais credibilidade aos seus clientes.'
  }
]

const openIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="faq-wrapper">
    <h2 class="section-title">Perguntas Frequentes</h2>
    
    <div class="faq-container">
      <div 
        v-for="(faq, index) in faqs" 
        :key="index" 
        class="faq-item"
        :class="{ 'is-open': openIndex === index }"
      >
        <button class="faq-question" @click="toggleFaq(index)">
          <h3>{{ faq.question }}</h3>
          <ChevronDown class="icon" :class="{ 'icon-rotated': openIndex === index }" />
        </button>
        
        <div class="faq-answer-wrapper" :style="{ maxHeight: openIndex === index ? '200px' : '0px' }">
          <div class="faq-answer">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.faq-wrapper {
  width: 100%;
  padding: 5rem 0;
  background-color: var(--bg-card);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 3rem;
  color: var(--text-main);
  text-align: center;
}

.faq-container {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  background-color: #fafafa;
  transition: all 0.3s ease;
}

.faq-item.is-open {
  border-color: var(--primary);
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: var(--text-main);
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  padding-right: 1rem;
}

.icon {
  width: 24px;
  height: 24px;
  color: var(--text-muted);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.faq-item.is-open .icon {
  color: var(--primary);
}

.icon-rotated {
  transform: rotate(180deg);
}

.faq-answer-wrapper {
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
}

.faq-answer {
  padding: 0 1.5rem 1.5rem 1.5rem;
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.95rem;
}
</style>

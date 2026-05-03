<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { X } from 'lucide-vue-next'
import { supabase } from '../lib/supabase'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const fullName = ref('')
const email = ref('')
const whatsapp = ref('')
const isSubmitting = ref(false)
const errorMsg = ref('')

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

const handleSubmit = async () => {
  errorMsg.value = ''
  
  if (!fullName.value || !email.value || !whatsapp.value) {
    errorMsg.value = 'Por favor, preencha todos os campos.'
    return
  }

  isSubmitting.value = true

  try {
    const urlParams = new URLSearchParams(window.location.search)
    const utm_source = urlParams.get('utm_source') || null
    const utm_medium = urlParams.get('utm_medium') || null
    const utm_campaign = urlParams.get('utm_campaign') || null

    // 1. Salvar no Supabase
    const { error } = await supabase
      .from('leads')
      .insert([
        {
          full_name: fullName.value,
          email: email.value,
          whatsapp: whatsapp.value,
          source: 'landing_page',
          utm_source,
          utm_medium,
          utm_campaign
        }
      ])

    if (error) {
      console.error(error)
      throw new Error('Falha ao conectar com o banco de dados.')
    }

    // 2. Disparar WhatsApp para os DOIS números
    const waMessage = encodeURIComponent(`Olá, me chamo ${fullName.value} e gostaria de saber mais sobre a Linkize!`)
    const waLink1 = `https://wa.me/5511997628274?text=${waMessage}`
    const waLink2 = `https://wa.me/5511952327870?text=${waMessage}`
    
    // Abre o primeiro link em uma nova aba
    window.open(waLink1, '_blank')
    
    // Tenta abrir o segundo link em outra aba (o navegador pode alertar sobre pop-ups)
    setTimeout(() => {
      window.open(waLink2, '_blank')
      emit('close')
      
      fullName.value = ''
      email.value = ''
      whatsapp.value = ''
    }, 500)

  } catch (err: any) {
    console.error('Erro ao salvar lead:', err)
    errorMsg.value = 'Ocorreu um erro ao salvar seus dados. Verifique sua conexão e tente novamente.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content animate-pop">
      <button class="close-btn" @click="emit('close')">
        <X :size="24" />
      </button>
      
      <div class="modal-header">
        <h2>Fale com a gente!</h2>
        <p>Preencha os dados abaixo para iniciar sua jornada ou falar com nosso time.</p>
      </div>

      <form @submit.prevent="handleSubmit" class="lead-form">
        <div class="form-group">
          <label for="name">Nome Completo</label>
          <input type="text" id="name" v-model="fullName" placeholder="Digite seu nome" required />
        </div>
        
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model="email" placeholder="seu@email.com" required />
        </div>
        
        <div class="form-group">
          <label for="whatsapp">WhatsApp</label>
          <input type="tel" id="whatsapp" v-model="whatsapp" placeholder="(11) 90000-0000" required />
        </div>

        <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>

        <button type="submit" class="btn btn-primary submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? 'Enviando...' : 'Avançar para o WhatsApp' }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: var(--bg-card);
  border-radius: 16px;
  width: 100%;
  max-width: 450px;
  padding: 2.5rem 2rem;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.animate-pop {
  animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes popIn {
  from { opacity: 0; transform: scale(0.95) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.2s;
}

.close-btn:hover {
  color: var(--text-main);
}

.modal-header {
  text-align: center;
  margin-bottom: 2rem;
}

.modal-header h2 {
  font-size: 1.5rem;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}

.modal-header p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.lead-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-main);
}

.form-group input {
  padding: 0.8rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
}

.error-msg {
  color: #ef4444;
  font-size: 0.85rem;
  text-align: center;
}

.submit-btn {
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
  font-size: 1.05rem;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>

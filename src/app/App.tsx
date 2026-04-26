import { MessageCircle, QrCode, TrendingUp, Zap, Store, Check, ArrowLeft, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'plans' | 'faq'>('home');

  if (currentScreen === 'plans') {
    return <PlansScreen onBack={() => setCurrentScreen('home')} />;
  }

  if (currentScreen === 'faq') {
    return <FAQScreen onBack={() => setCurrentScreen('home')} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-foreground">Linkize</span>
          </div>
          <button
            onClick={() => setCurrentScreen('plans')}
            className="px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors"
          >
            Começar grátis
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-4 text-foreground">
              Venda pelo WhatsApp. Profissionalmente.
            </h1>
            <p className="text-muted-foreground mb-8 px-4">
              Transforme seu WhatsApp no principal canal de vendas. Catálogo organizado, pedidos fáceis, métricas reais. Sem complicação.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center px-4">
              <button
                onClick={() => setCurrentScreen('plans')}
                className="px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Começar agora
              </button>
              <button className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors">
                Ver como funciona
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-center mb-10 text-foreground">
            Tudo que você precisa para vender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Store className="w-6 h-6" />}
              title="Catálogo Inteligente"
              description="Cadastre produtos pelo WhatsApp ou painel web. Organize, atualize preços e compartilhe por link."
            />
            <FeatureCard
              icon={<MessageCircle className="w-6 h-6" />}
              title="Pedidos Rápidos"
              description="Cliente clica, escolhe e vai direto pro WhatsApp. Você recebe o pedido pronto."
            />
            <FeatureCard
              icon={<QrCode className="w-6 h-6" />}
              title="QR Codes"
              description="Imprima e cole na loja, cardápio ou delivery. Cliente escaneia e acessa seu catálogo."
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6" />}
              title="Métricas Claras"
              description="Veja cliques, pedidos e produtos mais vistos. Dados simples pra decidir melhor."
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Automação"
              description="Respostas automáticas, fluxos de venda e IA que ajuda você a vender mais."
            />
            <FeatureCard
              icon={<Check className="w-6 h-6" />}
              title="Gestão Simples"
              description="Controle tudo num painel web ou pelo próprio WhatsApp. Do jeito que você preferir."
            />
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="mb-4 text-foreground">Feito para quem vende de verdade</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Se você já vende pelo WhatsApp, a Linkize organiza e profissionaliza seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <TargetCard title="Lojas de Bairro" />
            <TargetCard title="Restaurantes" />
            <TargetCard title="Delivery Local" />
            <TargetCard title="Autônomos" />
            <TargetCard title="Prestadores" />
            <TargetCard title="Artesãos" />
            <TargetCard title="Revendedores" />
            <TargetCard title="Pequeno Comércio" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-[#25D366]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-white">
            Comece a vender melhor hoje
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Cadastre seu primeiro produto em menos de 2 minutos. Sem burocracia, sem mensalidade inicial.
          </p>
          <button
            onClick={() => setCurrentScreen('plans')}
            className="px-8 py-4 bg-white text-[#25D366] rounded-lg hover:bg-gray-100 transition-colors"
          >
            Criar minha conta grátis
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-4">
            <button
              onClick={() => setCurrentScreen('faq')}
              className="text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Perguntas Frequentes
            </button>
          </div>
          <div className="text-center text-muted-foreground">
            <p>© 2026 Linkize. O Shopify do WhatsApp raiz brasileiro.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-card border border-border rounded-xl hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center text-[#25D366] mb-4">
        {icon}
      </div>
      <h3 className="mb-2 text-card-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function TargetCard({ title }: { title: string }) {
  return (
    <div className="p-4 bg-accent rounded-lg text-center">
      <p className="text-accent-foreground">{title}</p>
    </div>
  );
}

function PlansScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-foreground">Linkize</span>
          </div>
        </div>
      </header>

      {/* Plans Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-foreground">Escolha seu plano</h1>
            <p className="text-muted-foreground">
              Comece a vender profissionalmente pelo WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Plano Profissional */}
            <div className="bg-card border-2 border-[#25D366] rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#25D366] text-white px-4 py-1 rounded-full">
                Recomendado
              </div>
              <div className="text-center mb-6">
                <h3 className="mb-2 text-card-foreground">Profissional</h3>
                <div className="mb-4">
                  <span className="text-muted-foreground line-through">R$ 49,90</span>
                  <div className="mt-1">
                    <span className="text-[#25D366]">R$ 0,00</span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  <p className="text-muted-foreground mt-2">Grátis nos primeiros 30 dias</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <PlanFeature text="Catálogo ilimitado de produtos" />
                <PlanFeature text="Links de pedido personalizados" />
                <PlanFeature text="QR Codes para divulgação" />
                <PlanFeature text="Métricas e relatórios" />
                <PlanFeature text="Integração com WhatsApp" />
                <PlanFeature text="Automação de respostas" />
                <PlanFeature text="Assistente IA para cadastro" />
                <PlanFeature text="Suporte prioritário" />
              </ul>

              <button className="w-full px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Começar agora
              </button>
            </div>

            {/* Plano Premium */}
            <div className="bg-muted/30 border border-border rounded-2xl p-8 relative opacity-75">
              <div className="text-center mb-6">
                <h3 className="mb-2 text-foreground">Premium</h3>
                <div className="mb-4">
                  <span className="text-foreground">EM BREVE</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <PlanFeature text="Tudo do Profissional" disabled />
                <PlanFeature text="Multi-usuários" disabled />
                <PlanFeature text="API de integração" disabled />
                <PlanFeature text="White-label" disabled />
                <PlanFeature text="Domínio personalizado" disabled />
                <PlanFeature text="Relatórios avançados" disabled />
                <PlanFeature text="Automações customizadas" disabled />
                <PlanFeature text="Suporte VIP" disabled />
              </ul>

              <button
                disabled
                className="w-full px-6 py-3 bg-muted text-muted-foreground rounded-lg cursor-not-allowed"
              >
                Em breve
              </button>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Sem cartão de crédito necessário para começar. Cancele quando quiser.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlanFeature({ text, disabled = false }: { text: string; disabled?: boolean }) {
  return (
    <li className={`flex items-start gap-2 ${disabled ? 'text-muted-foreground' : 'text-card-foreground'}`}>
      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${disabled ? 'text-muted-foreground' : 'text-[#25D366]'}`} />
      <span>{text}</span>
    </li>
  );
}

function FAQScreen({ onBack }: { onBack: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona a Linkize?",
      answer: "A Linkize transforma seu WhatsApp em um canal de vendas profissional. Você cadastra seus produtos pelo painel web ou WhatsApp, cria um catálogo compartilhável por link ou QR Code, e seus clientes escolhem produtos e fazem pedidos direto pelo WhatsApp. Simples assim."
    },
    {
      question: "Preciso de site ou e-commerce?",
      answer: "Não! A Linkize funciona de forma independente. Você só precisa de um número de WhatsApp Business. Criamos seu catálogo digital que funciona perfeitamente sem precisar de site próprio."
    },
    {
      question: "É realmente grátis nos primeiros 30 dias?",
      answer: "Sim! Você tem 30 dias totalmente grátis no plano Profissional para testar todas as funcionalidades. Não pedimos cartão de crédito para começar. Após o período de teste, o plano custa R$ 49,90/mês."
    },
    {
      question: "Como meus clientes vão acessar meu catálogo?",
      answer: "Você pode compartilhar seu catálogo de várias formas: link direto pelo WhatsApp, redes sociais, QR Code impresso na sua loja, cardápio físico, embalagens ou qualquer lugar. O cliente clica/escaneia e já vê seus produtos."
    },
    {
      question: "Preciso de conhecimento técnico?",
      answer: "Nenhum! A Linkize foi feita para quem não entende de tecnologia. Você cadastra produtos como se estivesse mandando mensagem no WhatsApp ou de forma visual no painel web. Nossa IA também ajuda você a criar descrições e organizar tudo."
    },
    {
      question: "Como funcionam os pedidos?",
      answer: "Quando o cliente escolhe produtos no seu catálogo e clica em 'Fazer Pedido', ele é direcionado automaticamente para o seu WhatsApp com a mensagem já pronta contendo tudo que escolheu. Você recebe e finaliza a venda normalmente."
    },
    {
      question: "Posso usar com WhatsApp comum ou precisa ser Business?",
      answer: "Recomendamos WhatsApp Business por ter funcionalidades extras, mas a Linkize funciona com ambos. O WhatsApp Business é gratuito e você pode baixar na loja de apps do seu celular."
    },
    {
      question: "Quantos produtos posso cadastrar?",
      answer: "No plano Profissional você tem catálogo ilimitado. Cadastre quantos produtos quiser, organize em categorias e atualize preços sempre que precisar."
    },
    {
      question: "A Linkize processa pagamentos?",
      answer: "Não. A Linkize organiza seu catálogo e conecta você com o cliente pelo WhatsApp. O pagamento acontece como você já faz: Pix, dinheiro, cartão na entrega, link de pagamento, etc. Você mantém total controle sobre isso."
    },
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim! Não há fidelidade nem multa. Você pode cancelar sua assinatura a qualquer momento direto no painel. Se cancelar durante o período grátis, não será cobrado nada."
    },
    {
      question: "Vou conseguir ver quantas pessoas acessam meu catálogo?",
      answer: "Sim! O painel mostra métricas importantes: quantos cliques seu catálogo teve, quais produtos mais visualizados, quantos pedidos foram gerados e muito mais. Dados simples e úteis para você vender melhor."
    },
    {
      question: "A automação substitui meu atendimento?",
      answer: "Não! A automação serve para agilizar respostas comuns (horário de funcionamento, cardápio, etc) e organizar o fluxo inicial. O atendimento humanizado e a venda final continuam sendo seus. A Linkize te dá mais tempo para focar no que importa."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-foreground">Linkize</span>
          </div>
        </div>
      </header>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="mb-4 text-foreground">Perguntas Frequentes</h1>
            <p className="text-muted-foreground">
              Tudo que você precisa saber sobre a Linkize
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center p-8 bg-muted/30 rounded-2xl">
            <h3 className="mb-2 text-foreground">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Comece grátis e teste por 30 dias sem compromisso
            </p>
            <button className="px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors inline-flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Começar agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent/50 transition-colors"
      >
        <h3 className="text-card-foreground pr-4">{question}</h3>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-muted-foreground">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
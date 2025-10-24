import { Link } from 'react-router-dom'

const Planos = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'Em Breve',
      period: '',
      description: 'Perfeito para começar e experimentar a MoniqueBot',
      features: [
        'Até 50 interações por mês',
        'Funcionalidades básicas de agenda',
        'Pesquisa simples',
        'Suporte por email',
        '1 usuário'
      ],
      buttonText: 'Avisar quando Disponível',
      buttonStyle: 'btn-secondary opacity-75 cursor-not-allowed',
      popular: false,
      comingSoon: true
    },
    {
      name: 'Intermediário',
      price: 'Em Breve',
      period: '',
      description: 'Ideal para profissionais e pequenas empresas',
      features: [
        'Interações ilimitadas',
        'Todas as funcionalidades de agenda',
        'Pesquisa avançada',
        'Criação de documentos',
        'Gestão de emails',
        'Suporte prioritário',
        'Até 5 usuários',
        'Integrações básicas'
      ],
      buttonText: 'Avisar quando Disponível',
      buttonStyle: 'btn-primary opacity-75 cursor-not-allowed',
      popular: true,
      comingSoon: true
    },
    {
      name: 'Avançado',
      price: 'Em Breve',
      period: '',
      description: 'Para empresas que precisam de recursos avançados',
      features: [
        'Tudo do plano Intermediário',
        'Análise de dados avançada',
        'Relatórios personalizados',
        'API completa',
        'Suporte 24/7',
        'Usuários ilimitados',
        'Todas as integrações',
        'Treinamento personalizado',
        'SLA garantido'
      ],
      buttonText: 'Avisar quando Disponível',
      buttonStyle: 'btn-accent opacity-75 cursor-not-allowed',
      popular: false,
      comingSoon: true
    }
  ]

  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Segurança Garantida',
      description: 'Seus dados são protegidos com criptografia de nível bancário'
    },
    {
      icon: 'fas fa-sync-alt',
      title: 'Sincronização em Tempo Real',
      description: 'Todas as suas informações são sincronizadas instantaneamente'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Multiplataforma',
      description: 'Acesse a MoniqueBot de qualquer dispositivo, a qualquer hora'
    },
    {
      icon: 'fas fa-headset',
      title: 'Suporte Especializado',
      description: 'Nossa equipe está sempre pronta para ajudar você'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Escolha seu Plano</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Encontre o plano perfeito para suas necessidades. Todos os planos incluem 
            acesso completo à MoniqueBot com diferentes níveis de recursos e suporte.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-primary transform scale-105' : ''
                }`}
              >
                {plan.popular && !plan.comingSoon && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                {plan.comingSoon && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Em Breve
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className={`text-5xl font-bold ${plan.comingSoon ? 'text-orange-500' : 'text-dark'}`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600">{plan.period}</span>
                    {plan.comingSoon && (
                      <div className="mt-2">
                        <span className="text-sm text-orange-600 font-medium">
                          Preços serão anunciados em breve
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <i className="fas fa-check text-accent"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contato" 
                  className={`w-full ${plan.buttonStyle} text-center block`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Por que Escolher a MoniqueBot?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recursos e benefícios que fazem a diferença no seu dia a dia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Compare os Planos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja em detalhes o que cada plano oferece
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Recursos</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      Básico
                      <div className="text-xs text-orange-600 font-normal mt-1">Em Breve</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      Intermediário
                      <div className="text-xs text-orange-600 font-normal mt-1">Em Breve</div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      Avançado
                      <div className="text-xs text-orange-600 font-normal mt-1">Em Breve</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Interações por mês', basic: 'Em breve', intermediate: 'Em breve', advanced: 'Em breve' },
                    { feature: 'Usuários', basic: 'Em breve', intermediate: 'Em breve', advanced: 'Em breve' },
                    { feature: 'Gestão de Agenda', basic: 'Em breve', intermediate: 'Em breve', advanced: 'Em breve' },
                    { feature: 'Criação de Documentos', basic: 'Em breve', intermediate: 'Em breve', advanced: 'Em breve' },
                    { feature: 'Análise de Dados', basic: 'Em breve', intermediate: 'Em breve', advanced: 'Em breve' },
                    { feature: 'API', basic: 'Em breve', intermediate: 'Em breve', advanced: 'Em breve' },
                    { feature: 'Suporte', basic: 'Em breve', intermediate: 'Em breve', advanced: 'Em breve' },
                    { feature: 'Integrações', basic: 'Em breve', intermediate: 'Em breve', advanced: 'Em breve' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-center text-orange-600 font-medium">{row.basic}</td>
                      <td className="px-6 py-4 text-sm text-center text-orange-600 font-medium">{row.intermediate}</td>
                      <td className="px-6 py-4 text-sm text-center text-orange-600 font-medium">{row.advanced}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Perguntas sobre Planos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos planos. Todos os planos (Básico, Intermediário e Avançado) serão lançados em breve!
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Quando os planos estarão disponíveis?",
                answer: "Os planos Básico, Intermediário e Avançado estarão disponíveis em breve! Estamos finalizando os detalhes de preços e funcionalidades. Você pode se cadastrar para ser notificado quando estiverem prontos."
              },
              {
                question: "Qual a diferença entre os planos?",
                answer: "O plano Básico é ideal para começar, o Intermediário para profissionais e pequenas empresas, e o Avançado para empresas que precisam de recursos completos. Todos os detalhes serão anunciados em breve."
              },
              {
                question: "Posso mudar de plano a qualquer momento?",
                answer: "Sim, quando os planos estiverem disponíveis, você poderá fazer upgrade ou downgrade a qualquer momento. As alterações serão aplicadas imediatamente e os valores ajustados proporcionalmente."
              },
              {
                question: "Há período de teste?",
                answer: "Sim, quando os planos estiverem disponíveis, todos incluirão um período de teste de 14 dias. Você poderá cancelar a qualquer momento durante o período de teste sem custos."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-dark mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Seja notificado quando nossos planos estiverem disponíveis e tenha acesso antecipado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato" className="btn-accent">
              Quero ser Notificado
            </Link>
            <Link to="/funcionalidades" className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-dark transition-all duration-300 font-semibold text-lg">
              Ver Funcionalidades
            </Link>
          </div>
          <div className="mt-6">
            <p className="text-sm opacity-75">
              📢 Planos Básico, Intermediário e Avançado com preços especiais em breve!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Planos


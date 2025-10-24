import { Link } from 'react-router-dom'
import { useState } from 'react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Como a IA está Revolucionando a Produtividade Pessoal',
      excerpt: 'Descubra como as assistentes pessoais inteligentes estão transformando a forma como organizamos nosso dia a dia e aumentamos nossa eficiência.',
      author: 'Equipe MoniqueBot',
      date: '15 de Janeiro, 2024',
      category: 'Produtividade',
      readTime: '5 min de leitura',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: '10 Dicas para Organizar sua Agenda com a MoniqueBot',
      excerpt: 'Aprenda estratégias práticas para maximizar o uso da MoniqueBot na gestão da sua agenda e nunca mais perder um compromisso importante.',
      author: 'Maria Silva',
      date: '12 de Janeiro, 2024',
      category: 'Tutoriais',
      readTime: '7 min de leitura',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'O Futuro das Assistentes Virtuais: Tendências para 2024',
      excerpt: 'Explore as principais tendências e inovações que estão moldando o futuro das assistentes virtuais e como isso impacta seu trabalho.',
      author: 'João Santos',
      date: '10 de Janeiro, 2024',
      category: 'Tecnologia',
      readTime: '6 min de leitura',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Integrando a MoniqueBot com suas Ferramentas Favoritas',
      excerpt: 'Saiba como conectar a MoniqueBot com Google Calendar, Slack, WhatsApp e outras ferramentas para criar um fluxo de trabalho integrado.',
      author: 'Ana Costa',
      date: '8 de Janeiro, 2024',
      category: 'Integrações',
      readTime: '8 min de leitura',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Histórias de Sucesso: Como Empresas Usam a MoniqueBot',
      excerpt: 'Conheça casos reais de empresas que implementaram a MoniqueBot e os resultados impressionantes que obtiveram em produtividade.',
      author: 'Carlos Oliveira',
      date: '5 de Janeiro, 2024',
      category: 'Cases',
      readTime: '9 min de leitura',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Segurança e Privacidade: Como Protegemos seus Dados',
      excerpt: 'Entenda as medidas de segurança implementadas na MoniqueBot para garantir a proteção total dos seus dados pessoais e profissionais.',
      author: 'Equipe MoniqueBot',
      date: '3 de Janeiro, 2024',
      category: 'Segurança',
      readTime: '6 min de leitura',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop'
    }
  ]

  const categories = ['Todos', 'Produtividade', 'Tutoriais', 'Tecnologia', 'Integrações', 'Cases', 'Segurança']

  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredPosts = activeCategory === 'Todos' ? blogPosts : blogPosts.filter(post => post.category === activeCategory)

  // Post destacado filtrado (o primeiro do filtro)
  const featuredPost = filteredPosts[0]
  // Demais posts (exclui o destacado)
  const otherPosts = filteredPosts.slice(1)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Blog MoniqueBot</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Descubra dicas, tutoriais, novidades e insights sobre produtividade, 
            tecnologia e como a MoniqueBot pode transformar seu dia a dia.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white/50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-600 hover:bg-primary hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <span>Por {featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link 
                  to="#" 
                  className="btn-primary inline-flex items-center"
                >
                  Ler Artigo Completo
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Últimos Artigos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fique por dentro das últimas novidades e dicas sobre produtividade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.length === 0 && (
              <div className="col-span-3 text-center text-gray-400 text-lg">Nenhum artigo encontrado para essa categoria.</div>
            )}
            {otherPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Por {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {post.date}
                  </div>
                  <Link 
                    to="#" 
                    className="text-primary font-medium hover:text-secondary transition-colors duration-300 inline-flex items-center"
                  >
                    Ler mais
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Fique por Dentro das Novidades</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Receba nossos artigos mais recentes e dicas exclusivas diretamente no seu email
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Seu melhor email" 
              className="flex-1 px-4 py-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-accent text-dark px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors duration-300">
              Inscrever-se
            </button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Não enviamos spam. Cancele a qualquer momento.
          </p>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark mb-4">Tópicos Populares</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore os assuntos mais procurados pelos nossos leitores
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { topic: 'Produtividade', posts: 12, icon: 'fas fa-chart-line' },
              { topic: 'IA e Machine Learning', posts: 8, icon: 'fas fa-brain' },
              { topic: 'Gestão de Tempo', posts: 15, icon: 'fas fa-clock' },
              { topic: 'Automação', posts: 10, icon: 'fas fa-robot' }
            ].map((topic, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 group hover:transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${topic.icon} text-white`}></i>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{topic.topic}</h3>
                <p className="text-gray-600 text-sm">{topic.posts} artigos</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

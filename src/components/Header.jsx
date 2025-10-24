import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navigation = [
    { name: 'Início', path: '/' },
    { name: 'Funcionalidades', path: '/funcionalidades' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Planos', path: '/planos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' }
  ]

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <i className="fas fa-robot text-white text-lg"></i>
            </div>
            <span className="text-xl font-semibold text-dark">
              Monique<span className="text-primary">Bot</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-300 font-medium ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-dark hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/contato"
              className="btn-primary hidden sm:inline-flex items-center"
            >
              Experimentar Agora
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-dark`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 px-4 rounded-lg transition-colors duration-300 ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-dark hover:text-primary hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contato"
                className="btn-primary mt-4 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Experimentar Agora
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

import { useState } from 'react';
import { Mail, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-sm fixed top-0 w-full z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">Cláudio Pinheiro</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="inline-flex items-center px-1 pt-1 text-blue-900 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a 
              href="#portfolio" 
              className="inline-flex items-center px-1 pt-1 text-blue-900 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="/docs/resume.pdf" 
              className="inline-flex items-center px-1 pt-1 text-blue-900 hover:text-blue-600 transition-colors"
            >
              Résumé
            </a>
            <a 
              href="mailto:claudiosilva@pm.me" 
              className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-900 hover:bg-blue-200 transition-colors"
            >
              <Mail className="w-5 h-5 mr-1" />
              Contact Me
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-blue-900 hover:text-blue-600 transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white/70 backdrop-blur-md shadow-sm border-b border-blue-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a 
              href="#portfolio" 
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:text-blue-600 transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="/docs/resume.pdf" 
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:text-blue-600 transition-colors"
            >
              Résumé
            </a>
            <a 
              href="mailto:claudiosilva@pm.me" 
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-900 hover:text-blue-600 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
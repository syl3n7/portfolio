import { Mail } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-blue-900">Cláudio Pinheiro</h1>
          </div>
          <div className="flex space-x-8">
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
              href="/images/resume.png" 
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
        </div>
      </div>
    </nav>
  );
}
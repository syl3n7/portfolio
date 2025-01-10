import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cláudio Pinheiro - Game Developer',
  description: 'Portfolio of Cláudio Pinheiro, a game developer with a passion for tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={inter.className}>
        {children}
        <footer className="fixed bottom-0 w-full py-4 text-center bg-white bg-opacity-90">
          <p className="text-sm text-gray-600">
            made with ❤️ by Cláudio - 
            <a 
              href="https://github.com/syl3n7/portfolio" 
              className="text-blue-600 hover:text-blue-800 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
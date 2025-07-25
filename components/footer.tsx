"use client"

import { Code, Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">João Silva</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor Backend Java especializado em criar soluções robustas e escaláveis para empresas de todos os
              tamanhos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Sobre Mim
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Habilidades
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Projetos
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Experiência
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:joao@email.com"
                className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">Vamos nos conectar e construir algo incrível juntos!</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {currentYear} João Silva. Todos os direitos reservados.</p>
            <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
              Feito com <Heart className="h-4 w-4 text-red-500 mx-1" /> e muito café ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

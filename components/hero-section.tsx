"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Desenvolvedor Backend Java"

  useEffect(() => {
    let index = 0
    const typeWriter = () => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
        setTimeout(typeWriter, 100)
      }
    }

    typeWriter()

    return () => {} 
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Olá, eu sou
            <span className="block text-blue-400 mt-2">Guilherme Brito</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            <span className="whitespace-nowrap">
              {text}
              <span className="inline-block w-[2px] h-[1.2em] bg-blue-400 ml-1 animate-blink" />
            </span>
          </div>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Especialista em desenvolvimento de aplicações robustas e escaláveis usando Java, Spring Boot e tecnologias modernas de backend.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-3 rounded-lg transition-all duration-300 bg-transparent"
            >
              Ver Projetos
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-blue-400" />
      </div>
    </section>
  )
}

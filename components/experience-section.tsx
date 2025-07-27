"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      company: "Idealle Sistemas",
      position: "Estagiário em desenvolvimento de sistemas",
      period: "08/2024 - 01/2025",
      description:
        "Manutenção e evolução de sistemas web voltados para gestão empresarial (ERP) Desenvolvimento de funcionalidades com JavaScript, Node.js e ASP Classic, integração com APIs REST e consumo de dados em sistemas legados, participação em reuniões ágeis com foco em melhorias contínuas, colaboração direta com desenvolvedores e analistas para entrega de soluções",
      achievements: [
        "Desenvolvimento com Javascript, Asp e Node",
        "Contribuir e aprender com uma equipe de desenvolvimento e suporte",
        "Principal responsabilidade identificar e corrigir erros",
      ],
    },
    {
      company: "Superintendência Municipal de Transportes e Trânsito (SMTT)",
      position: "Estagiário em técnico de suporte",
      period: "12/2021 - 12/2023",
      description:
        "Suporte técnico a usuários (presencial e remoto), instalação e manutenção de softwares e infraestrutura de TI, registro e resolução de chamados técnicos, apoio em testes e validação de sistemas internos com equipe de desenvolvimento",
      achievements: [
        "Otimizar o atendimento técnico aos usuários",
        "Colaborar diretamente com a equipe de T.I da empresa",
        "Realizar manutenções preventivas e corretivas em equipamentos e garantir a estabilidade da infraestrutura",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experiência Profissional</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>

                  <div className="ml-16 w-full">
                    <Card className="bg-gray-900 border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                            <div className="flex items-center text-blue-400 mb-2">
                              <Building className="h-4 w-4 mr-2" />
                              {exp.company}
                            </div>
                          </div>
                          <div className="flex items-center text-gray-400">
                            <Calendar className="h-4 w-4 mr-2" />
                            {exp.period}
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                        <div className="space-y-2">
                          <h4 className="text-white font-semibold">Principais Conquistas:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-gray-300 text-sm flex items-start">
                                <span className="text-blue-400 mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

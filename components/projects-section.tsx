"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Productivity-Hub",
      description:
        "Plataforma de produtividade desenvolvida com **Java e Spring Boot**, integrada a **Inteligência Artificial através do Model Context Protocol (MCP)**. Permite que modelos de IA utilizem ferramentas para criar, consultar, concluir e excluir tarefas, com persistência em **MySQL**. Utiliza **Spring AI, Ollama e Llama 3.1** para explorar conceitos de **Tool Calling e agentes de IA**.",
      technologies: ["Java", "Spring Boot", "MySql", "JUnit5","Swagger","Spring Actuator","Spring Data JPA","Docker","Maven","ZonedDateTime","Scheduled","Mockito","Regex"],
      github: "https://github.com/guidev1911/AI-Productivity-Hub",
      demo: "/images/AI-Productivity-Hub.png",
      image: "/images/AI-Productivity-Hub.png",
    },
    {
      title: "Sistema de Microserviços",
      description:
        "Arquitetura de microserviços com Spring Boot: Dividi a aplicação em serviços especializados — product-service, order-service, payment-service. Eureka Server: Serviço de descoberta para facilitar o balanceamento e a comunicação entre microserviços. API Gateway: Gerencia todas as requisições externas e faz roteamento inteligente para os serviços corretos. RabbitMQ: Utilizado para comunicação assíncrona entre microserviços, garantindo desacoplamento e escalabilidade. Swagger UI: interface swagger para acesso facilitado aos 3 micro serviços. PostgreSQL: Banco de dados para persistência dos dados dos serviços. Keycloak: Solução completa de autenticação e autorização, integrando segurança via OAuth2 e JWT no Gateway, garantindo proteção para todos os endpoints..",
      technologies: ["Java", "Spring Boot", "RabbitMQ", "keyCloak","SpringCloud","PostGreSQL","Maven","Docker","Spring Data JPA", "Swagger", "MapStruct"],
      github: "https://www.linkedin.com/posts/guilherme-brito-souza-santos-49766329b_microservices-springboot-rabbitmq-activity-7349591179409223681-szjq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiItPMBGZ6MFmADAKDc1INgrMrxiTEvHkg",
      demo: "/images/microservices.png",
      image: "/images/microservices.png",
    },
    {
      title: "E-commerce",
      description:
        "E-commerce desenvolvido com **Java e Spring Boot**, com arquitetura REST e autenticação segura utilizando **JWT e refresh tokens rotativos**. O sistema possui gerenciamento de usuários, endereços, categorias e produtos, além de **carrinho de compras, pedidos, cálculo de frete e simulação de pagamentos assíncronos**. Conta também com validações, tratamento global de exceções, controle de estoque e operações transacionais.",
      technologies: ["Java","Spring Boot","Spring Security","JWT","Spring Data JPA","Hibernate","MySQL","Maven","Docker","Docker Compose","JUnit","Mockito","Kubernetes","Google Cloud Platform","REST API"],
      github: "https://github.com/guidev1911/E-commerce",
      demo: "/images/ecommerce.png",
      image: "/images/ecommerce.png",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projetos em Destaque</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-black/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Button>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

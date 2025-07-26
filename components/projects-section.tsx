"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "ShortCode",
      description:
        "API de Encurtador de URL desenvolvida com Java, Spring Boot, MySQL e Docker. Projeto criado do zero até o deploy, com o banco de dados hospedado na Aiven e a API na Render (ambos nos planos gratuitos). Permite encurtar URLs gerando códigos únicos, com opção de definir um tempo de expiração de até 7 dias. A data e hora inseridas são convertidas para UTC e armazenadas no banco, garantindo consistência global. É possível consultar informações do link, como data de criação, expiração e número de cliques. Além disso, há um agendador que remove automaticamente todos os links expirados diariamente às 03h.",
      technologies: ["Java", "Spring Boot", "MySql", "JUnit5","Swagger","Spring Actuator","Spring Data JPA","Docker","Maven","ZonedDateTime","Scheduled","Mockito","Regex"],
      github: "https://github.com/guidev1911/ShortCode",
      demo: "https://guidev1911.github.io/ShortCodeWeb/",
      image: "/images/shortcode.png",
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
      title: "API de Gestão de estoque de carros",
      description:
        "A FirstMotors API é uma aplicação RESTful desenvolvida em Java com Spring Boot, projetada para gerenciar uma loja de carros. Ela implementa um sistema completo de cadastro, consulta, atualização e exclusão de veículos (CRUD), com persistência de dados em banco MySQL. A API suporta múltiplos formatos de entrada e saída, como JSON, XML e YAML, através de content negotiation. Conta com documentação interativa via Swagger UI, tratamento personalizado de exceções e integração com Docker para facilitar a execução do ambiente. As migrações do banco de dados são automatizadas com Flyway, garantindo a criação e a população inicial da estrutura ao iniciar o sistema. Além disso, testes automatizados foram implementados com JUnit e Mockito, cobrindo a lógica de negócios. A FirstMotors é ideal para demonstrar boas práticas de desenvolvimento backend com foco em organização, escalabilidade e facilidade de uso.",
      technologies: ["Java", "Spring Boot", "MySQL", "Spring Data JPA","Maven","Swagger", "Docker", "DozerMapper", "JUnit", "Mockito", "FlyWay", "Content Negociation", "HATEOAS"],
      github: "https://github.com/guidev1911/firstmotors",
      demo: "/images/firstmotors.png",
      image: "/images/firstmotors.png",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
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

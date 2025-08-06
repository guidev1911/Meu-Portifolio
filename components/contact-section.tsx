"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Target } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      } else {
        const data = await res.json();
        alert('Erro ao enviar: ' + (data.error || 'Erro desconhecido'));
      }
    } catch (error) {
      alert('Erro ao enviar: ' + error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      title: "Email",
      value: "guilhermereal1911@gmail.com",
      link: "mailto:guilhermereal@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-400" />,
      title: "Telefone",
      value: "+55 (79) 99897-4515",
      link: "tel:+5579998974515",
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-400" />,
      title: "Localização",
      value: "São Cristovão, SE - Brasil",
      link: "https://maps.app.goo.gl/8FWjXTcG9KXwtD169",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Entre em Contato</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. Vamos conversar sobre como posso ajudar
            sua empresa!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-black/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0">{info.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-black/50 rounded-lg border border-gray-700">
              <h4 className="text-white font-semibold mb-4">Disponibilidade</h4>
              <p className="text-gray-300 mb-2">
                <span className="text-green-400">●</span> Disponível para novos projetos
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-blue-400">●</span> Trabalho remoto ou presencial
              </p>
              <p className="text-gray-300">
                <span className="text-yellow-400">●</span> Resposta em até 24h
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-black/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Seu Nome"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

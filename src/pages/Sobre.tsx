import React from 'react';
import { Target, Eye, Heart, CheckCircle, TrendingUp, Users, Award, Star } from 'lucide-react';

export default function Sobre() {
  return (
    <div className="pt-20">
      {/* HERO SECTION */}
      <section className="bg-slate-50 py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Sobre a Elevete
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Transformando negócios através de funis de vendas digital
          </p>
        </div>
      </section>

      {/* SEÇÃO 1: QUEM SOMOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Quem Somos</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A Elevete é uma agência especializada em criar funis de vendas digital que funcionam. Não criamos apenas sites bonitos — criamos ativos digitais que geram receita para seu negócio.
          </p>
        </div>
      </section>

      {/* SEÇÃO 2: MISSÃO, VISÃO, VALORES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Missão</h3>
              <p className="text-slate-600">
                Democratizar o acesso a funis de vendas de alta qualidade
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Eye className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossa Visão</h3>
              <p className="text-slate-600">
                Ser a agência de referência em funis de vendas no Brasil
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Nossos Valores</h3>
              <p className="text-slate-600">
                Excelência • Transparência • Resultados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: POR QUE ELEVETE? */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Por que Elevete?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Especialistas em Funis Digital',
              'Entrega Rápida (21 dias)',
              'Design Autêntico (não IA genérica)',
              'Suporte Dedicado'
            ].map((point, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-slate-50 rounded-lg">
                <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <span className="text-lg font-semibold text-slate-900">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: NÚMEROS */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <Award className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-blue-100">Projetos Entregues</p>
            </div>
            <div className="text-white">
              <Users className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-blue-100">Clientes Satisfeitos</p>
            </div>
            <div className="text-white">
              <TrendingUp className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <p className="text-4xl font-bold mb-2">+40%</p>
              <p className="text-blue-100">Aumento Médio em Vendas</p>
            </div>
            <div className="text-white">
              <Star className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <p className="text-4xl font-bold mb-2">98%</p>
              <p className="text-blue-100">Taxa de Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">
            Pronto para elevar seu negócio?
          </h2>
          <a
            href="/#contato"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Conversar com Especialista
          </a>
        </div>
      </section>
    </div>
  );
}
